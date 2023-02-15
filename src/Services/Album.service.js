const express =  require("express")
const mongoose = require("mongoose")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")
const artistModel  = require("../Models/Artist")

const getAllAlbums = async () =>{
    try {
        const data = await AlbumModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createAlbum = async (body) =>{ 
    // quite tracks porque primero se crea el album con una prop status en private para que hasta que no se publique no se 
    //muestre,  asi tambein con las canciones,estas se crearan y se mostraran dentro dle album pero no se veran para 
    //el resto de usuarios hasta que se publiquen 
    const {
    title,
    img,
    pricipal_genre,
    release_date,
    record_type,
    artist
    } = body

    if (!title) throw "a title is required";
    if (!img) throw "a image is required";
    if (!pricipal_genre) throw "a principal genre is required";
    if (!release_date) throw "a release date is required";
    if (!record_type) throw "a record type is required";
    
    try {
        const created  = await AlbumModel.create(body)
        const user = await UserModel.findOne({_id:artist});
        const albumsArray = user?.albums.length > 0  ? [...user?.albums, created?._id] : [created?._id]
        const addAndChangeRole = await UserModel.findOneAndUpdate({_id:artist},{rol:"artist", albums:albumsArray});
        return created
    } catch (error) {
        console.log(error)
    }

    


}

module.exports = {
    getAllAlbums,
    createAlbum
}