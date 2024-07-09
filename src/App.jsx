import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <button className="bg-red-300" onClick={()=>setCount(count + 1)}>
       count =  {count}
      </button>
    </>
  )
}

export default App
