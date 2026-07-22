import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from '../Context/MyStore';
import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosInstance';

const Users = () => {

const {apiUsers, setApiUsers} = useContext(MyStore);
const [isLoading,setIsLoading] = useState(true);

const getProductData = async ()=>{

  const res = await axiosInstance.get('/users')
  const data = res.data
  setApiUsers(data);
  setIsLoading(false);
}

useEffect(()=>{getProductData()},[])

if(isLoading) return <h1>Loading....</h1>


  return (
    <div className='grid grid-cols-4 p-8 gap-4' >
      {apiUsers.map(user => <UserCard user={user} />)}
    </div>
  )
}

export default Users