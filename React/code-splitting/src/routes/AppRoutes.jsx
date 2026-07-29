import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import App from '../App'
import { getUsersData } from '../api/userApi'

// now agar humne ye simple import kiye tho on intital page load ye dono about and contact bhi browser ke andar load honge and abhi tho ye application choti hai tho humko koi farak nahi padega par a=maan lo ki agar hamari application bhout badi hai and 100 pages hai usme tho uss samay agar intial load pe hi sare 100 pages load hue tho hamari application ka initial run time jo hai wo bhout jayda hoga and it will be a problem and for soving that prolem we have concept named codesplitting

// import About from '../Pages/About'
// import Contact from '../Pages/contact'

//now in code splitting hum initial load me utni hi chize dikhate hai jitni cheejo ki humko need hai baaki ko hum nahi dikathe hai isse hamara initial laod time kam hota hai jo ki bhout important hai for that we use lazy hook in react ye hamare import ko ek promice me badal deta hai and usko tab resolve kartha hai jab uski jarurat hoti hai and remeber React.memo hum rerender ke liye use karthe hai ki unnecesery rerender of child component na ho and lazy hook ka jab tak uss imported component ki need nahi hai tab tak use mat karo usko iske liye

//yaha callback me implicit returen ho raha hai dhyan rakhhna 
let About = lazy(() => import('../Pages/About'))
let Contact = lazy(() => import('../Pages/Contact'))

//hum lazy hook ko keval react ke funcitonal component ke liye hi use kar r=sakthe hai or kisi ke liye kiya tho error aayega
// let getUsersData = lazy(()=>import('../api/userApi'))

//ab lazy hook ke saath ek or cheej hai jo ki keval usi ke saath kaam karthi hai jo ki hai suspence iska matlab maan lo about me humne lazy hook use kiya hai and humne usme kuch crazy kar rakha hai and uske karan who thodat time lega load hone me so hum usko suspence me daal sakthe hai and usme aata hai ek fallback ciew jo ki tab tak dikhta hai jab tak hamara about view puri tharh aready na ho gaya ho

//ek or tagdicheej hai react-router me jo ki hum kar sakthe hai now maan lo ki humko kisi comonent ko load karnahai and hum uss component me koi api call kar rahe hai and phir uska data wha pe show karwa rahe hai eho uske liye abhi tak tho hum kya kar rahe the ki uss api ko hum log call kar rahe the usi component me and useEffet and useStte wagerah ka use karke data ko dave karwake hum load karwa rahe the but hum bol rahe hai ki nahi humko tho preloaded data hi ready karke bhejna hai component me wha pe data ko lane ki bhasad nahi karni tho ye bhi hum kar sakthe hai by using loader propert in react-router and yaad rakhna jab ye hum lagayege tho jab jak ki hamara data ready nahi hota tab tak ke loye humko ek fallback view provide karna hota hai which is a good practice and who hota hai hydrateFallbackElement

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <App />
                },
                {
                    path: 'about',
                    //yaad rakhna suspence ko keval lazy hoook ke saath hi use kar sakthe hai
                    element: <Suspense fallback={<h1>loading......</h1>} >
                                <About />
                             </Suspense>,
                    //now humko isme kuch data api se leke phale hi ready karwake bhejna hai tho uske liye loade and uske fallback view ke liye hydrateFallbackElement
                    loader:getUsersData,
                    hydrateFallbackElement:<h1>loading users data......</h1>
                },
                {
                    path: 'contact',
                    element: <Contact />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes