import { useState } from 'react'
import './App.css'
import DemoState from './components/DemoState';
import ParentComponent from './components/DemoProps/ParentComponent';
function App() {

  return (
    <>
       {/* <DemoState/> */}
       <ParentComponent/>
    </>
  )
}

export default App
