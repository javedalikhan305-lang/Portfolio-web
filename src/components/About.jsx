import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGamepad,
  FaPenFancy,
  FaPlane,
  FaQuoteRight,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    { icon: FaGamepad, text: "Playing Games" },
    { icon: FaPenFancy, text: "Writing Tech Blogs" },
    { icon: FaPlane, text: "Traveling & Exploring" },
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, #0c0a06, #1a1400)",
      }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold mb-16"
          style={{ color: "#f5f0e0" }}
        >
          Know <span style={{ color: "#d4af37" }}>Who I'M</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: "#f5f0e0" }}
              >
                Hi, I'm{" "}
                <span style={{ color: "#d4af37" }}>Javed Khan</span>
              </h3>

              <p style={{ color: "#d4af37" }}>
                MERN Full Stack Developer | React & Node.js
              </p>

              <p className="mt-3" style={{ color: "#7a6e58" }}>
                Passionate about building modern, scalable and responsive web
                applications using MongoDB, Express.js, React and Node.js.
              </p>
            </div>

            {/* Education */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderLeft: "4px solid #d4af37",
              }}
            >
              <div className="flex gap-3">
                <FaGraduationCap
                  className="text-2xl"
                  style={{ color: "#d4af37" }}
                />
                <div>
                  <h4 style={{ color: "#f5f0e0" }}>
                    BSc Computer Science
                  </h4>
                  <p style={{ color: "#7a6e58" }}>
                    Barkatullah University, Bhopal • 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderLeft: "4px solid #d4af37",
              }}
            >
              <div className="flex gap-3">
                <FaAward
                  className="text-2xl"
                  style={{ color: "#d4af37" }}
                />
                <div>
                  <h4 style={{ color: "#f5f0e0" }}>
                    E-Skill Web Certification
                  </h4>
                  <p style={{ color: "#7a6e58" }}>
                    MERN Full Stack Development
                  </p>
                </div>
              </div>
            </div>

            {/* Open To Work */}
            <div
              className="inline-block px-4 py-2 rounded-full"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#d4af37",
              }}
            >
              ✨ Open To Work • Fresher
            </div>

            {/* Interests */}
            <div>
              <h4
                className="mb-4 font-semibold"
                style={{ color: "#f5f0e0" }}
              >
                Outside of coding:
              </h4>

              <div className="flex flex-wrap gap-3">
                {interests.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(212,175,55,0.05)",
                      border: "1px solid rgba(212,175,55,0.15)",
                    }}
                  >
                    <item.icon style={{ color: "#d4af37" }} />
                    <span style={{ color: "#f5f0e0" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <FaQuoteRight
                className="float-right text-2xl"
                style={{ color: "#d4af37" }}
              />

              <p
                className="italic"
                style={{ color: "#f5f0e0" }}
              >
                "Strive to build things that make a difference!"
              </p>

              <p
                className="text-right mt-2"
                style={{ color: "#d4af37" }}
              >
                — Javed Khan
              </p>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.4), transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-3xl"
                style={{
                  border: "3px solid rgba(212,175,55,0.35)",
                  boxShadow:
                    "0 0 25px rgba(212,175,55,0.25), 0 0 60px rgba(212,175,55,0.15)",
                }}
              >
                <img
                  src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
                  alt="Javed Khan"
                  className="w-full max-w-lg"
                  style={{
                    filter:
                      "sepia(20%) saturate(120%) brightness(1.05)",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <span style={{ color: "#7a6e58" }}>
            📍 Based in Bhopal, India 🇮🇳
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;