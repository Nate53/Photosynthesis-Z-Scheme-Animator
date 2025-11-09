
import React from 'react';
import { ZSchemeLesson } from './components/ZSchemeLesson';
import { LeafIcon } from './components/Icons';

const App: React.FC = () => {
  // Classes for the now-static navigation item
  const navItemClasses = 
    `flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-blue text-white shadow-lg`;

  return (
    <div className="min-h-screen bg-gray-900 text-light-gray font-sans">
      <header className="bg-deep-space/80 backdrop-blur-sm shadow-xl p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌿</span>
            <h1 className="text-xl md:text-3xl font-bold text-leaf-green tracking-wide">
              Photosynthesis Z-Scheme Explorer
            </h1>
          </div>
          <nav>
            {/* Changed button to a non-interactive div as it's the only view */}
            <div className={navItemClasses}>
              <LeafIcon />
              <span className="hidden sm:inline">Z-Scheme Lesson</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <ZSchemeLesson />
      </main>
      
      <footer className="bg-deep-space text-center p-4 mt-8">
        <p className="text-gray-400">An interactive learning tool for AP & IB Biology. Built with React and Gemini.</p>
      </footer>
    </div>
  );
};

export default App;