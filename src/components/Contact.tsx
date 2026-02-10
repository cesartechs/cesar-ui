// components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  LinkedinIcon,
  GithubIcon 
} from './Icons';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Open to new opportunities and interesting projects
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-700">
                <EnvelopeIcon className="w-5 h-5 text-emerald-500 mr-4" />
                <span className="font-medium">your.email@example.com</span>
              </div>
              <div className="flex items-center text-slate-700">
                <PhoneIcon className="w-5 h-5 text-emerald-500 mr-4" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-700">
                <MapPinIcon className="w-5 h-5 text-emerald-500 mr-4" />
                <span className="font-medium">Your City, Country</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-slate-200 hover:border-emerald-300 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <LinkedinIcon className="w-6 h-6 text-emerald-500" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-slate-200 hover:border-emerald-300 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <GithubIcon className="w-6 h-6 text-emerald-500" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="space-y-6">
            <form
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none shadow-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-emerald-200"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}