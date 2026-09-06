import React from "react";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP , ScrollTrigger)

const Sidebar = () => {
  const CopyText = () => {
    navigator.clipboard.writeText("yash35981@gmail.com");
  };

  useGSAP(()=>{

    const mm = gsap.matchMedia();

    gsap.to("hedingSide",{

    })

    mm.add("(min-width: 600px)", ()=>{
     gsap.to(".gsapHtml",{
      translateX:"-120%",
      duration:10,
      ease:"none",
      repeat:-1
    })

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
    <div className=" fixed left-2 translate-x-[-120%] z-30  flex flex-col justify-between gap-5 top-3 scrollSide">
      <div className=" h-45 w-60 bg-black/20 p-2 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex flex-col justify-between">
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
      <div className=" h-30 w-60 bg-black/20 p-3 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex items-center justify-center gap-4">
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
      <div className=" h-45 w-60 bg-black/20 p-3 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex flex-col justify-center text-white gap-2">
        <div className="bg-black/30  px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl w-fit flex items-center gap-2 ">
          <AiFillHome />
          <h3 className="font-bold text-white">HOME</h3>
        </div>
        <div className="bg-black/30  px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl w-fit flex items-center gap-2">
          <DiEnvato />
          <h3 className="font-bold text-white">ABOUT</h3>
        </div>
        <div className="bg-black/30  px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl w-fit flex items-center gap-2">
          <GiFire />
          <h3 className="font-bold text-white">SKILLS</h3>
        </div>
        <div className="bg-black/30 px-5 py-1 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex items-center w-fit gap-2">
          <IoCallSharp />
          <h3 className="font-bold text-white">CONTACT US</h3>
        </div>
      </div>
      <div className=" h-10 w-60 bg-black/20  border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex  justify-center items-center">
        <div className=" h-[50%] w-[90%] bg-black/60  border-white/80 backdrop-blur-2xl shadow-xl rounded-xl flex  justify-center items-center gap-4">
          <h3 className="text-white text-[12px]">yash35981@gmail.com</h3>
          <span className="text-white text-[12px]" onClick={CopyText}>
            <FaCopy />
          </span>
        </div>
      </div>
      <div className=" h-10 w-60 bg-black/20 gap-5 border-black/80 backdrop-blur-2xl shadow-xl rounded-xl flex  justify-center items-center overflow-x-hidden">
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
  );
};

export default Sidebar;
