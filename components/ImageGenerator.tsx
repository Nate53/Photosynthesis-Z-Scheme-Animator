import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
// FIX: Import ImageIcon to fix the 'Cannot find name ImageIcon' error.
import { SparklesIcon, ImageIcon } from './Icons';

export const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const examplePrompts = [
    "A microscopic view of a chloroplast",
    "Thylakoid membranes stacked into grana, photorealistic",
    "ATP Synthase molecule, scientific illustration",
    "A vibrant diagram of the Calvin Cycle",
    "The chemical structure of chlorophyll"
  ];

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    try {
      const base64Image = await generateImage(prompt);
      setImageUrl(`data:image/jpeg;base64,${base64Image}`);
    } catch (e) {
      setError('Failed to generate image. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  }

  return (
    <div className="bg-deep-space p-6 rounded-xl shadow-2xl max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-leaf-green mb-4 text-center">Photosynthesis Image Generator</h2>
      <p className="text-center text-gray-300 mb-6">
        Bring biology concepts to life! Enter a prompt to generate a unique image using AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A detailed illustration of a plant cell"
          className="flex-grow bg-gray-800 text-white border-2 border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-blue"
          disabled={isLoading}
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="flex justify-center items-center gap-2 px-6 py-2 bg-sky-blue text-white font-semibold rounded-lg disabled:opacity-60 disabled:cursor-not-allowed hover:bg-sky-600 transition-all duration-300 shadow-lg"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <SparklesIcon />
              <span>Generate</span>
            </>
          )}
        </button>
      </div>

       <div className="mb-6 text-center">
            <p className="text-sm text-gray-400 mb-2">Or try an example:</p>
            <div className="flex flex-wrap justify-center gap-2">
                {examplePrompts.map((p) => (
                    <button key={p} onClick={() => handleExampleClick(p)} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors">
                        {p}
                    </button>
                ))}
            </div>
        </div>

      {error && <p className="text-red-400 text-center my-4">{error}</p>}

      <div className="mt-6 bg-gray-800/50 rounded-lg min-h-[300px] flex items-center justify-center p-4 border-2 border-dashed border-gray-700">
        {imageUrl ? (
          <img src={imageUrl} alt={prompt} className="max-w-full max-h-[512px] rounded-lg shadow-2xl animate-fade-in" />
        ) : (
          <div className="text-center text-gray-500">
            <ImageIcon className="w-16 h-16 mx-auto mb-2" />
            <p>Your generated image will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};