import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/authContext';

const RegisterForm = () => {

  const navigate = useNavigate();
  const {role,setRole} = useContext(AuthContext)

  const handelRegister = (e)=>{
    e.preventDefault()
    console.log('register');
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handelRegister} className='flex flex-col border border-white p-4 rounded gap-4'>
        <h1>register Form</h1>
        <input className='border border-white outline-none p-4' type="text" placeholder='user name' />
        <input className='border border-white outline-none p-4' type="text" placeholder='email' />
        <input className='border border-white outline-none p-4' type="text" placeholder='password' />
        <select 
        className='border border-white outline-none p-4' 
        name="role" 
        id="role" 
        defaultValue=""
        value={role}
        onChange={(e)=>{setRole(e.target.value)}}
      >
        {/* Removed 'selected' attribute */}
        <option className='text-black' value="" disabled hidden>Role</option>
        <option className='text-black' value="admin">Admin</option>
        <option className='text-black' value="staff">Staff</option>
        <option className='text-black' value="user">User</option>
      </select>
        <button className='bg-white p-4 font-semibold text-black'>submit</button>
      </form>
  )
}

export default RegisterForm
