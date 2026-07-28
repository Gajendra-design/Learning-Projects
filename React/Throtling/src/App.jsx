import React, { useEffect, useRef, useState } from 'react'
import Home from './Home';

const App = () => {
// 1. Normal let ki jagah useRef use karo
  const trottel = useRef(true);

  useEffect(() => {
    const scrollFun = () => {
      // Agar door band hai (trottel.current === false), toh aage mat jao
      if (!trottel.current) {
        return;
      }

      // 2. Door ko TURANT band kar do
      trottel.current = false;

      // 3. Main kaam karo
      console.log('scroll func is running');

      // 4. 2 second (2000ms) baad door ko WAPAS KHOLO
      setTimeout(() => {
        trottel.current = true;
      }, 2000);
    };

    window.addEventListener('scroll', scrollFun);

    return () => window.removeEventListener('scroll', scrollFun);
  }, []);



  return (
    <>
    <div>
      <h1>Throtling</h1>
      <br /><br />
      <p>throtilng ka matabl humne kuch function chalaya hai jo ki kuch time baad chalega and wo ab sab chijo se in-dependent hai matlab chahe kuch ho jaye ab wo certain time ke baad hi chalega</p>
      <br /><br />
      <p>examples of this is:</p>
      <br />
      <p>1. live location sharing ismethrotling and deboncingdono mix concept lagthe hai</p>
      <p>2. scoll animations me</p>
      <p>3. live chat me jo delay lagtha hai usme</p>
      <br /><br /><br />
      <p>scroll karo and console me dekho</p>
    </div>
    <Home/>
    </>
  )
}

export default App