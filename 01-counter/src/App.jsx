import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  
  const addValue = ()=>{
    if(count < 30){
      setCount(count + 1)
    }
  }

  const decValue = () => {
    if( count > 0){
      setCount(count - 1)
    }
  }
  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {count}</h2>
      <h3>The counter value will be between 0 -30</h3>
      <br />
      <button onClick={addValue}>Increase Value </button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
