import Product from "./Components/Product"
import { ThemeProvider } from "./Context/ThemeContext"
import { LanguageProvider } from "./Context/LanguageContext"
import Home from "./Components/Home"
import Profile from "./Components/Profile"
function App() {

  

  return (
    <ThemeProvider>
    <h1>React context Api</h1>
    <Home></Home>
    <LanguageProvider>
     <Profile></Profile>
      <Product></Product>
    </LanguageProvider>
   
   
    </ThemeProvider>
  )
}

export default App
