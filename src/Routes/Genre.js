const express =  require("express")
const {createGenre,getAllGenres,getGenreDetail, deleteGenre} =  require("../Controllers/Genre.controller")


const route = express.Router()

route.get("/", getAllGenres)
route.get("/:id", getGenreDetail)

route.post("/", createGenre)

route.delete("/:id", deleteGenre)


module.exports = route