'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { JsonBlock } from './JsonBlock';
import portfolioData from '@/data/portfolio.json';

export function AboutSection() {
  const aboutData = {
    developer: {
      name: portfolioData.developer.name,
      title: portfolioData.developer.title,
      location: portfolioData.developer.location,
      experience: portfolioData.developer.experience,
      bio: portfolioData.developer.bio,
      availability: portfolioData.developer.availability,
      specialties: [
        "REST API Development",
        "WebSocket Implementation", 
        "Database Optimization",
        "AI/ML Integration",
        "System Architecture"
      ],
      current_focus: "Building scalable backend systems with AI integration"
    }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--terminal-green)] mb-4">
            # About Me
          </h2>
          <p className="terminal-dim text-lg">
            GET /api/developer/profile
          </p>
        </motion.div>

        <TerminalWindow title="developer-profile.json">
          <JsonBlock data={aboutData} />
        </TerminalWindow>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <TerminalWindow title="response-status">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-[var(--terminal-green)]">HTTP/1.1</span>
                <span className="text-[var(--terminal-green)]">200 OK</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="terminal-dim">Content-Type:</span>
                <span className="text-[var(--terminal-green)]">application/json</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="terminal-dim">X-Response-Time:</span>
                <span className="text-[var(--terminal-green)]">42ms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="terminal-dim">X-Developer-Status:</span>
                <span className="text-[var(--terminal-green)]">Available</span>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}