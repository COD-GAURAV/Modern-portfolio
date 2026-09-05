import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.to(".aboutPara", {
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <div className=" h-screen w-full aboutSection relative bg-[#d6d0bf] sm:pl-75 sm:p-15 p-7 about">
      <div className=" mb-5">
        <h3 className=" border-2 w-fit px-2 py-1 rounded-full text-[12px] sm:text-[15px] text-[#000] font-semibold">
          Start small grow big
        </h3>
      </div>
      <div>
        <h1 className="sm:text-8xl text-5xl font-semibold text-[#ffff24]">
          {" "}
          About Me <br />
          And My Goals
        </h1>
      </div>
      <div className=" text-[17px] sm:text-[2.2vw] mt-5 flex flex-wrap gap-2">
        <span className="aboutPara opacity-20 ">I</span>
        <span className="aboutPara opacity-20">am</span>
        <span className="aboutPara opacity-20">Gaurav</span>
        <span className="aboutPara opacity-20">Kumar,</span>
        <span className="aboutPara opacity-20">an</span>
        <span className="aboutPara opacity-20">MCA</span>
        <span className="aboutPara opacity-20">student</span>
        <span className="aboutPara opacity-20">and</span>
        <span className="aboutPara opacity-20">a</span>
        <span className="aboutPara opacity-20">passionate</span>
        <span className="aboutPara opacity-20">Frontend</span>
        <span className="aboutPara opacity-20">Developer</span>

        <span className="aboutPara opacity-20">who</span>
        <span className="aboutPara opacity-20">enjoys</span>
        <span className="aboutPara opacity-20">creating</span>
        <span className="aboutPara opacity-20">modern,</span>
        <span className="aboutPara opacity-20">responsive,</span>
        <span className="aboutPara opacity-20">and</span>
        <span className="aboutPara opacity-20">interactive</span>
        <span className="aboutPara opacity-20">web</span>
        <span className="aboutPara opacity-20">applications.</span>

        <span className="aboutPara opacity-20">I</span>
        <span className="aboutPara opacity-20">specialize</span>
        <span className="aboutPara opacity-20">in</span>
        <span className="aboutPara opacity-20">building</span>
        <span className="aboutPara opacity-20">user-friendly</span>
        <span className="aboutPara opacity-20">interfaces</span>
        <span className="aboutPara opacity-20">using</span>
        <span className="aboutPara opacity-20">HTML,</span>
        <span className="aboutPara opacity-20">CSS,</span>
        <span className="aboutPara opacity-20">JavaScript,</span>
        <span className="aboutPara opacity-20">React.js,</span>
        <span className="aboutPara opacity-20">Tailwind</span>
        <span className="aboutPara opacity-20">CSS,</span>
        <span className="aboutPara opacity-20">and</span>
        <span className="aboutPara opacity-20">GSAP.</span>

        <span className="aboutPara opacity-20">I</span>
        <span className="aboutPara opacity-20">enjoy</span>
        <span className="aboutPara opacity-20">solving</span>
        <span className="aboutPara opacity-20">real-world</span>
        <span className="aboutPara opacity-20">problems</span>
        <span className="aboutPara opacity-20">through</span>
        <span className="aboutPara opacity-20">clean</span>
        <span className="aboutPara opacity-20">code</span>
        <span className="aboutPara opacity-20">and</span>
        <span className="aboutPara opacity-20">continuously</span>
        <span className="aboutPara opacity-20">learning</span>
        <span className="aboutPara opacity-20">new</span>
        <span className="aboutPara opacity-20">technologies</span>
        <span className="aboutPara opacity-20">to</span>
        <span className="aboutPara opacity-20">improve</span>
        <span className="aboutPara opacity-20">my</span>
        <span className="aboutPara opacity-20">development</span>
        <span className="aboutPara opacity-20">skills.</span>

        <span className="aboutPara opacity-20">My</span>
        <span className="aboutPara opacity-20">goal</span>
        <span className="aboutPara opacity-20">is</span>
        <span className="aboutPara opacity-20">to</span>
        <span className="aboutPara opacity-20">contribute</span>
        <span className="aboutPara opacity-20">to</span>
        <span className="aboutPara opacity-20">innovative</span>
        <span className="aboutPara opacity-20">projects,</span>
        <span className="aboutPara opacity-20">grow</span>
        <span className="aboutPara opacity-20">as</span>
        <span className="aboutPara opacity-20">a</span>
        <span className="aboutPara opacity-20">software</span>
        <span className="aboutPara opacity-20">developer,</span>
        <span className="aboutPara opacity-20">and</span>
        <span className="aboutPara opacity-20">build</span>
        <span className="aboutPara opacity-20">digital</span>
        <span className="aboutPara opacity-20">experiences</span>
        <span className="aboutPara opacity-20">that</span>
        <span className="aboutPara opacity-20">make</span>
        <span className="aboutPara opacity-20">a</span>
        <span className="aboutPara opacity-20">positive</span>
        <span className="aboutPara opacity-20">impact.</span>
      </div>
    </div>
  );
};

export default About;
