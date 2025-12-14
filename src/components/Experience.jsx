import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Full-Stack Web Development Trainee',
    company: 'Technical Hub – Aditya University',
    duration: 'June 2024 - June 2025',
    location: 'Surampalem, Andhra Pradesh',
    type: 'Training Program',
    description: 'Comprehensive hands-on training program focused on modern web development technologies and practices.',
    responsibilities: [
      'Completed intensive training in 6+ technologies including React.js, Node.js, and MongoDB',
      'Built and deployed 3+ responsive web applications during the training period',
      'Improved application navigation speed and user experience by approximately 25%',
      'Collaborated with fellow trainees on various project assignments',
      'Participated in code reviews and technical discussions',
      'Applied best practices in responsive design and modern web development'
    ],
    technologies: [
      'React.js', 'Node.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Express.js'
    ],
    achievements: [
      '3+ Complete Apps',
      '25% UX Improvement',
      'Mastered 6+ Technologies',
      'Production Deployment'
    ]
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute top-1/2 -right-40 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl animate-blob animation-delay-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-400">Professional</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Experience
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
            Hands-on training in full-stack development, building real-world applications and mastering modern technologies.
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -12, scale: 1.01 }}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-md border border-gray-700/50 overflow-hidden group"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Floating Orbs */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-500/40 shadow-xl shadow-cyan-500/30">
                  <Briefcase className="w-10 h-10 text-cyan-400" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-bold border border-cyan-500/50 backdrop-blur-sm">
                    {experience.type}
                  </span>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    {experience.location}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">
                  {experience.title}
                </h3>
                <p className="text-xl text-gray-300 font-medium">
                  {experience.company}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-4xl">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-emerald-400" />
                Key Responsibilities & Achievements
              </h4>
              <ul className="grid md:grid-cols-2 gap-4">
                {experience.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-gray-200 mb-6">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-4">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md text-gray-200 rounded-full text-sm md:text-base font-medium border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Achievement Highlights - Hover effects REMOVED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {experience.achievements.map((ach, i) => (
                <div
                  key={i}
                  className="text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 break-words">
                    {ach.split(' ')[0]}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 break-words px-2">
                    {ach.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Looking Forward */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
              Looking Forward
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed px-4">
              Eager to bring my full-stack skills, passion for clean code, and user-centric design to a dynamic team —
              ready to contribute to innovative projects and grow as a professional developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;