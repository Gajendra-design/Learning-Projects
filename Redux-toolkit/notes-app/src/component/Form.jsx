import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addNotes } from '../features/notesSlice'
import { Plus } from 'lucide-react'


const Form = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onChange'
  })

  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(addNotes(data));
    reset()
  }


  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex gap-2 items-start mb-6'
    >
      <div className='flex-1 flex flex-col gap-1.5'>
        <input
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Minimum 3 characters required'
            }
          })}
          type="text"
          placeholder='Title'
          className={`w-full outline-none bg-zinc-950 text-zinc-100 placeholder-zinc-500 py-2.5 px-4 rounded-xl border transition-colors font-medium text-sm ${errors.title
            ? 'border-red-500/80 focus:border-red-500'
            : 'border-zinc-800 focus:border-orange-500'
            }`}
        />

        {errors.title && (
          <p className='text-xs font-medium text-red-400 pl-1 animate-in fade-in slide-in-from-top-1 duration-200'>
            {errors.title.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className='flex items-center gap-1.5 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold py-2.5 px-4 rounded-xl transition-all text-sm active:scale-95 whitespace-nowrap shadow-lg shadow-orange-500/10'
      >
        <Plus className="w-4 h-4 stroke-[2.5]" />
        <span>Add</span>
      </button>
    </form>
  )
}

export default Form