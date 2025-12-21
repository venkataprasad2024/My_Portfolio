import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Aditya University, Andhra Pradesh, India",
      duration: "2024 – 2026",
      grade: "CGPA: 8.80",
      status: "Pursuing",
      description:
        "Focused on software development, web technologies, databases, and modern full-stack development practices.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Sri Venkateswara Degree College, Andhra Pradesh, India",
      duration: "2019 – 2023",
      grade: "CGPA: 7.0",
      status: "Completed",
      description:
        "Built a strong foundation in business, accounting, management principles, and analytical thinking.",
    },
    {
      degree: "Intermediate – MEC",
      institution: "Master Minds, Andhra Pradesh, India",
      duration: "2017 – 2019",
      grade: "CGPA: 9.67",
      status: "Completed",
      description:
        "Studied Mathematics, Economics, and Commerce with emphasis on logical reasoning and problem-solving.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Samskruti School, Andhra Pradesh, India",
      duration: "2016 – 2017",
      grade: "CGPA: 9.8",
      status: "Completed",
      description:
        "Achieved excellent academic performance with a well-rounded foundation in core subjects.",
    },
  ];

  const highlights = [
    { value: "8.80", label: "MCA CGPA" },
    { value: "7.0", label: "B.Com CGPA" },
    { value: "9.67", label: "Intermediate" },
    { value: "9.8", label: "SSC CGPA" },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
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
        </motion.div>

        {/* Compact Vertical Cards */}
        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/60 backdrop-blur-md border border-gray-700/50 overflow-hidden">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border ${
                      edu.status === "Currently Pursuing"
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/50'
                        : 'bg-gray-800/70 text-gray-400 border-gray-700'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-100 mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                      {edu.grade}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Academic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-8">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Highlights</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-500"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-gray-400 mt-2 text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;