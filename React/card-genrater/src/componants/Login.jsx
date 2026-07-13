import React from 'react'
import { useForm } from 'react-hook-form'
import Register from './Register'

const Login = ({setIsNewUser,authSubmit}) => {

  const {register,reset,handleSubmit,formState:{errors}}=useForm()

  return (
    <div className='border border-white rounded p-4 flex flex-col items-center justify-center gap-4 mr-40'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit((data)=>{
          authSubmit(data,'login');
        })}  className='flex flex-col gap-4'>
        <input {...register('name')} className='p-3 outline-none border border-gray-500' type="text" placeholder='name' required/>
        <input {...register('email')} className='p-3 outline-none border border-gray-500' type="text" placeholder='email' required/>
        <input {...register('password')} className='p-3 outline-none border border-gray-500' type="text" placeholder='password' required/>
        <button className='p-3 border border-transparent rounded bg-blue-500 cursor-pointer'>Login</button>
      </form>
      <p>New User? <span onClick={()=>{setIsNewUser(pre=>!pre)}}  className='text-green-500 cursor-pointer'>Register here</span></p>
    </div>
  )
}

export default Login
