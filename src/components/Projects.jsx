// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Calendar } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import oneStopImage from '@/assets/project-onestop.jpg';
// import eventoraImage from '@/assets/project-eventora.jpg';
// import etrackImage from '@/assets/project-etrack.jpg';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'OneStop - Job Portal',
//       description: 'A comprehensive web portal for job and resource aggregation, centralizing 100+ job/resource links with enhanced user engagement through reusable sidebar and smooth navigation.',
//       image: oneStopImage,
//       technologies: ['HTML', 'CSS', 'JavaScript'],
//       duration: 'February 2025 - March 2025',
//       highlights: [
//         'Centralized 100+ job/resource links',
//         'Reduced click depth by 30%',
//         'Reusable sidebar navigation'
//       ],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/sandhyakorimi/OneStop'
//     },
//     {
//       title: 'Eventora - Event Management',
//       description: 'A modern event management web application enabling 50+ users to explore, plan, and register for events with responsive layouts and optimized performance.',
//       image: eventoraImage,
//       technologies: ['React', 'CSS', 'JavaScript'],
//       duration: 'March 2025 - May 2025',
//       highlights: [
//         '50+ active users',
//         '20% faster load speed',
//         'Responsive design',
//         'Event registration system'
//       ],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/sandhyakorimi/Eventora'
//     },
//     {
//       title: 'ETrack - Property Management',
//       description: 'A full-stack asset management platform with barcode search functionality and categorized inventory, aiming to reduce manual tracking time by 40%.',
//       image: etrackImage,
//       technologies: ['React', 'Node.js', 'MongoDB'],
//       duration: 'May 2025 - June 2025',
//       highlights: [
//         'Barcode search functionality',
//         '40% reduction in tracking time',
//         'Real-time updates',
//         'Automated logs'
//       ],
//       liveUrl: '#',
//       githubUrl: 'https://github.com/sandhyakorimi/Etrack_Management'
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="projects" className="section-padding bg-background">
//       <div className="max-w-7xl mx-auto container-padding">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//             Featured Projects
//           </h2>
//           <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work in web development, demonstrating my skills in creating responsive and user-friendly applications
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid lg:grid-cols-1 gap-12"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               variants={cardVariants}
//               transition={{ duration: 0.6 }}
//               className={`grid lg:grid-cols-2 gap-8 items-center ${
//                 index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
//               }`}
//             >
//               {/* Project Image */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group overflow-hidden rounded-2xl`}
//               >
//                 <div className="aspect-video rounded-2xl overflow-hidden shadow-card-hover">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/20 rounded-full animate-float" />
//               </motion.div>

//               {/* Project Details */}
//               <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
//                 <div>
//                   <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
//                     <Calendar size={16} />
//                     {project.duration}
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground text-lg leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Technologies */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Highlights */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-primary mb-3">Key Highlights:</h4>
//                   <ul className="space-y-2">
//                     {project.highlights.map((highlight, idx) => (
//                       <li key={idx} className="flex items-start gap-3 text-muted-foreground">
//                         <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4">
//                   <Button
//                     variant="default"
//                     size="sm"
//                     className="bg-accent hover:bg-accent/90"
//                   >
//                     <ExternalLink size={16} className="mr-2" />
//                     Live Demo
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                   >
//                     <Github size={16} className="mr-2" />
//                     Source Code
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <p className="text-muted-foreground mb-6">
//             Want to see more of my work? Check out my GitHub for additional projects and contributions.
//           </p>
//           <Button
//             variant="outline"
//             size="lg"
//             className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
//           >
//             <Github className="mr-2 h-5 w-5" />
//             View All Projects
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;








import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import oneStopImage from '@/assets/project-onestop.jpg';
import eventoraImage from '@/assets/project-eventora.jpg';
import etrackImage from '@/assets/project-etrack.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'OneStop - Job Portal',
      description: 'A comprehensive web portal for job and resource aggregation, centralizing 100+ job/resource links with enhanced user engagement through reusable sidebar and smooth navigation.',
      image: oneStopImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      duration: 'February 2025 - March 2025',
      highlights: [
        'Centralized 100+ job/resource links',
        'Reduced click depth by 30%',
        'Reusable sidebar navigation'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/sandhyakorimi/OneStop'
    },
    {
      title: 'Eventora - Event Management',
      description: 'A modern event management web application enabling 50+ users to explore, plan, and register for events with responsive layouts and optimized performance.',
      image: eventoraImage,
      technologies: ['React', 'CSS', 'JavaScript'],
      duration: 'March 2025 - May 2025',
      highlights: [
        '50+ active users',
        '20% faster load speed',
        'Responsive design',
        'Event registration system'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/sandhyakorimi/Eventora'
    },
    {
      title: 'ETrack - Property Management',
      description: 'A full-stack asset management platform with barcode search functionality and categorized inventory, aiming to reduce manual tracking time by 40%.',
      image: etrackImage,
      technologies: ['React', 'Node.js', 'MongoDB'],
      duration: 'May 2025 - June 2025',
      highlights: [
        'Barcode search functionality',
        '40% reduction in tracking time',
        'Real-time updates',
        'Automated logs'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/sandhyakorimi/Etrack_Management'
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
            A showcase of my recent work in web development, demonstrating my skills in creating responsive and user-friendly applications
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
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group overflow-hidden rounded-2xl`}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/20 rounded-full animate-float" />
              </motion.div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                <div>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                    <Calendar size={16} />
                    {project.duration}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-accent hover:bg-accent/90"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <a href="https://github.com/sandhyakorimi" target='_blank'>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
