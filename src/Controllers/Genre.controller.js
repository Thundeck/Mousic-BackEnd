const GenreService = require("../Services/Genre.service")

const getAllGenres = async (_req, res) =>{
    try {
        const Genres = await GenreService.getAllGenres()
        res.json(Genres)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createGenre = async (req, res) =>{
    try {
        const Genres = await GenreService.createGenre(req.body)
        res.json(Genres)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const getGenreDetail = async (req, res) =>{
    const {id} = req.params

    try {
        const Genre = await GenreService.getGenreDetail(id)
        res.json(Genre).end()
    } catch (error) {
        console.log("this is the error",error)
    }
}

const deleteGenre = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await GenreService.deleteGenre(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllGenres,
    createGenre,
    getGenreDetail,
    deleteGenre
}