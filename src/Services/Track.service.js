const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllTracks = async () =>{
    try {
        const data = await TrackModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createTrack = async (body) => {

    const {
    name,
    artist, //id del artista
    audio,
    genre, // id del genero
    duration,
    release_date,
    album //id del album
    }  = body
    
    if(!name) throw "Track's name is required"
    if(!audio) throw "Track's audio is required"
    if(!genre) throw "Track's genre is required"
    if(!duration) throw "Track's duration is required"
    if(!release_date) throw "Track's release_date is required"
    
    try {
    
        const created = await TrackModel.create(body)
        const findArtist = await UserModel.find({id:artist})
        const findAlbum = await UserModel.find({id:album})
        const artistTrack = await UserModel.findOneAndUpdate({id:artist},{tracks:[...findArtist.tracks,created._id]})
        const albumTrack = await AlbumModel.findOneAndUpdate({id:album},{tracks:[...findAlbum.tracks,created._id]})
        return [created,artistTrack,albumTrack] 
        
    } catch (error) {
        console.log(error)
    }
    
    
    }

module.exports = {
    getAllTracks,
    createTrack
}