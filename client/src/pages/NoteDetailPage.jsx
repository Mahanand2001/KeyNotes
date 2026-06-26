import { useEffect, useState } from "react"
import axiosInstance from "../lib/axios"
import { useParams } from "react-router"
import toast from "react-hot-toast";

const NoteDetailPage = ({}) => {
  const {id} = useParams();
  const [note, setNote] = useState("")
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchNote = async () => {
    
    try {
      const res = await axiosInstance.get(`/notes/${id}`)
      setNote(res.data);
      console.log(note)
    } catch (error) {
      console.log("error fetching note.", error)
      toast.error("Error fetching note.")
      
    }
    finally{
      setLoading(false)
    }
  }
  fetchNote();
  }, [id])

  const handleSaving = async (e) => {
    e.preventDefault();
    
    if(!title.trim() || !content.trim()){ }
  }

  
  
  return (
    <div className="container min-h-screen"></div>
  )
}

export default NoteDetailPage