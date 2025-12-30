import { useState } from "react"
import LifeCycle from "./Components/LifeCycle"
import DocumentTitleUpdater from "./Components/Test"
function App() {
const [show,setShow]=useState(true)
  return (
   <>
   <button onClick={()=>setShow(!show)}>{show?"Hide component":"Show Component"}</button>
   {
    show ?  <LifeCycle></LifeCycle>
    :  (
      <h3>Component remove from dom because show value is false</h3>
    )
   }
   {console.log(show)}
    {/* {
    show && <LifeCycle></LifeCycle>
   } */}

  <DocumentTitleUpdater></DocumentTitleUpdater>
  

   </>
  )
}

export default App
