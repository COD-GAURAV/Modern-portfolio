import heroPhoto from "../assets/heroSection.png";
import heroPhoto2 from "../assets/heroSection2.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineGitlab } from "react-icons/ai";
import { TbAugmentedReality } from "react-icons/tb";
import { FaStrava } from "react-icons/fa";
import { SiElectronbuilder } from "react-icons/si";
import { SiEffect } from "react-icons/si";
import { GiWarlockEye } from "react-icons/gi";
import { PiInstagramLogo } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import Sidebar from "./Sidebar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = ({ScrollToThis}) => {
  useGSAP(() => {
    let timeline = gsap.timeline();
    timeline
      .from(".HeroHeading", {
        opacity: 0,
        x: 1000,
        delay: 0,
        duration: 0.7,
      })

      .from("#img", {
        opacity: 0,
        filter: "blur(0px)",
        duration: 0.7,
        y: 10,
      })

      .from(".Nav", {
        opacity: 0,
        y: 10,
        duration: 1,
        stagger: 0.2,
      })

      .from(".Project", {
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.5,
      })
      .from(".Fleid",{
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.5,
      })
      .from(".bioPart",{
        opacity:0,
        duration:0.5
      })

    

    gsap.to(".name", {
      x: -710,
      y: -136,
      opacity:0,
      fontSize: "15px",
      padding: "5px 2px",
      color: "black",
      delay: 0,
      // stagger:0.2,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".scrollName",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true,
      },
    });
    gsap.to(".img", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".img",
        start: "top 0% ",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.to("#home", {
      x: -50,
      y: -80,
      opacity:0,
      padding:"4px",
      fontSize:"15px",
      duration: 5,
      delay: 2,
      justifyContent: "start",
      stagger: 1,
      scrollTrigger: {
        trigger: ".Nav",
        start: "top 0% ",
        end: "bottom -100%",
        scrub: 2,
      },
    })

    gsap.to("#about", {
      x: -134,
      y: -50,
      opacity:0,
      fontSize:"15px",
      duration: 5,
      delay: 2,
      justifyContent: "start",
      stagger: 1,
      scrollTrigger: {
        trigger: ".Nav",
        start: "top 0% ",
        end: "bottom -100%",
        scrub: 2,
      },
    });
    gsap.to("#skills", {
      x: -1262,
      y: -20,
      opacity:0,
      fontSize:"15px",
      duration: 5,
      delay: 2,
      justifyContent: "start",
      stagger: 1,
      scrollTrigger: {
        trigger: ".Nav",
        start: "top 0% ",
        end: "bottom -100%",
        scrub: 2,
      },
    });
    gsap.to("#contact", {
      x: -1350,
      y: 10,
      opacity:0,
      fontSize:"15px",
      duration: 5,
      delay: 2,
      justifyContent: "start",
      stagger: 1,
      scrollTrigger: {
        trigger: ".Nav",
        start: "top 0% ",
        end: "bottom -100%",
        scrub: 2,
      },
    });

    gsap.to(".bio", {
      y: -10,
      opacity: 0,
      duration: 10,
      scrollTrigger: {
        trigger: ".bio",
        screenY: 0,
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
      },
    });

    gsap.to(".Fleid", {
      y: -700,
      scrollTrigger: {
        trigger: "#Fleid",
        start: "top 0%",
        end: "bottom -40%",
        scrub: 2,
      },
    });
    gsap.to(".card1", {
      x:-200,
      opacity:0,
      scale:0,
      duration: 1,
      scrollTrigger: {
        trigger: ".pro1",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
      },
    }); 
    gsap.to(".denty", {
      x:-270,
      y:-240,
      opacity:0,
      duration: 1,
      scrollTrigger: {
        trigger: ".card2",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
      },
    });

    gsap.to(".buildH1",{
      opacity:1,
      scrollTrigger:{
        trigger:"",
        start:"top 0%",
        end:"bottom 80%",
        scrub:2
      }
    })
  });

  return (
    <>
    <div id="Home">

    </div>
    <div className=" h-screen w-full sm:p-5 bg-[#d5cfbe]  sm:h-screen sm:bg-[#d5cfbe] sm:top-0 sm:right-0 sm:items-center scrollName" >

      <div className=" leading-70 sm:w-full sm:flex sm:justify-center sm:items-center sm:text-[20vw] sm:leading-80 sm:absolute sm:top-0% text-7xl sm:right-0% text-[#ffff23] font-semibold text-center italic HeroHeading">
        <span className="name">G</span>
        <span className="name ">A</span>
        <span className="name ">U</span>
        <span className="name ">R</span>
        <span className="name ">A</span>
        <span className="name ">V</span>
      </div>
       <div className="flex sm:hidden text-[20px] w-fit fixed top-5 left-5 px-3 py-2 rounded-md bg-[#ffff23] text-[black] justify-start font-semibold text-center italic">
                <span className="">G</span>
                <span className="">A</span>
                <span className="">U</span>
                <span className="">R</span>
                <span className="">A</span>
                <span className="">V</span>
              </div>
      <div className=" hidden fixed top-90 z-30  w-full sm:flex px-20 justify-between ">
        <div className=" flex gap-10 font-bold relative z-30 text-slate-900 text-2xl Nav">
          <h3 className=" cursor-pointer NavSpot relative z-30" id="home" onClick={()=> ScrollToThis("#Home")}>
             HOME
          </h3>
          <h3 className=" cursor-pointer NavSpot relative z-30" id="about" onClick={()=> ScrollToThis("#About")}>
            ABOUT
          </h3>
        </div>
        <div className=" flex gap-10 font-bold text-2xl text-slate-900 Nav" onClick={()=> ScrollToThis("#Skills")}>
          <h3 className=" cursor-pointer NavSpot relative z-30" id="skills">
            SKILLS
          </h3>
          <h3 className=" cursor-pointer NavSpot relative z-30" id="contact" onClick={()=> ScrollToThis("#Contact")}>
            CONTACT
          </h3>
        </div>
      </div>
      <div
        className="z-30 top-95 flex justify-center mt-5 w-full items-center absolute "
        id="Fleid"
      >
        <h1 className="text-center z-30 sm:z-auto text-[10vw] sm:text-[7vw] mt-35 sm:mt-0 Fleid sm:leading-30 NavSpot text-[#694b4b] font-semibold">
          Frontend, <br /> Developer
        </h1>
      </div>
      <div className="Project pro1">
        <div
          className="bg-black/30 border-white/20  sm:w-[11%] gap-3 p-5 backdrop-blur-2xl flex justify-center items-start flex-col mt-5 text-white shadow-xl shadow-black/25 rounded-2xl absolute top-72 left-2 sm:top-90 sm:left-[67%] z-30 italic denty card1"
          id="card"
        >
          <div className="flex flex-col justify-start items-start gap-2 cardPro">
            <h1 className="flex justify-center items-center gap-2.5 sm:text-[1.3vw]">
              <span className="text-[6vw] sm:text-[1.6vw] font-bold text-[#ffff23] ">
                <AiOutlineGitlab />
              </span>
              Creative
            </h1>
            <h1 className="flex justify-center items-center gap-2.5 sm:text-[1.3vw]">
              <span className="text-[6vw] sm:text-[1.6vw] font-bold text-[#ffff23] ">
                <TbAugmentedReality />
              </span>
              Reliable
            </h1>
            <h1 className="flex justify-center items-center gap-2.5 sm:text-[1.3vw]">
              <span className="text-[6vw] sm:text-[1.6vw] font-bold text-[#ffff23] ">
                <FaStrava />
              </span>
              Strategist
            </h1>
            <h1 className="flex justify-center items-center gap-2.5 sm:text-[1.3vw]">
              <span className="text-[6vw] sm:text-[1.6vw] font-bold text-[#ffff23] ">
                <SiElectronbuilder />
              </span>
              Builder
            </h1>
            <h1 className="flex justify-center items-center gap-2.5 sm:text-[1.3vw]]">
              <span className="text-[6vw] sm:text-[1.6vw] font-bold text-[#ffff23] ">
                <SiEffect />
              </span>
              Efficient
            </h1>
          </div>
        </div>
      </div>
      <div  className="Project">
      <div
       className="bg-black/30 border-white/20 sm:w-[11%] gap-3 p-5 backdrop-blur-2xl flex justify-center items-start flex-col mt-5 text-white shadow-xl shadow-black/25 rounded-2xl absolute top-100 left-[60%] sm:left-[18%] z-30 italic denty pent project" 
      id="card"
       
      >
        <h1 className="flex justify-center items-center gap-2.5 sm:text-[1.3vw] cardH1">
          <span className="text-[6vw] sm:text-[1.6vw] font-bold text-[#ffff23] ">
            <GiWarlockEye />
          </span>
          7+Projects
        </h1>
      </div>
      </div>
      <div
        className=" absolute w-full flex justify-center items-center bottom-0 sm:bottom-[-10%]"
        id="img"
      >
        <img
          className=" h-[95vh] sm:h-screen opacity-100 object-cover z-20 img"
          src={heroPhoto}
          alt=""
        />
      </div>
      <div className=" hidden sm:flex justify-between px-15 absolute bottom-10 w-full bioPart">
        <div className="">
          <p className="NavSpot text-md bio">
            The Webflow Expert. <br /> That’s Nenad.
          </p>
        </div>
        <div className="flex w-90 bioPart">
          <p className="NavSpot text-md bio">
            Turning ideas into fast, responsive, and beautiful web experiences
            with clean code and modern technologies.
          </p>
      </div>
      </div>

      <div className=" absolute build">
          <h1 className="text-[15vw]  text-center opacity-0 font-bold buildH1">BUILD BY GAURAV KUMAR</h1>
      </div>


    </div>
    </>
    
  );
};

export default Home;
