const TrackService = require("../Services/Track.service")

const getAllTracks = async (_req, res) =>{
    try {
        const Tracks = await TrackService.getAllTracks()
        res.json(Tracks)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createTrack = async (req, res) =>{
    try {
        const Tracks = await TrackService.createTrack(req.body)
        res.json(Tracks)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllTracks,
    createTrack
}