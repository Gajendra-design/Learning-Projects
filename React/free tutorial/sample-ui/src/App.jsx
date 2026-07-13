import React, { useState } from 'react'

const App = () => {
const [count,setCount] = useState(0)
// localStorage.clear()
let localCount = localStorage.getItem('count')||0;
  return (
    <div>
      <h1>Count: {localCount}</h1>
      <button onClick={()=>{
        setCount(count+1);
        localStorage.setItem('count',count)
        localCount = Number(localStorage.getItem('count'))
        console.log('state',count)
        console.log('lcal',localCount);
        
      }}>Increase</button>
    </div>
  )
}

export default App
