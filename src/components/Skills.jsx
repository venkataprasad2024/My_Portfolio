import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Java', 'Python', 'C'],
    },
    {
      title: 'Frontend Technologies',
      skills: ['React.js', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    },
    {
      title: 'Tools & Soft Skills',
      skills: ['Git/GitHub', 'VS Code', 'Problem Solving', 'Team Collaboration'],
    },
  ];

  const techTags = [
    'JavaScript ES6+', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Tailwind CSS', 'Git', 'GitHub',
    'REST APIs', 'Next.js', 'TypeScript', 'Figma'
  ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      username: 'venkataprasad123',
      url: 'https://leetcode.com/u/venkataprasad123/',
      icon: '💻',
    },
    {
      name: 'GeeksforGeeks',
      username: 'pandillavenvxpk',
      url: 'https://www.geeksforgeeks.org/profile/pandillavenvxpk',
      icon: '🧠',
    },
    {
      name: 'CodeChef',
      username: 'venkataprasad3',
      url: 'https://www.codechef.com/users/venkataprasad3',
      icon: '🔥',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2" />
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
              Skills
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
            Technologies and tools I've mastered through hands-on projects, academic training, and continuous learning.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
              <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-6 relative z-10">
                {category.title}
              </h3>

              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 8 }}
                    className="flex items-center text-gray-300 font-medium"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3" />
                    {skill}
                  </motion.li>
                ))}
              </ul>

              {/* Floating orb accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Tech Tags Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-10">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techTags.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md text-gray-200 rounded-full text-sm md:text-base font-medium border border-gray-700 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-500 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Coding Platforms Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-12">
            Coding Platforms
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {codingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative block p-8 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-md border border-gray-700/50 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-500"
              >
                <div className="relative z-10 text-center space-y-4">
                  <div className="text-5xl">{platform.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-100">
                    {platform.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {platform.username}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-cyan-400">
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">View Profile</span>
                  </div>
                </div>

                {/* Floating Orb */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;