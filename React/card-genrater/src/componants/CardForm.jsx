import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Card from './Card'

const CardForm = ({ id, users, currentUser, setUsers, setShowCardForm, setCards, cards, updateCardData, setUpdateCardData, handelUpdate }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: updateCardData.name || "",
            email: updateCardData.email || ""
        }
    })

    return (
        <div className='absolute top-0 left-0 z-10 h-screen w-full bg-black opacity-90 backdrop-blur-sm text-white flex justify-center items-center'>
            <div className='flex flex-col gap-4 p-4 border border-white rounded-2xl items-center justify-center'>
                <p onClick={() => {
                    setUpdateCardData({ name: "", email: "" })
                    setShowCardForm(pre => !pre)
                }} className='self-end cursor-pointer text-red-600 font-semibold'>Close</p>
                <h1>Creat Card</h1>
                <form onSubmit={handleSubmit((data) => {
                    if (updateCardData.name && updateCardData.email) {
                        handelUpdate(data, updateCardData.id);
                        setUpdateCardData({name:"",email:""})
                        setShowCardForm(pre => !pre)
                        return
                    }

                    const updatedUses = users.map((user) => {
                        if ((user.name === currentUser.name) && (user.email === currentUser.email) && (user.password === currentUser.password)) {
                            // remeber hum cards ko useState me update kar rahe hai and usme array hai so iss liye humko refrence badlna hai and for that we have to make a new object
                            // user.cards.push({...data,id:id})   //don't use this 
                            // use this insted
                            return { ...user, cards: [...user.cards, { ...data, id: id }] }
                        }

                        return user;
                    })

                    const updatedCurrentUses = updatedUses.find((user) => {
                        return (user.name === currentUser.name) && (user.email === currentUser.email) && (user.password === currentUser.password)
                    })

                    localStorage.setItem('users', JSON.stringify(updatedUses))
                    localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUses))
                    setUsers(updatedUses);


                    const allCards = updatedCurrentUses.cards

                    localStorage.setItem('cards', JSON.stringify(allCards))
                    setCards(allCards);

                    setShowCardForm(pre => !pre)

                })} className='flex flex-col gap-5 p-3'>
                    <input {...register('name')} className='p-3 outline-none border border-gray-500' type="text" placeholder='name' required />
                    <input {...register('email')} className='p-3 outline-none border border-gray-500' type="text" placeholder='email' required />
                    <button className='p-3 border border-transparent rounded bg-blue-500 cursor-pointer'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CardForm