const express =  require("express")
const {createTrack,getAllTracks} =  require("../Controllers/Track")


const route = express.Router()

route.get("/", getAllTracks)
route.post("/", createTrack)

module.exports = route