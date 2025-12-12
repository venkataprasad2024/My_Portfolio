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
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/sandhya-korimi-63798b307',
      label: 'LinkedIn'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/sandhyakorimi',
      label: 'GitHub'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:sandhyakorimi5566@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-32 h-32 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
                Sandhya Korimi
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Frontend Developer passionate about creating beautiful, responsive web experiences. 
                Currently pursuing MCA and eager to contribute to innovative projects.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/60">Let's connect:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-primary-foreground">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm">
              <div className="text-primary-foreground/70">
                <p className="font-medium text-primary-foreground mb-1">Location</p>
                <p>Andhra Pradesh, India</p>
              </div>
              
              <div className="text-primary-foreground/70">
                <p className="font-medium text-primary-foreground mb-1">Email</p>
                <a 
                  href="mailto:sandhyakorimi5566@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  sandhyakorimi5566@gmail.com
                </a>
              </div>
              
              <div className="text-primary-foreground/70">
                <p className="font-medium text-primary-foreground mb-1">Availability</p>
                <p>Open for opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-primary-foreground/60"
          >
            <span>© 2025 Sandhya Korimi. Made with</span>
            <Heart size={16} className="text-accent fill-current animate-pulse" />
            <span>using React & TailwindCSS</span>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/10 group"
            >
              <ArrowUp size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </Button>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;