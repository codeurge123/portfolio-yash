import React, { useState } from "react";
import "../App.css";
import AboutImage from "../assets/AboutImage.png";
import emailjs from "emailjs-com";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import QuoteSection from "./QuoteSection";
import skincurex from "../assets/skincurex.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SkinCureX",
      description:
        "SkinCureX is an AI-based web app that detects skin diseases from images, helping users with early diagnosis and awareness",
      tags: ["HTML", "CSS", "Python", "Javascript","TensorFlow","ML"],
      image: skincurex,
      links: { live: "", cached: "https://github.com/codeurge316/SkinCureX" },
    },
    {
      id: 2,
      title: "Diji-Yatra",
      description:
        "Digi-Yatra is a route optimization system that detects the shortest path for travelers within airports, enhancing navigation and reducing transit time",
      tags: ["C++", "Graph", "Data Structure"],
      image: "bg-green-600",
      links: { cached: "https://github.com/codeurge123/DIJI-YATRA"},
    },
    {
      id: 3,
      title: "SwiftRoute",
      description:
        "SwiftRoute is an AI-powered trip planner that suggests optimized travel routes, personalized itineraries, and smart recommendations based on user preferences",
      tags: ["React", "TailwindCSS", "Firebase", "API" , "Javascript"],
      image: "bg-purple-600",
      links: { cached: "https://github.com/codeurge123/swiftroute" },
    },
  ];

  const skills = {
    languages: ["C++", "Python", "JavaScript"],
    databases: ["MySQL", "MongoDB"],
    tools: [
      "VSCode",
      "Google Colab",
      "Postman",
      "Linux",
      "Figma",
      "Git",
      "Github",
    ],
    other: ["HTML", "CSS", "REST", "APIs"],
    frameworks: ["React", "SCSS", "Node.js", "Express.js", "TailwindCss"],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      {/* Navigation */}
      <NavBar />

      {/* Side Navigation */}
      <SideBar />

      {/* Hero Section */}
      <Hero />

      {/* Quote Section */}
      <QuoteSection />

      {/* Projects Section */}
      <Project projects={projects} />

      {/* All Projects page is available at /projects (router) */}

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* About Section */}
      <About />

      {/* Contacts Section */}
      <Contact  />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
