import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Public from './protected/Public'
import AuthPage from '../features/auth/ui/pages/AuthPage'
import Private from './protected/Private'
import ProductPage from '../features/products/ui/pages/ProductPage'
import About from '../pages/About'
import HomePage from '../pages/HomePage'
import RegisterForm from '../features/auth/ui/components/RegisterForm'
import LoginForm from '../features/auth/ui/components/LoginForm'
import { hydrateApi } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    children: [
      {
        path: '',
        element: <AuthPage />,
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
    path: '/main',
    element: <Private />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'product',
        element: <ProductPage />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])


const AppRouetes = () => {

  const dispath = useDispatch();

  useEffect(() => { hydrateApi(dispath) }, [dispath])

  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default AppRouetes