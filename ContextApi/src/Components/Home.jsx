import React from 'react'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../Context/ThemeContext'

const Home = () => {
    const {theme,changeTheme}= useContext(ThemeContext)
  return (
    <div style={{height:100,width:100,backgroundColor:theme==='light'?"white":"black",color:theme==='light'?"black":"white"}}>
      <h1 >Home page</h1>
      <button onClick={()=>changeTheme()}>Change Theme</button>
    </div>
  )
}

export default Home


