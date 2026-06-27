
import Note from "../models/Note.js"


//================================================================Get All Notes
export async function getAllNotes(req, res) {
  try{
        const notes = await Note.find().sort({createdAt:-1}); //-1 will sort in descending order(newest first), 1 is by default for ascending order.
        
        res.status(200).json(notes);
  }
  catch(error){
    console.error("error while fetching notes", error);
    res.status(500).json({message: "internal server error while fetching notes"})
  }
}





//================================================================Get a specific note
export async function getNote(req, res) {
  try{
        const note = await Note.findById(req.params.id);
        if(!note){return res.status(404).json({message: "Note Not found"})}
        res.status(200).json(note);
  }
  catch(error){
    console.error("error while fetching note", error);
    res.status(500).json({message: "internal server error while fetching note"})
  }
}





//================================================================Post notes
export async function createNotes(req, res) {
  
    try{
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message: "title and content are required"});
        }
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json(newNote)
    }
    catch(error){
        console.error("error while creating note", error);
        res.status(500).json({message: "internal server error while creating note"})

    }
}






//================================================================Update note
export async function updateNotes(req, res) {
    try{
        const {id} = req.params;
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message: "title or content is required to update note"})
        }
        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true})
        res.status(200).json(updatedNote);
    }
    catch(error){
        console.error("error while updating note", error);
        res.status(500).json({message: "internal server error while updating note"})
    }
}






//================================================================Delete Note
export async function deleteNotes(req, res) {
    try{
        const {id} = req.params;
        const deleteNote = await Note.findByIdAndDelete(id);
        if(!deleteNote){return res.status(404).json({message: "Note not found"})}  
        res.status(200).json({ message: "note deleted."});
    }
    catch(error){
        console.error("error while deleting note", error);
        res.status(500).json({message: "internal server error while deleting note"})
    }
}
