import React from 'react';
import { motion } from 'framer-motion';
  import { ExternalLink, Github, Calendar } from 'lucide-react';
  import { Button } from '@/components/ui/button';

  // Update these paths when you add your actual images
  import petGroomingImage from '@/assets/ petgrooming_project.png';
  import miniTasksImage from '@/assets/ mini_tasks_project.png';
  import etrackImage from '@/assets/project-etrack.png';

const Projects = () => {
  const projects = [
    {
      title: 'Pet Grooming Web Application',
      description:
        'A modern web application designed for pet grooming services, allowing users to explore services, book appointments, and view grooming details through a clean and responsive interface.',
      image: petGroomingImage,
      technologies: ['React', 'CSS', 'JavaScript'],
      duration: 'February 2025 - March 2025',
      highlights: [
        'User-friendly UI for pet grooming services',
        'Responsive design for all devices',
        'Service listing and booking flow',
      ],
      liveUrl: 'https://pet-groo-ming-five.vercel.app/',
      githubUrl: 'https://github.com/venkataprasad2024/Pet-GrooMing',
    },
    {
      title: 'React Mini Tasks',
      description:
        'A collection of interactive mini React applications including BMI Calculator, Dice Roller, Quote of the Minute, and an advanced To-Do List to practice core React concepts.',
      image: miniTasksImage,
      technologies: ['React', 'JavaScript', 'CSS'],
      duration: 'March 2025 - April 2025',
      highlights: [
        'BMI Calculator with dynamic results',
        'Dice Roller with random outcomes',
        'Quote of the Minute feature',
        'Advanced To-Do List with task management',
      ],
      liveUrl: 'https://minitasks.vercel.app/',
      githubUrl: 'https://github.com/venkataprasad2024/REACT-MINI-TASKS',
    },
    {
      title: 'ETrack - Property Management',
      description:
        'A full-stack property and asset management platform with barcode-based search and categorized inventory, aimed at reducing manual tracking effort and improving efficiency.',
      image: etrackImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      duration: 'May 2025 - June 2025',
      highlights: [
        'Barcode-based asset search',
        'Categorized inventory management',
        'Reduced manual tracking effort',
        'Real-time updates and logs',
      ],
      liveUrl: 'https://e-track-project.vercel.app/',
      githubUrl: 'https://github.com/sandhyakorimi/Etrack_Management',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-blob" />
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
            <span className="text-gray-400">Featured</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Projects
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
            A selection of my recent work showcasing modern web development with React and full-stack technologies.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2 lg:[&>div:nth-child(1)]:order-2' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                {/* Floating accent */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
              </motion.div>

              {/* Project Details */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-cyan-400 text-sm font-medium mb-4">
                    <Calendar size={18} />
                    {project.duration}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-gray-200 rounded-full text-sm font-medium border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-cyan-500/40 transition-all duration-500"
                    >
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </Button>
                  </a>

                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-600 text-cyan-500 hover:bg-white/10 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-500 backdrop-blur-sm"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <a
            href="https://github.com/venkataprasad2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-lg border-2 border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              <Github className="mr-3 h-6 w-6" />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;