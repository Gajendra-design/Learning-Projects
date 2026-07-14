import React, { useContext } from 'react'
import Register from './Register'
import Login from './Login'
import { UserStore } from '../../context/userStore'
import { FunctionStore } from '../../context/FunctionalStore'

const Auth = () => {
  const {isNewUser} = useContext(UserStore);
  const {handelAuth} = useContext(FunctionStore)
  

  return (
    <div className='grow flex justify-center items-center text-white'>
        {isNewUser?<Register handelAuth={handelAuth}/>:<Login handelAuth={handelAuth}/>}
    </div>
  )
}

export default Auth