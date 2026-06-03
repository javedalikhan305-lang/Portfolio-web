import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8"
      style={{
        background: "#0c0a06",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="mb-4 md:mb-0 text-xl font-bold">
            <span style={{ color: "#f5f0e0" }}>
              Javed
            </span>{" "}
            <span style={{ color: "#d4af37" }}>
              Khan
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 mb-4 md:mb-0 flex-wrap justify-center">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm transition-all duration-300"
                  style={{ color: "#a89b84" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#a89b84")
                  }
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/javedalikhan305-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: "#a89b84" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#d4af37")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#a89b84")
              }
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/javedkhan01/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: "#a89b84" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#d4af37")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#a89b84")
              }
            >
              <FiLinkedin size={20} />
            </a>

            <a
              href="mailto:javedalikhan305@gmail.com"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: "#a89b84" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#d4af37")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#a89b84")
              }
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-sm mt-6 pt-6"
          style={{
            color: "#7a6e58",
            borderTop: "1px solid rgba(212,175,55,0.1)",
          }}
        >
          © {currentYear} Javed Khan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;