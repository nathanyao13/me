'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Nathan', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Music', href: '/music' },
  { label: 'Hobbies', href: '/hobbies' },
];

export default function Nav() {
  const pathname = usePathname();
  const [highlight, setHighlight] = useState({ left: 0, width: 0, visible: false });

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const parent = el.parentElement as HTMLElement;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setHighlight({ left: elRect.left - parentRect.left, width: elRect.width, visible: true });
  };

  return (
    <nav className="py-4 font-sans">
      <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between">
        <div
          className="relative flex items-center border border-gray-200 rounded-lg px-1 py-1 gap-1"
          onMouseLeave={() => setHighlight(h => ({ ...h, visible: false }))}
        >
          <div
            className="absolute rounded-md bg-gray-100 transition-all duration-150"
            style={{ left: highlight.left, width: highlight.width, top: 4, bottom: 4, opacity: highlight.visible ? 1 : 0 }}
          />
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onMouseEnter={handleMouseEnter}
              className={`relative z-10 px-3 py-1 rounded-md text-sm ${
                pathname === item.href ? 'font-semibold text-gray-900' : 'text-gray-500'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/nathanyao13" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 squiggly-link">GitHub</a>
          <a href="https://www.linkedin.com/in/nathanyao13/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 squiggly-link">LinkedIn</a>
          <a href="/files/nathan_yao_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 squiggly-link">Resume</a>
        </div>
      </div>
    </nav>
  );
}
