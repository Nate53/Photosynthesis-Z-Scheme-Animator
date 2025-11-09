
import React from 'react';

interface ExplanationPanelProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const steps = [
  {
    title: "Introduction: The Z-Scheme",
    text: "Welcome! This is the Z-Scheme — a model that shows how energy from light is captured and converted into chemical energy (ATP and NADPH) during the light-dependent reactions of photosynthesis. These reactions occur in the thylakoid membrane of the chloroplast."
  },
  {
    title: "Step 1: Light Hits Photosystem II",
    text: "Photons from sunlight strike chlorophyll molecules in Photosystem II (PSII). This excites an electron (e⁻), boosting it to a higher energy level so it can be transferred to the electron transport chain. Think of it as the electron getting supercharged by the sun!"
  },
  {
    title: "Step 2: Water is Split (Photolysis)",
    text: "To replace the lost electron, PSII splits a water molecule (H₂O). This process, called photolysis, releases oxygen (O₂) into the atmosphere, and hydrogen ions (H⁺) into the thylakoid space."
  },
  {
    title: "Step 3: Electron Enters the ETC",
    text: "The high-energy electron is passed to an Electron Transport Chain (ETC), a series of protein complexes embedded in the thylakoid membrane."
  },
  {
    title: "Step 4: ATP Synthesis (Chemiosmosis)",
    text: "As the electron 'falls' down the ETC, it releases energy. This energy is used to pump H⁺ ions across the membrane, creating a proton gradient. This gradient powers ATP Synthase, which generates ATP. This is called chemiosmosis."
  },
  {
    title: "Step 5: Light Re-energizes in Photosystem I",
    text: "The now low-energy electron arrives at Photosystem I (PSI). Sunlight strikes PSI, re-exciting the electron and boosting it to an even higher energy level than before."
  },
  {
    title: "Step 6: Electron's Final Journey",
    text: "This re-energized electron is passed down a second, shorter electron transport chain."
  },
  {
    title: "Step 7: NADPH is Formed",
    text: "At the end of the chain, the electron is transferred to an enzyme called NADP⁺ Reductase. This enzyme uses the electron and a hydrogen ion (H⁺) to reduce NADP⁺ into NADPH, another energy-carrying molecule."
  },
  {
    title: "Step 8: Products for the Calvin Cycle",
    text: "The light-dependent reactions are complete! The two products, ATP and NADPH, now move to the stroma to provide the chemical energy needed to power the Calvin Cycle (light-independent reactions), where glucose is made."
  }
];

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ currentStep, setCurrentStep }) => {
  const totalSteps = steps.length - 1;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCurrentStep(0);
  }

  const stepData = steps[currentStep];

  return (
    <div className="bg-deep-space p-6 rounded-xl shadow-2xl h-full flex flex-col justify-between animate-slide-in">
      <div>
        <h2 className="text-2xl font-bold text-leaf-green mb-2">{stepData.title}</h2>
        <div className="bg-gray-800 h-1 w-1/4 rounded-full mb-4"></div>
        <p className="text-light-gray leading-relaxed">{stepData.text}</p>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-400">Step {currentStep} of {totalSteps}</span>
             <button
                onClick={handleReset}
                className="text-sm text-sky-blue hover:text-sky-300 transition-colors"
            >
                Reset
            </button>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-leaf-green h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className="px-6 py-2 bg-sky-blue text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
