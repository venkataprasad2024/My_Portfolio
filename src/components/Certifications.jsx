import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Technical Hub',
      type: 'Professional Training',
      year: '2024-2025',
      status: 'Ongoing',
      description: 'Comprehensive training in modern web development technologies including React.js, Node.js, and MongoDB.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development'],
      color: 'accent',
      featured: true
    },
    {
      title: 'ProjectSpace Technical Hub',
      issuer: 'Technical Hub',
      type: 'Project Completion',
      year: '2025',
      status: 'Completed',
      description: 'Successfully completed multiple web development projects demonstrating practical application of learned skills.',
      skills: ['Project Management', 'Web Development', 'Team Collaboration'],
      color: 'primary'
    },
    {
      title: 'Cisco - JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description: 'Fundamental JavaScript programming concepts, syntax, and basic programming principles.',
      skills: ['JavaScript', 'Programming Fundamentals', 'Web Development'],
      color: 'accent'
    },
    {
      title: 'Cisco - JavaScript Essentials 2',
      issuer: 'Cisco Networking Academy',
      type: 'Advanced Programming',
      year: '2024',
      status: 'Completed',
      description: 'Advanced JavaScript concepts including DOM manipulation, events, and modern ES6+ features.',
      skills: ['Advanced JavaScript', 'DOM Manipulation', 'ES6+', 'Web APIs'],
      color: 'primary'
    },
    {
      title: 'Cisco - Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description: 'Python programming fundamentals, data structures, and algorithmic thinking.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Programming Logic'],
      color: 'accent'
    },
    {
      title: 'NPTEL - Joy of Computing Using Python',
      issuer: 'NPTEL (IIT/IISc)',
      type: 'Online Certification',
      year: '2024',
      status: 'Completed',
      description: 'Comprehensive Python programming course covering computational thinking and problem-solving.',
      skills: ['Python Programming', 'Computational Thinking', 'Problem Solving'],
      color: 'primary'
    },
    {
      title: 'Soft Skills Development Program',
      issuer: 'UNXT by Unnati',
      type: 'Professional Development',
      year: '2024',
      status: 'Completed',
      description: 'Enhanced communication, teamwork, and professional skills essential for workplace success.',
      skills: ['Communication', 'Leadership', 'Teamwork', 'Professional Skills'],
      color: 'accent'
    },
    {
      title: 'NCAT 2025 Participation Certificate',
      issuer: 'Naukri Campus',
      type: 'Career Development',
      year: '2025',
      status: 'Completed',
      description: 'Participated in campus recruitment activities and career development programs.',
      skills: ['Career Planning', 'Interview Skills', 'Professional Networking'],
      color: 'primary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through professional certifications and training programs to stay current with industry trends
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-card-border relative overflow-hidden ${
                cert.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-accent/20' : ''
              }`}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Status & Year */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    cert.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Award className={`w-5 h-5 ${
                      cert.color === 'accent' ? 'text-accent' : 'text-primary'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {cert.year}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <CheckCircle className={`w-4 h-4 ${
                    cert.status === 'Completed' ? 'text-green-500' : 'text-accent'
                  }`} />
                  <span className={`text-xs font-medium ${
                    cert.status === 'Completed' ? 'text-green-500' : 'text-accent'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                    cert.color === 'accent' 
                      ? 'bg-accent/10 text-accent border border-accent/20' 
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}>
                    {cert.type}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-20 animate-float ${
                cert.color === 'accent' ? 'bg-accent' : 'bg-primary'
              }`} 
                   style={{ animationDelay: `${index * 0.2}s` }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center gradient-card p-6 rounded-xl border border-card-border"
          >
            <div className="text-2xl font-bold text-accent mb-2">8</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center gradient-card p-6 rounded-xl border border-card-border"
          >
            <div className="text-2xl font-bold text-accent mb-2">3</div>
            <div className="text-sm text-muted-foreground">Programming Languages</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center gradient-card p-6 rounded-xl border border-card-border"
          >
            <div className="text-2xl font-bold text-accent mb-2">4</div>
            <div className="text-sm text-muted-foreground">Tech Certifications</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center gradient-card p-6 rounded-xl border border-card-border"
          >
            <div className="text-2xl font-bold text-accent mb-2">2</div>
            <div className="text-sm text-muted-foreground">Professional Skills</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;