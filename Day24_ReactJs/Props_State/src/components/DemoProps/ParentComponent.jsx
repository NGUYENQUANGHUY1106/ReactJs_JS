import React from "react";
import ChildComponent from "./ChildComponent";
import MyButton from "./myButton";
import MyButton1 from './MyButton1';
const ParentComponent = () => {
  const handlebtn1 = () =>
  {
    alert("Hi")
  }
  const handleSubmit = () => {
    alert("Xin Chào Nguyễn Quang huy");
  };
  const handleLogin = () => {
    alert("Xin Chào Nguyễn Quang huy");

  };
  const handleResgister = () => {
    alert("Xin Chào Nguyễn Quang huy");

  };
  
  return (
    <div>
      <h1>Hello Everyone</h1>
      <ChildComponent name="Quang Huy" age="20" />
      <MyButton title="Submit" classs="btn-submit" onclick={handleSubmit} />
      <MyButton title="Login" classs="btn-login" onclick={handleLogin} />
      <MyButton
        title="Resgister"
        classs="btn-resgister"
        onclick={handleResgister}
      />
      <hr />
      <MyButton1 classs ="btn-button1-submit" onclick={handlebtn1}>
        <span>Submit</span>
      </MyButton1>
    </div>
  );
};

export default ParentComponent;
