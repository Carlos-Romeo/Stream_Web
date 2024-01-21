const dataBase = require("../config/mysql")
const bcrypt = require("bcrypt")
//const jwt = require('jsonwebtoken')










exports.signup = (req,res) => {
    console.log(req.body);
    

    let insertUserQuery = "INSERT INTO users (Username, Email, PasswordHash) VALUES (?,?,?)"

    bcrypt
    .hash(req.body.password, 5)
    .then((hash) => {
        dataBase.query(
            insertUserQuery,
            [req.body.username, req.body.email ,hash],
            (error, result)=>{
                if (error) {
                    res.status(401).json(error)
                }
                res.status(201).json({hash, id: result.insertId})
            }  
        ) 
        
        
        
    })
    .catch((error) => {
        res.status(500).json(error)
    })
    

}




exports.login = (req, res) => {
    
    console.log(req.body);

    let selectUserQuery = "SELECT * FROM `users` WHERE surname = ?";
    dataBase.query(selectUserQuery, [req.body.surname], (error, result) => {
        if (error) {
            res.status(500).json({ error: "Internal server error" });
        } else if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password)
                .then((valid) => {
                    if (valid) {
                        res.status(200).json({ message: "Login successful", id: result[0].surname });
                    } else {
                        res.status(401).json({ error: "Incorrect password" });
                    }
                })
                .catch((error) => {
                    res.status(500).json({ error: "Internal server error" });
                });
        } else {
            res.status(401).json({ error: "User not found" });
        }
    });
};