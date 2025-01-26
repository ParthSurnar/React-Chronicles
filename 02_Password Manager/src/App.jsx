import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
    <Manager />
    </>
  )
}

export default App
