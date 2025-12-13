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
      color: 'accent',
      featured: true,
    },
    {
      title: 'JavaScript Essentials 1 & 2',
      issuer: 'Cisco Networking Academy',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description:
        'Gained a strong foundation in JavaScript programming including syntax, control structures, functions, problem-solving, DOM manipulation, events, and object-oriented JavaScript concepts.',
      skills: [
        'JavaScript',
        'DOM Manipulation',
        'Events',
        'OOP',
        'Problem Solving',
      ],
      color: 'primary',
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
      color: 'accent',
    },
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications showcasing my technical skills and commitment to continuous learning
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
              className={`gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-card-border relative ${
                cert.featured ? 'ring-2 ring-accent/20' : ''
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
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      cert.color === 'accent'
                        ? 'bg-accent/10'
                        : 'bg-primary/10'
                    }`}
                  >
                    <Award
                      className={`w-5 h-5 ${
                        cert.color === 'accent'
                          ? 'text-accent'
                          : 'text-primary'
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {cert.year}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium text-green-500">
                    Completed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                  <span
                    className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                      cert.color === 'accent'
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'bg-primary/10 text-primary border border-primary/20'
                    }`}
                  >
                    {cert.type}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-20 animate-float ${
                  cert.color === 'accent' ? 'bg-accent' : 'bg-primary'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
