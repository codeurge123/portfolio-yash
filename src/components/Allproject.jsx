import React from 'react'
import { Link } from 'react-router-dom'
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Pointer,
  Globe,
  GitBranch,
} from "lucide-react";
import Modal from './Modal'
import skincurex from '../assets/skincurex.png'
import creatx from '../assets/creatx.png'
import query from '../assets/query.png'
// SideBar removed on this page to center content
export default function Allproject() {

  const [selectedProject, setSelectedProject] = React.useState(null);
  const [showReadMore, setShowReadMore] = React.useState(false);

  const completeApps = [
    {
      id: 1,
      title: "Creatx",
      description: "Currently working on this - stay tuned for more updates",
      tech: ["Reactjs", "TailwindCSS", "Node.js"],
      image: creatx,
      githubUrl: "https://github.com/codeurge123/Creatx",
      status: "In Progress",
      liveUrl: "https://creatxui.vercel.app/"
    },
    {
      id: 2,
      title: "SwiftRoute",
      description: "AI Trip Planner suggesting optimized travel routes and personalized itineraries",
      tech: ["JavaScript", "React", "TailwindCSS", "Firebase", "Gemini API"],
      image: "../public/swiftroute.png",
      githubUrl: "https://github.com/codeurge123/SwiftRoute",
      status: "Live"
    },
    {
      id: 3,
      title: "QueryDocs",
      description: "Web application for study MySQL",
      tech: ["React", "TailwindCSS", "Node.js", "vercel"],
      image: query,
      githubUrl: "https://github.com/codeurge123/QueryDocs",
      status: "Live",
      liveUrl: "https://query-docs-sql.vercel.app/#install"
    },
    {
      id: 4,
      title: "Alexa-PersonalAssistant",
      description: "This is the python project which can perform any of the tasks only by listening to you",
      tech: ["Python", "SpeechRecognition", "pyttsx3"],
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=300&h=200&fit=crop",
      githubUrl: "https://github.com/codeurge123/Alexa-PersonalAssistant",
      status: "Live"
    },
    {
      id: 5,
      title: "DIJI-YATRA",
      description: "Project on DSA to find the shortest path and optimize based on traffic conditions",
      tech: ["C++", "Graphs", "Data Structures"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
      githubUrl: "https://github.com/codeurge123/DIJI-YATRA",
      status: "Live"
    },
    {
      id: 6,
      title: "SkinCureX",
      description: "Software to provide early detection of skin diseases",
      image: skincurex,
      tech: ["JavaScript", "HTML", "CSS", "Python", "TensorFlow", "ML"],
      githubUrl: "https://github.com/codeurge123/SkinCureX",
      status: "Live"
    }
  ];

  const smallProjects = [
    {
      id: 6,
      title: "YT-Speed-Controller-Extension",
      description: "A chrome extension to control YouTube playback speed easily",
      tech: ["JavaScript", "HTML", "CSS", "Chrome Extension"],
      githubUrl: "https://github.com/codeurge123/YT-Speed-Controller-Extension",
      status: "Live"
    },
    {
      id: 7,
      title: "To-Do-react",
      description: "Manage To-Do tasks with this simple React app featuring add, delete, and mark as complete functionalities",
      tech: ["JavaScript", "React", "tailwindCSS"],
      githubUrl: "https://github.com/codeurge123/To-Do-react",
      status: "Live",
      liveUrl: "https://to-do-react-ruddy-zeta.vercel.app/"
    },
    {
      id: 8,
      title: "leetcode-roaster",
      description: "Get Roasted (React, API, Tailwind CSS)",
      tech: ["JavaScript", "React", "Tailwind CSS", "API"],
      githubUrl: "https://github.com/codeurge123/leetcode-roaster",
      status: "Live",
      liveUrl: "https://leetcode-roaster-inky.vercel.app/"
    },
    {
      id: 9,
      title: "QR-Code-Generator",
      description: "It is QR code generator for any URL or text it generates QR code",
      tech: ["CSS", "HTML", "JavaScript", "API"],
      githubUrl: "https://github.com/codeurge123/QR-Code-Generator",
      status: "Live"
    },
    {
      id: 10,
      title: "currency-converter-react",
      description: "happy coding",
      tech: ["JavaScript", "React", "API", "TailwindCSS", "Vercel"],
      githubUrl: "https://github.com/codeurge123/currency-converter-react",
      status: "Live",
      liveUrl: "https://currency-converter-react-self.vercel.app/"
    },
  ];

  const ProjectCard = ({ project, isLarge = false }) => (
    <div className={`max-w-sm w-full bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-transform duration-300 hover:scale-105 cursor-pointer`} onClick={() => setSelectedProject(project)}>
      {isLarge && project.image && (
        <div className="h-48 bg-gray-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 "
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

        <div className="flex gap-2 items-center">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors">
              {project.status === "Live" ? "Live" : "View"} <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors">
              Github <Github size={14} />
            </a>
          )}
          {project.figmaUrl && (
            <a href={project.figmaUrl} target="_blank" rel="noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors">
              Figma <ExternalLink size={14} />
            </a>
          )}
          {project.status === "Cached" && (
            <span className="bg-yellow-600 text-black px-3 py-1 rounded text-sm font-semibold">
              Cached
            </span>
          )}
          <button onClick={() => setSelectedProject(project)} className="ml-auto text-sm text-purple-400 hover:underline">Details →</button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="all-projects" className="min-h-screen bg-gray-900 text-white flex justify-center">
      <div className="w-full px-6 py-8 max-w-6xl">
        <div className="mb-4 hover:translate-x-[-8px] transition-all duration-150">
          <Link
            to="/"
            className="flex hover:translate-x-[-2px] text-md transition-all items-center space-x-2 text-white hover:text-purple-400 "
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl justify-around font-bold"><p className="text-gray-400">List of my projects</p></h1>
        </div>

        {/* Complete Apps Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">
            <span className="text-purple-400">#</span>complete-apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {smallProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>

      {/* footer removed for focused Allproject page */}

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
      {selectedProject && (
        <Modal open={!!selectedProject} onClose={() => { setSelectedProject(null); setShowReadMore(false) }} title={selectedProject.title}>
          <div className="space-y-4">
            <p className="text-gray-300">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech?.map((t, i) => (
                <span key={i} className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            {!showReadMore ? (
              <div className="flex gap-2">
                <a href={selectedProject.liveUrl || '#'} className="text-purple-400 hover:underline">Open</a>
                <button onClick={() => setShowReadMore(true)} className="ml-auto bg-blue-600 px-3 py-1 rounded">Read more</button>
              </div>
            ) : (
              <div>
                <h4 className="font-semibold">Skills & Experience</h4>
                <p className="text-gray-300 text-sm mt-2">I interned at Delhi Transco Limited where I gained practical experience in electrical grid operations, monitoring and documenting system performance, and assisting with automation scripts. Skills: React, Node.js, basic networking, troubleshooting, and teamwork during field visits.</p>
                <div className="mt-4 flex justify-end">
                  <button onClick={() => { setShowReadMore(false); setSelectedProject(null) }} className="px-3 py-1 bg-green-600 rounded">Close</button>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

// export default Allproject;