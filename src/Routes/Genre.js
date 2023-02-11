const express =  require("express")
const {createGenre,getAllGenres} =  require("../Controllers/Genre")


const route = express.Router()

route.get("/", getAllGenres)
route.post("/", createGenre)

module.exports = route