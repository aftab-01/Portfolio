import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
  
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
            
          ))}
            <div >
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* HTML Card */}
          <div >
            <div className="bg-white shadow-lg rounded-full p-6 w-60 h-60 flex flex-col justify-center items-center transition transform hover:scale-110">
              <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" alt="HTML" className="w-24 h-24 mb-2" />
              <div className="text-2xl font-bold mb-2">HTML</div>
              <p className="text-gray-700 text-center">Markup Language</p>
            </div>
          </div>

          {/* CSS Card */}
          <div >
            <div className="bg-white shadow-lg rounded-full p-6 w-60 h-60 flex flex-col justify-center items-center transition transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="w-24 h-24 mb-2" />
              <div className="text-2xl font-bold mb-2">CSS</div>
              <p className="text-gray-700 text-center">Styling Language</p>
            </div>
          </div>

          {/* JavaScript Card */}
          <div >
            <div className="bg-white shadow-lg rounded-full p-6 w-60 h-60 flex flex-col justify-center items-center transition transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" className="w-24 h-24 mb-2" />
              <div className="text-2xl font-bold mb-2">JavaScript</div>
              <p className="text-gray-700 text-center">Programming Language</p>
            </div>
          </div>

          {/* React.js Card */}
          <div >
            <div className="bg-white shadow-lg rounded-full p-6 w-60 h-60 flex flex-col justify-center items-center transition transform hover:scale-110">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" className="w-24 h-24 mb-2" />
              <div className="text-2xl font-bold mb-2">React.js</div>
              <p className="text-gray-700 text-center">JavaScript Library</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
