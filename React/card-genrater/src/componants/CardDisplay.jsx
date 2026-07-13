import React from 'react'
import Card from './Card'
import { nanoid } from 'nanoid'

const CardDisplay = ({handelDelete, setShowCardForm, cards, setUpdateCardData }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 w-full p-4 text-white content-start min-h-[92%]">

      {
        cards.length === 0 ?
          <div className="col-span-full min-h-[70vh] flex items-center justify-center text-white">
            <p className="text-center font-medium">
              Feeling Lonely Here 🙁🙁 <span onClick={() => { setShowCardForm(pre => !pre) }} className="text-blue-600 cursor-pointer hover:underline">Create New Card</span>
            </p>
          </div> :
          cards.map((card)=>{
            return <Card key={nanoid()} handelDelete={handelDelete} setShowCardForm={setShowCardForm} card={card} setUpdateCardData={setUpdateCardData} />
          })

      }

    </div>
  )
}

export default CardDisplay
