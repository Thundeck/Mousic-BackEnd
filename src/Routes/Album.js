const express =  require("express")
const {createAlbum,getAllAlbums, getAlbumDetail,deleteAlbum} =  require("../Controllers/Album.controller")


const route = express.Router()

route.get("/", getAllAlbums)
route.get("/:id", getAlbumDetail)

route.post("/", createAlbum)

route.delete("/:id", deleteAlbum)


module.exports = route