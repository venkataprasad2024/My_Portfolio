import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Aditya University, Andhra Pradesh, India',
      duration: '2024 - 2026',
      grade: 'CGPA: 8.80',
      status: 'Currently Pursuing',
      description:
        'Focused on software development, web technologies, databases, and modern full stack development practices.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'accent',
    },
    {
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Sri Venkateswara Degree College, Andhra Pradesh, India',
      duration: '2019 - 2023',
      grade: 'CGPA: 7.0',
      status: 'Completed',
      description:
        'Built a strong foundation in business, accounting, management principles, and analytical thinking.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'primary',
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Master Minds, Andhra Pradesh, India',
      duration: '2017 - 2019',
      grade: 'CGPA: 9.67',
      status: 'Completed',
      description:
        'Studied Mathematics, Physics, and Chemistry with strong emphasis on logical reasoning and problem-solving skills.',
      icon: <Award className="w-6 h-6" />,
      color: 'accent',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Sri Samskruti School, Andhra Pradesh, India',
      duration: '2016 - 2017',
      grade: 'CGPA: 9.8',
      status: 'Completed',
      description:
        'Achieved excellent academic performance with a well-rounded foundation in core subjects.',
      icon: <Award className="w-6 h-6" />,
      color: 'primary',
    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Education Journey
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey reflects consistent performance and a growing passion for technology and development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 rounded-full">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent to-transparent rounded-t-full" />
          </div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background border-4 border-accent rounded-full items-center justify-center shadow-glow z-10">
                  <div className="text-accent">{edu.icon}</div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-card-border relative"
                  >
                    {/* Status Badge */}
                    <div
                      className={`absolute top-4 ${
                        index % 2 === 0 ? 'md:left-4' : 'md:right-4'
                      } right-4`}
                    >
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'Currently Pursuing'
                            ? 'bg-accent/10 text-accent border border-accent/20'
                            : 'bg-muted text-muted-foreground border border-card-border'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4 mx-auto">
                      <div className="text-accent">{edu.icon}</div>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>

                      <h3 className="text-xl font-bold text-primary mb-2">
                        {edu.degree}
                      </h3>

                      <p className="text-muted-foreground font-medium mb-3">
                        {edu.institution}
                      </p>

                      <div className="text-accent font-bold text-lg mb-4">
                        {edu.grade}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div
                      className={`absolute -bottom-2 ${
                        index % 2 === 0 ? 'md:-left-2' : 'md:-right-2'
                      } -right-2 w-8 h-8 bg-accent/20 rounded-full animate-float`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-8">
            Academic Highlights
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="gradient-card p-6 rounded-xl border border-card-border"
            >
              <div className="text-3xl font-bold text-accent mb-2">8.80</div>
              <div className="text-sm text-muted-foreground">MCA CGPA</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="gradient-card p-6 rounded-xl border border-card-border"
            >
              <div className="text-3xl font-bold text-accent mb-2">7.0</div>
              <div className="text-sm text-muted-foreground">B.Com CGPA</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="gradient-card p-6 rounded-xl border border-card-border"
            >
              <div className="text-3xl font-bold text-accent mb-2">9.67</div>
              <div className="text-sm text-muted-foreground">Intermediate CGPA</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
