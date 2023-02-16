const express =  require("express")
const mongoose = require("mongoose")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

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
    // quite tracks porque primero se crea el Album con una prop status en private para que hasta que no se publique no se 
    //muestre,  asi tambein con las canciones,estas se crearan y se mostraran dentro dle Album pero no se veran para 
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
        const AlbumsArray = user?.albums.length > 0  ? [...user?.albums, created?._id] : [created?._id]
        const addAndChangeRole = await UserModel.findOneAndUpdate({_id:artist},{rol:"artist", albums:AlbumsArray});
        return created
    } catch (error) {
        console.log(error)
    }

    


}

const getAlbumDetail = async (_id) =>{

    if(!_id) throw "cannot be searched without identification"

    try {
        const Album = await AlbumModel.findById({_id}).populate("artist contributors",{
            nickname:1,
            subs:1,
            img:1
        })
        .populate("pricipal_genre genres")
        .populate({
            path:"tracks",
            select:"name img duration",
            populate:{
                path:"contributors artist",
                select:"nickname"
            }   
    })

        if(!Album) throw "Album not found"

        return Album
    } catch (error) {
        console.log("this is the error",error)
    }
}

const deleteAlbum = async (_id) => {
    if(!_id) throw "cannot be deleted without identification"

    try {
        const deleted = await AlbumModel.findOneAndDelete({_id})
        console.log(deleted)
        return "capaz que se borro no  tengo idea"
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAllAlbums,
    createAlbum,
    getAlbumDetail,
    deleteAlbum
}