import React from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 "
      >
        <div className="md:container md:mx-auto px-5 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-1 md:py-1 bg-auto hover:shadow-lg bg-gray">
          <div className="hero bg- min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={pic}
                style={{ width: '300px', height: '300px' }} // Adjust the width and height as needed
                className="rounded-lg shadow-2xl"
                alt="Hero"
              />
              <div className="mt-4">
                <h1 className="text-5xl text-[#334155] font-bold">Aftab Akram</h1>
                <p className="py-6">
                  As a frontend web developer, I specialize in creating visually stunning and highly responsive user interfaces that provide an exceptional user experience across all devices.
                </p>
                <button className="bg-[#334155] text-white px-4 py-2 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-3 md:p-4 mb-40">
          
<p className='text-[#334155] font-bold'>Wellcom in my feed</p>
          <h1 className="text-4xl "> <span>I'm a    </span>
          <ReactTyped className='text-red-700 font-bold'
          
          strings={["Developer" ,"Coder " ,"Progarmar"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          </h1>
          <p className="mt-4 text-lg">
            Leveraging the latest in HTML, CSS, JavaScript, and modern frameworks like React, I build dynamic and interactive web applications that meet the needs of today's digital landscape.
          </p>
          <button className=" text-[#334155]  px-4 py-2 font-bold rounded-lg mt-5">
                  
                </button>

           {/* social media icons */}
           <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on Social Media </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
    </div>
 
    </div></div>
    </div></div>
    
     

      <hr />
    </>
  );
}

export default Home;
