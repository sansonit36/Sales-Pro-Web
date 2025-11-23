import React from 'react';
import { DigitalDisplay, SkeuoCard } from './ui/Skeuomorphic';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-200 border-t border-b border-gray-300 shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-700 uppercase tracking-widest mb-2">The Track Record</h2>
            <div className="h-1 w-20 bg-gray-400 mx-auto rounded-full shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <DigitalDisplay label="Revenue Generated (12 Mo)" value="$712k+" />
            <DigitalDisplay label="Calls Taken" value="1,400+" />
            <DigitalDisplay label="Avg. Closing Rate" value="38%" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="absolute top-4 left-4 w-full h-full border-4 border-gray-400 rounded-xl"></div>
                <img 
                    src="https://picsum.photos/600/800" 
                    alt="Abdullah Working" 
                    className="relative rounded-xl shadow-[10px_10px_20px_rgba(0,0,0,0.2)] border-4 border-gray-100 z-10 grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 shadow-xl rotate-2 transform border border-gray-200">
                    <p className="font-[Playfair Display] italic text-xl text-gray-800">"Sales is transfer of belief."</p>
                    <p className="text-right text-xs font-bold text-gray-400 mt-2">- A.R.</p>
                </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-4xl font-[Playfair Display] font-bold text-gray-800 drop-shadow-sm">
                    I'm not a "Guru". <br/>
                    I'm a Practitioner.
                </h3>
                <div className="prose prose-lg text-gray-600">
                    <p>
                        Most sales courses are taught by people who haven't taken a sales call in 5 years. They teach outdated tactics from the 90s.
                    </p>
                    <p>
                        <strong>I am in the trenches every single day.</strong>
                    </p>
                    <p>
                        Last year, I worked as both a Setter and a Closer for high-ticket offers. I dialed the leads, I faced the rejections, and I collected the credit card details.
                    </p>
                    <p>
                        I generated over <strong>$700,000</strong> in verified revenue. I didn't do it by being "pushy". I did it by understanding human psychology and having a framework that works for <em>modern</em> buyers who are skeptical of standard sales scripts.
                    </p>
                </div>
                
                <SkeuoCard className="bg-blue-50 border-blue-100">
                    <div className="flex gap-4">
                        <div className="text-4xl">💡</div>
                        <div>
                            <h4 className="font-bold text-blue-900">My Philosophy</h4>
                            <p className="text-blue-800 text-sm mt-1">
                                People love to buy, but they hate being sold. Sales Pro teaches you how to help them buy, so the "close" feels like a natural conclusion, not a battle.
                            </p>
                        </div>
                    </div>
                </SkeuoCard>
            </div>
        </div>
      </div>
    </section>
  );
};
