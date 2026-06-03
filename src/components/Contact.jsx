import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "javedalikhan305@gmail.com",
      link: "mailto:javedalikhan305@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 9754729283",
      link: "tel:+919754729283",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Indore, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      link: "https://github.com/javedalikhan305-lang",
      username: "@javedkhan",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      link: "Javed Khan",
      username: "Javed Khan",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: "#0c0a06",
        color: "#f5f0e0",
      }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Get In{" "}
          <span style={{ color: "#d4af37" }}>
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: "#a89b84" }}
        >
          I'm currently looking for MERN Developer opportunities.
          Feel free to reach out if you'd like to work together.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "#15100a",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                  }}
                >
                  <info.icon
                    className="text-xl"
                    style={{ color: "#d4af37" }}
                  />
                </div>

                <div>
                  <p
                    className="text-sm"
                    style={{ color: "#a89b84" }}
                  >
                    {info.label}
                  </p>
                  <p className="font-medium">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "#15100a",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <h3
                className="font-semibold mb-4"
                style={{ color: "#d4af37" }}
              >
                Find Me On
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:translate-x-2 transition-all"
                  >
                    <social.icon
                      className="text-xl"
                      style={{ color: "#d4af37" }}
                    />
                    <span>{social.username}</span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-4 rounded-xl"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              ⚡ I typically respond within 24-48 hours.
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl"
              style={{
                background: "#15100a",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg outline-none"
                  style={{
                    background: "#1d1810",
                    border: "1px solid #333",
                    color: "#f5f0e0",
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg outline-none"
                  style={{
                    background: "#1d1810",
                    border: "1px solid #333",
                    color: "#f5f0e0",
                  }}
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg outline-none mb-6"
                style={{
                  background: "#1d1810",
                  border: "1px solid #333",
                  color: "#f5f0e0",
                }}
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg outline-none mb-6 resize-none"
                style={{
                  background: "#1d1810",
                  border: "1px solid #333",
                  color: "#f5f0e0",
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{
                  background: "#d4af37",
                  color: "#0c0a06",
                }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center p-3 rounded-lg"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    color: "#d4af37",
                  }}
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;