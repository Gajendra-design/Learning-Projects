import React, { use } from 'react'
import { useState } from 'react'
import { Navbar } from './componants/Navbar'
import { Auth } from './componants/Auth'
import CardDisplay from './componants/CardDisplay'
import CardForm from './componants/CardForm'
import { nanoid } from 'nanoid'

const App = () => {
  // localStorage.clear()  
  console.log("Re-rendering the App");  
  
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))||{cards:[]}

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn'))??false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users'))??[])
  const [cards, setCards] = useState(currentUser.cards??[])
  const [showCardForm, setShowCardForm] = useState(false)
  const [updateCardData, setUpdateCardData] = useState({name:"",email:""})


  console.log("isLoggedIn->",isLoggedIn);
  console.log("users->",users);
  console.log('cards in current user->',currentUser.cards);
  
  console.log("cards->",cards);
  console.log('current user->',currentUser);  

  const handelDelete=(card)=>{

      console.log('clicked card->',card);

      const updatedCards = currentUser.cards.filter((ele)=>ele.id!==card.id)
      console.log('updated cards->',updatedCards);

      

      const updatedUsers = users.map((user)=>{
        if(currentUser.email === user.email){
      // remeber hum cards ko useState me update kar rahe hai and usme array hai so iss liye humko refrence badlna hai and for that we have to make a new object
          // user.cards = updatedCards   //so you can't do that
          //insted make new array so it will point to new refrence
          return {...user,cards:updatedCards}
        }

        return user;
      });

      // remeber hum cards ko useState me update kar rahe hai and usme array hai so iss liye humko refrence badlna hai and for that we have to make a new object
      // const updatedCurrentUser = currentUser.cards  //so you can't do that 
      //do this insted
      const updatedCurrentUser = {...currentUser,cards:updatedCards}

      localStorage.setItem('users',JSON.stringify(updatedUsers))
      localStorage.setItem('currentUser',JSON.stringify(updatedCurrentUser));
      
      setUsers(updatedUsers);
      setCards(updatedCurrentUser.cards)
  
  }

  // ye yaad rakna card form me react hook form me hum keval name and email revive kar rahe hai and id ko yaha se genrate kar ke bhej rahe hai so every time jab bhi form khulea tho new id as a prop jayegi usme so for that reason hum jis card pe click hua hai uski id direct nahi le payege so for jab humne updatedcardData ko update kiya tho usme card hi padd kara tha and usme id thi tho waha se id li hai hamne
  const handelUpdate=(updateCardInfo,id)=>{
    const updatedCards = currentUser.cards.map((card)=>{
      if(card.id===id){
        return {...card,name:updateCardInfo.name,email:updateCardInfo.email}
      }
      return card;
    })

    const updatedUsers = users.map((user)=>{
      if(currentUser.email===user.email){
        return {...user,cards:updatedCards}
      }
      return user;
    })

    const updatedCurrentUser = {...currentUser,cards:updatedCards}

    localStorage.setItem('users',JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser',JSON.stringify(updatedCurrentUser))

    setCards(updatedCards)
    setUsers(updatedUsers)
  }

  

  return (
    <div className='flex flex-col h-screen bg-gray-900'>
      <Navbar currentUser={currentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setShowCardForm={setShowCardForm} setCards={setCards} />
      {isLoggedIn ? <CardDisplay setUpdateCardData={setUpdateCardData} handelDelete={handelDelete} setShowCardForm={setShowCardForm} cards={cards} /> : <Auth setCards={setCards} setIsLoggedIn={setIsLoggedIn} isNewUser={isNewUser} setIsNewUser={setIsNewUser} users={users} setUsers={setUsers} currentUser={currentUser}/>}
      {showCardForm&&<CardForm id={nanoid()} users={users} currentUser={currentUser} setUsers={setUsers} setShowCardForm={setShowCardForm} setCards={setCards} cards = {cards} updateCardData={updateCardData} setUpdateCardData={setUpdateCardData} handelUpdate={handelUpdate} />}
    </div>
  )
}

export default App