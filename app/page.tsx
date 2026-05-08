'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';



export default function Home() {
  /*hooks and logic*/
  const pathname = usePathname();
  const [highlight, setHighlight] = useState({ left: 0, width: 0, visible: false });

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const parent = el.parentElement as HTMLElement;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setHighlight({
      left: elRect.left - parentRect.left,
      width: elRect.width,
      visible: true,
    });
  };


  function Keyword({ href, color, external, children }: { href: string; color: string; external?: boolean; children: React.ReactNode }) {
  return (
      <a
        href={href}
        className="text-gray-900 relative inline-block group"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        <span
          className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: color }}
        />
      </a>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <nav className="py-4">
        <div className="max-w-screen-2xl mx-auto px-8 flex items-center justify-between">
          <div
            className="relative flex items-center border border-gray-200 rounded-lg px-1 py-1 gap-1"
            onMouseLeave={() => setHighlight(h => ({ ...h, visible: false }))}
          >
            <div
              className="absolute rounded-md bg-gray-100 transition-all duration-150"
              style={{ left: highlight.left, width: highlight.width, top: 4, bottom: 4, opacity: highlight.visible ? 1 : 0 }}
            />
            {[
              { label: 'Nathan', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: 'Music', href: '/music' },
              { label: 'Hobbies', href: '/hobbies' },
            ].map((item) => (
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


      <main className="max-w-screen-2xl mx-auto px-8 py-8">
        <div className="flex gap-16">
          {/* Left column - bio */}
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl text-gray-400 leading-relaxed">
              Hello! I&apos;m Nathan👋 Welcome to my personal website. I enjoy solving problems using{" "}
              <Keyword href="/projects" color="#3b82f6">software</Keyword> tools.
              I am currently studying Machine Learning at{" "}
              <Keyword href="https://www.cmu.edu" color="#c41230" external>Carnegie Mellon</Keyword>.
            </p>
            <p className="text-3xl text-gray-400 leading-relaxed">
              Outside of school, I am a student-athlete on{" "}
              <Keyword href="https://athletics.cmu.edu/sports/msoc/index" color="#c41230" external>CMU Men&apos;s Soccer Team</Keyword>.
              I am interested in{" "}
              <Keyword href="/hobbies" color="#16a34a">Sports</Keyword>,{" "}
              <Keyword href="/hobbies" color="#6116a3">Music</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Pokémon</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Hiking</Keyword>,{" "} and{" "} 
              <Keyword href="/hobbies" color="#16a34a">Movies</Keyword>.
            </p>
            <p className="text-3xl text-gray-400 leading-relaxed">
              I also play{" "}
              <Keyword href="/hobbies" color="#16a34a">Piano</Keyword>{" "}and{" "}<Keyword href="/hobbies" color="#16a34a">Read</Keyword>, although not as consistently. But I&apos;m working on being better at that.
            </p>
          </div>

          {/* Right column - cards (placeholder) */}
          <div className="w-1/2">
            <p className="text-gray-400">projects coming soon</p>
          </div>

        </div>
      </main>


    </div>
  );
}