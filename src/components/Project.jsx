import React from "react";
import { Link } from 'react-router-dom';
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";

export default function Project({ projects }) {
  return (
    <>
      <section id="works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold flex items-center">
              <span className="text-purple-400">#</span>projects
              <div className="h-0 w-96 ml-5 border border-purple-400"></div>
            </h2>
            <Link
              to="/projects"
              className="flex hover:translate-x-1 transition-all items-center space-x-2 text-white hover:text-purple-400 "
            >
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-700 hover:shadow-lg  hover:shadow-gray-800 hover:-translate-y-1.5 transition-all duration-100"
              >
                {typeof project.image === "string" &&
                project.image.startsWith("bg-") ? (
                  <div className={`w-full h-48 ${project.image}`}></div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover rounded"
                  />
                )}

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs cursor-pointer text-gray-400 hover:bg-gray-700 bg-gray-800 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold selection:text-gray-800 selection:bg-purple-400">{project.title}</h3>
                  <p className="text-gray-400 selection:text-black selection:bg-purple-400">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        className="border hover:translate-x-1 border-purple-400 text-purple-400 px-4 py-2 text-sm hover:bg-purple-400 hover:text-white transition-all"
                      >
                        Live -&gt;
                      </a>
                    )}
                    {project.links.cached && (
                      <a
                        href={project.links.cached}
                        target="_blank"
                        className="border border-gray-600 text-gray-400 px-4 py-2 text-sm hover:bg-gray-600 hover:text-white transition-all"
                      >
                        Cached &gt;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
