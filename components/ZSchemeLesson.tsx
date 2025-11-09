
import React, { useState } from 'react';
import { ZSchemeDiagram } from './ZSchemeDiagram';
import { ExplanationPanel } from './ExplanationPanel';

export const ZSchemeLesson: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
      <div className="lg:w-3/5 xl:w-2/3">
        <ZSchemeDiagram currentStep={currentStep} />
      </div>
      <div className="lg:w-2/5 xl:w-1/3">
        <ExplanationPanel currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </div>
  );
};
