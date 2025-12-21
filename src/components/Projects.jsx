import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';


import miniTasksImage from '@/assets/ mini_tasks_project.png';
import petGroomingImage from '@/assets/ petgrooming_project.png';
import etrackImage from '@/assets/ project-etrack.png';
 
import spamDetectorImage from '@/assets/ spam_detector.png'; // Add this screenshot to your assets folder

const Projects = () => {
  const projects = [
    {
      title: 'React Mini Tasks',
      description:
        'A collection of interactive mini React applications including BMI Calculator, Dice Roller, Quote of the Minute, and an advanced To-Do List.',
      image: miniTasksImage,
      liveUrl: 'https://minitasks.vercel.app/',
      githubUrl: 'https://github.com/venkataprasad2024/REACT-MINI-TASKS',
    },
    {
      title: 'Pet Grooming Web Application',
      description:
        'A modern web application for pet grooming services with clean UI, service exploration, and appointment booking features.',
      image: petGroomingImage,
      liveUrl: 'https://pet-groo-ming-five.vercel.app/',
      githubUrl: 'https://github.com/venkataprasad2024/Pet-GrooMing',
    },
    {
      title: 'ETrack - Property Management',
      description:
        'Full-stack asset management platform featuring barcode-based search, categorized inventory, and real-time tracking.',
      image: etrackImage,
      liveUrl: 'https://e-track-project.vercel.app/',
      githubUrl: 'https://github.com/sandhyakorimi/Etrack_Management',
    },
    {
      title: 'Spam-Detector',
      description:
        'Machine learning-based email classifier that analyzes mail body and accurately detects spam or ham messages.',
      image: spamDetectorImage,
      liveUrl: 'https://your-spam-detector-live-url.com',
      githubUrl: 'https://github.com/venkataprasad2024/spam-detector-repo',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden pb-0">
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
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
        </motion.div>

        {/* Top Row - 2 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-6xl mx-auto mb-16">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Image with Moderate Glow */}
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Buttons on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white shadow-lg"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-500 text-cyan-500 hover:bg-white/10 hover:border-cyan-500 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-6xl mx-auto mb-16">
          {projects.slice(2, 4).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Image with Moderate Glow */}
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Buttons on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white shadow-lg"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-500 text-cyan-500 hover:bg-white/10 hover:border-cyan-500 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA - Reduced bottom space */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"  // Reduced from mt-20
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