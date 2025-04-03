import React from 'react'
import { useEffect, useState } from 'react';

const DemoSetInterval = () => {
    const [count,setCount] = useState(0);
    useEffect(() =>
    {
      const interval =  setInterval(() =>
       {
          console.log(count);
       },1000);
    console.log(interval,"123");
       return () =>
       {
        console.log(interval,"456");
        clearInterval(interval);
       }
    },[count])
  return (
    <div>
      <button onClick={() => setCount(count+1)}>AddCount</button>
    </div>
  )
}

export default DemoSetInterval
