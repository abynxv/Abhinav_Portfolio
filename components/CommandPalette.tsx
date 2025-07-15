'use client';

import React, { useState, useEffect } from 'react';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Terminal, User, Code, FolderOpen, FileText, Mail, Globe } from 'lucide-react';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const commands = [
    { icon: Terminal, label: 'Home', action: () => scrollToSection('home') },
    { icon: User, label: 'About', action: () => scrollToSection('about') },
    { icon: Code, label: 'Skills', action: () => scrollToSection('skills') },
    { icon: FolderOpen, label: 'Projects', action: () => scrollToSection('projects') },
    { icon: FileText, label: 'Blog', action: () => scrollToSection('blog') },
    { icon: Mail, label: 'Contact', action: () => scrollToSection('contact') },
    { icon: Globe, label: 'API Demo', action: () => scrollToSection('api-demo') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {commands.map((command) => (
            <CommandItem key={command.label} onSelect={command.action}>
              <command.icon className="mr-2 h-4 w-4" />
              <span>{command.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}