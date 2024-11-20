import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black px-10 dark:bg-slate-900 bg-white">
      <div className="container mx-auto justify-center py-10 flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="my-auto flex justify-center  flex-col gap-3">
          <h2 className="text-4xl text-center text-indigo-600 font-extrabold mb-4">
            About
          </h2>

          <p className="text-gray-400 text-center dark:text-white">
            I design and build digital products. I'm also a multi-disciplinary
            maker with over 3 years of experience in a wide range of design
            disciplines.
          </p>
          <div className="space-y-4">
            {/* <h1 className="text-indigo-600 text-2xl text-center font-extrabold mt-10">
              My Skills
            </h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* React */}
              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    React
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div> */}

              {/* JavaScript */}
              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    JavaScript
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div> */}

              {/* Node.js */}
              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    Node.js
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">83%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div> */}

              {/* Bootstrap */}
              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    Bootstrap
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-3/4 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div> */}

              {/* Redux */}
              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    Redux
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">66%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-2/3 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    Tailwind CSS
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div> */}

              {/* <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    My SQL
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-3/4 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-400 font-medium dark:text-gray-300">
                    Azure Authentication
                  </h2>
                  <span className="text-gray-400 dark:text-gray-300">65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-md">
                  <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
