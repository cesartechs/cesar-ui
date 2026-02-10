// components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: "Cloud Task Manager",
    description: "Full-stack task management application with real-time updates, file uploads, and user authentication. Deployed on AWS with auto-scaling capabilities.",
    image: "/project1.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "WebSocket"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    title: "DevOps Monitoring Dashboard",
    description: "Real-time system monitoring dashboard displaying server metrics, application logs, and performance analytics from multiple cloud services.",
    technologies: ["React", "Express", "Docker", "AWS CloudWatch", "Linux"],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/username/dashboard",
    featured: true
  },
  {
    title: "Microservices API Gateway",
    description: "Scalable API gateway managing multiple microservices with rate limiting, authentication, and load balancing across AWS infrastructure.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "JWT"],
    githubUrl: "https://github.com/username/api-gateway",
    featured: false
  }
];

const ProjectCard = ({ project, index }: any) => (
  <div className={`bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 ${
    project.featured ? 'lg:col-span-2' : ''
  }`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-600 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
            >
              {tech}
            </span>
          ))}  
        </div>
      </div>
    </motion.div>
  </div>
);export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Full-stack applications showcasing cloud infrastructure, database design, and modern web development
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}