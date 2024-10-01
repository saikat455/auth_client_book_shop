import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./Shared/Footer"
import Navbar from "./Shared/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  

  return (
    <>
    
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
   
    </>
  )
}

export default App
