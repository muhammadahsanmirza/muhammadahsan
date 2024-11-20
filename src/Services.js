import React, { useEffect, useId } from "react";
import { FaReact, FaBootstrap, FaDatabase, FaNodeJs } from "react-icons/fa";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { gsap } from "gsap";
import {
  SiMicrosoftazure,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiMantine,
} from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ isDarkMode }) => {
  const id = useId();
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
    {
      name: "Javascript",
      icon: <IoLogoJavascript className="text-yellow-400" />,
    },
    { name: "React JS", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "Mantine", icon: <SiMantine className="text-blue-500" /> },
    { name: "Node js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Mongo DB", icon: <SiMongodb className="text-green-600" /> },
    { name: "My SQL", icon: <FaDatabase className="text-blue-700" /> },
    {
      name: "Azure Authentication",
      icon: <SiMicrosoftazure className="text-sky-400" />,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".skill",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      id="services"
      className={`flex flex-col  items-center p-8 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="md:w-full text-center">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">Skills</h2>
        <p className="mb-6 text-gray-400 text-center dark:text-white">
          Proficient in front-end and back-end technologies, crafting seamless
          digital experiences with modern tools and frameworks.
        </p>
      </div>

      <div className="skills-section grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center">
        {skills.map((skill) => (
          <div key={id} className="flex flex-col items-center skill mb-6">
            <span className="text-4xl mb-2">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
