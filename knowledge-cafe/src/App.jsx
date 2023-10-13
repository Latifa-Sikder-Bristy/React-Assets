import { useState } from 'react'
import Header from './Components/Header/header'
import Blogs from './Components/Blogs/blogs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
