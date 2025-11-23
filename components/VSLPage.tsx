import React from 'react';
import { SkeuoButton, SkeuoCard } from './ui/Skeuomorphic';
import { Lock, Play, Volume2, CalendarCheck, AlertTriangle } from 'lucide-react';

export const VSLPage: React.FC = () => {
  return (
    <div className="py-24 px-4 min-h-screen flex flex-col items-center">
      
      {/* Headline Section */}
      <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-red-200 animate-pulse">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            Free Training
        </div>
        <h1 className="text-3xl md:text-5xl font-[Playfair Display] font-black text-gray-800 leading-tight">
          How I Generated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">$700,000</span> in 12 Months As A Setter & Closer
        </h1>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Without cold calling 100 leads a day, sounding like a robot, or using "pressure tactics" that destroy your reputation.
        </p>
      </div>

      {/* Skeuomorphic Video Player Container */}
      <div className="w-full max-w-5xl mx-auto relative group">
         
         {/* Monitor Frame */}
         <div className="bg-gray-800 p-4 md:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.1)] border-t border-gray-600 relative overflow-hidden">
            
            {/* Screen Glare/Reflection */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-20 rounded-2xl"></div>

            {/* The Video Screen */}
            <div className="relative aspect-video bg-black rounded-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden border border-gray-900">
               {/* Placeholder for iframe */}
               <div className="absolute inset-0 flex items-center justify-center bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover">
                   <div className="absolute inset-0 bg-black/40"></div>
                   
                   {/* Play Button Overlay */}
                   <button className="relative group/play">
                       <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all group-hover/play:scale-110">
                           <Play size={40} className="text-white fill-white ml-2" />
                       </div>
                       <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-white font-bold tracking-widest text-sm opacity-0 group-hover/play:opacity-100 transition-opacity">
                           CLICK TO WATCH
                       </div>
                   </button>
               </div>
               
               {/* Simulated Video Progress Bar */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                   <div className="h-full bg-red-600 w-1/3 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow"></div>
                   </div>
               </div>
            </div>

            {/* Monitor Chin / Controls */}
            <div className="mt-4 flex items-center justify-between px-2">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                        <span className="text-green-500 text-xs font-mono uppercase tracking-widest">Connected</span>
                    </div>
                    <span className="text-gray-500 text-xs font-mono hidden md:block">SOURCE: DIRECT_FEED_01</span>
                 </div>
                 
                 <div className="flex items-center gap-3">
                     <Volume2 size={16} className="text-gray-400" />
                     <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                         <div className="w-2/3 h-full bg-gray-400"></div>
                     </div>
                 </div>
            </div>
         </div>
         
         {/* Decorative Shadow underneath */}
         <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/20 blur-2xl rounded-[50%]"></div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 w-full max-w-3xl mx-auto space-y-6 text-center">
         <SkeuoCard className="bg-yellow-50 border-yellow-200 !p-8">
             <div className="flex flex-col items-center gap-4">
                 <div className="flex items-center gap-2 text-yellow-800 font-bold uppercase tracking-wide text-sm mb-2">
                    <AlertTriangle size={18} />
                    <span>Limited Time Offer</span>
                 </div>
                 <h2 className="text-2xl font-bold text-gray-800">Ready to replicate this system?</h2>
                 <p className="text-gray-600">
                    Join Sales Pro today and get the exact scripts, templates, and frameworks I used to close $700k.
                 </p>
                 <div className="pt-4 w-full md:w-auto">
                    <SkeuoButton size="lg" variant="gold" className="w-full md:w-auto text-lg shadow-xl animate-bounce-slow">
                        <span className="flex items-center justify-center gap-2">
                        YES! I Want The Blueprint <CalendarCheck size={20} />
                        </span>
                    </SkeuoButton>
                 </div>
                 <p className="text-xs text-gray-400 mt-2">30-Day Money Back Guarantee • Instant Access</p>
             </div>
         </SkeuoCard>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 opacity-70">
             <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold border border-gray-300 rounded p-2 bg-white">
                 <Lock size={12}/> SSL Secure
             </div>
             <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold border border-gray-300 rounded p-2 bg-white">
                 <CalendarCheck size={12}/> Instant Access
             </div>
             <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold border border-gray-300 rounded p-2 bg-white">
                 24/7 Support
             </div>
             <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold border border-gray-300 rounded p-2 bg-white">
                 Verified Results
             </div>
         </div>
      </div>

    </div>
  );
};