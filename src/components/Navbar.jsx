import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(12,10,6,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled
          ? '0 4px 20px rgba(212,175,55,0.15)'
          : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold"
            style={{ color: '#f5f0e0' }}
          >
            Javed{' '}
            <span style={{ color: '#d4af37' }}>
              Khan
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-all duration-300"
                style={{
                  color: '#7a6e58',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#d4af37')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = '#7a6e58')
                }
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            style={{ color: '#d4af37' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-4 rounded-lg p-4"
            style={{
              background: 'rgba(26,20,0,0.95)',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 transition-colors"
                style={{ color: '#7a6e58' }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#d4af37')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = '#7a6e58')
                }
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;