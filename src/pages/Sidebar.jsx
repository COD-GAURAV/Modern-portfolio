import React, { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { DiEnvato } from "react-icons/di";
import { GiFire } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'
import ScrollToPlugin from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP , ScrollTrigger ,ScrollToPlugin)

const Sidebar = () => {
  const CopyText = () => {
    navigator.clipboard.writeText("yash35981@gmail.com");
  };

 const closeBar = useRef()
  const HomeNavigator = ()=>{
   
    gsap.to(window,{
      scrollTo:".page1",
      duration:2
    })
    closeBar.current.click()

  }
  const aboutNavigator = ()=>{

    console.log(window.innerWidth)
 
    
     gsap.to(window,{
      scrollTo:".page2",
      duration:2
    })
    closeBar.current.click()

  }
  const skillNavigator = ()=>{
     gsap.to(window,{
      scrollTo:".page3",
      duration:2
    })
    closeBar.current.click()

  }
  const contactNavigator = ()=>{
    gsap.to(window,{
      scrollTo:".page4",
      duration:2
    })
    closeBar.current.click()

  }
  const close = ()=>{
     gsap.to(".scrollSide",{
         translateX:"-120%",
         duration:1
       })
  }

  useGSAP(()=>{

    const mm = gsap.matchMedia();

    gsap.to("hedingSide",{

    })

    
    gsap.to(".gsapHtml",{
     translateX:"-120%",
     duration:10,
     ease:"none",
     repeat:-1
   })
    mm.add("(min-width: 600px)", ()=>{
       gsap.to(".scrollSide",{
         translateX:"0%",
         scrollTrigger:{
           trigger:".homeSection",
           start:"top 0%",
           end:"bottom -100%",
           scrub:2,
           pin:true
         }
       })
    })


     
  })

  return (
    <>
    <div className="fixed left-2 translate-x-[-120%] z-50  sm:flex flex-col justify-between gap-5 top-2 sm:top-3 bg-black/20 border-black/80 sm:border-none backdrop-blur-2xl sm:backdrop:blur-none shadow-xl sm:shadow-none rounded-xl scrollSide ">
      <div className="hidden h-45 w-60 bg-black/20 p-2 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl sm:flex flex-col justify-between">
        <div className="flex justify-between p-3">
          <h1 className="bg-[#ffff24] px-2 py-0.5 rounded-lg font-bold headingSide">
            GAURAV
            <span className="text-[8px] border rounded-full px-0.5">R</span>
          </h1>
          <div className="flex gap-2 text-lg text-white">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="p-2 text-[13px] text-white">
          <p>
            Turning ideas into fast, responsive, and beautiful web experiences
            with clean code and modern technologies.
          </p>
        </div>
      </div>
      <div className="hidden h-30 w-60 bg-black/20 p-3 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl sm:flex items-center mb-3.5 justify-center gap-4">
        <div className=" flex flex-col justify-center items-center">
          <div className="text-5xl text-[#ffff24]">
            <SiPolymerproject />
          </div>
          <h3 className="text-[15px] font-light flex flex-col justify-center items-center text-white">
            {" "}
            <span>12+</span>Projects
          </h3>
        </div>
        <div className="w-[0.1px] h-[90%] bg-black/50"></div>
        <div className=" flex flex-col justify-center items-center">
          <div className="text-5xl text-[#ffff24]">
            <DiSass />
          </div>
          <h3 className="text-[15px] font-light flex flex-col justify-center items-center text-white">
            <span>Fresher</span> but Learner
          </h3>
        </div>
      </div>
      <div className=" h-45 w-[96vw] sm:w-60 bg-black/20 p-3 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex flex-col justify-center text-white gap-2">
        <div className="bg-black/30 w-[99%] px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl sm:w-fit flex justify-center items-center gap-2" onClick={HomeNavigator}>
          <AiFillHome />
          <h3 className="font-bold text-white">HOME</h3>
        </div>
        <div className="bg-black/30 w-[99%] px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl sm:w-fit flex justify-center items-center gap-2" onClick={aboutNavigator} >
          <DiEnvato />
          <h3 className="font-bold text-white">ABOUT</h3>
        </div>
        <div className="bg-black/30 w-[99%] px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl sm:w-fit flex justify-center items-center gap-2" onClick={skillNavigator}>
          <GiFire />
          <h3 className="font-bold text-white">SKILLS</h3>
        </div>
        <div className="bg-black/30 w-[99%] px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex justify-center items-center sm:w-fit gap-2" onClick={contactNavigator}>
          <IoCallSharp />
          <h3 className="font-bold text-white">CONTACT US</h3>
        </div>
      </div>
      <div className=" h-10 w-[96vw] sm:w-60 bg-black/20  border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex mt-2.5  justify-center items-center">
        <div className=" h-[50%] w-[90%] bg-black/60  border-white/80 backdrop-blur-2xl shadow-xl rounded-xl flex  justify-center items-center gap-4">
          <h3 className="text-white text-[12px]">yash35981@gmail.com</h3>
          <span className="text-white text-[12px]" onClick={CopyText}>
            <FaCopy />
          </span>
        </div>
      </div>
      <div className=" h-10 w-[96vw] sm:w-60 bg-black/20 gap-5 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex mt-2.5  justify-center items-center overflow-x-hidden">
        <div className="flex justify-center items-center  whitespace-nowrap gap-5 translate-x-200 gsapHtml">
          <div className=" flex justify-center items-center gap-2">
            <FaHtml5 className="text-[#F54927]"/>
            <h3 className="text-white">HTML</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <FaCss3  className="text-[#264de4]"/>
            <h3 className="text-white">CSS</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <IoLogoJavascript  className=" text-[#F0DB4F]"/>
            <h3 className="text-white">JAVASCRIPT</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <RiTailwindCssFill className="text-[#38BDF8]"/>
            <h3 className="text-white">TAILWIND CSS</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <FaReact className="text-[#61DBFB]"/>
            <h3 className="text-white">REACT</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <FaGithub className="text-[#969fa9]"/>
            <h3 className="text-white">GIT AND GITHUB</h3>
          </div>
        </div>
        <div aria-hidden className="flex justify-center items-center  whitespace-nowrap gap-5 translate-x-200 gsapHtml">
          <div className=" flex justify-center items-center gap-2">
            <FaHtml5 className="text-[#F54927]"/>
            <h3 className="text-white">HTML</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <FaCss3 className="text-[#264de4]"/>
            <h3 className="text-white">CSS</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <IoLogoJavascript className=" text-[#F0DB4F]"/>
            <h3 className="text-white">JAVASCRIPT</h3>
          </div>
          <div className=" flex justify-center items-center gap-2 ">
            <RiTailwindCssFill className="text-[#38BDF8]"/>
            <h3 className="text-white">TAILWIND CSS</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <FaReact className="text-[#61DBFB]"/>
            <h3 className="text-white">REACT</h3>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <FaGithub className="text-[#969fa9]"/>
            <h3 className="text-white">GIT AND GITHUB</h3>
          </div>
        </div>
      </div>
    </div>
     <div className=" fixed top-80 translate-x-[-120%] w-full flex sm:hidden justify-center items-center mt-2.5 scrollSide z-50 cursor-pointer">
        <span className="p-2 text-2xl rounded-full bg-black/60 text-[#ffff24] font-extrabold" onClick={close} ref={closeBar}>
          <MdOutlineClose />
        </span>
      </div>
    </>
  );
};

export default Sidebar;
