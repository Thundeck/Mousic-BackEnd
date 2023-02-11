const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllTracks = async (_req, res) =>{
    try {
        const Tracks = await TrackModel.find()
        res.json([...Tracks,"si llega la info"])
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createTrack = async (req, res) =>{
    try {
        const Tracks = await TrackModel.create(req.body)
        res.json(Tracks)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllTracks,
    createTrack
}