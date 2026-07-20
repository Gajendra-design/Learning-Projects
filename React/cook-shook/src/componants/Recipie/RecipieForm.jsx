import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FunctionStore } from '../../context/FunctionalStore'
import { UserStore } from '../../context/userStore'

const RecipieForm = () => {

  const {editRecipeData} = useContext(UserStore)
  const {recipieFormSubmit} = useContext(FunctionStore)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues: editRecipeData || ""
  })


  return (
    <form onSubmit={handleSubmit((data)=>{
      recipieFormSubmit(data);
      reset();

      })} className='flex flex-col gap-4 flex-1'>
  
      {/* Input Block: Recipe Name */}
      <div className='flex flex-col gap-1.5'>
        <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Recipe Name</label>
        <input 
          {...register("recipeName", {
            required: "Recipe name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters long" },
            maxLength: { value: 40, message: "Name cannot exceed 40 characters" },
            pattern: {
              // Starts with a letter, followed by letters, spaces, or hyphens. No leading spaces.
              value: /^[a-zA-Z\u00C0-\u017F][a-zA-Z\s\-'\u00C0-\u017F]*$/,
              message: "Must start with a letter and contain only letters, spaces, or hyphens"
            }
          })}
          type="text" 
          placeholder="e.g., Woodfired Neapolitan Pizza"
          className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
        />
        {errors.recipeName && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.recipeName.message}</span>}
      </div>

      {/* Input Block: Chef Name */}
      <div className='flex flex-col gap-1.5'>
        <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Chef Name</label>
        <input 
          {...register("chefName", {
            required: "Chef name is required",
            minLength: { value: 3, message: "Chef name must be at least 3 characters long" },
            maxLength: { value: 30, message: "Chef name cannot exceed 30 characters" },
            pattern: {
              // Starts with a letter, followed by letters, spaces, dots, or hyphens.
              value: /^[a-zA-Z][a-zA-Z\s\.\-]+$/,
              message: "Must start with a letter and contain only letters, spaces, dots, or hyphens"
            }
          })}
          type="text" 
          placeholder="e.g., Chef Gajendra"
          className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
        />
        {errors.chefName && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.chefName.message}</span>}
      </div>

      {/* Row Grid: Price & Prep Time side by side */}
      <div className='grid grid-cols-2 gap-4'>
        {/* Input Block: Price */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Price ($)</label>
          <input 
            {...register("price", {
              required: "Price is required",
              min: { value: 0.01, message: "Price must be greater than 0" }
            })}
            type="number" 
            step="0.01"
            placeholder="e.g., 14.99"
            className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
          />
          {errors.price && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.price.message}</span>}
        </div>

        {/* Input Block: Prep Time */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Prep Time</label>
          <input 
            {...register("prepTime", {
              required: "Prep time is required",
              pattern: {
                // Must start with a number, then end with time metrics (mins, hrs, h, etc.)
                value: /^\d+(\.\d+)?\s*(min|mins|m|hr|hrs|h|hour|hours)$/i,
                message: "Must start with numbers (e.g., 25 mins, 1.5 hrs)"
              }
            })}
            type="text" 
            placeholder="e.g., 25 mins"
            className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
          />
          {errors.prepTime && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.prepTime.message}</span>}
        </div>
      </div>

      {/* Input Block: Media */}
      <div className='flex flex-col gap-1.5'>
        <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Banner Image Link</label>
        <input 
          {...register("imageLink", {
            required: "Image URL is required",
          })}
          type="url" 
          placeholder="https://images.unsplash.com/your-dish"
          className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
        />
        {errors.imageLink && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.imageLink.message}</span>}
      </div>

      {/* Input Block: Ingredients */}
      <div className='flex flex-col gap-1.5'>
        <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Ingredients Inventory</label>
        <textarea 
          {...register("ingredients", {
            required: "Ingredients are required",
            minLength: { value: 10, message: "Please enter a realistic ingredients list (min 10 characters)" },
            validate: {
              // Cuts out purely whitespace submissions
              noJustSpaces: value => value.trim().length >= 10 || "Cannot consist of only blank spaces",
              noLeadingSpecial: value => /^[a-zA-Z0-9\u00C0-\u017F]/.test(value.trim()) || "Must start with a regular letter or number"
            }
          })}
          rows="3"
          placeholder="Flour, active yeast, san marzano tomatoes, fresh basil..."
          className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 resize-none transition-all focus:ring-4 focus:ring-red-500/5'
        />
        {errors.ingredients && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.ingredients.message}</span>}
      </div>

      {/* Input Block: Steps */}
      <div className='flex flex-col gap-1.5'>
        <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Preparation Guide</label>
        <textarea 
          {...register("steps", {
            required: "Preparation steps are required",
            minLength: { value: 20, message: "Please describe the preparation process with a bit more depth (min 20 characters)" },
            validate: {
              noJustSpaces: value => value.trim().length >= 20 || "Cannot consist of only blank spaces",
              noLeadingSpecial: value => /^[a-zA-Z0-9\u00C0-\u017F]/.test(value.trim()) || "Must start with a regular letter or number"
            }
          })}
          rows="3"
          placeholder="1. Proof dough for 24 hours.&#10;2. Crush tomatoes by hand.&#10;3. Bake at 450°C..."
          className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 resize-none transition-all focus:ring-4 focus:ring-red-500/5'
        />
        {errors.steps && <span className='text-[11px] font-medium text-red-500 tracking-wide px-1'>{errors.steps.message}</span>}
      </div>

      {/* Glowing Action Button Wrapper */}
      <button 
        type="submit" 
        className='mt-4 w-full py-3.5 text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-red-950/40 tracking-widest uppercase cursor-pointer'
      >
        Publish to Community
      </button>
    </form>
  )
}

export default RecipieForm