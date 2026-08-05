import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ContactBack from "../video/ContactSection.mp4";
import { FaLocationArrow } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
gsap.registerPlugin(useGSAP);
const Contact = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")
  const [yourName, setyourName] = useState("")
  const [youremail, setyouremail] = useState("")
  const [Message, setMessage] = useState("")
  const [Subject, setSubject] = useState("")
  const [company, setcompany] = useState("")
  const resetclick = useRef()

  const SendEmali = (e)=>{
    e.preventDefault()

    let publicKeyId = "i-FljLcMaBCd_OsUE"
    let serviceId = "service_vv7g6p1"

    const Template = {
      user_name: name,
      user_email: email,
      user_phone: number,
      user_company: company,
      user_subject: Subject,
      user_message: Message,
      yourName: "Gaurav Kumar",
};


      console.log(Template)
    emailjs.send(serviceId, 'template_4vffvze', Template ,{
      publicKey:publicKeyId
    }).then(()=>{
      console.log("SUCCESS")
    }).then((err)=>{
      console.log("Failed", err)
    })

    resetclick.current.click()

  }


  return (
    <>
      <div className=" absolute w-full object-cover">
        <video
          src={ContactBack}
          className="w-[120%] h-206 object-cover blur-[1.5px]"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <div className="w-full sm:h-screen p-5 sm:pl-70 sm:pt-10 contact" id="Contact">
        <div className="">
          <h1 className=" sm:mt-0 text-[15vw] sm:text-[5vw] font-bold relative z-30 text-[#ffff23]">
            Contact Us
          </h1>
        </div>
        <div className=" flex h-[80%] w-[90%] gap-2 justify-center items-center relative z-30">
          <div className="hidden h-full w-[30%] sm:flex flex-col justify-around  rounded-2xl gap-7 text-white">
            <div>
              <h1 className="text-[2.5vw] font-bold text-white">Get In Touch</h1>
            </div>
            <div className=" flex flex-col gap-10 justify-between">
              <div className="flex items-center gap-6">
                <div className="text-[3vw] text-[#ffff23]">
                  <FaLocationArrow />
                </div>
                <div>
                  <h1 className="text-2xl">Location</h1>
                  <h1>Sector-11 , Gurugram</h1>
                  <h1>Haryana  122001</h1>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-[3vw] text-[#ffff23]">
                  <MdMarkEmailUnread />
                </div>
                <div>
                  <h1 className="text-2xl">EMAIL</h1>
                  <h1>yash35981@gmail.com</h1>
                  <h1>yk383450@gmail.com</h1>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-[3vw] text-[#ffff23]">
                  <IoIosCall />
                </div>
                <div>
                  <h1 className="text-2xl">MOBILE NO.</h1>
                  <h1>91+8587052298</h1>
                </div>
              </div>
            </div>
            <div>
              <hr className=" text-white w-[90%]" />
              <div className="flex flex-col gap2">
                <h3>Follow on Social Media</h3>
                <div className="flex gap-3 text-4xl">
                  <a href="">
                    <FaLinkedin />
                  </a>
                  <a href="">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/your_gauri7/" target="_main">
                    <FaInstagram />
                  </a>
                  <a href="https://github.com/COD-GAURAV" target="_main">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex h-full w-[0.1%] bg-white"></div>
          <div className="h-full w-full  sm:w-[70%] flex flex-col justify-start  text-white sm:px-10 sm:py-3  relative z-30">
            <h3 className="text-[5vw] mb-2 sm:mb-0 sm:text-[2.5vw] font-bold text-start">
              Send Us a Message
            </h3>
            <form
              action=""
              onSubmit={SendEmali}
              className="flex flex-col justify-around gap-2.5 sm:px-5 h-full w-full"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className=" w-full flex flex-col gap-2">
                  <h1>Name</h1>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="from_name"
                    onChange={(e)=> setname(e.target.value)}
                    className="border rounded border-white p-3 w-[111%] sm:w-full"
                  />
                </div>
                <div className=" w-full flex flex-col gap-2">
                  <h1 className=" whitespace-nowrap">Company (optional)</h1>
                  <input
                    type="text"
                    name="user_company"
                    placeholder=""
                    className="border rounded border-white p-3 w-[111%] sm:w-full"
                    onChange={(e)=> setcompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className=" w-full flex flex-col gap-2">
                  <h1 className="whitespace-nowrap">Phone (optional)</h1>
                  <input
                  name="user_phone"
                    type="text"
                    placeholder="Phone"
                    className="border w-[111%] rounded border-white p-3 sm:w-full"
                    onChange={(e)=> setnumber(e.target.value)}
                  />
                </div>
                <div className=" w-full flex flex-col gap-2">
                  <h1>Email</h1>
                  <input
                    type="email"
                    placeholder="Email"
                    name="from_email"
                    className="border rounded w-[111%] border-white p-3 sm:w-full"
                    onChange={(e)=> setemail(e.target.value)}
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col gap-2">
                <h1>Subject</h1>
                <input
                  type="text"
                  name="user_subject"
                  placeholder="Subject"
                  className="border rounded w-[111%] border-white p-3 sm:w-full"
                  onChange={(e)=> setSubject(e.target.value)}
                />
              </div>
              <div className=" w-full flex flex-col h-40 gap-2">
                <h1>Message</h1>
                <textarea
                  id=""
                  placeholder="Message"
                  name="user_message"
                  className="border resize-none h-[20vh] p-3  rounded w-[111%] border-white sm:w-full"
                  onChange={(e)=> setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="w-[111%] sm:w-full pt-1.5 flex justify-around">
                <button
                  type="submit"
                  className=" p-3 text-xl bg-[#ffff23] text-black rounded w-[45%]"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className=" p-3 text-xl bg-[#ffff23] text-black rounded w-[45%]"
                  ref={resetclick}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
