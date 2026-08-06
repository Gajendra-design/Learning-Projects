import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { hydrateAction } from '../features/auth/authActions';


const MainLayout = () => {

    const { isLoading, isAuthorized } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(hydrateAction())
    },[])


    if (isLoading) { return <h1>Loading......</h1> }
    if (!isAuthorized) { return <Navigate to={'/'} /> }

    return (
        <div className='h-screen bg-black text-white'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout
