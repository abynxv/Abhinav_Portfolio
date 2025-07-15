'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { JsonBlock } from './JsonBlock';
import { Github, ExternalLink, Play, Pause } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const statusColors = {
    production: 'text-[var(--terminal-green)]',
    active: 'text-[var(--terminal-info)]',
    maintenance: 'text-[var(--terminal-warning)]'
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--terminal-green)] mb-4">
            # Projects
          </h2>
          <p className="terminal-dim text-lg">
            query {'{ projects { id title description tech_stack status } }'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TerminalWindow title={`project-${project.id}.json`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[var(--terminal-green)]">
                      {project.title}
                    </h3>
                    <div className={`text-xs px-2 py-1 rounded ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <p className="text-sm terminal-dim">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="json-key">tech_stack</span>
                      <span className="terminal-dim">: [</span>
                    </div>
                    <div className="ml-4 flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, techIndex) => (
                        <span 
                          key={tech}
                          className="text-xs bg-[var(--terminal-surface-light)] px-2 py-1 rounded json-string"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm terminal-dim">]</div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t border-[var(--terminal-border)]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="w-full text-left text-sm text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
                  >
                    {selectedProject === project.id ? 'Hide' : 'Show'} features
                  </button>
                  
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <JsonBlock data={{ features: project.features }} />
                    </motion.div>
                  )}
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}