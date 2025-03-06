import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header_Marketing/Header'
import Discover from './Components/Discover/Dicover'
import Trending from './Components/trending_collection/Trending'
function App() {

  return (
    <div className='wrap w-[1280px] mx-auto '>
      <Header/>
      <Discover/>
      <Trending/>
    </div>
  )
}

export default App
