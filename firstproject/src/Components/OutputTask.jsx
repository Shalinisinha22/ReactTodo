import React from 'react'

function OutputTask(props) {
    console.log("come from parent",props.allTasks)
  return (
    <div>
      <ul>

        {
            props.allTasks.map((task,id)=>{
               return <li key={id}>{task}</li>
            })

        }
        
      </ul>
    </div>
  )
}

export default OutputTask
