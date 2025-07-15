'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const statusMessages = {
    idle: null,
    sending: { icon: <div className="w-4 h-4 border-2 border-[var(--terminal-green)] border-t-transparent rounded-full animate-spin" />, text: 'Sending message...', color: 'text-[var(--terminal-green)]' },
    success: { icon: <CheckCircle className="w-4 h-4" />, text: 'Message sent successfully!', color: 'text-[var(--terminal-green)]' },
    error: { icon: <XCircle className="w-4 h-4" />, text: 'Failed to send message', color: 'text-[var(--terminal-error)]' }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--terminal-green)] mb-4">
            # Contact
          </h2>
          <p className="terminal-dim text-lg">
            POST /api/contact/send
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <TerminalWindow title="contact-form.json">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-sm terminal-dim mb-4">
                <span>{"{"}</span>
              </div>
              
              <div className="ml-4 space-y-4">
                <div>
                  <label className="block text-sm json-key mb-2">"name":</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--terminal-surface-light)] border border-[var(--terminal-border)] rounded px-3 py-2 text-sm focus:outline-none focus:border-[var(--terminal-green)] json-string"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm json-key mb-2">"email":</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--terminal-surface-light)] border border-[var(--terminal-border)] rounded px-3 py-2 text-sm focus:outline-none focus:border-[var(--terminal-green)] json-string"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm json-key mb-2">"message":</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-[var(--terminal-surface-light)] border border-[var(--terminal-border)] rounded px-3 py-2 text-sm focus:outline-none focus:border-[var(--terminal-green)] json-string resize-none"
                    placeholder="Your message..."
                  />
                </div>
              </div>
              
              <div className="text-sm terminal-dim">
                <span>{"}"}</span>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[var(--terminal-green)] text-black px-4 py-2 rounded font-medium hover:bg-[var(--terminal-green-dim)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
              
              {status !== 'idle' && statusMessages[status] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 text-sm ${statusMessages[status]!.color}`}
                >
                  {statusMessages[status]!.icon}
                  <span>{statusMessages[status]!.text}</span>
                </motion.div>
              )}
            </form>
          </TerminalWindow>
          
          <TerminalWindow title="contact-info.json">
            <div className="space-y-4">
              <div className="text-sm terminal-dim">
                <span>{"{"}</span>
              </div>
              <div className="ml-4 space-y-3">
                <div>
                  <span className="json-key">"email"</span>
                  <span className="terminal-dim">: </span>
                  <a 
                    href={`mailto:${portfolioData.contact.email}`}
                    className="json-string hover:text-[var(--terminal-green-dim)] transition-colors"
                  >
                    "{portfolioData.contact.email}"
                  </a>
                </div>
                <div>
                  <span className="json-key">"github"</span>
                  <span className="terminal-dim">: </span>
                  <a 
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="json-string hover:text-[var(--terminal-green-dim)] transition-colors"
                  >
                    "{portfolioData.contact.github}"
                  </a>
                </div>
                <div>
                  <span className="json-key">"linkedin"</span>
                  <span className="terminal-dim">: </span>
                  <a 
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="json-string hover:text-[var(--terminal-green-dim)] transition-colors"
                  >
                    "{portfolioData.contact.linkedin}"
                  </a>
                </div>
                <div>
                  <span className="json-key">"twitter"</span>
                  <span className="terminal-dim">: </span>
                  <a 
                    href={portfolioData.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="json-string hover:text-[var(--terminal-green-dim)] transition-colors"
                  >
                    "{portfolioData.contact.twitter}"
                  </a>
                </div>
                <div>
                  <span className="json-key">"response_time"</span>
                  <span className="terminal-dim">: </span>
                  <span className="json-string">"Usually within 24 hours"</span>
                </div>
                <div>
                  <span className="json-key">"timezone"</span>
                  <span className="terminal-dim">: </span>
                  <span className="json-string">"IST (UTC+5:30)"</span>
                </div>
              </div>
              <div className="text-sm terminal-dim">
                <span>{"}"}</span>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}