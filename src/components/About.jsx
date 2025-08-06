import React from "react";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";
export default function About() {
  return (
    <>
      <section id="about-me" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl flex items-center font-bold mb-12">
            <span className="text-purple-400">#</span>about-me
            <div className="h-0 w-96 ml-5 border border-purple-400"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed selection:text-black selection:bg-purple-400">
                Hello, I'm Yash!
              </p>
              <p className="text-gray-300 leading-relaxed selection:text-black selection:bg-purple-400">
                I'm a dedicated software developer with a strong interest in
                full-stack development and problem-solving. I enjoy turning
                ideas into functional, scalable applications using technologies
                like React.js, Node.js, and MongoDB. I actively practice data
                structures and algorithms to sharpen my logic-building skills
                and stay technically sound.
              </p>
              <p className="text-gray-300 leading-relaxed selection:text-black selection:bg-purple-400">
                With a strong eye for clean design and efficient code, I strive
                to build products that not only work well but also provide great
                user experiences. I’m always learning and looking for
                opportunities to grow as a developer and contribute to impactful
                software projects.
              </p>
              <div className="flex items-center hover:translate-x-1 transition-all">
                <button className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center space-x-2">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-96 bg-gray-800 rounded-lg mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
                  {/* <img src={AboutImage} className='overflow-auto h-80 w-96' alt="" /> */}
                </div>
                <div className="absolute top-4 right-4 grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-white rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 grid grid-cols-6 gap-1">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-purple-400 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
