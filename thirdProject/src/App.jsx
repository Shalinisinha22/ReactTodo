import { useState } from "react"
import Profile from "./Components/Profile"
import ProductPage from "./Components/ProductPage"
function App() {
const [userNumber,setUserNumber]=useState(9898989898)

  return (
    <>
     <Profile userNumber={userNumber}></Profile>
     <ProductPage userNumber={userNumber}></ProductPage>
    </>
  )
}

export default App
