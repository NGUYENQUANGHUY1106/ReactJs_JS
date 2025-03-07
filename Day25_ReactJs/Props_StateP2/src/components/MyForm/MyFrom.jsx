import React, { use, useState } from "react";

const gender = document.querySelectorAll("[type ='radio'][name ='gender']");
console.log(gender.value);

const MyFrom = () => {
  const [valUserName, setValUserName] = useState("");
  const [valPassWord, setPassWord] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChangeUserName = (e) => {
    let valUserName = e.target.value;
    setValUserName(valUserName);
  };
  const handleChangePassWord = (e) => {
    let valPassWord = e.target.value;
    setPassWord(valPassWord);
  };
  const [gender, setGender] = useState("");
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  console.log(gender);
  const handleAdd = () => {
    console.log("Quang Huy");
    const itemTodos = {
      id: Date.now(),
      userName: valUserName,
      passWord: valPassWord,
      gender: gender,
      isNote : false
    };
    setTodos([...todos, itemTodos]);
    setValUserName("");
    setPassWord("");
  };
  const handleRemove = (id) =>
  {
    console.log(id,"QuangHUy");
    const updateTodos = todos.filter(item => item.id !== id)
    setTodos(updateTodos)
  }
  const handleDone = (id) =>
  {
    const UpdateNote = todos.map(item =>
      {
        return {
          ...item,
          isNote : !item.isNote,
          id
        }
        
      });
      setTodos(UpdateNote);
  }
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="text-[40px] font-serif ;">Information User</h1>
        </div>
        <div className="mx-5">
          <input
            type="text"
            onChange={handleChangeUserName}
            className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="UserName"
            required
          />
          <input
            type="password"
            onChange={handleChangePassWord}
            className="mt-3 bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="PassWord"
            required
          />
          <div className="flex items-center gap-3 justify-center mt-3">
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              value="Nam"
            />{" "}
            Nam
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              value="Nữ"
            />{" "}
            Nữ
          </div>
        </div>
        <div className="flex  items-center justify-center mt-3">
          <button
            type="button"
            onClick={handleAdd}
            className="text-white bg-blue-700 mx-5   hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
        {todos.map((item) => {
          return (
            <div className="mx-5 flex items-center justify-between">
              <div>
                <p key={item.id} className={`${item.isNote ? "font-bold text-red-500 line-through" : ""}`}>{`UserName : ${item.userName}`}</p>
                <p>{`PassWord : ${item.passWord}`}</p>
                <p>{`Giới Tính : ${item.gender}`}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>handleRemove(item.id)}
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() =>handleDone(item.id)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  {item.isNote ? "NoNote" : "Note"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyFrom;
