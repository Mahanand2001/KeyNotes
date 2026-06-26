
import { Link, useNavigate } from 'react-router';
import axiosInstance from '../lib/axios.js'
import { SquarePen, Trash2Icon } from 'lucide-react';
import { formatDate } from '../lib/utils';
import toast from 'react-hot-toast';


const NoteCard = ({note , setNotes}) => {
    const navigate = useNavigate();


    const deleteNote = async (e, id) => {
      e.preventDefault();  
      if(!window.confirm("Are you sure to delete this note")) return;

      try {
        await axiosInstance.delete(`/notes/${id}`) 
        setNotes((prev) => prev.filter((note) => note._id !== id)) // get rid of the deleted note
        toast.success("Note Deleted successfully")  
        navigate("/")
      } catch (error) {
        console.log("error deleting a note", error)
        toast.error("failed to delete the note.")
      }
    }
    
  return (
    <Link className='card bg-base-300 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#fac000]' to={`/note/${note._id}`}>
        <div className="card-body">
                <h3 className="card-title text-based-content">{note.title}</h3>
                <p className="text text-based-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-based-content/60">{formatDate(note.createdAt)}</span>
                <div className="flex items-center gap-1">
                    <SquarePen className='size-4' />
                    <button className="btn btn-ghost btn-xs text-error" onClick={(e) =>deleteNote(e, note._id)}><Trash2Icon className='size-4' /></button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard