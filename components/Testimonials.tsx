import React from 'react';
import { StickyNote } from './ui/Skeuomorphic';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] bg-amber-50 shadow-inner">
            <div className="max-w-6xl mx-auto px-4">
                 <h2 className="text-center text-4xl font-[Playfair Display] font-bold text-gray-800 mb-16 drop-shadow-sm">Direct from the DMs</h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12">
                     <StickyNote rotate="-rotate-2" color="bg-yellow-100">
                         <p className="font-handwriting text-lg leading-relaxed text-gray-800 mb-4 font-serif italic">
                            "Bro, I used the framing technique from Module 2 and closed a $3k deal on the spot. This paid for itself 10x already."
                         </p>
                         <div className="flex items-center gap-2 border-t border-yellow-200 pt-3">
                             <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                             <div>
                                 <p className="font-bold text-xs uppercase">James K.</p>
                                 <p className="text-[10px] text-gray-500">SaaS Closer</p>
                             </div>
                         </div>
                     </StickyNote>

                     <StickyNote rotate="rotate-2" color="bg-blue-100">
                         <p className="font-handwriting text-lg leading-relaxed text-gray-800 mb-4 font-serif italic">
                            "I was stuck at $5k/mo for 6 months. Abdullah's system for volume setting helped me fill my calendar. Hit $12k last month."
                         </p>
                         <div className="flex items-center gap-2 border-t border-blue-200 pt-3">
                             <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                             <div>
                                 <p className="font-bold text-xs uppercase">Sarah M.</p>
                                 <p className="text-[10px] text-gray-500">Agency Owner</p>
                             </div>
                         </div>
                     </StickyNote>

                     <StickyNote rotate="-rotate-1" color="bg-green-100">
                         <p className="font-handwriting text-lg leading-relaxed text-gray-800 mb-4 font-serif italic">
                            "Honest feedback? The objection handling section is brutal. In a good way. It stops prospects dead in their tracks."
                         </p>
                         <div className="flex items-center gap-2 border-t border-green-200 pt-3">
                             <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                             <div>
                                 <p className="font-bold text-xs uppercase">David R.</p>
                                 <p className="text-[10px] text-gray-500">High Ticket Closer</p>
                             </div>
                         </div>
                     </StickyNote>
                 </div>
            </div>
        </section>
    );
};
