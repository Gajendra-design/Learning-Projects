import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth from '../pages/Auth'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/authSlice'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Auth/>,
        children:[
            {
                path:'',
                element:<LoginForm/>
            },
            {
                path:'/register',
                element:<RegisterForm/>
            }
        ]
    },
    {
        path:'/main',
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<Home/>
            }
        ]
    }
])


const AppRoutes = () => {

    //REMEMBER: In React, Hooks cannot be called inside nested functions, loops, or useEffect callbacks—doing so violates the Rules of Hooks and will crash your app.
    const dispatch = useDispatch() 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const hydrate = ()=>{
        if(!currentUser){
            return;
        }

        dispatch(addUser(currentUser))

    }
    
    useEffect(()=>{hydrate()},[])


  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes