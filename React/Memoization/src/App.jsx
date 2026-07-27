import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import PropComp from './components/PropComp'


const App = () => {

  console.log('app is rendering')

  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: 'gaju', id: 123 })

  // const greet = 10   //isme re-render nahi hoga component jab isko as a prop pass karege in a funcitonall component where we are using React.memo reason ye premitive data hai so rerender pe iska memory location change nahi hoga so uss liye ye React.memo ko break nahi karega

  //par agar humne refrence variable pass kiye hai as a prop in fincitonal component then ye break karege React.memo ko kyu ki jab bhi parent component re-render hoga tho inn refrence varibale ko naya address asign hoga and in prop wo usko nayi value hi manega so React.memo will break and also remember ki ye matter nahi kartha hai ki humne uss prop ko child component me use kiya hai ya nahi
  // const greet = [] 
  // const greet = {}


  //now now by the same logic funciton is also a refrence varibale so if we are passing function as a prop then also it will become problem now there are 2 senarios in the fucntions here either it is returning something or it is not returing something

  //case 1: function is pure meaning it is not returing somethong 
  //for that cas we have a hook called useCallback for memoization of that funcitona address so iska syntax bhi useEffect ki tharh hi hota hai one argument is for callback fucntion and another is for dependeci array ab ye uss funciton ke address ko memorize kar lega and in rerender uska address change nahi hoga so jaha pe bhi usko hum prop ki tharah bhejege wo rereder nahi hoga because of useCallback and React.memo

  const greet = useCallback(()=>{
    console.log('greeting');
  },[])

//case 2: humkofunciton ka refrence nahi balki funcitn kuch return kar raha hoga usko store arwana hai tho uske liye ek hook hota jai which is useMemo iska syntext bhi same useEffect ke jesa hi hai
//now iska use tabkarna jab koi heavy calculation ho raha hofucniton me and usko return karna ho ja phir ek live example hai jisme a=humko add to cart me total sum nikalna hai uake liye hum callback fucntion useMemo me pass karke dependecy CartItem array rakh dege so jab bhi cartItem array me change hoga keval tab hu totalSum fuctionn chalega total sum ko calculate karne ke liye

const calculation = useMemo(()=>{
  let sum=0;
  //heavy calculation we are using useMemo so huki keval first render pe hi ye calculation karni pade re-render pe ye fucntion naho chalega and empty depedenci hai so ye kisi pe depend nahi hai wapis chalne ke liye
  for(let i=0;i<10000000;i++){
    sum+=i;
  }
  return sum;
},[])

  //now remeber funciton ka refrece hold karna hai tho usCallbak hook ka use karege funciton jo rturn kar raha hai usko hold karna hai tho usMemo hook ka use karege and funcitonal coponent ka refrece hold karna hai tho React.mom use karna hai and inn sab ke secound aruments yaad rakhne hai

  



  return (
    <>
      <div>App</div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>

      {/* we have used REact.memo on home so it will not rerender unnecessery but about will */}
      <Home />
      <About />


      {/* case 1 */}
      {/* now there is one rule in React.memo which is ye kewal static components pe hi work kartha hai matlab ki maan lo ki agar humen koi prop pass kara kisi child fucntional component me tho wha pe React.memo hug dega chahe humne wo prop child me ise kiya ho ya na kiya ho*/}

      {/* jese ab agar home me humen prop pass kia tho React.memo hug dega */}
      {/* <Home count={count} /> */}

      {/* case 2 */}
      {/* now ek or intersting cheeze hai React.memo me wo hai ki maan ko hum propComp me bhi React.memo ka use kar rahe hai and usmehum user ko as a prop bhej rahe hai tho jab user update hoga tho phit App rerender hoga and kyuki PropComp mehumne prop bheja hai tho wha pe React.memo fail ho jayega but let's say humko pata hai ki jitni bhi bar user update hoga tho id same hi rehne wali hai so iss infose hum still React.memo ko work karwa sakthe hai in PropComp */}

      <h1>{user.name}</h1>
      <button onClick={() => { setUser(pre => { return { ...pre, name: 'sunil' } }) }}>
        Change Name
      </button>

    {/* jab hum count ki incres karege tho ye rerender nahi hoga but jab hum user koupdate karege tab ye rerender hoga but we can prevent that andwe are assuming that id will not change in any update of user */}
      {/* <PropComp user={user} /> */}

{/* greet=10 rerender nahi hoga greet=[] rerender hoga */}
      {/* <PropComp greet={greet} />       */}

      {/* when we are passing greet in useCallback as funciton */}
    <PropComp greet={greet} />

{/* calculate function will run only one time at initial render because of useMemo ab agar usme hum dependecy rakh dete user ki tho jab user change hoga tab hi calculation wala funciton chalega */}
    <h1>calculation is {calculation}</h1>  


    </>
  )
}

export default App