const mongoose = require("mongoose")

const {ObjectId} = mongoose.Types

const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    title: {
        type:String,
        require:true,
        unique:false
    },
    status: {
        type:String,
        default:"private"
    },
    link: {
        type:String
    },
    img: {
        type:String,
        require:true,
        unique:false
    },
    pricipal_genre: {
        type:ObjectId,
        require:true,
        unique:false
    },
    genres: {
        type:[ObjectId],// quizas los brackets de los arrays se deben poner rodeando el objeto
        require:true
    },
    duration: {
        type:Number,
        require:true
    },
    release_date:{
        type:String,
        require:true,
        unique:false
    } ,
    record_type: {
        type:String,
        unique:false
    },
    contributors: {
        type:[ObjectId]
    },
    artist: {
        type:ObjectId,
        require:true,
        unique:false
    } ,
    tracks: {
        type:[ObjectId]
    },
})

const AlbumModel = mongoose.model("album", AlbumSchema)

module.exports = AlbumModel