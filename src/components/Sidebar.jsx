import { IoLogoGithub } from "react-icons/io5";
import { GiWarlockEye } from "react-icons/gi";
import { PiInstagramLogo } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdContentCopy } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiGsap } from "react-icons/si";
import { SiZcool } from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Sidebar = ({ScrollToThis , pages}) => {

    const copy = ()=>{
        navigator.clipboard.writeText("yash35981@gmail.com")
        alert("copied")
    }

  useGSAP(() => {
    gsap.to(".SideBar", {
      opacity:1,
      x:0,
      scrollTrigger:{
        trigger:".bioPart",
        start:"top 0%",
        end:"bottom -100%",
        scrub:2,
      }
    });

    gsap.to(".liftelement",{
       translateX:-366,
       duration:7,
       ease:"sine.inOut",
       repeat:-1,
    })
  });
  return (
    <div className=" NavBar hidden sm:flex sm:flex-col sm:h-[90%] sm:w-[15%]">
      <div className=" opacity-0 SideBar fixed top-2  left-3 flex-col z-3 flex justify-start nav p-4">
        <div className="TransParent">
          <div
            className="h-35 p-2 w-50 bg-black/30 flex-col  top-2 rounded-2xl gap-2 left-1.5 backdrop:blur-2xl flex justify-between shadow-2xl border-white/20 shadow-black/20 "
            id="transBox"
          >
                <div className=" flex justify-between  w-full">
              <div className="flex text-[15px] px-2 py-0.5 rounded-md bg-[#ffff23] text-[black] justify-start font-semibold text-center italic">
                <span className="">G</span>
                <span className="">A</span>
                <span className="">U</span>
                <span className="">R</span>
                <span className="">A</span>
                <span className="">V</span>
              </div>
              <div className="flex gap-2 text-white">
                <div className="elementBox">
                  <PiInstagramLogo />
                </div>
                <div className="elementBox">
                  <IoLogoGithub />
                </div>
              </div>
            </div>
            <div className="w-[90%] pb-15  flex justify-start pr-5">
              <p className="NavSpot text-md absolute text-[10.5px] pr-6 text-white">
                Turning ideas into fast, responsive, and beautiful web
                experiences with clean code and modern technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-black/30 border-white/20 w-[90%] gap-3 p-5 backdrop-blur-2xl flex justify-center items-start flex-col mt-5 text-white shadow-xl shadow-black/25 rounded-2xl italic">
            <h1 className="flex justify-center items-center gap-2.5 text-[1.3vw] ">
              <span className="text-[1.6vw] font-bold text-[#ffff23] ">
                <GiWarlockEye />
              </span>
              7+Projects
            </h1>
          </div>
        </div>
        <div className="bg-black/30 border-white/20 w-[90%] gap-3 p-5 backdrop-blur-2xl flex justify-center items-start flex-col mt-5 text-white shadow-xl shadow-black/25 rounded-2xl z-30 italic">
          <div className="flex flex-col  gap-2 ">
            <h3 className={pages === "#Home" ? " cursor-pointer bg-[#ffff23] w-37 rounded-md text-black py-1 px-2":" cursor-pointer py-1 px-2"} onClick={()=> ScrollToThis("#Home")}>HOME</h3>
            <h3 className={pages === "#About" ? " cursor-pointer bg-[#ffff23] w-37 rounded-md text-black py-1 px-2":" cursor-pointer py-1 px-2"} onClick={()=> ScrollToThis("#About")}>ABOUT</h3>
          </div>

          <h3 className={pages === "#Skills" ? " cursor-pointer bg-[#ffff23] w-37 rounded-md text-black py-1 px-2":" cursor-pointer py-1 px-2"} onClick={()=> ScrollToThis("#Skills")}>SKILLS</h3>
          <h3 className={pages === "#Contact" ? " cursor-pointer bg-[#ffff23] w-37 rounded-md text-black py-1 px-2":" cursor-pointer py-1 px-2"} onClick={()=> ScrollToThis("#Contact")}>CONTACT</h3>
        </div>

        <div className="bg-black/30 border-white/20 w-[90%] gap-3 py-2 px-5 backdrop-blur-2xl flex justify-center items-center flex-col mt-5 text-white shadow-xl shadow-black/25 rounded-2xl z-30 italic">
        <div className="bg-black/50 border-white/20 w-full gap-3 py-1.5 px-5 backdrop-blur-2xl flex justify-center items-center flex-col  text-white shadow-xl shadow-black/25 rounded-md z-30 italic ">

            <h1 className=" text-[10px] flex justify-center items-center gap-1.5"> yash35981@gmail.com <span className=" text-[12px] cursor-pointer" title="Copy Text" onClick={copy}><MdContentCopy /></span></h1>
        </div>
        </div>

         <div className="bg-black/30 border-white/20 relative w-50 gap-7 py-2 px-5 backdrop-blur-2xl flex justify-center items-center mt-5 text-white shadow-xl shadow-black/25 rounded-2xl z-30 italic overflow-x-hidden h-10  text-[15px]">
         <div className="flex gap-7 translate-x-91 liftelement">

            <div className="flex gap-1 whitespace-nowrap justify-center items-center"><FaHtml5 /> HTML</div>
            <div className="flex gap-1 whitespace-nowrap justify-center items-center"> <RiTailwindCssFill />TAILWIND CSS</div>
            <div className="flex gap-1 whitespace-nowrap justify-center items-center"> <FaReact />REACT</div>
            <div className="flex gap-1 whitespace-nowrap justify-center items-center"> <SiGsap />GSAP</div>
            <div className="flex gap-1 whitespace-nowrap justify-center items-center"> <SiZcool />REACT ICONS</div>
        </div>
         </div>
         <div>
            <button className=" p-2 w-full bg-[#ffff23] backdrop-blur-2xl shadow-xl shadow-black/25 rounded-2xl mt-6">contact</button>
         </div>
      </div>
    </div>
  );
};

export default Sidebar;
