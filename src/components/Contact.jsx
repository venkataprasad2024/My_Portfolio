import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sandhyakorimi5566@gmail.com',
      href: 'mailto:sandhyakorimi5566@gmail.com',
      color: 'accent'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9505439502',
      href: 'tel:+919505439502',
      color: 'primary'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: null,
      color: 'accent'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={28} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sandhya-korimi-63798b307',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <Github size={28} />,
      label: 'GitHub',
      href: 'https://github.com/sandhyakorimi',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      icon: <ExternalLink size={28} />,
      label: 'ORCID',
      href: 'https://orcid.org/my-orcid',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and collaborate on interesting projects. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get In Touch
              </h3>
              
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="flex items-center gap-4 p-4 gradient-card rounded-xl border border-card-border hover:shadow-card transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    info.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                  } shadow-glow`}>
                    <div className={info.color === 'accent' ? 'text-accent' : 'text-primary'}>
                      {info.icon}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-primary">
                Connect With Me
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 ${social.color} text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground">
                Feel free to connect with me on these platforms for professional networking 
                and to see more of my work.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="gradient-card p-6 rounded-2xl border border-accent/20 bg-accent/5"
            >
              <h4 className="text-lg font-semibold text-primary mb-3">
                Currently Available
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm actively seeking frontend development opportunities and freelance projects. 
                Open to full-time positions, internships, and exciting collaborations.
              </p>
              <div className="flex items-center gap-2 mt-4 text-accent text-sm font-medium">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Available for immediate start
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gradient-card p-8 rounded-3xl shadow-card-hover border border-card-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full bg-background/50 border-card-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-background/50 border-card-border focus:border-accent focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-background/50 border-card-border focus:border-accent focus:ring-accent/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-card-hover transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={20} />
                    Send Message
                  </div>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              I'll get back to you within 24 hours. Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;