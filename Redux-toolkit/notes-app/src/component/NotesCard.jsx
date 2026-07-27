import React, { useState } from 'react'
import { Pencil, Trash2, Check } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { deleteNotes, editNotes } from '../features/notesSlice';

const NotesCard = ({ note }) => {

    const dispatch = useDispatch();

    const [isEditable, setIsEditable] = useState(false)
    const [notesTitle, setNotesTitle] = useState(note.title)

    const editFun = () => {
        if(isEditable){
            dispatch(editNotes({id:note.id,updatedTitle:notesTitle}))
        }
        setIsEditable(pre=>!pre)
    }

    return (
        <div className={`flex justify-between items-center p-3.5 rounded-xl border transition-all duration-200 group hover:shadow-lg hover:shadow-black/40 ${
            isEditable 
                ? 'bg-zinc-900 border-orange-500/50 ring-1 ring-orange-500/20' 
                : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700/80'
        }`}>
            {
                isEditable ? (
                    <input 
                        type="text" 
                        value={notesTitle}
                        onChange={(e) => setNotesTitle(e.target.value)}
                        className='w-full mr-2 outline-none bg-zinc-950 text-zinc-100 placeholder-zinc-500 py-1 px-2.5 rounded-lg border border-orange-500/60 focus:border-orange-500 text-sm font-medium transition-colors'
                        autoFocus
                    />
                ) : (
                    <h1 className='text-sm font-medium text-zinc-200 group-hover:text-zinc-100 truncate max-w-[220px] pr-2'>
                        {note.title}
                    </h1>
                )
            }

            <div className='flex items-center gap-1 shrink-0'>
                <button
                    onClick={editFun}
                    type="button"
                    title={isEditable ? "Save Note" : "Edit Note"}
                    className={`p-2 active:scale-90 rounded-lg transition-all duration-150 ${
                        isEditable 
                            ? 'text-orange-400 bg-orange-500/10 hover:bg-orange-500/20' 
                            : 'text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10'
                    }`}
                >
                    {isEditable ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Pencil className="w-4 h-4" />}
                </button>
                <button
                    onClick={() => { dispatch(deleteNotes(note)) }}
                    type="button"
                    title="Delete Note"
                    className='p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 active:scale-90 rounded-lg transition-all duration-150'
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default NotesCard