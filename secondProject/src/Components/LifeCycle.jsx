import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [count,setCount]= useState(0)
    const [total,setTotal]= useState(10)

console.log("before render")

// first type run on every rerender and after render the Ui
// useEffect(()=>{
//    console.log("After render")
// })

// second type with dependency empty array & run only one time after render Ui
// useEffect(()=>{
//    console.log("only render one time")
// },[])

//third type with dependency
// useEffect(()=>{
//    console.log("only render when count value is changed")
//    //cleanup
//    return (()=>{
//      console.log("component unmounted")
//    })
// },[count])


//third type with dependency
useEffect(()=>{
   console.log("only render when count is updated")
   //cleanup
   return (()=>{
     console.log("Cleanup function called when count changed")
   })
},[count])

  return (
    <div>
        {console.log("Component render")}
      <h1>lifecycle</h1>
       <h2>Count vaue is incremented : {count}</h2>
      <button onClick={()=>setCount(count+5)}>Increment By 5</button>
      <h2>total vaue is incremented : {total}</h2>
      <button onClick={()=>setTotal(total+1)}>Increment By 1</button>
    </div>
  )
}

export default LifeCycle
