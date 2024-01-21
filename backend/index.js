const express = require("express");
const app = express();
const cors = require("cors")
const port = 3000;
const dataBase = require("./config/mysql");
const RoutesUser = require("./Routes/UserRoute")


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(cors());
app.use(express.json());


app.get("/user", RoutesUser);



app.listen(port, ()=>{
    console.log("connection reussi");
});


