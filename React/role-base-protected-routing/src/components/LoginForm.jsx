import React from 'react'

const LoginForm = () => {
  return (
    <form className='flex flex-col border border-white p-4 rounded gap-4'>
        <h1>Login Form</h1>
        <input className='border border-white outline-none p-4' type="text" placeholder='email' />
        <input className='border border-white outline-none p-4' type="text" placeholder='password' />
        <button className='bg-white p-4 font-semibold text-black'>submit</button>
      </form>
  )
}

export default LoginForm
