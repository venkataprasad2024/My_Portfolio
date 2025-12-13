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
      href: 'https://www.linkedin.com/in/venkata-prasad-pandilla-1bb744142/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/venkataprasad2024',
      label: 'GitHub',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:pandillavenkataprasad@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
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
        <div className="absolute top-4 left-4 w-32 h-32 bg-accent rounded-full animate-float" />
        <div
          className="absolute bottom-4 right-4 w-24 h-24 bg-primary-glow rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full animate-float"
          style={{ animationDelay: '4s' }}
        />
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
                Venkata Prasad
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Full Stack Developer and MCA student passionate about building clean,
                responsive, and scalable web applications using modern technologies.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/60">
                Let&apos;s connect:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    {social.icon}
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
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
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
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">Location</p>
                <p className="text-primary-foreground/70">
                  Andhra Pradesh, India
                </p>
              </div>

              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:pandillavenkataprasad@gmail.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  pandillavenkataprasad@gmail.com
                </a>
              </div>

              <div>
                <p className="font-medium">Availability</p>
                <p className="text-primary-foreground/70">
                  Open for opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
           <span>© 2025 Venkata Prasad · Full Stack Developer</span>

            {/* <Heart size={16} className="text-accent fill-current animate-pulse" /> */}
            {/* <span>using React & TailwindCSS</span> */}
          </div>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="text-primary-foreground/70 hover:text-accent"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
