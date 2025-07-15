'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface JsonBlockProps {
  data: any;
  className?: string;
}

export function JsonBlock({ data, className = "" }: JsonBlockProps) {
  const renderValue = (value: any, key?: string): React.ReactNode => {
    if (value === null) return <span className="json-null">null</span>;
    if (typeof value === 'boolean') return <span className="json-boolean">{value.toString()}</span>;
    if (typeof value === 'number') return <span className="json-number">{value}</span>;
    if (typeof value === 'string') return <span className="json-string">"{value}"</span>;
    
    if (Array.isArray(value)) {
      return (
        <div className="ml-4">
          [
          {value.map((item, index) => (
            <div key={index} className="ml-4">
              {renderValue(item)}{index < value.length - 1 ? ',' : ''}
            </div>
          ))}
          ]
        </div>
      );
    }
    
    if (typeof value === 'object') {
      const entries = Object.entries(value);
      return (
        <div className="ml-4">
          {'{'}
          {entries.map(([k, v], index) => (
            <div key={k} className="ml-4">
              <span className="json-key">"{k}"</span>: {renderValue(v)}
              {index < entries.length - 1 ? ',' : ''}
            </div>
          ))}
          {'}'}
        </div>
      );
    }
    
    return value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`code-block ${className}`}
    >
      <pre className="text-sm overflow-x-auto">
        {renderValue(data)}
      </pre>
    </motion.div>
  );
}