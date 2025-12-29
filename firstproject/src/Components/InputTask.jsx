import React from 'react'
import { useState } from 'react'


function InputTask(props) {
    console.log(props.addTask,"come from parent")
const [inputValue,setInputValue]=useState("")
const handleInputChange=(e)=>{
  console.log(e.target.value)
  setInputValue(e.target.value)

}

const handleAddTask=()=>{
    let newArr=[]

    console.log(props.allTasks==false)//true
    if(props.allTasks){
        console.log(...props.allTasks)
      newArr=[...props.allTasks,inputValue]
    }
    else{
     newArr.push(inputValue)
    }
  
    
    props.addTask(newArr)
    console.log("task added",inputValue)
    setInputValue("")

}
  return (
    <div className='input-container'>
      <input onChange={handleInputChange}  value={inputValue} placeholder='Enter your task'></input>
      <br></br>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default InputTask
