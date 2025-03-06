import React, { useState } from "react";

const DemoState = () => {
  // const text = "Hello world";
  // const number =1;
  // const element = <h1 className='text-red-300'>This is tag</h1>;
  // const isCheck = null;
  // const myObject = {
  //     name: "Quang Huy",
  //     age : 20,
  //     childObject:{
  //         total :100
  //     }
  // }
  // const ArrNumber = [1,2,3,4,5]
  // DEMO STATE
  const [count, setCount] = useState(1);
  // useState là một hàm bất đồng bộ là phải đợi một thời gian mới thực hiện một hành động khác
  // let counter = 10;
  const [person, setPerson] = useState({
    name: "Quang Huy",
    age: 20,
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleAddCounter = () => {
    // counter = counter +1;
    // console.log(`sau ${counter}`);
    setCount(count + 1);
    console.log(`Sau ${count + 1}`);
  };
  const handleAddAge = () => {
    // person.age = person.age +1 ;
    // console.log(person.age);
    // Cách 1
    //  setPerson(prevPerson =>({
    //   ...prevPerson,
    //   age : prevPerson.age +1
    //  }));
    // Cách 2
    setPerson({
      ...person,
      age: person.age + 1,
    });
  };
  const handleIsOpen =() =>
  {
    setIsOpen(!isOpen)
  }

  // phần tử 1 trạng thái ban đầu => string,object, arr,number,boole,null,undefine,funciton
  // phần tử hai nó lafg một hàm giúp cập nhật lại giá trị ban đầu
  // => khi giá trị ban đầu thay đổi component sẽ được render lại
  // hook giúp cập nhật lại trạng thái ban đầu  TRONG REACTJS là một trạng thÁI
  return (
    <>
      <p>Counter : {count}</p>
      <button
        onClick={handleAddCounter}
        className="border border-black bg-[#ccc]"
      >
        AddCounter
      </button>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <button
        onClick={handleAddAge}
        className="border border-black bg-gray-500"
      >
        addAge
      </button>

      <div className="mt-5">
        <button  onClick={handleIsOpen} className="border border-black bg-gray-500">{isOpen ? "Hide" : "Show"}</button>
       {
        isOpen ?
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        cupiditate veniam, iste nobis tenetur ullam debitis fugiat, ab
        voluptatibus magni, porro dolor sequi! Dicta perspiciatis enim sunt
        dolores asperiores sequi!</p> : ""
       }
      </div>
    </>
    // <React.Fragment>
    // <div>
    //   DemoState
    //   {text}
    //   {number}
    //   {element}
    //   {
    //     isCheck ? "True" : "False"
    //   }
    //   <h1>{myObject.childObject.total}</h1>
    //   <p className='text-4xl text-blue-400 bg-gra'>{myObject.name}</p>

    //    {
    //     ArrNumber.map(item => <p key={item}>{item}</p>)
    //     // sử dụng key để phân biệt các thẻ trong react khi sử dùng một vòng lặp việc sử dụng key
    //     // sẽ tạo cho nó một giá trị duy nhất
    //     // phải có một thẻ div chứa toàn bộ nội dung của thẻ html nếu không muốn có một thê div bọc tất cả
    //     // thì sẽ sử dụng thẻ <React.Fragment></React.Fragment>
    //    }
    // </div>
    // </React.Fragment>
  );
};

export default DemoState;
