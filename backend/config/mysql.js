const mysql2 = require("mysql2");


const dataBase = mysql2.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"stream"
})

dataBase.connect((error)=>{ 
    if(error) throw error;
    console.log('dataBase connected successfully');
});
module.exports = dataBase