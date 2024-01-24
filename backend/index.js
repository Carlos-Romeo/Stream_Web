const express = require("express");
const cors = require("cors")
const app = express()
const userRoute = require("./Routes/UserRoute")
const filmRoute = require("./Routes/FilmRoute")

app.use(cors())
app.use(express.json())




app.use("/user" , userRoute)
app.use("/film", filmRoute)


app.listen(5000 || process.env.PORT)