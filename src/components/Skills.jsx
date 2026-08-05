import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import htmlVideo from "../video/html.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import htmlVideo2 from "../video/htmlBg.mp4";
import htmlVideo3 from "../video/htmlBg2.mp4";
import cssBg1 from "../video/cssBg.mp4";
import javascriptBg1 from "../video/javascriptBg.mp4";
import tailwindBg1 from "../video/tailwindBg.mp4";
import reactBg1 from "../video/reactBg.mp4";
import githubBg1 from "../video/githubBg.mp4";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.to(".SkillHead", {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#Skills",
        start: "top 60%",
        end: "bottom 90%",
        scrub: "2",
      },
    });

    gsap.to(".sectionSkill", {
      translateX: "-1000",
      delay: 3,
      scrollTrigger: {
        trigger: "#Skills",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <>
      <div className="w-full h-screen p-5 sm:pl-70 sm:pt-10 skill" id="Skills">
        <div>
          <h3 className=" px-2 py-1 w-fit opacity-0 text-[15px] mt-5 mb-2 sm:mb-0 text-[#ffff23] bg-white/10 rounded-2xl border SkillHead">
            Start small grow big
          </h3>
          <h1 className=" text-[15vw] sm:text-[6vw] opacity-0 text-[#ffff23] font-bold SkillHead">
            My Skills
          </h1>
          i
        </div>
        <div className=" w-[90%]">
          <p className="text-[20px]  sm:text-[44px] opacity-0 text-white SkillHead">
            Technologies I Use to Build Modern Web Experiences.
          </p>
        </div>
        <div className=" w-full flex overflow-x-auto overflow-y-hidden opacity-0  sm:overflow-hidden justify-around mt-10 px-15 gap-10 text-4xl skillLift SkillHead">
          <div className="flex gap-10 sectionSkill">
            <div className=" w-full flex gap-10    text-white ">
              <div className=" flex flex-col gap-5 bg-white/10 justify-between h-108 w-90  rounded-2xl">
                <div className=" w-full rounded-2xl">
                  <video
                    className=" w-full h-[67.5%] object-cover rounded-2xl relative z-30 "
                    src={htmlVideo3}
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
                <div className=" absolute z-50">
                  <h3 className="flex w-fit justify-center text-2xl items-center gap-2.5 p-5 relative z-50">
                    {" "}
                    <span className=" text-[#F54927]">
                      <FaHtml5 />
                    </span>{" "}
                    HTML
                  </h3>
                </div>
                <div className="flex flex-col gap-5 w-[14%] pl-5 bottom-25 sm:bottom-30 absolute z-50 ">
                  <div className="absolute">
                    <p className=" text-[17px] sm:text-[1vw]">
                      HTML: HyperText Markup Language. is the most basic building block of the Web.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-2 items-center absolute bottom-5 left-4 w-[12%] z-50">
                  <div className="w-full bg-white/30 border-white/20 backdrop-blur-2xl absolute  shadow-xl shadow-black/25  h-3 rounded-2xl">
                    <div className="  w-[90%] bg-[#F54927] h-3 rounded-2xl"></div>
                  </div>
                  <div>
                    <h1 className=" relative pl-82 right-0 text-[15px]">90%</h1>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-5 justify-between  bg-white/10 h-108 w-90  rounded-2xl">
                <div className=" w-full rounded-2xl">
                  <video
                    className=" w-full h-[67.5%] object-cover rounded-2xl relative z-30 "
                    src={cssBg1}
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
                <div className=" absolute z-50">
                  <h3 className="flex w-fit justify-center text-2xl items-center gap-2.5 p-5 relative z-50">
                    {" "}
                    <span className="text-[#264de4]">
                      <FaCss3 />
                    </span>{" "}
                    CSS
                  </h3>
                </div>
                <div className="flex flex-col gap-5 w-[14%] pl-5 bottom-30 absolute z-50 ">
                  <div className="absolute">
                    <p className="text-[17px] sm:text-[1vw]">
                      CSS (Cascading Style Sheets) is used to style and design
                      web pages. It controls colors, fonts, spacing, layouts,
                      and animations.
                    </p>
                  </div>
                </div>
                  <div className="flex justify-center gap-2 items-center absolute bottom-5 pl-5 w-[12%] z-50">
                    <div className="w-full bg-white/30 border-white/20 backdrop-blur-2xl absolute  shadow-xl shadow-black/25  h-3 rounded-2xl">
                      <div className="w-[90%] bg-[#264de4] h-3 rounded-2xl"></div>
                    </div>
                    <div>
                      <h1 className=" relative pl-82 right-0 text-[15px]">
                        90%
                      </h1>
                    </div>
                  </div>
              </div>
              <div className=" flex flex-col gap-5 justify-between  bg-white/10 h-108 w-90  rounded-2xl">
              <div className=" w-full rounded-2xl">
                  <video
                    className=" w-full h-[67.5%] object-cover rounded-2xl relative z-30 "
                    src={javascriptBg1}
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
                <div className=" absolute z-50">
                  <h3 className="flex w-fit justify-center text-2xl items-center gap-2.5 p-5 relative z-50">
                    {" "}
                    <span className=" text-[#F0DB4F]">
                      <IoLogoJavascript />
                    </span>{" "}
                    JAVASCRIPT
                  </h3>
                </div>
                <div className="flex flex-col gap-5 w-[14%] pl-5 bottom-36 absolute z-50 ">
                  <div className="absolute">
                    <p className="text-[17px] sm:text-[1vw]">
                      JavaScript is a programming language that adds
                      interactivity to websites. It allows developers to create
                      dynamic content, animations, and user interactions.
                    </p>
                  </div>
                </div>
                  <div className="flex justify-center gap-2 items-center absolute bottom-5 pl-5 w-[12%] z-50">
                    <div className="w-full bg-white/30 border-white/20 backdrop-blur-2xl absolute  shadow-xl shadow-black/25  h-3 rounded-2xl">
                      <div className="w-[80%] bg-[#F0DB4F] h-3 rounded-2xl"></div>
                    </div>
                    <div>
                      <h1 className=" relative pl-82 right-0 text-[15px]">
                        80%
                      </h1>
                    </div>
                  </div>
              </div>
            </div>
            <div className=" w-full flex  gap-10 text-white">
              <div className=" flex flex-col gap-5 justify-between  bg-white/10 h-108 w-90 rounded-2xl">
              <div className=" w-full rounded-2xl">
                  <video
                    className=" w-full h-[67.5%] object-cover rounded-2xl relative z-30 "
                    src={tailwindBg1}
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
                <div className=" absolute z-50">
                  <h3 className="flex w-fit justify-center text-2xl items-center gap-2.5 p-5 relative z-50">
                    {" "}
                    <span className="text-[#38BDF8]">
                      <RiTailwindCssFill />
                    </span>{" "}
                    Tailwind CSS
                  </h3>
                </div>
                <div className="flex flex-col gap-5 w-[14%] pl-5 bottom-36 absolute z-50 ">
                  <div className="absolute">
                    <p className="text-[17px] sm:text-[1vw]">
                      Tailwind CSS is a utility-first CSS framework for building
                      modern user interfaces. It provides pre-built utility
                      classes for fast and efficient styling.
                    </p>
                  </div>
                </div>
                  <div className="flex justify-center gap-2 items-center absolute bottom-5 pl-5 w-[12%] z-50">
                    <div className="w-full bg-white/30 border-white/20 backdrop-blur-2xl absolute  shadow-xl shadow-black/25  h-3 rounded-2xl">
                      <div className="w-[75%] bg-[#38BDF8] h-3 rounded-2xl"></div>
                    </div>
                    <div>
                      <h1 className=" relative pl-82 right-0 text-[15px]">
                        75%
                      </h1>
                    </div>
                  </div>
              </div>
              <div className=" flex flex-col gap-5 justify-between  bg-white/10 h-108 w-90  rounded-2xl">
              <div className=" w-full rounded-2xl">
                  <video
                    className=" w-full h-[67.5%] object-cover rounded-2xl relative z-30 "
                    src={reactBg1}
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
                <div className=" absolute z-50">
                  <h3 className="flex w-fit justify-center text-2xl items-center gap-2.5 p-5 relative z-50">
                    {" "}
                    <span className="text-[#61DBFB]">
                      <FaReact />
                    </span>{" "}
                    REACT JS
                  </h3>
                </div>
                <div className="flex flex-col gap-5 w-[14%] pl-5 bottom-36 absolute z-50 ">
                  <div className="absolute">
                    <p className="text-[17px] sm:text-[1vw]">
                      React is a JavaScript library for building interactive
                      user interfaces. It uses reusable components to create
                      scalable and maintainable applications.
                    </p>
                  </div>
                </div>
                  <div className="flex justify-center gap-2 items-center absolute bottom-5 pl-5 w-[12%] z-50">
                    <div className="w-full bg-white/30 border-white/20 backdrop-blur-2xl absolute  shadow-xl shadow-black/25  h-3 rounded-2xl">
                      <div className="w-[50%] bg-[#61DBFB] h-3 rounded-2xl"></div>
                    </div>
                    <div>
                      <h1 className=" relative pl-82 right-0 text-[15px]">
                        50%
                      </h1>
                    </div>
                  </div>
              </div>
              <div className=" flex flex-col justify-between gap-5 bg-white/10 h-108 w-90 rounded-2xl">
              <div className=" w-full rounded-2xl">
                  <video
                    className=" w-full h-[67.5%] object-cover rounded-2xl relative z-30 "
                    src={githubBg1}
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
                <div className=" absolute z-50">
                  <h3 className="flex w-fit justify-center text-2xl items-center gap-2.5 p-5 relative z-50">
                    <span className="text-[#969fa9]">
                      <FaGithub />
                    </span>{" "}
                    GIT AND GITHUB
                  </h3>
                </div>
                <div className="flex flex-col gap-5 w-[14%] pl-5 bottom-36 absolute z-50 ">
                  <div className="absolute">
                    <p className="text-[17px] sm:text-[1vw]">
                      GitHub is a cloud-based platform for hosting Git
                      repositories. It enables developers to collaborate, review
                      code, and manage projects online.
                    </p>
                  </div>
                </div>
                  <div className="flex justify-center gap-2 items-center absolute bottom-5  pl-5 w-[12%] z-50">
                    <div className="w-full bg-white/30 border-white/20 backdrop-blur-2xl absolute  shadow-xl shadow-black/25  h-3 rounded-2xl">
                      <div className="w-[90%] bg-[#2b3137] h-3 rounded-2xl"></div>
                    </div>
                    <div>
                      <h1 className=" relative pl-82 right-0 text-[15px]">
                        45%
                      </h1>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
