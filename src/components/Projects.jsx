// ===========================
// LUXURY PROJECTS SECTION
// Black + Gold Theme
// ===========================

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Kriptos - Anonymous Community Board",
      description:
        "Anonymous community platform where users can post, react, and comment while maintaining privacy.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux",
        "Tailwind CSS",
      ],
      features: [
        "Anonymous posting system",
        "JWT Authentication",
        "Role-based access",
        "Comments & Reactions",
        "Content moderation",
        "Responsive UI",
      ],
      github:
        "https://github.com/javedalikhan305-lang/anonymous-community-board.git",
      live: "https://anonymous-community-board.onrender.com/",
      image: "/kriptos.png",
    },

    {
      title: "ImaginX - Social Media Platform",
      description:
        "Modern social media platform with posts, likes, comments and user interaction.",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux",
        "Tailwind CSS",
      ],
      features: [
        "Create Posts",
        "Like & Comment",
        "JWT Authentication",
        "Profile Management",
        "Responsive Design",
        "Real-time UI",
      ],
      github:
        "https://github.com/javedalikhan305-lang/Social-media-platform.git",
      live: "https://social-media-platform-1-enmx.onrender.com",
      image: "/imaginx.png",
    },

    {
      title: "AI Helper",
      description:
        "AI-powered assistant that helps users with coding, writing and productivity tasks.",
      tech: ["React.js", "Tailwind CSS", "OpenAI API", "JavaScript"],
      features: [
        "Chat Interface",
        "Code Generation",
        "Text Summarization",
        "Content Writing",
        "Language Translation",
      ],
      github: "https://github.com/intikhabaalam/ai-helper",
      live: "https://ai-helper-dusky.vercel.app/",
      image: "/ai-helper image.png",
    },

    {
      title: "Kal Tak News",
      description:
        "Real-time news platform with category filtering and search functionality.",
      tech: ["React.js", "Tailwind CSS", "News API", "JavaScript"],
      features: [
        "Breaking News",
        "Search News",
        "Bookmark Articles",
        "Category Filters",
        "Dark Mode",
      ],
      github: "https://github.com/intikhabaalam/kal-tak",
      live: "https://kal-tak-ehc2.vercel.app/",
      image: "/kal-tak image.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24"
      style={{
        background: "#0f0f0f",
      }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: "#fff" }}
        >
          My <span style={{ color: "#d4af37" }}>Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
          style={{ color: "#b8b8b8" }}
        >
          Here are some of my featured MERN stack projects.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl"
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#fff" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mb-5"
                  style={{ color: "#b8b8b8" }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        background:
                          "rgba(212,175,55,0.12)",
                        color: "#d4af37",
                        border:
                          "1px solid rgba(212,175,55,0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all"
                    style={{ color: "#b8b8b8" }}
                  >
                    <FiGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    style={{ color: "#d4af37" }}
                  >
                    <FiExternalLink />
                    Demo
                  </a>

                  <button
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    className="ml-auto font-medium"
                    style={{ color: "#d4af37" }}
                  >
                    Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(0,0,0,0.9)",
          }}
        >
          <div
            className="max-w-3xl w-full rounded-2xl overflow-hidden"
            style={{
              background: "#1a1a1a",
              border:
                "1px solid rgba(212,175,55,0.2)",
            }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <div className="flex justify-between mb-6">
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "#d4af37" }}
                >
                  {selectedProject.title}
                </h3>

                <button
                  onClick={() =>
                    setSelectedProject(null)
                  }
                  className="text-2xl"
                  style={{ color: "#fff" }}
                >
                  ✕
                </button>
              </div>

              <p
                className="mb-6"
                style={{ color: "#c0c0c0" }}
              >
                {selectedProject.description}
              </p>

              <h4
                className="font-bold mb-3"
                style={{ color: "#fff" }}
              >
                Features
              </h4>

              <ul
                className="space-y-2 mb-8"
                style={{ color: "#b8b8b8" }}
              >
                {selectedProject.features.map(
                  (feature, i) => (
                    <li key={i}>
                      • {feature}
                    </li>
                  )
                )}
              </ul>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg flex items-center gap-2"
                  style={{
                    background: "#2a2a2a",
                    color: "#fff",
                  }}
                >
                  <FiGithub />
                  View Code
                </a>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg flex items-center gap-2"
                  style={{
                    background: "#d4af37",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;