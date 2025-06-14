import {BrowserRouter, Routes , Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard";
import  Signin  from "./pages/Signin";
import { Signup } from "./pages/Signup";
import Home from "./pages/Home"

function App () {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/signup" element = {<Signup/>}/>
    <Route path="/Signin" element = {<Signin/>}/>
    <Route path="/dashboard" element = {<Dashboard/>}/>
  </Routes>
  </BrowserRouter> 
}



export default App;