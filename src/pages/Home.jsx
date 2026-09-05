import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import image from '../assets/heroSection.png'
import { ScrollTrigger } from 'gsap/all'
import { AiOutlineGitlab } from "react-icons/ai";
import { TbAugmentedReality } from "react-icons/tb";
import { FaStrava } from "react-icons/fa";
import { SiElectronbuilder } from "react-icons/si";
import { SiEffect } from "react-icons/si";
import { GiWarlockEye } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";


gsap.registerPlugin(useGSAP,ScrollTrigger)

const Home = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()

    const mm = gsap.matchMedia();

    mm.add("((min-width: 600px)",()=>{
          const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".homeSection",
        start:"top 0%",
        end:"bottom -100%",
        scrub:2
      }
    })


    gsap.to(".homePages",{
      x:2000,
      opacity:0,
      scrollTrigger:{
        trigger:".homeSection",
        start:"top 0%",
        end:"bottom -100%",
        scrub:2
      }
    })
    tl2.to(".buildText",{
      translateX:"0%",
    })
    .to(".buildText",{
      y:-1000
    })
    })


    tl.from(".headingHome",{
      x:1800,
      delay:0.5,
      duration:1,
    })
    .from(".img",{
      opacity:0,
      delay:0.5,
      duration:1,
    })
    .from(".navEle",{
      opacity:0,
      transform:"scale(0.9)",
      delay:0.5,
      duration:0.5,
    })
    .from(".creativeP",{
      opacity:0,
      duration:0.5,
      delay:0.2,
      stagger:0.2
      
    })
    .from(".Bio",{
      opacity:0,
      duration:0.5,
      delay:0.2,
      stagger:0.2
      
    })

  
  })


  return (
    <>
    <div className=' h-screen w-full bg-[#d6d0bf] homeSection'>
      <div className='h-full w-full homePages'>
        <div className=''>
          <h1 className='text-[22vw] sm:text-[20vw] leading-80 sm:leading-75 font-bold text-[#ffff24] text-center headingHome'>GAURAV</h1>
        </div>
        <div className='  flex justify-center items-center '>
          <img src={image}  alt="" className=' absolute bottom-0 object-cover w-[200vw] h-[90vh] sm:w-[40%] img' />
        </div>

      <div className=' hidden sm:flex w-full justify-between px-23 mt-30 creativeP'>
        <div className='flex gap-20 font-semibold text-[25px]'>
          <h1 className=' cursor-pointer' onClick={()=> console.log("hello")}>HOME</h1>
          <h1 className=' cursor-pointer' onClick={()=> console.log("hello")}>ABOUT</h1>
        </div>
        <div className='flex gap-20 font-semibold text-[25px]'>
          <h1 className=' cursor-pointer' onClick={()=> console.log("hello")}>SKILLS</h1>
          <h1 className=' cursor-pointer' onClick={()=> console.log("hello")}>CONTACT US</h1>
        </div>
      </div>

      <div className='py-7 sm:py-0 flex w-full justify-between px-2 sm:px-70 sm:mt-5 creativeP'>
        <div className=' w-[40%] sm:w-50 h-20 rounded-2xl  backdrop-blur-2xl bg-black/40 border-black/80 shadow-black/50 shadow-2xl gap-2.5 text-white flex justify-center items-center '>
        <span className=' text-5xl text-[#ffff23]'>
          <GiWarlockEye />

        </span>
          <h1 className='flex text-[12px] sm:text-lg  flex-col justify-center items-center'>7+<br />projects</h1>
        </div>

        <div className=' sm:w-50 sm:h-60 rounded-2xl backdrop-blur-2xl bg-black/40 border-black/80 shadow-black/50 shadow-2xl flex flex-col p-5 justify-center items-center creativeP'>
        <div className='w-[90%] h-[90%] flex justify-center flex-col items-start gap-2 text-white'>
            <h1 className="flex justify-center items-center gap-2.5">
              <span className="text-[2vw] font-bold text-[#ffff23] ">
                <AiOutlineGitlab />
              </span>
              Creative
            </h1>
            <h1 className="flex justify-center items-center gap-2.5">
              <span className="text-[2vw] font-bold text-[#ffff23] ">
                <TbAugmentedReality />
              </span>
              Reliable
            </h1>
            <h1 className="flex justify-center items-center gap-2.5">
              <span className="text-[2vw] font-bold text-[#ffff23] ">
                <FaStrava />
              </span>
              Strategist
            </h1>
            <h1 className="flex justify-center items-center gap-2.5">
              <span className="text-[2vw] font-bold text-[#ffff23] ">
                <SiElectronbuilder />
              </span>
              Builder
            </h1>
            <h1 className="flex justify-center items-center gap-2.5 ">
              <span className="text-[2vw] font-bold text-[#ffff23] ">
                <SiEffect />
              </span>
              Efficient
            </h1>
        </div>
            
        </div>
      </div>

      <div className=' absolute z-30 w-full flex bottom-16 font-extrabold  justify-center sm:bottom-[15%] Bio'>
        <h3 className='text-4xl sm:text-8xl'>
          FRONTEND <br /> DEVELOPER
        </h3>
      </div>

        <div className=' w-full hidden sm:flex justify-between absolute bottom-10 px-15 creativeP'>
          <div>
            <p>The Webflow Expert. <br /> That’s Nenad.</p>
          </div>

          <div className='w-[25%]'>
            <p className=''>Turning ideas into fast, responsive, and beautiful web experiences with clean code and modern technologies.</p>
          </div>
        </div>
       
      </div>

      <div className=' absolute px-5 font-bold top-5 z-30 flex justify-center gap-6 w-full sm:hidden'>
        <div className='flex justify-start gap-10 items-center w-[80%]'>
        <h1 className=' bg-[#ffff24] px-4 py-2 rounded-lg cursor-pointer text-lg'>GAURAV</h1>
        <button className=' bg-[#ffff24] px-4 py-2 rounded-lg cursor-pointer text-lg'>Contact</button>
      </div>
      <div className='flex gap-7 justify-center items-center '>
        <div className=' text-5xl fixed'>
          <IoMenu />
          
        </div>
      </div>
        </div>

    </div>
        <div className=' fixed top-0 translate-x-[-90%]   w-full  text-center font-bold buildText p-10'>
          <h3 className=' text-[12vw] leading-60 text-black'>BUILD BY GAURAV KUMAR</h3>
        </div>
    </>
  )
}

export default Home