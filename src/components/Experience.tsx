// components/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, CalendarIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: "Help Desk Analyst",
    company: "Current Company",
    period: "2022 - Present",
    description: [
      "Provide technical support and troubleshooting for complex software and hardware issues",
      "Collaborate with development teams to identify and resolve systemic problems",
      "Document and improve support processes, reducing resolution time by 30%",
      "Bridge communication between end-users and engineering teams"
    ],
    skills: ["Troubleshooting", "Customer Support", "System Administration", "Documentation"]
  },
  {
    title: "Software Developer",
    company: "Previous Tech Company",
    period: "2020 - 2022",
    description: [
      "Developed full-stack web applications using React, Node.js, and PostgreSQL",
      "Deployed and maintained applications on AWS infrastructure",
      "Implemented RESTful APIs and microservices architecture",
      "Collaborated in Agile teams to deliver features on tight deadlines"
    ],
    skills: ["React", "Node.js", "AWS", "PostgreSQL", "Agile"]
  },
  {
    title: "Junior Developer",
    company: "Startup Company",
    period: "2019 - 2020",
    description: [
      "Built responsive frontend interfaces with modern JavaScript frameworks",
      "Developed backend services and database schemas",
      "Gained experience in Linux server administration and deployment",
      "Participated in code reviews and continuous integration processes"
    ],
    skills: ["JavaScript", "Python", "Linux", "MySQL", "Git"]
  }
];

const ExperienceCard = ({ experience, index }: any) => (
  <div className="relative pl-8 pb-8 border-l-2 border-emerald-400">
    <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-400 rounded-full border-4 border-white shadow-lg" />
    
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{experience.title}</h3>
            <div className="flex items-center text-emerald-600 mt-1">
              <BuildingOfficeIcon className="w-4 h-4 mr-2" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center text-slate-500 mt-2 sm:mt-0">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span className="font-medium">{experience.period}</span>
          </div>
        </div>

        <ul className="text-slate-600 mb-4 space-y-2">
          {experience.description.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="text-emerald-500 mr-2 mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From software development to technical support, building comprehensive system expertise
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}