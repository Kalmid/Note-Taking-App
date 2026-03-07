const noteModel = require("../models/noteModel");

const addNote = async(req, res) => {
    try{
        const {title, description} = req.body
        if(!title || !description){
            return res.status(400).send({ message: "All fields are required" });
        }

        const note = await new noteModel({title, description});
        await note.save();
        res.status(201).send({"message":"Note Created"});
    }catch(error){
        console.log(error);
    }
}

const getAllNotes = async(req, res) => {
    try{
        const notes = await noteModel.find();
        if(notes.length===0){
            return res.status(404).json({"message":"Notes not found"});
        }
        res.send(notes);
        
    }catch(error){
        console.log(error);
        res.status(500).json({"message":"Error fetching notes"});
    }
}

const removeNote = async(req, res) => {
    try{
        const {id} = req.params;
        const note = await noteModel.findByIdAndDelete(id);

        if(!note){
            return res.status(404).json({"message":"Note not found"});
        }
        res.status(200).json({"message":"Note Deleted"});

    }catch(error){
        console.log(error);
        res.status(404).json({"message":"Note not Deleted"});
    }
}

const editNote = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        if(!title || !description){
            return res.status(400).send({ message: "All fields are required" });
        }

        const note = await noteModel.findByIdAndUpdate(id,{
            title,
            description
        },{new:true});

        res.send({"message":"Note Updated", note});

    }catch(error){
        console.log(error);
    }
}

const getSingleNote = async(req, res) => {
    try{
        const {id} = req.params;
        const note = await noteModel.findById(id);

        if(!note){
            return res.status(404).json({"message":"Note not found"});
        }

        res.send(note);
        
    }catch(error){
        console.log(error);
    }
}

module.exports = { addNote, getAllNotes, removeNote, editNote, getSingleNote }