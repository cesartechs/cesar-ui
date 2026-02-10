// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ServerIcon, 
  CodeBracketIcon, 
  CloudIcon, 
  CommandLineIcon,
  CircleStackIcon as DatabaseIcon 
} from '@heroicons/react/24/outline';

const skills = {
  backend: ['Node.js', 'Python', 'Express', 'REST APIs', 'Microservices'],
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  cloud: ['EC2', 'S3', 'Lambda', 'API Gateway', 'CloudWatch', 'IAM'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB'],
  systems: ['Linux/Unix', 'Bash Scripting', 'Docker', 'Networking', 'CI/CD']
};

const SkillCategory = ({ title, skills, icon: Icon, delay }: any) => (
  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-emerald-500 mr-3" />
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span
            key={skill}
            className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
          >
            {skill}
          </span>
        ))}  
      </div>
    </motion.div>
  </div>
);export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Full-stack development expertise with strong infrastructure and cloud computing foundation
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Backend Development"
            skills={skills.backend}
            icon={ServerIcon}
            delay={0}
          />
          <SkillCategory
            title="Frontend Development"
            skills={skills.frontend}
            icon={CodeBracketIcon}
            delay={0.1}
          />
          <SkillCategory
            title="Cloud & AWS"
            skills={skills.cloud}
            icon={CloudIcon}
            delay={0.2}
          />
          <SkillCategory
            title="Database"
            skills={skills.database}
            icon={DatabaseIcon}
            delay={0.3}
          />
          <SkillCategory
            title="Systems & Linux"
            skills={skills.systems}
            icon={CommandLineIcon}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}