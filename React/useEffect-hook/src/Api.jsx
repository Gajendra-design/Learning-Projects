import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    console.log("Api Component is rendering");

    const [apiData, setAdpiData] = useState(null)
    console.log("api data",apiData);
    

    // //infinite function calling loop
    // async function dataFectching(){
    //     const data = await axios.get('https://jsonplaceholder.typicode.com/users') 
    //     console.log(data.data);
    //     return data.data;

    //     //because ye rerender karega dom ko react me so jese hi ye rerender hoga tho wapis dataFetching funciton chalega so iske karan phir se useState set hogi so iss liye te infinite calling me jayega 
    //     setAdpiData(data.data);
    // }

    // const data = dataFectching();
    // setAdpiData(data)

    //for the soluton of infinite funciton calling we have to use useEffect jismedependeci [] hogi and iska matlab iske callback funciton me jo bhi code hoga wo ek baar hi run hoga chahe kitni bhi bar re-render ho
    
    async function dataFectching() {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users');
            setAdpiData(data.data)
        }

    useEffect(()=>{dataFectching()},[])

    
  return (
    <div>
      Api
    </div>
  )
}

export default Api
