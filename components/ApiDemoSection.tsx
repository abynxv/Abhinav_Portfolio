'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { JsonBlock } from './JsonBlock';
import { Play, Download } from 'lucide-react';

export function ApiDemoSection() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('projects');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const endpoints = {
    projects: {
      method: 'GET',
      url: '/api/projects',
      description: 'Fetch all projects',
      response: {
        status: 200,
        data: [
          { id: 1, title: 'AI Chat API', status: 'production' },
          { id: 2, title: 'E-commerce Backend', status: 'production' }
        ],
        metadata: { total: 2, page: 1, limit: 10 }
      }
    },
    skills: {
      method: 'GET',
      url: '/api/skills',
      description: 'Get developer skills',
      response: {
        status: 200,
        data: {
          languages: ['Python', 'JavaScript', 'TypeScript'],
          frameworks: ['Django', 'FastAPI', 'React'],
          databases: ['PostgreSQL', 'Redis', 'MongoDB']
        }
      }
    },
    resume: {
      method: 'GET',
      url: '/api/resume.pdf',
      description: 'Download resume',
      response: {
        status: 200,
        headers: { 'Content-Type': 'application/pdf' },
        body: 'PDF content...'
      }
    }
  };

  const handleRequest = async (endpoint: string) => {
    setLoading(true);
    setResponse(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setResponse(endpoints[endpoint as keyof typeof endpoints].response);
    setLoading(false);
  };

  return (
    <section id="api-demo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--terminal-green)] mb-4">
            # API Demo
          </h2>
          <p className="terminal-dim text-lg">
            Interactive API explorer - try the endpoints below
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <TerminalWindow title="api-explorer.http">
            <div className="space-y-4">
              {Object.entries(endpoints).map(([key, endpoint]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 border rounded cursor-pointer transition-all ${
                    selectedEndpoint === key 
                      ? 'border-[var(--terminal-green)] bg-[var(--terminal-surface-light)]' 
                      : 'border-[var(--terminal-border)] hover:border-[var(--terminal-green)]'
                  }`}
                  onClick={() => setSelectedEndpoint(key)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium px-2 py-1 rounded ${
                        endpoint.method === 'GET' 
                          ? 'bg-[var(--terminal-green)] text-black' 
                          : 'bg-[var(--terminal-info)] text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="font-mono text-sm">{endpoint.url}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRequest(key);
                      }}
                      disabled={loading}
                      className="flex items-center space-x-1 text-[var(--terminal-green)] hover:text-[var(--terminal-green-dim)] transition-colors disabled:opacity-50"
                    >
                      {key === 'resume' ? (
                        <Download className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {loading ? 'Loading...' : key === 'resume' ? 'Download' : 'Run'}
                      </span>
                    </button>
                  </div>
                  <p className="text-sm terminal-dim">{endpoint.description}</p>
                </motion.div>
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="response.json">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-[var(--terminal-green)] border-t-transparent rounded-full animate-spin" />
                  <span className="text-[var(--terminal-green)]">Executing request...</span>
                </div>
              </div>
            ) : response ? (
              <JsonBlock data={response} />
            ) : (
              <div className="flex items-center justify-center h-64 terminal-dim">
                <p>Select an endpoint and click "Run" to see the response</p>
              </div>
            )}
          </TerminalWindow>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <TerminalWindow title="resume-download">
            <div className="text-center space-y-4">
              <div className="text-lg font-semibold text-[var(--terminal-green)]">
                Download Resume
              </div>
              <div className="text-sm terminal-dim">
                GET /api/resume.pdf
              </div>
              <button className="bg-[var(--terminal-green)] text-black px-6 py-3 rounded font-medium hover:bg-[var(--terminal-green-dim)] transition-colors flex items-center space-x-2 mx-auto">
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}