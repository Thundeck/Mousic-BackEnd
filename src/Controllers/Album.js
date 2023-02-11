const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllAlbums = async (_req, res) =>{
    try {
        const Albums = await AlbumModel.find()
        res.json([...Albums,"si llega la info"])
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createAlbum = async (req, res) =>{
    try {
        const Albums = await AlbumModel.create(req.body)
        res.json(Albums)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllAlbums,
    createAlbum
}