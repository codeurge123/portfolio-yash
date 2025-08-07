import React from "react";

export default function Skills({skills}) {
  return (
    <>
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl items-center flex font-bold mb-12">
            <span className="text-purple-400">#</span>skills
            <div className="h-0 w-96 ml-5 border border-purple-400"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute top-8 left-8 grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-purple-400 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="mt-20 space-y-8">
                <div className="flex gap-2">
                  <div className="w-32 h-32 border-2 border-gray-600"></div>
                  <div className="w-32 h-32 border-2 border-gray-600 "></div>
                </div>
                <div className="w-32 h-32 border-2 border-purple-400 animate-pulse relative left-16 bottom-16"></div>
                <div className="flex space-x-4">
                  <div className="w-16 h-16 border border-purple-400 animate-pulse relative bottom-11"></div>
                  <div className="w-16 h-16 border border-purple-400 animate-pulse"></div>
                  <div className="w-16 h-16 border border-gray-600 relative bottom-16"></div>
                </div>
                <div className="grid grid-cols-4 gap-1 w-20">
                  {/* for dots ye kara hai */}
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-gray-600 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="border border-gray-700 hover:bg-gray-800 transition-all duration-100">
                  <div className="bg-gray-800 px-4 py-2 border-b  border-gray-700 ">
                    <h3 className="font-bold selection:text-gray-900 selection:bg-purple-400 capitalize">
                      {category.replace("_", " ")}
                    </h3>
                  </div>
                  <div className="p-4  space-y-1 ">
                    {items.map((item, i) => (
                      <div
                        key={i}
                        className="text-gray-300 selection:text-black selection:bg-purple-400  text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
