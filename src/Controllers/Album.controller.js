const AlbumService = require("../Services/Album.service")

const getAllAlbums = async (_req, res) =>{
    try {
        const Albums = await AlbumService.getAllAlbums()
        res.json(Albums)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createAlbum = async (req, res) =>{
    try {
        const album = await AlbumService.createAlbum(req.body)
        console.log("esto es ",)
        res.json(album)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllAlbums,
    createAlbum
}