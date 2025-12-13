import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // resume must be in public/
    link.download = 'Venkata_Prasad_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-xl animate-float" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-primary-glow rounded-full blur-xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-accent bg-clip-text text-transparent animate-gradient">
                Venkata Prasad
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-primary-foreground/90 mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-card-hover transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-primary-foreground/20 text-secondary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let&apos;s Talk
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/venkata-prasad-pandilla-1bb744142/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>

            <a
              href="https://github.com/venkataprasad2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <Github size={32} />
            </a>

            <a
              href="mailto:pandillavenkataprasad@gmail.com"
              className="text-primary-foreground/70 hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
