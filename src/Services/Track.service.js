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
        console.log("esto es created",created)

        const findArtist = await UserModel.findById({_id:artist})

        const findAlbum = await AlbumModel.findById({_id:album})
        console.log("esto es findAlbum",findAlbum)

        const artistTrack = await UserModel.findOneAndUpdate({_id:artist},{tracks:[...findArtist?.tracks,created?._id]})

        const albumTrack = await AlbumModel.findOneAndUpdate({_id:album},{tracks:[...findAlbum?.tracks,created?._id]})

        return created
        
    } catch (error) {
        console.log(error)
    }
    
    
    }

    const getTrackDetail = async (id) =>{

        if(!id) throw "cannot be searched without identification"
    
        try {
            const Track = await TrackModel.findById({_id:id}).populate({
                path:"artist contributors",
                select:"nickname img subs"
            }).populate({
                path:"genre preview",
                select:"name video audio video duration"
            })

            if(!Track) throw "Track not found"

            return Track
        } catch (error) {
            console.log("this is the error",error)
        }
    }

    const deleteTrack = async (_id) => {
        if(!_id) throw "cannot be deleted without identification"
    
        try {
            const deleted = await TrackModel.findOneAndDelete({_id})
            console.log(deleted)
            return "capaz que se borro no  tengo idea"
        } catch (error) {
            console.log(error)
        }
    
    }

module.exports = {
    getAllTracks,
    createTrack,
    getTrackDetail,
    deleteTrack
}