import React, { useState } from 'react';
import { ZSchemeLesson } from './components/ZSchemeLesson';
import { ImageGenerator } from './components/ImageGenerator';
import { LeafIcon, ImageIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'lesson' | 'generator'>('lesson');

  const navButtonClasses = "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 shadow-md";
  const activeClasses = "bg-sky-blue text-white shadow-lg";
  const inactiveClasses = "bg-gray-700 hover:bg-gray-600 text-gray-300";

  return (
    <div className="min-h-screen bg-gray-900 text-light-gray font-sans">
      <header className="bg-deep-space/80 backdrop-blur-sm shadow-xl p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌿</span>
            <h1 className="text-xl md:text-3xl font-bold text-leaf-green tracking-wide">
              Photosynthesis Explorer
            </h1>
          </div>
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('lesson')}
              className={`${navButtonClasses} ${activeView === 'lesson' ? activeClasses : inactiveClasses}`}
              aria-current={activeView === 'lesson'}
            >
              <LeafIcon />
              <span className="hidden sm:inline">Z-Scheme Lesson</span>
            </button>
             <button
              onClick={() => setActiveView('generator')}
              className={`${navButtonClasses} ${activeView === 'generator' ? activeClasses : inactiveClasses}`}
              aria-current={activeView === 'generator'}
            >
              <ImageIcon />
              <span className="hidden sm:inline">Image Generator</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        {activeView === 'lesson' ? <ZSchemeLesson /> : <ImageGenerator />}
      </main>
      
      <footer className="bg-deep-space text-center p-4 mt-8">
        <p className="text-gray-400">An interactive learning tool for AP & IB Biology. Built with React and Gemini.</p>
      </footer>
    </div>
  );
};

export default App;
