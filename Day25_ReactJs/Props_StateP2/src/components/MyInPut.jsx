import React from "react";

const MyInPut = (props) => {
    console.log(props);
    const {...rest} = props
  return (
    <div className="mx-5">
      <p className="text-center block text-gray-700 text-sm font-bold mb-2">Thực Hành</p>
      <label>Todo List</label>
      <div className="flex gap-3 items-center  ">
        <input
         {...rest}
        ></input>
      </div>
    </div>
  );
};

export default MyInPut;
