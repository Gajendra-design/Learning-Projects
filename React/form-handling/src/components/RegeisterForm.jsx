import React, { useState } from 'react'

const RegeisterForm = ({setIsLoggedIn,setUsers}) => {

const [registrationData,setRegistrationData] = useState({
    name:"",
    email:"",
    password:""
})

const handelInputChange = (e)=>{
    const {name,value} = e.target;

    const data = {...registrationData,[name]:value}
    setRegistrationData(data);
    
}

const handelRegister = (e)=>{
    e.preventDefault();

    // if()

    setUsers(prev=>[...prev,registrationData])

    setRegistrationData({
        name:"",
        email:"",
        password:""
    })

    //besides 2-way binding we can use this also forthiswe don't have to use value in input and set formData to blank
    // e.target.reset();
    
}

  return (
    <div className='p-4 flex flex-col gap-4 items-center'>
        <h1>Register</h1>
        <form onSubmit={handelRegister} action="" className='border border-white p-4 rounded-xl flex flex-col gap-4'> 
        <input value={registrationData.name} onChange={handelInputChange} className='border border-white rounded p-2' type="text" name='name' placeholder='name' required/>
        <input value={registrationData.email} onChange={handelInputChange} className='border border-white rounded p-2' type="email" name='email' placeholder='email' required />
        <input value={registrationData.password} onChange={handelInputChange} className='border border-white rounded p-2' type="password" name='password' placeholder='password' required />
        <button className='bg-blue-700 rounded p-2'>Register</button>
    </form>
    <p>Already registered? <span className='cursor-pointer text-blue-700' onClick={()=>{setIsLoggedIn(prev=>!prev)}}>Login</span></p>
    </div>
  )
}

export default RegeisterForm