import { useState } from "react"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Sidebar from "./pages/Sidebar"
import Skills from "./pages/Skills"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Route, Routes } from "react-router-dom"


gsap.registerPlugin(useGSAP,ScrollToPlugin)
const App = ()=>{

  const [Pages, setPages] = useState("home")


  return (



    <div className="">

    <Routes>
      <Route path="Modern-portfolio/" element={<Home ScrollToThis = {setPages}/>}/>
      <Route path="Modern-portfolio/about" element={<About/>}/>
      <Route path="Modern-portfolio/skills" element={<Skills/>}/>
      <Route path="Modern-portfolio/contact" element={<Contact/>}/>
      
    </Routes>
      <Sidebar ScrollToThis = {setPages} pages = {Pages}/>
      <About/>
      <Skills/>
      <Contact/>
      
      
      
    </div>
  )
}

export default App