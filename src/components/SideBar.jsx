import React from "react";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";

export default function SideBar() {
  return (
    <>
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        {/* <div className="h-40 w-1 border"></div> */}
        <div className="flex flex-col space-y-4">
          <a
            href="https://github.com/codeurge123"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <Dribbble className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <a
            href="https://www.linkedin.com/in/yash-bansal-a67562286/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
    </>
  );
}
