import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Developer (MERN Stack)',
      issuer: 'Technical Hub',
      type: 'Professional Training',
      year: '2024 - 2025',
      status: 'Completed',
      description:
        'Completed hands-on training in the MERN stack (MongoDB, Express.js, React.js, Node.js). Built and deployed end-to-end web applications with REST APIs, authentication, and responsive UI design.',
      skills: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'REST APIs',
        'Authentication',
        'Responsive Design',
      ],
      featured: true,
    },
    {
      title: 'JavaScript Essentials 1 & 2',
      issuer: 'Cisco Networking Academy',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description:
        'Gained a strong foundation in JavaScript programming including syntax, control structures, functions, problem-solving, DOM manipulation, events, and object-oriented concepts.',
      skills: [
        'JavaScript',
        'DOM Manipulation',
        'Events',
        'OOP',
        'Problem Solving',
      ],
    },
    {
      title: 'Java Programming',
      issuer: 'HackerRank',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description:
        'Achieved certification in Java Programming with focus on object-oriented programming concepts, data structures, and problem-solving skills.',
      skills: [
        'Java',
        'Object-Oriented Programming',
        'Data Structures',
        'Problem Solving',
      ],
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-4" />
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
            <span className="text-gray-400">My</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Certifications
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
            Industry-recognized credentials that validate my expertise and dedication to continuous growth in web development.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/60 backdrop-blur-md border border-gray-700/50 overflow-hidden group ${
                cert.featured ? 'ring-4 ring-cyan-500/30' : ''
              }`}
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Featured Badge - Fixed positioning */}
              {cert.featured && (
                <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 z-20">
                  <span className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-2xl shadow-purple-600/50 border border-white/20">
                    Featured
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                    <Award className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      <Calendar size={16} />
                      {cert.year}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mt-1">
                      <CheckCircle size={16} />
                      {cert.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 font-medium">{cert.issuer}</p>
                  <span className="inline-block mt-3 px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/40">
                    {cert.type}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800/60 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 5 && (
                    <span className="px-3 py-1.5 bg-gray-800/60 text-gray-400 text-xs font-medium rounded-full">
                      +{cert.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Floating Orb Accent */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;