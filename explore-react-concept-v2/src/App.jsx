import { useState } from 'react'
import './App.css'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)
  // 1. using normal function
  function handleClicked() {
    alert('button clicked')
  }
  const adToFive = (number) => {
    alert(number + 5);
  }

  // 2. using arrow function
  const handleClicked2 = () => {
    alert('button clicked')
  }
  // 2. using inline arrow function : line 20
  // if I declear adToFive(3) function direct onclick button it will direact call to the function. Rather than to onclick apply inside a arrow function Or wrap with arrow function
  return (
    <>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Click Me 2</button>
      <button onClick={() => { alert('Third clicked') }}>Click Me 3</button>
      <button onClick={() => adToFive(3)}>Click Me 4</button>
    </>
  )
}

export default App
