import React, { useContext } from 'react'
import { FunctionStore } from '../../context/FunctionalStore';
import { UserStore } from '../../context/userStore';

const YourRecipieCard = ({ recipe }) => {

    const displayPrice = recipe.price ? parseFloat(recipe.price).toFixed(2) : "0.00";
    const cleanImageLink = recipe.imageLink?.split('](')[0] || '';


    const {toggleFullPageRecipieFormOpen,handelDeleteRecipie} = useContext(FunctionStore);
    const {setEditRecipeData} = useContext(UserStore)

    return (
        <div className='group bg-gray-900/20 border border-gray-900 rounded-2xl overflow-hidden flex flex-col hover:border-gray-800/80 transition-all duration-300 shadow-xl'>
            {/* Visual Media Container Block */}
            <div className='h-44 w-full overflow-hidden bg-gray-950 relative border-b border-gray-900/40'>
                <img
                    src={cleanImageLink}
                    alt={recipe.recipeName}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />

                {/* Price Tag (Top Left) */}
                <div className='absolute top-3 left-3 text-[11px] font-black bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-lg shadow-md tracking-wide text-white border border-red-500/20 shadow-red-950/50'>
                    ${displayPrice}
                </div>

                {/* Time Badge (Bottom Right) */}
                <div className='absolute bottom-3 right-3 text-[10px] font-bold bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-850 tracking-wider text-gray-300'>
                    ⏱ {recipe.prepTime}
                </div>
            </div>

            {/* Typography Content Elements */}
            <div className='p-5 flex flex-col flex-1 justify-between gap-4'>
                <div>
                    <h3 className='font-bold text-md text-gray-200 tracking-wide line-clamp-1 group-hover:text-red-400 transition-colors'>
                        {recipe.recipeName}
                    </h3>
                    <p className='text-[11px] text-gray-500 font-medium mt-0.5'>
                        Authored as: <span className='text-gray-400 font-semibold'>{recipe.chefName}</span>
                    </p>

                    {/* Visual Ingredients List Preview Tags */}
                    {recipe.ingredients && (
                        <div className='flex flex-wrap gap-1.5 pt-3'>
                            {recipe.ingredients.split(/[;,]/).slice(0, 2).map((ing, idx) => (
                                <span
                                    key={idx}
                                    className='text-[9px] font-medium tracking-wide bg-gray-900/60 text-gray-400 px-2 py-0.5 rounded-md border border-gray-850/60 truncate max-w-[90px]'
                                >
                                    {ing.trim()}
                                </span>
                            ))}
                            {recipe.ingredients.split(/[;,]/).length > 2 && (
                                <span className='text-[9px] font-bold text-red-400/80 px-1 py-0.5'>
                                    +{recipe.ingredients.split(/[;,]/).length - 2} items
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Modify Matrix Trigger Rows */}
                <div className='flex items-center gap-2 pt-3 border-t border-gray-900'>
                    <button onClick={()=>{
                        toggleFullPageRecipieFormOpen()
                        setEditRecipeData(recipe)
                        }} type='button' className='flex-1 text-[11px] py-2.5 px-3 font-bold bg-gray-950 text-gray-400 border border-gray-900 hover:border-gray-800 rounded-xl hover:text-white transition-all cursor-pointer tracking-wider uppercase active:scale-[0.98]'>
                        Edit Blueprint
                    </button>
                    <button onClick={()=>{handelDeleteRecipie(recipe)}} type='button' className='px-3 py-2.5 text-xs bg-red-950/20 border border-red-900/20 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all cursor-pointer active:scale-[0.95]'>
                        ✕
                    </button>
                </div>
            </div>

        </div>
    )
}

export default YourRecipieCard