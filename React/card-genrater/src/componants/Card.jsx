import React from 'react'

const Card = ({card,handelDelete,setShowCardForm,setUpdateCardData}) => {
  return (
    <div className="h-fit w-fit p-4 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
        {card.name.slice(0,2).toUpperCase()}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
        {card.name}
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        {card.email}
      </p>

      <div className="w-full flex gap-3">
        <button onClick={()=>{
          setUpdateCardData(card)
          setShowCardForm(pre => !pre)
          }} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm transition duration-200">
          Update
        </button>
        
        <button onClick={()=>{handelDelete(card)}} className="flex-1 border border-gray-200 hover:border-red-200 text-gray-600 hover:text-red-600 hover:bg-red-50 text-sm font-medium py-2 px-4 rounded-lg transition duration-200">
          Delete
        </button>
      </div>

    </div>
  )
}

export default Card
