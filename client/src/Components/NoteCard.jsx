import React from 'react'
import NoteDetailPage from './../pages/NoteDetailPage';
import { Link } from 'react-router';
import { Axios } from 'axios';
import { SquarePen, Trash2Icon } from 'lucide-react';
import { formatDate } from '../lib/utils';

const NoteCard = ({note}) => {
    
  return (
    <Link className='card bg-base-300 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#fac000]' to={`/note/${note._id}`}>
        <div className="card-body">
                <h3 className="card-title text-based-content">{note.title}</h3>
                <p className="text text-based-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-based-content/60">{formatDate(note.createdAt)}</span>
                <div className="flex items-center gap-1">
                    <SquarePen className='size-4' />
                    <button className="btn btn-ghost btn-xs text-error"><Trash2Icon className='size-4' /></button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard