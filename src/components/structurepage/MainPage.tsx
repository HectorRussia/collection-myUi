import { ThemeProvider } from "@/contexts/ThemeContext"
import Navbar from "./Navbar"
import HeaderMain from "./HeaderMain"
import Main from "./Main"


const MainPage = () => {
  return (
    <>
    <ThemeProvider>
      <Navbar/>
      <HeaderMain/>
      <Main/>
    </ThemeProvider>
      
    </>
  )
}

export default MainPage