const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_ROUTE,{useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection

db.on("connected",()=>{
    console.log("%cConnected to Mongo","color:green");
})

db.on("error",()=>{
    console.log("%cMongo it's bad","color:red");
})

module.exports = mongoose