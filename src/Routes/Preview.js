const express =  require("express")
const {createPreview,getAllPreviews,getPreviewDetail, deletePreview} =  require("../Controllers/Preview.controller")


const route = express.Router();

route.get("/", getAllPreviews);
route.get("/:id", getPreviewDetail)

route.post("/", createPreview);

route.delete("/:id", deletePreview)


module.exports = route