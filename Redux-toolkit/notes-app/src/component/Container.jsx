import React from 'react'
import Form from './Form'
import NotesCard from './NotesCard'
import { useSelector } from 'react-redux'

const Container = () => {

  const { notes } = useSelector(state => state.notes)



  return (
    <div className='w-full max-w-md bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl shadow-orange-950/20'>
      <Form />

      <div className='flex flex-col gap-3'>
        {notes.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-8 text-center bg-zinc-950/40 border border-dashed border-zinc-800/80 rounded-xl'>
            <p className='text-zinc-400 font-medium text-sm'>No notes added yet</p>
            <p className='text-zinc-600 text-xs mt-1'>Type a title above and press Add</p>
          </div>
        ) : (
          notes.map((note) => (
            <NotesCard key={note.id}  note={note} />
          ))
        )}
      </div>
    </div>
  )
}

export default Container