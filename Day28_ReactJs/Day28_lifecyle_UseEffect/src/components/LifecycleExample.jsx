import React, { useState, useEffect } from "react";
const LifecycleExample = () => {
  const [count, setCount] = useState(0);
  const  handleCount = () =>
  {
     setCount(count+1);
  }
  useEffect(() => {
    // some logic
    console.log("count", count);
    return () => {
      console.log(`Clean up running , count is ${count}`);
    };
  }, [count]);
  return (
    <div>
      <button onClick={() => handleCount()}>Add Count </button>
    </div>
  );
};

export default LifecycleExample;
