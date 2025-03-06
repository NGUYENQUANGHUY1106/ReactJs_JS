import React, { useState } from "react";
// import MyInPut from "../MyInPut";

const MyToDo = () => {
  const [valTitle, setValTitle] = useState("");
  const [todos,setTodos] = useState([])
  const handleChange = (e) => {
    const value = e.target.value;
    setValTitle(value);
  };
  console.log(valTitle, "qhuy");
  const hanldeAddTodo = () => {
    console.log(valTitle, "jfhbbfh");
    const itemTodo = {
    id :Date.now(),
    title :valTitle,
    isDone :  false
    }
    setTodos([...todos,itemTodo]);
    setValTitle("");
  };
  console.log(todos, "kđk");
  const handleRemoveTodo = (id) =>
  {
    console.log(id,"jhbhbfh");
    const updateTodos = todos.filter(item => item.id !== id)
    setTodos(updateTodos);
  }
  const handleDone = (id) =>
  {
    console.log(todos);
    const updateTodos = todos.map((item) =>
      {
        if(item.id === id)
        {
          return {
            ...item,
            isDone : !item.isDone,
            id
          }
        }
        return item
      });
      setTodos(updateTodos)
  }
  return (
    <>
      <div className="mx-5">
      <div className="flex items-center gap-2 ">
        <input
          className="shadow w-full mt-3  appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Add_ToDo"
          type="text"
          placeholder="Add ToDo"
          name="title"
          onChange={handleChange}
          value={valTitle}
        />
        <button
          onClick={hanldeAddTodo}
          disabled = {!valTitle}
          className={`${valTitle ? "bg-blue-500 hover:bg-blue-700 " :   "bg-slate-300"} mt-3 py-[6px] px-2 bg-blue-500  text-white font-bold border border-blue-700 rounded  `}
        >
          Add
        </button>
      </div>
        {
          todos.map (item=>{
            return (
              <div key={item.id} className="pt-3 mt-5 ">
              <div className="flex items-center justify-between">
                <p className={`${item.isDone ? "line-through" : ""}`}>{item.title}</p>
                <div>
                  <button
                    type="button"
                    onClick={() => handleDone(item.id)}
                    className="bg-red-500 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {item.isDone ? "NotDone" : "Done"}
                  </button>
      
                  <button
                    type="button"
                    onClick={() =>handleRemoveTodo(item.id)}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-yellow-300-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  );
};

export default MyToDo;
