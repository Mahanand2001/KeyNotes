import { useState } from "react"

const NoteDetailPage = ({note}) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const updateNote = async (e) => {
    e.preventDefault();
    
    if(!title.trim() || !content.trim()){ }


  }

  return (
    <div>NoteDetailPage</div>
  )
}

export default NoteDetailPage