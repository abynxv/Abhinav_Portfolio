'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { ApiDemoSection } from '@/components/ApiDemoSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--terminal-bg)]">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <ApiDemoSection />
      </main>
      
      <footer className="py-8 px-6 border-t border-[var(--terminal-border)]">
        <div className="max-w-4xl mx-auto text-center terminal-dim">
          <p className="mb-2">
            © 2025 Abhinav. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm">
            <span className="text-[var(--terminal-green)]">$</span> while(true) {'{ code(); coffee(); sleep(); }'} 
          </p>
        </div>
      </footer>
    </div>
  );
}