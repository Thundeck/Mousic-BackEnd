const mongoose = require("mongoose")

const Schema = mongoose.Schema
const OBJECT = mongoose.Types.ObjectId

const TrackSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    artist: {
        type:OBJECT,
        require:true
    },
    album: {
        type:OBJECT,
        require:false
    },
    audio: {
        type:String,
        require:true
    },
    img: {
        type:String,
        require:true
    },
    video: {
        type:String,
        require:false
    },
    genre: {
        type:String,
        require:false
    },
    duration: {
        type:Number,
        require:true
    },
    track_position: {
        type:Number,
        require:false
    },
    album_position: {
        type:Number,
        require:false
    },
    rank: {
        type:Number,
        require:false
    },
    release_date: {
        type:Date,
        require:true
    },
    preview: {
        type:String,
        require:false
    },
    NOT_available_countries: {
        type:Array,
        require:false
    },
    contributors: {
        type:[OBJECT],
        require:false
    },
})

const TrackModel = mongoose.model("track", TrackSchema)

module.exports = TrackModel