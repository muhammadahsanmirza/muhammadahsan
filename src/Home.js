import React from "react";
// import ProfilePicture from "./Images/ProfilePicture.png";
import profile from "./Images/profile.JPG";
import Typing from "react-typing-effect";

const Portfolio = () => {
  const services = [
    "Web Developer",
    "Frontend Design",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    // "API Development",
    // "Freelancer",
  ];

  return (
    <div id="#" className="relative flex flex-col items-center justify-center ">
      <img
        className="mx-auto  bg-cover  w-full mt-20"
        src={profile}
        alt="Muhammad Ahsan"
      />
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big text-indigo-600 rounded-full -z-10"></div>
      <div className="absolute top-2/3 left-5 text-xl sm:left-10 sm:text-4xl mt-24 md:left-1/4 md:text-6xl lg:left-5 xl:left-35 xl:text-7xl font-bold">
        <span className="text-black">Muhammad Ahsan</span>
        <br />
        <Typing
          text={services}
          speed={50}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={1000}
          className="text-red-500"
        />
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/4 mt-28 mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          Hi, I am Muhammad Ahsan
        </h1>
        <p className="text-gray-400 dark:text-white text-justify">
          I’m a passionate Full Stack Developer who loves building real-time,
          scalable applications. From crafting responsive font-end designs to architecting robust back-end systems with Node.js and MongoDB,
          I bring ideas to life with clean and efficient code. 
          <br/>
          Explore my work and let’s create something amazing together!
        </p>
        <a
          className="bg-indigo-600 text-white text-center text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
