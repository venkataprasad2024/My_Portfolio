import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Java', 'Python', 'C'],
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'HTML/CSS', 'Node.js', 'Responsive Design'],
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'SQL', 'Git/GitHub', 'VS Code'],
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Team Management', 'Quick Learning'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I've mastered through my academic journey and hands-on projects
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-card-border"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {category.title}
              </h3>

              {/* Skills List - clean, no loaders */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-foreground font-medium bg-accent/10 px-4 py-2 rounded-lg border border-accent/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-primary mb-6">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript ES6+', 'React.js', 'Node.js', 'MongoDB',
              'HTML5', 'CSS3', 'TailwindCSS', 'Git', 'GitHub',
              'VS Code', 'Responsive Design', 'REST APIs'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
