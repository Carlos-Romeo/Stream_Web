const dataBase = require('../config/mysql')





exports.Film = (req, res) => {
    console.log(req.body);
    

    let insertUserQuery = "INSERT INTO `film` ( titre, Duree, chemin) VALUES (?,?,?)";
    
        dataBase.query(
            insertUserQuery,
            [ req.body.titre, req.body.Duree ,req.body.chemin ],
            (error, result)=>{
                if (error) {
                    res.status(401).json(error)
                }
                res.status(201).json({id: result.insertId})
            }  
        )


}


exports.FilmRecu = (req, res) => {
    console.log(req.body)
    let selectFilmQuery = "SELECT * FROM `film`";

dataBase.query(
    selectFilmQuery,
    (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        } else {
            res.status(201).json({ id: result.insertId, message: "C'est bien" });
        }
    }
);


}