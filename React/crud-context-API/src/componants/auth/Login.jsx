import React, { useContext } from 'react'
import { UserStore } from '../../context/userStore';
import { useForm } from 'react-hook-form';

const Login = ({handelAuth}) => {

    const {register,handleSubmit,reset,formState:{errors}} = useForm({mode:"onChange"});
    const {setIsNewUser} = useContext(UserStore);

  return (
    <div className='flex flex-col gap-6 items-center justify-center p-6 text-white w-full max-w-md mx-auto'>
  <h1 className='font-bold text-2xl tracking-wide text-gray-100'>Login Form</h1>
  
  <form onSubmit={handleSubmit((data)=>{handelAuth(data,"login")})} className='w-full flex flex-col gap-6 p-8 bg-gray-900/40 border border-gray-700/60 rounded-xl shadow-xl backdrop-blur-sm outline-none'>
    <div className='flex flex-col gap-5'>
      
      {/* Email Input */}
      <div className='flex flex-col gap-2 items-start w-full'>
            <label htmlFor="email" className='text-sm font-medium text-gray-300 tracking-wide'>Email</label>
            <input
              {...register("email",{
                required:"Email is required",
                pattern:{
                  value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:"please enter a Valid Email"
                }
              })}
              className='w-full bg-gray-800/80 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-500 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              type="email"
              placeholder='name@example.com'
              id='email'
            />
            {errors.email && (<span className='text-xs font-medium text-red-500 tracking-wide mt-0.5 animate-fadeIn pl-1'>
              {errors.email.message}  
            </span>)}
          </div>

      
      {/* Password Input */}
      <div className='flex flex-col gap-2 items-start w-full'>
            <label htmlFor="password" className='text-sm font-medium text-gray-300 tracking-wide'>Password</label>
            <input
              {...register("password",{
                required:"Password is required",
                pattern:{
                  value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                  message:"Password must be of 8 to 20 chars with uppercase, lowercase, number, & special character."
                }
              })}
              className='w-full bg-gray-800/80 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-500 transition outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
              type="password"
              placeholder='••••••••'
              id='password'
            />
            {errors.password && (<span className='text-xs font-medium text-red-500 tracking-wide mt-0.5 animate-fadeIn pl-1'>
              {errors.password.message}  
            </span>)}
          </div>
    </div>

    {/* Actions */}
    <div className='flex flex-col gap-4 mt-2'>
      <button className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold p-3 rounded-lg transition-all shadow-md active:scale-[0.99] outline-none'>
        Login
      </button>
      <p className='text-sm text-gray-400 text-center'>
        New User?{' '}
        <span onClick={()=>{setIsNewUser(pre=>!pre)}} className='font-semibold text-blue-400 hover:text-blue-300 cursor-pointer transition-colors hover:underline underline-offset-4'>
          Register
        </span>
      </p> 
    </div>

  </form>
</div>
  )
}

export default Login
