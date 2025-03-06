import React, { useState } from "react";
import MyButton from "../MyButton";
import RenderCount from "./RenderCount";

const Counter = () => {
    const [count,setCount] = useState(0)
    const handleIncrement = () =>
    {
        setCount(count +1);
        console.log(count);
        console.log("1234");
    }
    const handleDecrement = () =>
    {
        setCount(count-1);
        console.log("Decrement");
    }
    const handleReset = () =>
    {
        console.log(count);
        setCount(0)
      console.log("reset");
    }
  return (
    <div className="text-center">
      
        <h1 className="text-4xl font-bold">Counter</h1>
        <RenderCount count = {count}/>
        <div className="flex  justify-center items-center">
          <MyButton type="button" bg="bg-blue-700" onClick = {handleIncrement}>
            Increment
          </MyButton>
          <MyButton disabled={count === 0} type="button" bg= {`${count ? "bg-green-700" : "bg-slate-400"}`} onClick = {handleDecrement}>
            Decrement
          </MyButton>
          <MyButton disabled = {count=== 0} type="button" bg={`${count ? "bg-red-700" : "bg-slate-400"}`} onClick = {handleReset} >
            Reset
          </MyButton>

          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Decrement
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Increment
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Reset
          </button> */}
        </div>
      
    </div>
  );
};

export default Counter;
