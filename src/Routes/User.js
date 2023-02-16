const express =  require("express")
const {createUser,getAllUsers,getUserDetail,deleteUser} =  require("../Controllers/User.controller")


const route = express.Router()

route.get("/", getAllUsers)
route.get("/:id", getUserDetail)

route.post("/", createUser)
route.delete("/:id", deleteUser)

module.exports = route