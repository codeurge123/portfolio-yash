import React from "react";

export default function Hero() {
  const currentlyWorking = "Portfolio";
  return (
    <>
      <section id="home" className="w-full pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 mb-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Yash Bansal is a{" "}
                  <span className="text-purple-400">Problem Solver</span> and
                  <br />
                  <span className="text-purple-400">full-stack developer</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md selection:text-black selection:bg-purple-400">
                  He crafts responsive websites where technologies meet
                  creativity
                </p>
              </div>
              <a href="#contacts">
              <button className="border border-purple-400 text-purple-400 px-6 py-3 mt-2 hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact me!!
              </button>
              </a>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 rounded-lg mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-purple-400"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-purple-400"></div>
                <div className="absolute top-1/2 right-8 grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-purple-400 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 text-sm flex items-center space-x-2">
                <div className="w-2 h-2 mr-1 bg-green-400 animate-ping rounded-full"></div>
                <span>
                  Currently working on <strong>{currentlyWorking}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
