// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Cesar Garces</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              System Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-3xl mx-auto">
            Full-Stack Developer | AWS Cloud Practitioner | Junior DevOps Engineer
            <br />
            Bridging infrastructure excellence with software innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-emerald-200"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.div>
            </button>
            <button
              className="px-8 py-3 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-emerald-200"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.div>
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDownIcon className="w-6 h-6 text-emerald-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}