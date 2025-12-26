 import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Venkata_Prasad_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 sm:pt-24 md:pt-0 pb-20 md:pb-0"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-20 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-blob animation-delay-4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            <span className="text-gray-300">Hi, I'm</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              Venkata Prasad
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed px-4"
          >
            Passionate developer with expertise in Full Stack Web Development.
            I build responsive, interactive, and scalable web applications using
            modern technologies.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="group relative px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-105 w-full sm:w-auto"
          >
            <Download className="mr-3 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-6 text-lg font-medium border-2 border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 backdrop-blur-sm w-full sm:w-auto"
          >
            <Mail className="mr-3 h-5 w-5" />
            Let's Talk
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex justify-center gap-8 md:gap-10"
        >
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/venkata-prasad-pandilla-1bb744142/", color: "hover:text-cyan-400" },
            { Icon: Github, href: "https://github.com/venkataprasad2024", color: "hover:text-purple-400" },
            { Icon: Mail, href: "mailto:pandillavenkataprasad@gmail.com", color: "hover:text-emerald-400" },
          ].map(({ Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`text-gray-500 ${color} transition-all duration-300`}
            >
              <Icon size={36} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - ONLY on desktop/tablet, completely hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-14 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-2 h-5 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-3" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;