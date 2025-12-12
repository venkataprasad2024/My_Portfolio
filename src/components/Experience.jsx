import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Full-Stack Web Development Trainee',
    company: 'Technical Hub – Aditya College of Engineering and Technology',
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
      'React.js', 'Node.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Git'
    ],
    achievements: [
      'Built 3+ complete web applications',
      '25% improvement in UX metrics',
      'Mastered 6+ modern technologies',
      'Deployed production-ready apps'
    ]
  };

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
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My hands-on training experience in full-stack development has equipped me with practical skills and real-world project experience
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="gradient-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-card-hover border border-card-border relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-accent/5 rounded-full animate-float" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shadow-glow">
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                    {experience.type}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    {experience.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {experience.title}
                </h3>
                
                <p className="text-xl text-muted-foreground font-medium mb-3">
                  {experience.company}
                </p>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                {experience.description}
              </p>
            </motion.div>

            {/* Key Responsibilities */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Key Responsibilities & Achievements
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies Used */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h4 className="text-lg font-semibold text-primary mb-4">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 gradient-card rounded-xl border border-card-border"
                >
                  <div className="text-accent font-bold text-sm mb-1">
                    {achievement.split(' ')[0]}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {achievement.split(' ').slice(1).join(' ')}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Career Timeline Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="gradient-card p-8 rounded-2xl border border-card-border inline-block">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Looking Forward
            </h3>
            <p className="text-muted-foreground max-w-md">
              Eager to apply my skills in a challenging frontend development role 
              where I can contribute to innovative projects and continue growing as a developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;