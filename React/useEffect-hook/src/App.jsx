import React, { useState } from 'react'
import Toggel from './Toggel';
import SetInterval from './SetInterval';
import Api from './Api';

const App = () => {

  const [toggel, setToggel] = useState(true);
  console.log("App rendering");
  

  return (
    <div>
      App
      <p onClick={()=>{setToggel(pre=>!pre)}}>Toggel this element</p>
      {toggel?<Toggel/>:<SetInterval/>}
      <Api/>
    </div>
    
  )
}

export default App