import './globals.css';
import type { Metadata } from 'next';
import { CommandPalette } from '@/components/CommandPalette';

export const metadata: Metadata = {
  title: 'Abhinav - Python Backend Developer',
  description: 'Portfolio of Abhinav, a Python Backend Developer specializing in Django, FastAPI, WebSockets, and AI integrations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)]">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}