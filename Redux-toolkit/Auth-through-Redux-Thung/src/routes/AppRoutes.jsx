import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicLayout from '../layouts/PublicLayout'
import LoginForm from '../components/LoginForm'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../app/store'
import { ToastContainer } from 'react-toastify'


const router = createBrowserRouter([
    {
        path:'/',
        element:<PublicLayout/>,
        children:[
            {
                path:'',
                element:<LoginForm/>
            }
        ]
    },
    {
        path:'/main',
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<HomePage/>
            }
        ]
    }
])

const AppRoutes = () => {

  return (
    <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
    </Provider>
    
  )
}

export default AppRoutes