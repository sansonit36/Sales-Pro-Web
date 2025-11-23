import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lock, PlayCircle, FileText } from 'lucide-react';

const modules = [
    {
        title: "Module 1: The Setter's Mindset",
        desc: "Why 90% of setters fail before they pick up the phone.",
        lessons: ["Deconstructing the 'Gatekeeper' myth", "The Volume vs. Quality equation", "Setting up your CRM for speed"]
    },
    {
        title: "Module 2: Advanced Discovery",
        desc: "Stop asking surface level questions. Get to the pain.",
        lessons: ["The 3-Layer deep questioning technique", "Tonality: How to sound like an expert, not a salesperson", "Identifying the true decision maker"]
    },
    {
        title: "Module 3: The Closing Framework",
        desc: "The exact script I used to close $700k.",
        lessons: ["The Transition: Moving from discovery to pitch", "Price Presentation Psychology", "The Silence: Using pause to increase pressure"]
    },
    {
        title: "Module 4: Objection Warfare",
        desc: "Handling 'I need to think about it' and 'Too expensive'.",
        lessons: ["The Smokescreen Detector", "Isolating the Objection", "The 'Financial Resources' Loop"]
    }
];

export const Curriculum: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 max-w-4xl mx-auto px-4">
             <div className="text-center mb-12">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200">The Curriculum</span>
                <h2 className="text-4xl font-[Playfair Display] font-bold text-gray-800 mt-4 mb-2">Inside The Vault</h2>
                <p className="text-gray-500">No fluff. Just the systems.</p>
            </div>

            <div className="space-y-6">
                {modules.map((mod, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div 
                            key={idx} 
                            className={`transition-all duration-300 ${isOpen ? 'transform scale-[1.02]' : ''}`}
                        >
                            {/* Folder Tab Effect */}
                            <div className={`w-32 h-8 rounded-t-lg ml-4 border-t border-l border-r relative -mb-[1px] z-10 
                                ${isOpen 
                                    ? 'bg-gradient-to-b from-orange-100 to-orange-50 border-orange-200' 
                                    : 'bg-gray-200 border-gray-300 mt-2'}`}
                            ></div>
                            
                            {/* Main Folder Body */}
                            <div 
                                className={`relative border rounded-lg rounded-tl-none overflow-hidden transition-all shadow-md
                                ${isOpen 
                                    ? 'bg-orange-50 border-orange-200 shadow-[0_10px_20px_rgba(251,146,60,0.15)]' 
                                    : 'bg-white border-gray-300 hover:bg-gray-50 cursor-pointer'}`}
                                onClick={() => !isOpen && setOpenIndex(idx)}
                            >
                                {/* Header */}
                                <div 
                                    className="p-6 flex items-center justify-between cursor-pointer select-none"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenIndex(isOpen ? null : idx);
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-inner
                                            ${isOpen ? 'bg-orange-200 text-orange-800' : 'bg-gray-100 text-gray-500'}`}>
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold ${isOpen ? 'text-gray-900' : 'text-gray-600'}`}>{mod.title}</h3>
                                            <p className="text-sm text-gray-500">{mod.desc}</p>
                                        </div>
                                    </div>
                                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        {isOpen ? <ChevronUp className="text-orange-500"/> : <ChevronDown className="text-gray-400"/>}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 border-t border-orange-100 bg-white/50">
                                        <ul className="space-y-3 mt-4">
                                            {mod.lessons.map((lesson, lIdx) => (
                                                <li key={lIdx} className="flex items-center gap-3 p-3 rounded hover:bg-white transition-colors border border-transparent hover:border-orange-100">
                                                    {lIdx === 0 ? <PlayCircle size={18} className="text-green-500"/> : <Lock size={18} className="text-gray-400"/>}
                                                    <span className="text-gray-700 font-medium text-sm">{lesson}</span>
                                                    {lIdx === 0 && <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Preview</span>}
                                                </li>
                                            ))}
                                            <li className="flex items-center gap-3 p-3 text-blue-600 font-semibold text-sm">
                                                <FileText size={18}/>
                                                <span>Downloadable Resources & Scripts</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
