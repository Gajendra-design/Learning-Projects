import React from 'react'
import { useForm } from 'react-hook-form'

const Register = ({setIsNewUser,authSubmit}) => {
  let {register,reset,handleSubmit,formState:{errors}} = useForm();
  
  
  
  return (
    <div className='border border-white rounded p-4 flex flex-col items-center justify-center gap-4 mr-40'>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit((data)=>{
        authSubmit(data,'register')
      })} className='flex flex-col gap-4'>
        <input {...register('name')} className='p-3 outline-none border border-gray-500' type="text" name='name' placeholder='name' required/>
        <input {...register('email')} className='p-3 outline-none border border-gray-500' type="text" name='email' placeholder='email' required/>
        <input {...register('password')} className='p-3 outline-none border border-gray-500' type="text" name='password' placeholder='password' required/>
        <button className='p-3 border border-transparent rounded bg-green-500 cursor-pointer'>Register</button>
      </form>
      <p>Already Registerd User? <span onClick={()=>{setIsNewUser(pre=>!pre)}} className='text-blue-500 cursor-pointer'>Login here</span></p>

    </div>
  )
}

export default Register
