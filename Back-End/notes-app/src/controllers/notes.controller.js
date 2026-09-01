const notesModel = require("../models/notes.model");

const createNoteController = async (req,res)=>{
    try {
        const {title,description} = req.body

        const note = await notesModel.create({
            title,
            description
        })

        const totalNotes = await notesModel.find()

        console.log('note created sucessfully');

        return res.status(201).json({
            mesaage:"note created sucessfully",
            addedNote:req.body,
            totalNotes
        })
        
    } catch (error) {
        console.log('error while creating a note in mongo DB',error);
        return res.status(500).json({
            message:"internal server Error"
        })   
    }
}

module.exports = {
    createNoteController
}