import React from 'react'
import Register from './Register'
import Login from './Login'
import Card from './Card'

export const Auth = ({ setCards,setIsLoggedIn, isNewUser, setIsNewUser, users, setUsers, currentUser }) => {

    const authSubmit = (data, servise) => {

        if (servise === "register") {

            const existingUser = users.find((user) => user.email === data.email)

            if (existingUser) {
                alert('user already exists')
                return
            }

            // localStorage.setItem('users',users)

            const allUsers = [...users, { ...data, cards: [] }]; //now ab humne phale syncrounously user ke data ko update kar liye hai so iss liye ab koi dikkat nahi hai
            localStorage.setItem('users', JSON.stringify(allUsers))




            //yaha pe humne ab local storage integrate kari hai so setUser asyn wise operations handel karth ahoa and uppe dekho hum localstorage me phale userse set kar rahe the so humne isse ek step phiche chal rahe the localstorage update karne me kyu ki localstorage syncronously chal raha hai and setuser jo ki user ko update kar raha hai wo async wise so iss liye hume ek step phiche ka user data mil raha hai kyu ki wo update hone se phale yani setuser chalne se phale local storage chal ja rahi hai

            // setUsers(pre => [...pre, data])

            setUsers(allUsers)

            // very very important it is to track cureently loggedin or registed user
            localStorage.setItem('currentUser', JSON.stringify({ ...data, cards: [] }))
        }

        if (servise === "login") {
            if (users.length === 0) {
                alert('this user is not registerd')
                return;
            }

            const existingUser = users.find((user) => {
                return (data.name === user.name) && (data.email === user.email) && (data.password === user.password)
            })

            if (!existingUser) {
                alert('this user is maybe not register or wrong credentials')
                return
            }

            // very very important it is to track cureently loggedin or registed user
            localStorage.setItem('currentUser', JSON.stringify(existingUser))

        }




        localStorage.setItem('isLoggedIn', JSON.stringify(true))
        setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')))
                
        setCards(JSON.parse(localStorage.getItem('currentUser')).cards)

    }

    return (
        <div className='h-[92%] w-full flex justify-center items-center text-white'>
            {isNewUser ? <Register setIsNewUser={setIsNewUser} authSubmit={authSubmit} /> : <Login setIsNewUser={setIsNewUser} authSubmit={authSubmit} />}
        </div>
    )
}

