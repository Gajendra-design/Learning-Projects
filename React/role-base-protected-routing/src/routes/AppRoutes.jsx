import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Auth from '../pages/Auth'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import GuestLayout from '../layouts/GuestLayout'
import MainLayout from '../layouts/MainLayout'
import { AuthContext } from '../context/authContext'
import ProtectedDashboard from '../components/ProtectedDashboard'

const router = createBrowserRouter([
        {
            path: '/',
            element: <GuestLayout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'contact',
                    element: <Contact />
                },
                {
                    path: 'auth',
                    element: <Auth />,
                    children: [
                        {
                            path: '',
                            element: <LoginForm />
                        },
                        {
                            path: 'register',
                            element: <RegisterForm />
                        }
                    ]
                }
            ]
        },
        {
            path:'/dashboard',
            element:<ProtectedDashboard/>
        }
        
    ])


const AppRoutes = () => {

    
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes
