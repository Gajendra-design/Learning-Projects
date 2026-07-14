import React, { useEffect } from 'react'

const SetInterval = () => {

    console.log("SetInterval Component is rendering");
    
    // handeling memory leak
    const interval = setInterval(()=>{console.log("set interval running");
    },2000)


    useEffect(()=>{return ()=>{clearInterval(interval)}},[])

    
  return (
    <div>
      Set Interval Component
    </div>
  )
}

export default SetInterval
