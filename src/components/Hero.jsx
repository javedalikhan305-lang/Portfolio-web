import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const resumeUrl = '/Javed_Khan_Resume.pdf';

const Hero = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeUrl, '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
      style={{ background: 'linear-gradient(to bottom, #0c0a06, #1a1400)' }}
    >
      <div className="container mx-auto px-6 text-center">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-36 h-36 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full opacity-50"
            style={{ background: 'radial-gradient(circle, #d4af37, #8b6914)', filter: 'blur(16px)' }} />
          <div className="relative w-full h-full rounded-full overflow-hidden"
            style={{ border: '4px solid rgba(212,175,55,0.35)' }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/054/122/266/non_2x/a-cheerful-character-sitting-at-a-laptop-representing-productivity-and-creativity-png.png"
              alt="Javed Khan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#f5f0e0' }}
        >
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(90deg, #d4af37, #f5c842)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Javed Khan
          </span>
        </motion.h1>

        {/* Title Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#d4af37'
            }}>
            🚀 MERN Full Stack Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: '#7a6e58' }}
        >
          Passionate about building full-stack web applications with MongoDB, Express.js,
          React, and Node.js. Looking for my first opportunity in web development.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <a href="https://github.com/javedalikhan305-lang" target="_blank" rel="noopener noreferrer"
            className="text-2xl p-3 rounded-full transition-all duration-200"
            style={{ color: '#7a6e58', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7a6e58'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)'; }}
          ><FiGithub /></a>

          <a href="https://www.linkedin.com/in/javedkhan01/" target="_blank" rel="noopener noreferrer"
            className="text-2xl p-3 rounded-full transition-all duration-200"
            style={{ color: '#7a6e58', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7a6e58'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)'; }}
          ><FiLinkedin /></a>

          <a href="mailto:intikhabrehmani@gmail.com"
            className="text-2xl p-3 rounded-full transition-all duration-200"
            style={{ color: '#7a6e58', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7a6e58'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)'; }}
          ><FiMail /></a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#projects"
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)', color: '#1a1200' }}
          >
            View Projects
          </a>

          <button onClick={handleResumeClick}
            className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            style={{ border: '2px solid #d4af37', color: '#d4af37', background: 'transparent' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <FiDownload /> Resume
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-9 rounded-full flex justify-center"
            style={{ border: '2px solid rgba(212,175,55,0.3)' }}
          >
            <div className="w-1 h-2 rounded-full mt-2" style={{ background: '#d4af37' }} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;