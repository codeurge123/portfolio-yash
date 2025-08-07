import React from "react";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";

export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Github className="w-5 h-5 cursor-pointer" />
              <span className="font-mono text-lg font-bold">Yash Bansal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors"
              >
                #home
              </a>
              <a
                href="#works"
                className="hover:text-purple-400 transition-colors"
              >
                #works
              </a>
              <a
                href="#about-me"
                className="hover:text-purple-400 transition-colors"
              >
                #about-me
              </a>
              <a
                href="#contacts"
                className="hover:text-purple-400 transition-colors"
              >
                #contacts
              </a>
              <select className="bg-gray-900 cursor-pointer border-none rounded text-white">
                <option>EN</option>
                <option>FR</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
