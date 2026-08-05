import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const About = () => {
  useGSAP(() => {

    gsap.to(".aboutHead",{
        opacity:1,
        scrollTrigger:{
            trigger:".aboutSec",
            start:"top 10%",
            end:"bottom 80%",
            scrub:"2"
        }
    })

    gsap.to(".aboutEle",{
        opacity:1,   
        stagger:0.5,
        scrollTrigger:{
            trigger:".aboutSec",
            start:"top 0%",
            end:"bottom -100%",
            scrub:2,
            pin:true
        }
        
    })
  });

  return (
    <>
    
  
    <div className="w-full h-screen p-5 sm:p-10 sm:pl-70 sm:pt-10 bg-[#d5cfbe] aboutSec" >
      <div>
        <div id="About">

         </div>
      <h3 className=" px-2 py-1 w-fit mt-10 sm:mt-0 opacity-0 mb-5 sm:mb-0 text-[15px] bg-[#d5cfbe] rounded-2xl border aboutHead">Start small grow big</h3>
        <h1 className=" text-[11vw] sm:text-[5vw] opacity-0 text-[#ffff23] font-bold aboutHead">
          About Me <br />
          And My Goals
        </h1>
      </div>
      <div className=" sm:pt-5">
          
        <p className="aboutPara flex gap-2 p-3  flex-wrap text-[20px] sm:text-[2.5vw] sm:pr-45 tracking-wider ">
          <span className="opacity-0 aboutEle">I</span>
          <span className="opacity-0 aboutEle">am</span>
          <span className="opacity-0 aboutEle">Gaurav Kumar,</span>
          <span className="opacity-0 aboutEle">an</span>
          <span className="opacity-0 aboutEle">MCA </span>
          <span className="opacity-0 aboutEle">student</span>
          <span className="opacity-0 aboutEle">a</span>
          <span className="opacity-0 aboutEle">passionate</span>
          <span className="opacity-0 aboutEle">Frontend Developer</span>
          <span className="opacity-0 aboutEle">who</span>
          <span className="opacity-0 aboutEle">enjoys</span>
          <span className="opacity-0 aboutEle">creating</span>
          <span className="opacity-0 aboutEle">modern,</span>
          <span className="opacity-0 aboutEle">responsive,</span>
          <span className="opacity-0 aboutEle">and</span>
          <span className="opacity-0 aboutEle">interactive web</span>
          <span className="opacity-0 aboutEle">applications.</span>
          <span className="opacity-0 aboutEle">I</span>
          <span className="opacity-0 aboutEle">specialize</span>
          <span className="opacity-0 aboutEle">in building </span>
          <span className="opacity-0 aboutEle">user-friendly</span>
          <span className="opacity-0 aboutEle">interfaces using</span>
          <span className="opacity-0 aboutEle">HTML,</span>
          <span className="opacity-0 aboutEle">CSS,</span>
          <span className="opacity-0 aboutEle">JavaScript,</span>
          <span className="opacity-0 aboutEle">React.js,</span>
          <span className="opacity-0 aboutEle">Tailwind CSS,</span>
          <span className="opacity-0 aboutEle">and</span>
          <span className="opacity-0 aboutEle" > GSAP.</span>
          
        </p>
      </div>
    </div>
    </>
    
  );
};

export default About;
