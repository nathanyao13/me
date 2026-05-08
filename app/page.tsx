export default function Home() {
  /*hooks and logic*/
  function Keyword({ href, color, external, squiggly, children }: {
    href: string;
    color: string;
    external?: boolean;
    squiggly?: boolean;
    children: React.ReactNode;
  }) {
    const encodedColor = color.replace('#', '%23');
    const wave = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='${encodedColor}' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`;

    return (
      <a
        href={href}
        className="text-gray-900 relative inline-block group"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        <span
          className={`absolute bottom-0 left-0 w-full ${
            squiggly
              ? 'h-[8px] opacity-0 group-hover:opacity-100'
              : 'h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200'
          }`}
          style={squiggly
            ? { backgroundImage: wave, backgroundRepeat: 'repeat-x', backgroundSize: '12px 8px' }
            : { backgroundColor: color }
          }
        />
      </a>
    );
  }


  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-screen-2xl mx-auto px-8 py-8">
        <div className="flex gap-16">
          {/* Left column - bio */}
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl text-gray-400 leading-relaxed">
              Hello! I&apos;m Nathan👋 Welcome to my personal website. I enjoy solving problems using{" "}
              <Keyword href="/projects" color="#3b82f6">software</Keyword> tools.
              I am currently studying Machine Learning at{" "}
              <Keyword href="https://www.cmu.edu" color="#c41230" external squiggly>Carnegie Mellon</Keyword>.
            </p>
            <p className="text-3xl text-gray-400 leading-relaxed">
              Outside of school, I am a student-athlete on{" "}
              <Keyword href="https://athletics.cmu.edu/sports/msoc/index" color="#c41230" external squiggly>CMU Men&apos;s Soccer Team</Keyword>.
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
            <p className="text-gray-400">cards coming soon</p>
          </div>

        </div>
      </main>


    </div>
  );
}