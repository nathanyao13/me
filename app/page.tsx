export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <nav className="px-8 py-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center border border-gray-200 rounded-lg px-1 py-1 gap-1">
            <span className="px-3 py-1 rounded-md bg-gray-100 font-medium text-sm">Nathan Yao</span>
            <a href="#projects" className="px-3 py-1 rounded-md text-sm text-gray-500 hover:bg-gray-100 transition-colors">Projects</a>
            <a href="#hobbies" className="px-3 py-1 rounded-md text-sm text-gray-500 hover:bg-gray-100 transition-colors">Hobbies</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/nathanyao13" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 squiggly-link">GitHub</a>
            <a href="https://www.linkedin.com/in/nathanyao13/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 squiggly-link">LinkedIn</a>
          </div>
        </div>
      </nav>


      <main className="max-w-7xl mx-auto px-8 py-8">
        <p>content goes here</p>
      </main>

    </div>
  );
}