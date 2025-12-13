import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

// You said you will manually change images later
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
      technologies: ['React', 'Node.js', 'MongoDB'],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating my skills in React and
            full-stack web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-1 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                } relative group overflow-hidden rounded-2xl`}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Details */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                } space-y-6`}
              >
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                    <Calendar size={16} />
                    {project.duration}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/venkataprasad2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
