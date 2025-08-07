import React from "react";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/codeurge123"
                  target="_blank"
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  <Github className="w-5 h-5 " />
                </a>
                <span className="font-mono font-bold selection:text-gray-800 selection:bg-purple-400">Yash Bansal</span>
              </div>
              <span className="text-gray-400 selection:text-black selection:bg-purple-400">bansalyash316@gmail.com</span>
              <span className="text-gray-400 selection:text-black selection:bg-purple-400">
                Problem Solver and full-stack developer
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 selection:text-black selection:bg-purple-400">Media &nbsp; | </span>
              <div className="flex space-x-3">
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Dribbble className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8 selection:text-black selection:bg-purple-400">
            © Copyright 2025. Made with Reactjs
          </div>
        </div>
      </footer>
    </>
  );
}
