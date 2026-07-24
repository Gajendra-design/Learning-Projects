import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth from './components/auth/Auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Layout from './Layout'
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import About from './components/Pages/About'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import ProductDisplay from './components/Pages/ProdcutDisplay'

const ReactRouterProvider = () => {

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <Auth />,
          children: [
            {
              path: "",
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
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <Home />
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: 'about',
              element: <About />
            },
            {
              path: 'product/:id',
              element: <ProductDisplay />
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

export default ReactRouterProvider