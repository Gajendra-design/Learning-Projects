import React, { useReducer, useState } from 'react'
import { useRef } from 'react'

const Form = () => {

  console.log('form rendering');
  
  
  // ya tho theeno inputs ko alag alag handel karo
  // const name = useRef(null);
  // const email = useRef(null);
  // const address = useRef(null);
  
  // ya phir keval ek variable se sab ka refrence handel karo
  const data = useRef(null)
  
  const [formData, setFormData] = useState({})
  console.log(formData);

  const handelSubmit = (e) => {
    e.preventDefault()
    const {name,email,address} = data.current;
    
    setFormData({
      name:name.value,
      email:email.value,
      address:address.value
    })


    // we can reset form from this(prefered)
    e.target.reset();

    // we can reset form from this
    // data.current.reset();

  }


  return (
    <form onSubmit={handelSubmit} ref={data} className='flex flex-col gap-4 p-4 border-white border-2 rounded-2xl'>

      {/* now yaad rakhna yaha pe humne value ko jo ki useState se hum set kar sakthe the for reseting the form nahi kiya hai kyu ki it will give this error
        You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
        and also we can't able to type in the input box also

        why?? 
        kyu ki jab me useState ka use kar rahe the tab bhi value={formData.name} tho kar rahe the par saath hi onChage se formData bhi tho update kar rahe the so iss liye huko bhram tha ki hum type kar rahe the input box me but real me kyuki setFormData chal raha tha for every change in the input so every change ke liye form re-render ho raha tha and so reult wise wo update ho raha tha and kyu ki formData bhi har re-render me update ho raha tha so input field ki value bhi and and kyu ki eith useRef hum value tho assign kar de rahe hai input me but with every change hum update nahi kar rahe hai value ko so hum kuch type nai kar paa rahe hai

        remember: useRef me hum sidhe realdom ko pakde and useState me virtual dom ko
      */}
      <input  type="text" placeholder='name' className='outline-none border border-white p-3 rounded' name='name' />
      <input  type="text" placeholder='email' className='outline-none border border-white p-3 rounded' name='email' />
      <input  type="text" placeholder='address' className='outline-none border border-white p-3 rounded' name='address' />
      <button className='bg-blue-600 p-3 rounded cursor-pointer'>Submit</button>
    </form>
  )
}

export default Form
