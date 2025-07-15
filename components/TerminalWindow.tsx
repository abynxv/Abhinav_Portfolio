'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({ title = "terminal", children, className = "" }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`terminal-window ${className}`}
    >
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="ml-2 text-sm terminal-dim">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </motion.div>
  );
}