import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import LifecycleExample from "./components/LifecycleExample";
// import DemoSetInterval from "./components/DemoSetInterval";
import DemoEventListener from "./components/DemoEventListener";
import ListCategory from "./components/Product/ListCategory";
import Todo from "./components/Todos/Todos";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <LifecycleExample /> */}
      {/* <DemoSetInterval/> */}
      {/* {count % 2 === 0 && <DemoEventListener />}
      <button onClick={() => setCount(count + 1)}>Add Count {count}</button>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ut
        sapiente quod necessitatibus non quis saepe adipisci incidunt suscipit
        ab consequatur id consectetur ullam cumque, optio molestiae dolor
        reprehenderit deserunt. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Omnis officiis corrupti magni magnam explicabo eveniet
        ea architecto animi mollitia, ipsum, consectetur distinctio dignissimos
        deserunt. Sunt ut magni excepturi non corrupti!
      </div> */}
      {/* <ListCategory/> */}
      <Todo/>
    </>
  );
}

export default App;
