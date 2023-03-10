const express =  require("express")
const {createUser,getAllUsers} =  require("../Controllers/User.controller")


const route = express.Router()

route.get("/", getAllUsers)
route.post("/", createUser)

module.exports = route