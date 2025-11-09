import React from 'react';
import { SunIcon, WaterIcon, OxygenIcon, ProtonIcon, ATPIcon, NADPHIcon } from './Icons';

interface ZSchemeDiagramProps {
  currentStep: number;
}

export const ZSchemeDiagram: React.FC<ZSchemeDiagramProps> = ({ currentStep }) => {
  const isVisible = (step: number) => (currentStep >= step ? 'opacity-100' : 'opacity-0');

  const electronPath1 = "M 80 200 C 90 135, 100 105, 120 70";
  const electronPath2 = "M 120 70 C 140 100, 180 160, 220 195";
  const electronPath3 = "M 220 195 C 230 145, 250 100, 280 60";

  return (
    <div className="bg-deep-space p-4 rounded-xl shadow-2xl relative overflow-hidden aspect-[4/3]">
      <div className="absolute top-2 left-2 text-sm text-gray-400 font-semibold transform -rotate-90 origin-top-left -translate-x-10 translate-y-24">Energy Level</div>
       <div className="absolute w-full h-full">
            {/* Energy Axis Line */}
            <svg className="absolute w-1 h-full left-6 top-0" viewBox="0 0 4 100" preserveAspectRatio="none">
                <path d="M 2 0 L 2 100" stroke="gray" strokeWidth="1" />
                <path d="M 0 0 L 4 0 L 2 5 Z" fill="gray" />
            </svg>
            
            <div className="relative w-full h-full text-white">

                {/* --- LEGEND --- */}
                <div className={`absolute top-2 left-1/2 -translate-x-1/2 bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-600 flex items-center gap-x-4 flex-wrap justify-center animate-fade-in transition-opacity duration-1000 ${isVisible(0)}`}>
                    <div className="flex items-center gap-2 text-xs">
                        <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4" fill="yellow" /></svg>
                        <span>Electron (e⁻)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <ProtonIcon className="w-4 h-4 text-yellow-300" />
                        <span>Proton (H⁺)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <OxygenIcon className="w-4 h-4 text-red-400" />
                        <span>Oxygen (O₂)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <WaterIcon className="w-4 h-4 text-sky-blue" />
                        <span>Water (H₂O)</span>
                    </div>
                </div>

                {/* --- PHOTON INPUT --- */}
                <div className={`absolute top-[10%] left-[10%] transition-all duration-1000 ${isVisible(1)}`}>
                    <SunIcon className="w-16 h-16 text-sun-yellow animate-pulse-slow"/>
                </div>
                
                 {/* --- PHOTON STRIKE ON PSII - ONLY VISIBLE ON STEP 1 --- */}
                <svg className={`absolute w-full h-full pointer-events-none transition-opacity duration-1000 ${currentStep === 1 ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 400 300">
                    <path d="M 60 50 L 75 180" stroke="#FFD700" strokeWidth="3" fill="none" strokeDasharray="150" className="animate-photon-strike"/>
                </svg>

                {/* --- PHOTOSYSTEM II --- */}
                <div className="absolute top-[60%] left-[15%] w-24 h-24 bg-green-700 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-green-400">
                    <span className="font-bold">PS II</span>
                    <span className="text-xs">(P680)</span>
                </div>
                
                {/* --- WATER SPLITTING --- */}
                <div className={`absolute top-[70%] left-[5%] text-center transition-opacity duration-1000 ${isVisible(2)}`}>
                    <WaterIcon className="w-10 h-10 text-sky-blue mx-auto"/>
                    <p className="text-xs mt-1">H₂O splits</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <OxygenIcon className="w-6 h-6 text-red-400" title="Oxygen"/>
                        <ProtonIcon className="w-6 h-6 text-yellow-300" title="Proton (H+)"/>
                    </div>
                </div>

                {/* --- DOTTED LINE PATHS --- */}
                <svg className="absolute w-full h-full" viewBox="0 0 400 300">
                    <path d={electronPath1} stroke="#7CFC00" strokeWidth="3" fill="none" strokeDasharray="5" className={`transition-opacity duration-1000 ${isVisible(3)}`} />
                    <path d={electronPath2} stroke="#7CFC00" strokeWidth="3" fill="none" strokeDasharray="5" className={`transition-opacity duration-1000 ${isVisible(4)}`} />
                    <path d={electronPath3} stroke="#7CFC00" strokeWidth="3" fill="none" strokeDasharray="5" className={`transition-opacity duration-1000 ${isVisible(6)}`} />
                </svg>

                {/* --- THE SINGLE ELECTRON --- */}
                <svg className="absolute w-full h-full" viewBox="0 0 400 300">
                    <g>
                        {/* Step 2: Electron appears on PSII */}
                        {currentStep === 2 && (
                            <circle cx="80" cy="200" r="5" fill="yellow" className="animate-fade-in" />
                        )}
                        {/* Step 3: Electron is excited from PSII */}
                        {currentStep === 3 && (
                            <circle cx="80" cy="200" r="5" fill="yellow">
                                <animateMotion dur="2s" fill="freeze" path="M 0 0 C 10 -65, 20 -95, 40 -130" />
                            </circle>
                        )}
                        {/* Step 4: Electron moves down the ETC */}
                        {currentStep === 4 && (
                            <circle cx="120" cy="70" r="5" fill="yellow">
                                <animateMotion dur="2s" fill="freeze" path="M 0 0 C 20 30, 60 90, 100 125" />
                            </circle>
                        )}
                        {/* Step 5: Electron arrives at PSI */}
                        {currentStep === 5 && (
                            <circle cx="220" cy="195" r="5" fill="yellow" className="animate-fade-in" />
                        )}
                        {/* Step 6: Electron is re-energized from PSI */}
                        {currentStep === 6 && (
                            <circle cx="220" cy="195" r="5" fill="yellow">
                                <animateMotion dur="2s" fill="freeze" path="M 0 0 C 10 -50, 30 -95, 60 -135" />
                            </circle>
                        )}
                        {/* Step 7: Electron moves to create NADPH */}
                        {currentStep === 7 && (
                            <circle cx="280" cy="60" r="5" fill="yellow">
                                <animateMotion dur="1s" begin="0.5s" fill="freeze" path="M 0 0 H 40" />
                                <animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="1.5s" fill="freeze" />
                            </circle>
                        )}
                    </g>
                </svg>

                {/* --- CHEMIOSMOSIS (ETC + ATP SYNTHESIS) - ONLY VISIBLE ON STEP 4 --- */}
                <div className={`absolute top-[15%] left-[30%] w-[45%] h-[50%] transition-opacity duration-1000 ${currentStep === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="relative w-full h-full border-2 border-purple-500 rounded-lg bg-purple-900/50 p-2 text-xs">
                        <p className="absolute -top-5 left-0 text-purple-300 font-bold text-sm">Zoom: Thylakoid Membrane</p>
                        
                        {/* Membrane */}
                        <div className="absolute top-[50%] left-0 w-full h-2 bg-purple-700 rounded-full"></div>
                        <p className="absolute top-[calc(50%-2.5rem)] left-2 text-gray-300">Stroma</p>
                        <p className="absolute top-[calc(50%+1rem)] left-2 text-gray-300">Thylakoid Lumen</p>

                        {/* Static Protons in Stroma (Low Concentration) */}
                        <ProtonIcon className="absolute top-[35%] left-[10%] w-5 h-5 text-yellow-300 opacity-80" />
                        <ProtonIcon className="absolute top-[25%] left-[50%] w-5 h-5 text-yellow-300 opacity-80" />

                        {/* Proton Pump (part of ETC) */}
                        <div className="absolute top-[calc(50%-2rem)] left-[15%] w-12 h-10 bg-purple-800 rounded-lg flex items-center justify-center"><p>Proton Pump</p></div>

                        {/* Protons being pumped IN */}
                        <div className="absolute top-[calc(50%-3rem)] left-[20%]">
                            <ProtonIcon className={`w-5 h-5 text-yellow-300 ${currentStep === 4 ? 'animate-proton-pump' : 'opacity-0'}`} />
                        </div>

                        {/* ATP Synthase */}
                        <div className="absolute top-[calc(50%-2.5rem)] left-[65%] w-16 h-12 bg-orange-800 rounded-t-full rounded-b-lg flex items-center justify-center"><p>ATP Synthase</p></div>
                        
                        {/* Static Protons in Lumen (High Concentration) */}
                        <ProtonIcon className="absolute top-[65%] left-[35%] w-5 h-5 text-yellow-300 opacity-80" />
                        <ProtonIcon className="absolute top-[75%] left-[45%] w-5 h-5 text-yellow-300 opacity-80" />
                        <ProtonIcon className="absolute top-[60%] left-[55%] w-5 h-5 text-yellow-300 opacity-80" />
                        <ProtonIcon className="absolute top-[80%] left-[25%] w-5 h-5 text-yellow-300 opacity-80" />
                        <ProtonIcon className="absolute top-[70%] left-[15%] w-5 h-5 text-yellow-300 opacity-80" />
                        
                        {/* Proton flowing OUT through synthase */}
                        <div className="absolute top-[68%] left-[72%]">
                            <ProtonIcon className={`w-5 h-5 text-yellow-300 ${currentStep === 4 ? 'animate-proton-flow' : 'opacity-0'}`} />
                        </div>

                        {/* ATP Synthesis */}
                        <div className={`absolute top-[5%] left-[60%] text-center ${currentStep === 4 ? 'animate-atp-synth' : 'opacity-0'}`}>
                            <p className="text-sm">ADP + Pᵢ</p>
                            <p className="text-xl font-bold text-orange-400">→</p>
                            <div className="flex items-center justify-center gap-1">
                                <ATPIcon className="w-8 h-8 text-orange-400"/>
                                <span className="font-bold text-base">ATP</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* --- PHOTON INPUT 2 --- */}
                <div className={`absolute top-[18%] left-[58%] transition-all duration-1000 ${isVisible(5)}`}>
                    <SunIcon className="w-12 h-12 text-sun-yellow animate-pulse-slow"/>
                </div>
                 {/* --- PHOTON STRIKE ON PSI - ONLY VISIBLE ON STEP 5 --- */}
                <svg className={`absolute w-full h-full pointer-events-none transition-opacity duration-1000 ${currentStep === 5 ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 400 300">
                    <path d="M 242 80 L 250 195" stroke="#FFD700" strokeWidth="3" fill="none" strokeDasharray="150" className="animate-photon-strike"/>
                </svg>

                {/* --- PHOTOSYSTEM I --- */}
                <div className="absolute top-[65%] left-[55%] w-24 h-24 bg-green-600 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-green-300">
                    <span className="font-bold">PS I</span>
                    <span className="text-xs">(P700)</span>
                </div>

                {/* --- NADPH PRODUCTION --- */}
                <div className={`absolute top-[10%] left-[75%] text-center transition-opacity duration-1000 ${isVisible(7)}`}>
                     <div className="p-2 bg-blue-800 rounded-lg border-2 border-blue-500 shadow-md">
                        <p className="font-bold text-sm">NADP⁺ Reductase</p>
                    </div>
                    <p className="mt-2">NADP⁺ + H⁺ →</p>
                    <div className="flex justify-center items-center mt-2 gap-2">
                        <NADPHIcon className="w-12 h-12 text-indigo-400"/>
                        <p className="font-bold">NADPH</p>
                    </div>
                </div>

                {/* Final products destination */}
                <div className={`absolute bottom-[5%] right-[5%] text-center transition-opacity duration-1000 ${isVisible(8)}`}>
                    <p className="text-lg font-bold text-leaf-green">ATP & NADPH</p>
                    <p className="text-sm">↓ To Calvin Cycle ↓</p>
                    <p className="text-sm">(in Stroma)</p>
                </div>
            </div>
        </div>
    </div>
  );
};
