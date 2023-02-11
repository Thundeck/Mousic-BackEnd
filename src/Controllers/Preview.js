const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllPreviews = async (_req, res) =>{
    try {
        const Previews = await PreviewModel.find()
        res.json([...Previews,"si llega la info"])
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createPreview = async (req, res) =>{
    try {
        const Previews = await PreviewModel.create(req.body)
        res.json(Previews)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllPreviews,
    createPreview
}