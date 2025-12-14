import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-3xl font-bold tracking-tight"
            >
              <span className="text-gray-300">Venkata Prasad</span>
            </a>
          </motion.div>

          {/* Desktop Navigation - Only on wide screens (xl and up) */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10 text-sm font-medium tracking-wide uppercase">
                  {item.name}
                </span>

                {/* Subtle hover glow */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                />

                {/* Gradient underline */}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-500" />
              </motion.a>
            ))}
          </div>

          {/* Hamburger Button - Visible on all screens below xl */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          maxHeight: isMobileMenuOpen ? '600px' : '0px',
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="xl:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
      >
        <div className="px-6 py-8 space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -30,
              }}
              transition={{ delay: isMobileMenuOpen ? index * 0.08 : 0, duration: 0.3 }}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block py-4 px-6 text-xl font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 rounded-xl transition-all duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;