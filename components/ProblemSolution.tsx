import React from 'react';
import { X, Check, AlertCircle, Zap } from 'lucide-react';
import { SkeuoCard } from './ui/Skeuomorphic';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-[Playfair Display] font-black text-gray-800">
                You're Working Too Hard.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If you're making less than $10k/mo, it's not a "hustle" problem. It's a mechanism problem.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* The Old Way - Crumpled Paper Look */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gray-400 transform rotate-1 rounded-xl opacity-20"></div>
                <div className="relative bg-[#f0f0f0] p-8 rounded-xl shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] border border-gray-300 h-full flex flex-col">
                    <div className="absolute -top-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transform -rotate-3 font-bold uppercase tracking-widest text-sm">
                        The "Grind"
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-500 mb-6 mt-4 flex items-center gap-2">
                        <span className="line-through decoration-red-500 decoration-4">The Old Way</span>
                        <AlertCircle className="text-red-500" />
                    </h3>

                    <ul className="space-y-6 flex-grow">
                        <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <div className="bg-red-100 p-1 rounded-full shrink-0 mt-1">
                                <X size={20} className="text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700">Cold DMs & Spamming</h4>
                                <p className="text-sm text-gray-500">Sending 100 copy-paste messages a day just to get blocked or ignored.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <div className="bg-red-100 p-1 rounded-full shrink-0 mt-1">
                                <X size={20} className="text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700">"Pushy" Scripts</h4>
                                <p className="text-sm text-gray-500">Using high-pressure tactics that make prospects hate you and ghost you.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                            <div className="bg-red-100 p-1 rounded-full shrink-0 mt-1">
                                <X size={20} className="text-red-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700">The "Think About It" Trap</h4>
                                <p className="text-sm text-gray-500">Accepting vague objections and chasing leads for weeks with zero results.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* The New Way - High Tech / Clean Look */}
            <div className="relative transform hover:-translate-y-2 transition-transform duration-300">
                <SkeuoCard className="bg-white border-blue-200 h-full !p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>
                    
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded shadow-lg transform rotate-2 font-bold uppercase tracking-widest text-sm z-10">
                        Sales Pro 2.0
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-4 flex items-center gap-2">
                        The New Way
                        <Zap className="text-yellow-500 fill-yellow-500" />
                    </h3>

                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-green-100 p-1 rounded-full shrink-0 mt-1 shadow-sm border border-green-200">
                                <Check size={20} className="text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Inbound Authority</h4>
                                <p className="text-sm text-gray-600">Position yourself so leads come to YOU pre-sold on your value.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-green-100 p-1 rounded-full shrink-0 mt-1 shadow-sm border border-green-200">
                                <Check size={20} className="text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Consultative Closing</h4>
                                <p className="text-sm text-gray-600">A diagnosis-based framework where the prospect <em>asks you</em> to buy.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-green-100 p-1 rounded-full shrink-0 mt-1 shadow-sm border border-green-200">
                                <Check size={20} className="text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Objection Immunity</h4>
                                <p className="text-sm text-gray-600">Handle "too expensive" before it even comes up using advanced framing.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-sm font-medium flex items-center gap-3">
                        <span className="text-2xl">💡</span>
                        "I switched to this method and my close rate went from 15% to 42% in 3 weeks."
                    </div>
                </SkeuoCard>
            </div>
        </div>
      </div>
    </section>
  );
};