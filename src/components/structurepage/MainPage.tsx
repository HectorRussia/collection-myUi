import { ThemeProvider } from "../../contexts/ThemeContext"
import Main from "./Main"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <>
    <ThemeProvider>
      <Navbar/>
      <Main/>
    </ThemeProvider>
      
    </>
  )
}

export default MainPage