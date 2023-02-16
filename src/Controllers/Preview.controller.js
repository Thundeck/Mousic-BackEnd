const PreviewService = require("../Services/Preview.service")

const getAllPreviews = async (_req, res) =>{
    try {
        const Previews = await PreviewService.getAllPreviews()
        res.json(Previews)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createPreview = async (req, res) =>{
    try {
        const Previews = await PreviewService.createPreview(req.body)
        res.json(Previews)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const getPreviewDetail = async (req, res) =>{
    const {id} = req.params

    try {
        const Preview = await PreviewService.getPreviewDetail(id)
        res.json(Preview).end()
    } catch (error) {
        console.log("this is the error",error)
    }
}

const deletePreview = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await PreviewService.deletePreview(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllPreviews,
    createPreview,
    getPreviewDetail,
    deletePreview
}