import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Users from '../pages/Users'
import Auth from '../pages/Auth'
import Login from '../components/Login'
import Register from '../components/Register'
import MainLayout from '../layouts/MainLayout'
import Products from '../pages/Products'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoutes />,
            children: [
                {
                    path: '',
                    element: <Auth />,
                    children: [
                        {
                            path: '',
                            element: <Login />
                        },
                        {
                            path: 'register',
                            element: <Register />
                        }
                    ]
                }
            ]

        },
        {
            path: '/home',
            element: <ProtectedRoutes />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <Users />

                        },
                        {
                            path: 'products',
                            element: <Products />
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes