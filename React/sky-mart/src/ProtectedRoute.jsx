import React, { useContext } from 'react'
import { MyStore } from './Context/MyStore'
import { Navigate, NavLink, Outlet } from 'react-router'

const ProtectedRoute = () => {

const {loggedInUser} = useContext(MyStore)

// VERY VERY IMPORTANT
// 1. Why it causes a blank screen:
// When React renders ProtectedRoute:
// It starts rendering the JSX tree.
// It hits if (!loggedInUser) navigate('/auth').
// Maps() immediately attempts to update React Router's global location state while React is still in the middle of calculating current renders.
// React blocks or throws an error due to state changes during render, resulting in a blank screen or console error (Cannot update a component while rendering a different component).
{/* <Navigate /> is a declarative React component specifically designed to be returned directly during render without side-effects: */}

// const navigate = useNavigate() //we won;t be using this because og the error

    if(!loggedInUser){
        // navigate('/auth') 
        // return;

        // return <NavLink to='/auth' replace/>  //ye bhi same error dega

        return <Navigate to='/auth' />
    }

    return <Outlet/>
  
}

export default ProtectedRoute