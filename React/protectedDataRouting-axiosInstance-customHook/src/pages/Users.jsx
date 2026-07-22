import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from '../Context/MyStore';
import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosInstance';
import { useApi } from '../hooks/useApi';

const Users = () => {

const {isLoading,data} = useApi('/users')

if(isLoading) return <h1>Loading....</h1>


  return (
    <div className='grid grid-cols-4 p-8 gap-4' >
      {data.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  )
}

export default Users