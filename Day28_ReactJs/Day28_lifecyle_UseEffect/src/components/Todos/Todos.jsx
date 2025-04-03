import React, { useState } from "react";
import apiServiceTodo from './../../ApiServices/ApiTodo';

const Todo = () => {
  const [fromData,setFormata] = useState({
    title: "" ,
    status : ""
  })
  const handleChange = (e) => {
    const {value,name} = e.target ;
      console.log(e,"huy");
      setFormata({
        ...fromData,
        [name] :value,

      })
  };
  const handleAddToDo = async () =>
  {
    const res = await apiServiceTodo.apiPostTodo(fromData);
    console.log(fromData);
    console.log(res,"resresres");

  }
  return (
    <div className="w-[300px] m-auto border-2 border-red-200 p-[10px]">
      <input name="title" onChange={handleChange} type="text" placeholder="Nhập Công Việc" />
      <div className=" flex items-center gap-3">
        <input
          onChange={handleChange}
          type="radio"
          name="status"
          id=""
          value="todo"
        />{" "}
        Todo
        <input
          onChange={handleChange}
          type="radio"
          name="status"
          id=""
          value="done"
        />{" "}
        Done
        <input
          onChange={handleChange}
          type="radio"
          name="status"
          id=""
          wait="todo"
        />{" "}
        Wait
      </div>
      <button onClick={handleAddToDo} className="border-1 border-gray-500 bg-gray-400 opacity-80 rounded-[5px ]">
        Thêm
      </button>
      <div className="flex gap-5 border-2 border-red-400 p-[10px] mt-[10px]">
        <div>Công Việc 1</div>
        <div>Todo</div>
        <div>
          <button className="border-1 border-gray-500 bg-gray-400 opacity-80 rounded-[5px ]">
            Xóa
          </button>
          <button className="border-1 border-gray-500 bg-gray-400 opacity-80 rounded-[5px ]">
            Sửa{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
