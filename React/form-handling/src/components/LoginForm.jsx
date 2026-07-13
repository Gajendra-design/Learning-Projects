import React, { useState } from 'react'

const LoginForm = ({service,setIsLoggedIn,users}) => {

const [loginData,setLoginData] = useState({})


  const hadelInputChange = (e)=>{
    const {name,value} = e.target;
    const data = {...loginData,[name]:value}
    setLoginData(data)
  }  

  const handelLogin = (e)=>{
    e.preventDefault();

    const verify = users.find((user)=>{
        return (user.email === loginData.email && user.password === loginData.password)
    })

    if(!verify){
        console.log(service,"failed");
    }else{
        console.log(service,"sucess Welcome",verify.name);
    }
    
  }  

  return (
    <div className='p-4 flex flex-col gap-4 items-center'>
        <h1>Login</h1>
        <form onSubmit={handelLogin} action="" className='border border-white p-4 rounded-xl flex flex-col gap-4'> 
        <input onChange={hadelInputChange} className='border border-white rounded p-2' type="email" name='email' placeholder='email' required />
        <input onChange={hadelInputChange} className='border border-white rounded p-2' type="password" name='password' placeholder='password' required />
        <button className='bg-green-700 rounded p-2'>Login</button>
    </form>
    <p>New User? <span className='cursor-pointer text-green-700' onClick={()=>{setIsLoggedIn(prev=>!prev)}}>Login</span></p>
    </div>
  )
}

export default LoginForm