'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { ChevronDown, ChevronRight } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export function SkillsSection() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['languages']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const skillCategories = [
    { key: 'languages', label: 'Languages', icon: '💻' },
    { key: 'frameworks', label: 'Frameworks', icon: '🔧' },
    { key: 'databases', label: 'Databases', icon: '🗃️' },
    { key: 'tools', label: 'Tools', icon: '⚙️' },
    { key: 'devops', label: 'DevOps', icon: '🚀' },
    { key: 'ai_ml', label: 'AI/ML', icon: '🤖' }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--terminal-green)] mb-4">
            # Skills
          </h2>
          <p className="terminal-dim text-lg">
            POST /api/skills/query
          </p>
        </motion.div>

        <TerminalWindow title="skills-schema.gql">
          <div className="space-y-4">
            <div className="text-sm terminal-dim">
              <span className="text-[var(--terminal-info)]">type</span> <span className="text-[var(--terminal-green)]">Developer</span> {'{'}
            </div>
            
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="ml-4"
              >
                <button
                  onClick={() => toggleSection(category.key)}
                  className="flex items-center space-x-2 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
                >
                  {expandedSections.includes(category.key) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span>{category.icon}</span>
                  <span className="json-key">{category.label}</span>
                  <span className="terminal-dim">: [</span>
                  <span className="json-string">
                    {portfolioData.skills[category.key as keyof typeof portfolioData.skills]?.length || 0} items
                  </span>
                  <span className="terminal-dim">]</span>
                </button>
                
                {expandedSections.includes(category.key) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 mt-2 space-y-1"
                  >
                    {portfolioData.skills[category.key as keyof typeof portfolioData.skills]?.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                        className="text-sm"
                      >
                        <span className="terminal-dim">"</span>
                        <span className="json-string">{skill}</span>
                        <span className="terminal-dim">"</span>
                        {skillIndex < portfolioData.skills[category.key as keyof typeof portfolioData.skills]!.length - 1 && (
                          <span className="terminal-dim">,</span>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
            
            <div className="text-sm terminal-dim">
              {'}'}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}