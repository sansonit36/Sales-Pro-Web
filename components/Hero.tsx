import React, { useState, useEffect } from 'react';
import { SkeuoButton, SkeuoCard } from './ui/Skeuomorphic';
import { MessageCircle, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "So, how much money did you leave on the table today?",
    "You think your leads are bad? Or is it your closing?",
    "They said 'Let me think about it'. You said 'Okay'.",
    "I made $700k last year. Want the blueprint?"
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 30 : 60;
    
    if (!isDeleting && typedText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(prev => isDeleting ? prev.slice(0, -1) : currentPhrase.slice(0, prev.length + 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center">
      
      {/* Floating Elements Background */}
      <div className="absolute top-20 left-10 md:left-20 opacity-20 hidden md:block animate-bounce duration-[3000ms]">
         <div className="w-24 h-24 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 md:right-20 opacity-20 hidden md:block animate-bounce duration-[4000ms]">
         <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
        {/* Left: Copy */}
        <div className="space-y-8 text-center lg:text-left">
          
          {/* Conversational Bubble */}
          <div className="inline-block relative">
             <div className="bg-white border-2 border-gray-200 rounded-2xl rounded-bl-none py-3 px-6 shadow-lg mb-4 max-w-md mx-auto lg:mx-0">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300 shrink-0">
                    <img src="https://picsum.photos/100/100?grayscale" alt="Abdullah" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-left">
                    <p className="text-xs font-bold text-gray-500 uppercase">Abdullah Rauf says:</p>
                    <p className="text-gray-800 font-medium min-h-[1.5em]">{typedText}<span className="animate-pulse">|</span></p>
                 </div>
               </div>
             </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight text-shadow-engraved font-[Playfair Display]">
            Stop Pitching. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 drop-shadow-sm">Start Closing.</span>
          </h1>
          
          <p className="text-xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I generated <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded border border-green-200 shadow-sm font-bold">$700,000+</span> in 12 months as a Setter & Closer. 
            Most "gurus" talk theory. I talk bank deposits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
             <SkeuoButton size="lg" variant="gold" className="text-lg shadow-xl">
                <span className="flex items-center gap-2">
                   Access The Blueprint <ArrowRight size={20} />
                </span>
             </SkeuoButton>
             <SkeuoButton size="lg" variant="secondary" className="text-lg">
                View Case Studies
             </SkeuoButton>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-gray-500 font-medium">
             <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-blue-600"/> 100% Actionable</span>
             <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-blue-600"/> Battle Tested</span>
             <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-blue-600"/> Live Calls</span>
          </div>
        </div>

        {/* Right: Visual/Skeuomorphic Asset */}
        <div className="relative flex justify-center perspective-1000">
            <div className="relative w-full max-w-md transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500">
                <SkeuoCard title="Sales Pro Dashboard" className="bg-slate-50">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                            <span className="text-xs font-bold text-gray-400 uppercase">Revenue (YTD)</span>
                            <span className="text-green-600 font-mono font-bold">$712,450.00</span>
                        </div>
                        
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Calls Booked</span>
                                <span className="font-bold">1,240</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                                <div className="bg-blue-500 h-2 rounded-full w-[85%] shadow-[0_2px_4px_rgba(59,130,246,0.4)]"></div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Close Rate</span>
                                <span className="font-bold">38%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                                <div className="bg-purple-500 h-2 rounded-full w-[38%] shadow-[0_2px_4px_rgba(168,85,247,0.4)]"></div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-800 shadow-sm flex items-start gap-2">
                            <MessageCircle size={14} className="mt-0.5"/>
                            <p>"Abdullah, your script for objection handling on the price point just closed me a $5k deal. Insane."</p>
                        </div>
                         
                         <div className="pt-2">
                            <div className="h-24 bg-gray-100 rounded border border-gray-300 shadow-inner flex items-end justify-between px-2 pb-1 gap-1">
                                {[40, 60, 45, 70, 85, 60, 95].map((h, i) => (
                                    <div key={i} className="w-full bg-blue-500 rounded-t-sm shadow-md transition-all hover:bg-blue-400" style={{height: `${h}%`}}></div>
                                ))}
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-2 uppercase tracking-widest">Performance Graph</p>
                         </div>
                    </div>
                </SkeuoCard>

                {/* Overlapping Element */}
                <div className="absolute -bottom-10 -right-5 md:-right-10 w-48 rotate-3 transform hover:scale-105 transition-transform">
                   <SkeuoCard className="bg-white !p-3">
                      <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full border border-green-200">
                             <DollarSign className="text-green-600" size={24} />
                          </div>
                          <div>
                              <p className="text-xs text-gray-500 uppercase font-bold">Just Closed</p>
                              <p className="text-xl font-black text-gray-800">$4,500</p>
                          </div>
                      </div>
                   </SkeuoCard>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
