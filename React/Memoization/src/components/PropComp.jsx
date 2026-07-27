import React from 'react'

const PropComp = ({user}) => {

    console.log('PropComp is rendering');
    

  return (
    <div>PropComp</div>
  )
}


// now isme humare React.memo break ho raha hai kyu ki isme prop aa raha hai and jo prop hai wo user hai jo ki ek object hai so now humko pata hai ki user me id nahi badlegi kabj=hi bhi so by that we can apply React,memo which will not break
//for that we have second argement in React.memo which is a callback function which accepts previous prop value and next prop value and by camparing them we can prevent re-render

// export default React.memo(PropComp)   //it will fali when any prop will be passed in the user

// export default React.memo(PropComp,(preProp,nexProp)=>{      //it is for user prop
//     return preProp.user.id === nexProp.user.id;   //so if previous state and next(updated state) me id same hai tho rerender nahi karna hai 
// })

export default React.memo(PropComp)  //it is for greet prop greet=10 kaam karega greet=[] kaam nahi karge reason App.jsx me likha hai