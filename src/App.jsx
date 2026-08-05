import { useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP,ScrollToPlugin)
const App = ()=>{

  const [Pages, setPages] = useState("")

      gsap.to(window,{
        duration:1,
        scrollTo:Pages
      })


  return (
    <div className="">
      <Sidebar ScrollToThis = {setPages} pages = {Pages}/>
      <Home ScrollToThis = {setPages}/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App