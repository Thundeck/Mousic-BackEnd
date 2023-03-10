const express =  require("express")
const {createAlbum,getAllAlbums} =  require("../Controllers/Album.controller")


const route = express.Router()

route.get("/", getAllAlbums)
route.post("/", createAlbum)

module.exports = route