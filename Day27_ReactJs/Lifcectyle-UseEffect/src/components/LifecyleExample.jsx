import React, { useEffect, useState } from "react";

const LifecyleExample = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  useEffect(() =>{
    //logic code 
    // call API
    // return () =>
    // {
      console.log("Render Components");
    //   setCount(count +1);
    // }
  },[count])
  return (
    <>
    <div>===============================</div>
      <div>
        This is : {count} <br />{" "}
      </div>
      <button
        className="text-[16px] border border-gray-400 px-3 py-2 bg-red-400 text-white rounded-[10px]"
        onClick={handleAdd}
      >
        Add
      </button>
    </>
  );
};

export default LifecyleExample;
