import React, { useContext } from 'react'
import { MyStore } from '../Context/MyStore'
import { Navigate, Outlet} from 'react-router';

const PublicRoutes = () => {
  
    const {loggedInUser} = useContext(MyStore);

    if(loggedInUser){
        return <Navigate to='/home' />
    }

    return <Outlet/>
}

export default PublicRoutes