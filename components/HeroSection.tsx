'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { TypingEffect } from './TypingEffect';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export function HeroSection() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showStatus, setShowStatus] = useState(false);

  const commands = [
    "whoami",
    "cat /about/experience.txt",
    "ls -la /skills/",
    "curl -X GET /api/projects",
    "systemctl status developer.service"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 3000);

    const statusTimer = setTimeout(() => setShowStatus(true), 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(statusTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <TerminalWindow title="abynxv@portfolio:~$" className="mb-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="terminal-prompt">$</span>
              <TypingEffect text="echo 'Hello, World! I am Abhinav'" speed={50} />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="pl-2 space-y-2"
            >
              <div className="text-2xl font-bold text-[var(--terminal-green)]">
                Hello, World! I am {portfolioData.developer.name}
              </div>
              <div className="text-lg terminal-dim">
                {portfolioData.developer.title}
              </div>
              <div className="text-sm terminal-dim flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {portfolioData.developer.location}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="pt-4 border-t border-[var(--terminal-border)]"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="terminal-prompt">$</span>
                <span className="terminal-text">{commands[currentCommand]}</span>
                <span className="pulse-dot">_</span>
              </div>
              
              {showStatus && (
                <div className="pl-2 text-sm terminal-dim">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--terminal-green)] rounded-full animate-pulse"></div>
                    <span>Status: Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-[var(--terminal-green)] rounded-full animate-pulse"></div>
                    <span>Experience: {portfolioData.developer.experience}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </TerminalWindow>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <a 
            href={portfolioData.developer.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a 
            href={portfolioData.developer.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a 
            href={`mailto:${portfolioData.developer.email}`}
            className="flex items-center space-x-2 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}