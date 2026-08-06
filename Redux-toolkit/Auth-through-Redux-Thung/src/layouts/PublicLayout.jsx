import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

const PublicLayout = () => {


  const { isLoading, isAuthorized } = useSelector(state => state.auth)
  if (isLoading) { return <h1>Loading......</h1> }
  if (isAuthorized) { return <Navigate to={'/main'} /> }
  return (
    <div className='h-screen bg-black text-white flex justify-center items-center'>
      <Outlet />
    </div>
  )
}

export default PublicLayout