const express =  require("express")
const {createTrack,getAllTracks,getTrackDetail, deleteTrack} =  require("../Controllers/Track.controller")


const route = express.Router()

//GET
route.get("/", getAllTracks)
route.get("/:id", getTrackDetail)

//POST
route.post("/", createTrack)

//PUT


//DELETE
route.delete("/:id", deleteTrack)


module.exports = route