const express =  require("express")
const TrackModel = require("../Models/Track")
const GenreModel = require("../Models/Genre")
const AlbumModel = require("../Models/Album")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllGenres = async (_req, res) =>{
    try {
        const Genres = await GenreModel.find()
        res.json([...Genres,"si llega la info"])
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createGenre = async (req, res) =>{
    try {
        const Genres = await GenreModel.create(req.body)
        res.json(Genres)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllGenres,
    createGenre
}