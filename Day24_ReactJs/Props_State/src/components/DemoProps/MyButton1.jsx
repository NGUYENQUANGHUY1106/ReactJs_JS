import React from "react";

const MyButton1 = (props ) => {
  console.log(props);
  const { children, classs, onclick } = props;
  return (
    <button
      className={`border-black border bg-gray-300 cursor-pointer ${classs}`} onClick={onclick}
    >
        //children là chứa thông tin html của đoạn đó
        // sau children là sẽ nhưng thông tin đối tượng thuộc tính của thẻ đó 
      {children}
    </button>
  );
};

export default MyButton1;
