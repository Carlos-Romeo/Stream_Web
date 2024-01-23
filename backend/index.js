const express = require("express");
const userRoute = require("./Routes/UserRoute")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())




app.use("/user" , userRoute)



app.listen(4000 || process.env.PORT)