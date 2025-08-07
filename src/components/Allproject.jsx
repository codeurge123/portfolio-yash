import React from 'react'
import NavBar from './NavBar'
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";
export default function Allproject() {

const [selectedProject, setSelectedProject] = React.useState(null);

  const completeApps = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      tech: ["HTML", "SCSS", "Python", "Flask"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
      liveUrl: "#",
      status: "Live"
    },
    {
      id: 2,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      tech: ["CSS", "Express", "Node.js"],
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=300&h=200&fit=crop",
      liveUrl: "#",
      status: "Live"
    },
    {
      id: 3,
      title: "ProtectX",
      description: "Discord anti-crash bot",
      tech: ["React", "Express", "Discord.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      status: "Cached"
    },
    {
      id: 4,
      title: "Kotik Bot",
      description: "Multi-functional discord bot",
      tech: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=300&h=200&fit=crop",
      liveUrl: "#",
      status: "Live"
    },
    {
      id: 5,
      title: "Portfolio",
      description: "You're using it rn",
      tech: ["Vue", "TS", "Less"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop",
      githubUrl: "#",
      status: "Github"
    }
  ];

  const smallProjects = [
    {
      id: 6,
      title: "Bot boilerplate",
      description: "Start creating scalable discord.js bot with typescript in seconds",
      tech: ["Discord.js", "TS", "JS"],
      githubUrl: "#"
    },
    {
      id: 7,
      title: "My blog",
      description: "Front-end of my future blog website written in vue",
      tech: ["VUE", "CSS", "JS"],
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Chess pro",
      description: "Figma landing page about survival for viewing chess tournaments",
      tech: ["Figma"],
      figmaUrl: "#"
    },
    {
      id: 9,
      title: "Crash protect website",
      description: "Figma template for website about anti-raid, anti-crash discord bot",
      tech: ["Figma"],
      figmaUrl: "#"
    },
    {
      id: 10,
      title: "CSS expirements",
      description: "Collection of my different little projects in css",
      tech: ["HTML", "CSS"],
      liveUrl: "#"
    },
    {
      id: 11,
      title: "Web Dev nvim config",
      description: "Config for neovim perfect for web developer",
      tech: ["Lua", "NeoVim"],
      githubUrl: "#"
    },
    {
      id: 12,
      title: "Ooku",
      description: "Simple link shortener with auth",
      tech: ["Python", "Quart", "HTML"],
      liveUrl: "#"
    },
    {
      id: 13,
      title: "School website",
      description: "Figma template website for my school",
      tech: ["Figma"],
      figmaUrl: "#"
    }
  ];

  const ProjectCard = ({ project, isLarge = false }) => (
    <div 
      className={`bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 ${isLarge ? 'h-64' : 'h-auto'}`}
      onClick={() => setSelectedProject(project)}
    >
      {isLarge && project.image && (
        <div className="h-32 bg-gray-900 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex gap-2">
          {project.liveUrl && (
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors">
              {project.status === "Live" ? "Live" : "View"} <ExternalLink size={14} />
            </button>
          )}
          {project.githubUrl && (
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors">
              Github <Github size={14} />
            </button>
          )}
          {project.figmaUrl && (
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors">
              Figma <ExternalLink size={14} />
            </button>
          )}
          {project.status === "Cached" && (
            <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">
              Cached
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
            <span className="text-xs font-bold">E</span>
          </div>
          <span className="font-semibold">Elias</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#home" className="text-purple-400 hover:text-purple-300 transition-colors">#home</a>
          <a href="#works" className="text-gray-400 hover:text-gray-300 transition-colors">#works</a>
          <a href="#about-me" className="text-gray-400 hover:text-gray-300 transition-colors">#about-me</a>
          <a href="#contacts" className="text-gray-400 hover:text-gray-300 transition-colors">#contacts</a>
          <span className="text-gray-400">EN</span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-12 border-r border-gray-800 flex flex-col items-center py-4 gap-4">
          <Github className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
          <Globe className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
          <GitBranch className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-purple-400">/</span>projects
            </h1>
            <p className="text-gray-400 mb-8">List of my projects</p>

            {/* Complete Apps Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6">
                <span className="text-purple-400">#</span>complete-apps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completeApps.map((project) => (
                  <ProjectCard key={project.id} project={project} isLarge={true} />
                ))}
              </div>
            </section>

            {/* Small Projects Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">
                <span className="text-purple-400">#</span>small-projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {smallProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 p-6">
        <div className="flex justify-between items-center max-w-6xl ml-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold">E</span>
              </div>
              <span className="font-semibold">Elias</span>
              <span className="text-gray-400">elias@elias-dev.ml</span>
            </div>
            <p className="text-gray-400 text-sm">Web designer and front-end developer</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Media</h3>
            <div className="flex gap-3">
              <Github className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <GitBranch className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <Globe className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© Copyright 2022. Made by Elias</p>
        </div>
      </footer>

      {/* Decorative dots */}
      <div className="fixed top-1/4 left-4 opacity-20">
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-1/4 right-4 opacity-20">
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default Allproject;