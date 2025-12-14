import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Aditya University, Andhra Pradesh, India",
      duration: "2024 – 2026",
      grade: "CGPA: 8.80",
      status: "Currently Pursuing",
      description:
        "Focused on software development, web technologies, databases, and modern full-stack development practices.",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Sri Venkateswara Degree College, Andhra Pradesh, India",
      duration: "2019 – 2023",
      grade: "CGPA: 7.0",
      status: "Completed",
      description:
        "Built a strong foundation in business, accounting, management principles, and analytical thinking.",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      degree: "Intermediate – MPC",
      institution: "Master Minds, Andhra Pradesh, India",
      duration: "2017 – 2019",
      grade: "CGPA: 9.67",
      status: "Completed",
      description:
        "Studied Mathematics, Physics, and Chemistry with strong emphasis on logical reasoning and problem-solving.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Samskruti School, Andhra Pradesh, India",
      duration: "2016 – 2017",
      grade: "CGPA: 9.8",
      status: "Completed",
      description:
        "Achieved excellent academic performance with a well-rounded foundation in core subjects.",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2" />
        <div className="absolute top-1/2 -left-40 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl animate-blob animation-delay-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-400">Education</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Journey
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
            My academic path reflects consistent growth, strong performance, and a deep passion for technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Gradient Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-emerald-500/40 rounded-full" />

          <div className="space-y-20 md:space-y-28">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'md:[&>div:nth-child(1)]:order-2' : ''
                }`}
              >
                {/* Education Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/60 backdrop-blur-md border border-gray-700/50 overflow-hidden group"
                >
                  {/* Inner Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border ${
                        edu.status === "Currently Pursuing"
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/50'
                          : 'bg-gray-800/70 text-gray-400 border-gray-700'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 text-cyan-400 text-sm font-medium mb-5">
                      <Calendar size={18} />
                      {edu.duration}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
                      {edu.degree}
                    </h3>

                    <p className="text-gray-300 font-medium mb-4">
                      {edu.institution}
                    </p>

                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                      {edu.grade}
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Floating Orb Accents */}
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                </motion.div>

                {/* Timeline Node */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 text-white"
                  >
                    {edu.icon}
                  </motion.div>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-700">
                  <div className="text-cyan-400">{edu.icon}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Highlights - Hover effects REMOVED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 md:mt-32 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-12">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Highlights</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "8.80", label: "MCA CGPA" },
              { value: "7.0", label: "B.Com CGPA" },
              { value: "9.67", label: "Intermediate" },
              { value: "9.8", label: "SSC CGPA" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-gray-400 mt-3 text-sm md:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;