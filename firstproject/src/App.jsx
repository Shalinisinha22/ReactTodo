import { useState } from "react";
import InputTask from "./Components/InputTask";
import OutputTask from "./Components/OutputTask";
function App() {
  
  const [allTasks,setAllTasks]=useState([])
  // let count=0
  const [count, setCount]=useState(0)

 const handleIncrement=()=>{
    setCount(count + 1)
  console.log("Count value is incremented",count)
 }

 const handleDecrement=()=>{
  setCount(count-1)
  console.log("Count value is decremented",count)
 }
  return (
<>
<h1>Count value is: {count}</h1>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>


<div style={{marginTop:20}}></div>

  <InputTask addTask={setAllTasks} allTasks={allTasks}/>

<div style={{marginTop:20}}></div>
  <OutputTask  allTasks={allTasks}/>


</>


  )
}

export default App
