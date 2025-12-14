import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/venkataprasad.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-20 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-blob animation-delay-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-400">About</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative group">
              {/* Outer Glow Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-emerald-500/40 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-1000" />

              {/* Image Container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
                <img
                  src={profilePhoto}
                  alt="Venkata Prasad - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Accent Orbs */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-blob" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/25 rounded-full blur-3xl animate-blob animation-delay-4" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-100">
              Passionate{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h3>

            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm an MCA student from <span className="text-cyan-400 font-medium">Andhra Pradesh, India</span>, currently pursuing my Master's at Aditya University with a strong <span className="text-purple-400 font-semibold">CGPA of 8.80</span>.
              </p>

              <p>
                Through dedicated hands-on training in the <span className="text-cyan-400 font-medium">MERN Stack</span>, I've built multiple real-world applications using React.js, Node.js, Express.js, and MongoDB — focusing on clean architecture, performance, and modern user experiences.
              </p>

              <p>
                I'm driven by solving complex problems with elegant code, staying updated with emerging technologies, and delivering impactful digital solutions. Always learning, always improving.
              </p>
            </div>

            {/* Stats Cards - Only original shadow hover effect (lift + glow shadow) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-500"
              >
                <div className="text-4xl font-bold text-cyan-400">
                  10+
                </div>
                <div className="text-gray-400 mt-2 text-sm md:text-base break-words">
                  Projects Completed
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-emerald-500/10 border border-purple-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/30 transition-shadow duration-500"
              >
                <div className="text-4xl font-bold text-purple-400">
                  5+
                </div>
                <div className="text-gray-400 mt-2 text-sm md:text-base break-words">
                  Certifications
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-shadow duration-500"
              >
                <div className="text-4xl font-bold text-emerald-400">
                  8.80
                </div>
                <div className="text-gray-400 mt-2 text-sm md:text-base break-words">
                  Current CGPA
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;