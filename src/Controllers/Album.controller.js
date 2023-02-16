const AlbumService = require("../Services/Album.service")

const getAllAlbums = async (_req, res) =>{
    try {
        const Albums = await AlbumService.getAllAlbums()
        res.json(Albums).end()
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createAlbum = async (req, res) =>{
    try {
        const album = await AlbumService.createAlbum(req.body)
        res.json(album).end()
    } catch (error) {
        console.log("this is the error",error)
    }
}

const getAlbumDetail = async (req, res) =>{
    const {id} = req.params

    try {
        const Album = await AlbumService.getAlbumDetail(id)
        res.json(Album).end()
    } catch (error) {
        console.log("this is the error",error)
    }
}

const deleteAlbum = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await AlbumService.deleteAlbum(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllAlbums,
    createAlbum,
    getAlbumDetail,
    deleteAlbum
}