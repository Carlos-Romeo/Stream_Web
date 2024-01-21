const mysql = require("mysql2");
//onst { Stream } = require("stream");
require("dotenv").config();
const dataBase = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database:"stream",
});

dataBase.connect((error) => {
  if (error) throw error;
  console.log("dataBase connected sucessfuly");
});

module.exports = dataBase;