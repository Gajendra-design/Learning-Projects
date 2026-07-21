import React, { useContext } from 'react'
import { MyStore } from './Context/MyStore'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

const {loggedInUser} = useContext(MyStore)

if(loggedInUser){
    return <Navigate to='/' />
}

return <Outlet/>

}

export default PublicRoute