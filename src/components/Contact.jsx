import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you! I'll get back to you as soon as possible.",
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 md:w-7 md:h-7" />,
      label: 'Email',
      value: 'pandillavenkataprasad@gmail.com',
      href: 'mailto:pandillavenkataprasad@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6 md:w-7 md:h-7" />,
      label: 'Phone',
      value: '+91 9398854629',
      href: 'tel:+919398854629',
    },
    {
      icon: <MapPin className="w-6 h-6 md:w-7 md:h-7" />,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      href: 'https://www.linkedin.com/in/venkata-prasad-pandilla-1bb744142/',
      color: 'hover:text-cyan-400',
    },
    {
      icon: <Github className="w-8 h-8" />,
      href: 'https://github.com/venkataprasad2024',
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl animate-blob animation-delay-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-400">Let's</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-6"
          />
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm open to new opportunities, collaborations, and exciting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info & Social */}
          <div className="space-y-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-100">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.href || undefined}
                    whileHover={{ x: 6 }}
                    className="flex flex-row items-center gap-4 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 group cursor-pointer w-full"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-cyan-400 group-hover:text-cyan-300">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                      <p className="text-gray-100 font-semibold text-base md:text-lg group-hover:text-cyan-400 transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-200">
                Connect With Me
              </h3>
              <div className="flex gap-8">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -10 }}
                    whileTap={{ scale: 1.1 }}
                    className={`text-gray-500 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10 border border-cyan-500/30 backdrop-blur-md"
            >
              <h4 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">
                Currently Available
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Open to full-time opportunities, internships, freelance projects, and collaborations.
              </p>
              <div className="flex items-center gap-3 mt-6 text-emerald-400">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-medium text-sm md:text-base">Ready to start immediately</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60" />
            <div className="relative p-6 md:p-12 rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-md border border-gray-700/50">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-100 mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/50"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/50"
                />

                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/50 resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full group relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-6 md:py-7 text-base md:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-cyan-500/40 transition-all duration-500"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                I'll respond as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;