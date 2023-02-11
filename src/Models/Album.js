const mongoose = require("mongoose")

const OBJECT = mongoose.Types.ObjectId

const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    title: {
        type:String,
        unique:true
    },
    link: {
        type:String
    },
    img: {
        type:String,
        unique:true
    },
    pricipal_genre: {
        type: OBJECT,
        unique:true
    },
    genres: {
        type:[OBJECT]
    },
    duration: {
        type:Number
    },
    release_date:{
        type:Date
    } ,
    record_type: {
        type:String
    },
    contributors: {
        type:[OBJECT]
    },
    artist: {
        type:OBJECT
    } ,
    tracks: {
        type:[OBJECT]
    },
},{timestamps:true})

const AlbumModel = mongoose.model("album", AlbumSchema)

module.exports = AlbumModel