import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/venkata-prasad-pandilla-1bb744142/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-cyan-400',
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/venkataprasad2024',
      label: 'GitHub',
      hoverColor: 'hover:text-purple-400',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:pandillavenkataprasad@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-emerald-400',
    },
  ];

  const quickLinks = [
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
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-black pt-20 pb-10 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl animate-blob animation-delay-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                  Venkata Prasad
                </span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                Full Stack Developer passionate about crafting modern, responsive, and scalable web applications using cutting-edge technologies.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-gray-500">Connect with me:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-gray-500 ${social.hoverColor} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-200">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-200">Get in Touch</h4>
            <div className="space-y-5 text-gray-400">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Location</p>
                <p className="text-lg mt-1">Andhra Pradesh, India</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Email</p>
                <a
                  href="mailto:pandillavenkataprasad@gmail.com"
                  className="text-lg hover:text-purple-400 transition-colors"
                >
                  pandillavenkataprasad@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Status</p>
                <p className="text-lg flex items-center gap-2 mt-1">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  Open to opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500"
        >
          <div className="flex items-center gap-3 text-sm">
            <span>© 2025 Venkata Prasad</span>
            
            <span>Crafted with passion using React & Tailwind</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="border-gray-700 text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-500 backdrop-blur-sm"
          >
            <ArrowUp className="mr-2 h-5 w-5" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;