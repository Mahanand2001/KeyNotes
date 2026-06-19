import mongoose from 'mongoose';


//create a schema
//model is a wrapper on the shcema, it provides an interface to  database



const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
         required: true
    }
}, { timestamps: true })  // created at and updated at fields are by default added by mongoose

const note = mongoose.model("Note", noteSchema);

export default note;