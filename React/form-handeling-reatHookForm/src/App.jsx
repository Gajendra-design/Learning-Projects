import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  console.log("rendering");
  
  let {register,handleSubmit,reset,formState:{errors}} = useForm({
    mode:"onChange"
  });
  console.log(errors);


const formSubmit = (data)=>{
  console.log(data);
  reset();
}


  return (
    <div className='h-screen bg-black text-white flex justify-center items-center'>
      <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-4 p-4 border border-white rounded-2xl'>

      <div className='flex flex-col'>
        <input {...register("name",{
        required:"name is require",
        pattern:{
          value: /^\p{L}[\p{L}'\- ]*$/u,  
          message:"not a valid name"
        }
      })} className='p-3 outline-none border border-gray-300 rounded' type="text" name='name' placeholder='name' />
      {errors.name&&<span className='text-red-600'>{errors.name.message}</span>}
      </div>

      <div className='flex flex-col'>
        <input {...register("email",{
        required:"email is required",
        pattern:{
          value:/^[^@\s]+@[^@\s]+\.[^@\s]+$/,
          message:"not a valid email"
        }
      })} className='p-3 outline-none border border-gray-300 rounded' type="text" name='email' placeholder='email'/>
      {errors.email&&<span className='text-red-600'>{errors.email.message}</span>}
      </div>

      <div className='flex flex-col'>
        <input {...register("mobile",{
        required:"mobile no is required",
        minLength:{
          value:10,
          message:"must be at leat 10 digit number"
        },
        maxLength:{
          value:10,
          message:"can not be more then 10 digits"
        }
      })} className='p-3 outline-none border border-gray-300 rounded' type="tel"  name='mobile' placeholder='mobile'/>
      {errors.mobile&&<span className='text-red-600'>{errors.mobile.message}</span>}
      </div>

      <button className='p-3 border rounded font-bold bg-blue-700'>Submit</button>  
    </form>
    </div>
  )
}

export default App