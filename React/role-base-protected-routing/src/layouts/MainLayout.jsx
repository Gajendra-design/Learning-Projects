import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import AdminDashboard from '../pages/AdminDashboard'
import StaffDashboard from '../pages/StaffDashboard'
import UserDashboard from '../pages/UserDashboard'
import { AuthContext } from '../context/authContext'

const MainLayout = () => {

    const { role } = useContext(AuthContext)

  switch(role)
  {
    case 'admin':
        return <AdminDashboard/>
    case 'staff':
        return <StaffDashboard/>
    case 'user':
        return  <UserDashboard/>
    case '':
    default:
        return <Navigate to='/' replace/>
 }

}

export default MainLayout