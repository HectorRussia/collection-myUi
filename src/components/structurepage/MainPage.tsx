import { ThemeProvider } from "../../contexts/ThemeContext"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <>
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
      
    </>
  )
}

export default MainPage