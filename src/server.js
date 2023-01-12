const express = require('express')
const app = express()
const webrouter = require("./router/web")
const bodyparser = require("body-parser") 
const checkconnect = require("./config/connect db")
const cors = require("cors") 
require("dotenv").config()

app.use(cors({origin: true}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static("./src/public"))
app.set("view engine", "ejs")
app.set("views", "./src/views")
checkconnect();

webrouter(app);

let port = process.env.PORT;

app.listen(port, ()=>{
    console.log("server is run sussert")
})