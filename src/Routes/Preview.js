const express =  require("express")
const {createPreview,getAllPreviews} =  require("../Controllers/Preview.controller")


const route = express.Router();

route.get("/", getAllPreviews);
route.post("/", createPreview);

module.exports = route