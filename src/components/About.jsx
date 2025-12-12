import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/SandhyaImg.jpg';

const About = () => {
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
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-accent mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={profilePhoto}
                  alt="Sandhya Korimi - Frontend Developer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-glow rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
              Passionate Frontend Developer
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a motivated MCA student from Andhra Pradesh, India, with a strong passion for 
                Full Stack Web Development. Currently pursuing my Masters in Computer Applications 
                at Aditya College of Engineering & Technology with an impressive 9.19 CGPA.
              </p>
              
              <p>
                My journey in technology started during my Bachelor's in Computer Science, where I 
                developed a solid foundation in programming languages like Java, JavaScript, and Python. 
                I've enhanced my skills through hands-on training in modern web technologies including 
                React.js, Node.js, and MongoDB.
              </p>
              
              <p>
                I believe in creating responsive, interactive websites that provide excellent user 
                experiences. My problem-solving abilities and quick learning mindset help me tackle 
                complex challenges and deliver innovative solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl gradient-card border border-card-border"
              >
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl gradient-card border border-card-border"
              >
                <div className="text-2xl font-bold text-accent">7+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl gradient-card border border-card-border col-span-2 md:col-span-1"
              >
                <div className="text-2xl font-bold text-accent">9.19</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;