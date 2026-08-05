import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const Public = () => {

const {isAuthorized,isLoading} = useSelector((state)=>state.auth)

if(isAuthorized){
  return <Navigate to={'/main'} />
}


  return (
    <Outlet/>
  )
}

export default Public