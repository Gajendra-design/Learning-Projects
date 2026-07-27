import React from 'react'

const Home = () => {
    console.log('home is rendering');
    
  return (
    <div>Home</div>
  )
}


// now hamara jo React.memo hai wo use aata hai keval functional component ke liye yaad rakhne functonal component ke liye isme maanlo ki parent state ke koi useState hai jo ki update hua hai tho wo jo hai kudh e saath usmekitne child funcitonal component hai unko rerender karega now maan lo ki usme kai child ese hai jo ki static hai and unke parent me jo state update ho raha hai usse unpe koi effect nahi padega unko tho vese ki vese dikhana hai so for that reason usko rerender karne ka koi matlab nahi banta hai ab agar hum wo rerender bacha paye tho isse hamari performence sudregi so for that we can use memoization called React.memo it prevents unnecesary rerender of static funcitonal comonent in ui

// without React.memo it will rerender when App.jsx will rerender because it is a child of App.jsx
// export default Home

// with React.memo it will prevent unneceray rerender
export default React.memo(Home)