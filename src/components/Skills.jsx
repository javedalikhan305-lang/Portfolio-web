import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiRedux,
  SiJson,
  SiNpm,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: "MERN Stack",
      icon: "⚡",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express.js", icon: SiExpress },
        { name: "React.js", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
      ],
    },
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS", isText: true },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
      ],
    },
    {
      name: "Tools",
      icon: "🔧",
      skills: [
        { name: "VS Code", icon: VscVscode },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "NPM", icon: SiNpm },
        { name: "JSON", icon: SiJson },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24"
      style={{
        background: "#0f0f0f",
      }}
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#ffffff" }}
          >
            My <span style={{ color: "#d4af37" }}>Skills</span>
          </h2>

          <p
            className="max-w-2xl mx-auto"
            style={{ color: "#b8b8b8" }}
          >
            Technologies I work with as a MERN Stack Developer
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.15 }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">{category.icon}</span>

                <h3
                  className="text-2xl font-bold"
                  style={{ color: "#d4af37" }}
                >
                  {category.name}
                </h3>

                <div
                  className="flex-1 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(212,175,55,0.5), transparent)",
                  }}
                />
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      delay:
                        0.2 +
                        catIndex * 0.1 +
                        index * 0.05,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="rounded-2xl p-6 text-center transition-all duration-300"
                    style={{
                      background: "#1a1a1a",
                      border:
                        "1px solid rgba(212,175,55,0.2)",
                      boxShadow:
                        "0 0 20px rgba(212,175,55,0.05)",
                    }}
                  >
                    <div className="flex flex-col items-center">

                      {/* Icon */}
                      <div className="mb-4">
                        {skill.isText ? (
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center font-bold"
                            style={{
                              background:
                                "rgba(212,175,55,0.1)",
                              color: "#d4af37",
                              border:
                                "1px solid rgba(212,175,55,0.2)",
                            }}
                          >
                            CSS
                          </div>
                        ) : (
                          <skill.icon
                            size={42}
                            style={{
                              color: "#d4af37",
                            }}
                          />
                        )}
                      </div>

                      {/* Skill Name */}
                      <h4
                        className="font-medium"
                        style={{ color: "#ffffff" }}
                      >
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;