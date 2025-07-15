'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
import { Calendar, Clock, Tag } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--terminal-green)] mb-4">
            # Blog
          </h2>
          <p className="terminal-dim text-lg">
            GET /api/blog/posts?limit=10
          </p>
        </motion.div>

        <TerminalWindow title="blog-posts.json">
          <div className="space-y-6">
            <div className="text-sm terminal-dim">
              <span className="terminal-dim">{"{"}</span>
            </div>
            <div className="ml-4">
              <span className="json-key">"posts"</span>
              <span className="terminal-dim">: [</span>
            </div>
            
            {portfolioData.blog.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="ml-8 border-l border-[var(--terminal-border)] pl-4"
              >
                <div className="space-y-2">
                  <div className="text-sm terminal-dim">{"{"}</div>
                  <div className="ml-4 space-y-2">
                    <div>
                      <span className="json-key">"title"</span>
                      <span className="terminal-dim">: </span>
                      <span className="json-string">"{post.title}"</span>
                    </div>
                    <div>
                      <span className="json-key">"excerpt"</span>
                      <span className="terminal-dim">: </span>
                      <span className="json-string">"{post.excerpt}"</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm terminal-dim">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="w-3 h-3 terminal-dim" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs bg-[var(--terminal-surface-light)] px-2 py-1 rounded text-[var(--terminal-green)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm terminal-dim">
                    {"}"}
                    {index < portfolioData.blog.length - 1 && ","}
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="ml-4 text-sm terminal-dim">]</div>
            <div className="text-sm terminal-dim">{"}"}</div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}