import { useState } from "react";

import "./App.css";
import LifecyleExample from "./components/LifecyleExample";

function App() {
  const[toggle,setToggle] = useState(true);
  return (
    <>
    <button onClick={() =>setToggle(!toggle)}>
      {toggle ? "Hide" :"Show"}{""}
    </button>
      {
        toggle && <LifecyleExample/>
      }
    </>
  );
}

export default App;
