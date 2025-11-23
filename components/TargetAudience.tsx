import React from 'react';
import { User, TrendingUp, briefcase } from 'lucide-react'; // Note: lucide-react might not have briefcase as default export in older versions, using generic Icon pattern if needed, but assuming standard lib
import { Briefcase } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      role: "The Aspiring Setter",
      icon: <User size={32} className="text-gray-600" />,
      pain: "Stuck in a 9-5, wants to break into high-ticket sales but has zero experience.",
      gain: "Learn the foundational skills to land your first $3k/mo gig in 30 days."
    },
    {
      role: "The Stuck Closer",
      icon: <TrendingUp size={32} className="text-blue-600" />,
      pain: "Hitting a ceiling at $5k/mo. Inconsistent months. Deals falling through.",
      gain: "Unlock the advanced psychology to double your closing rate and hit $10k+."
    },
    {
      role: "The Agency Owner",
      icon: <Briefcase size={32} className="text-purple-600" />,
      pain: "Spending too much time selling instead of fulfilling. Need a system to train a team.",
      gain: "A plug-and-play sales curriculum to train your own killers on autopilot."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#e0e5ec]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <span className="bg-gray-200 text-gray-600 border border-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">Clearance Level</span>
            <h2 className="text-3xl md:text-4xl font-[Playfair Display] font-bold text-gray-800 mt-4">Who Is This For?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((item, idx) => (
                <div key={idx} className="relative group">
                    {/* Lanyard Hole */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-gray-800 rounded-full z-10 flex items-center justify-center">
                        <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    
                    {/* ID Card */}
                    <div className="bg-white pt-10 pb-8 px-6 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.1)] border border-gray-200 h-full transform transition-transform group-hover:-translate-y-2">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 shadow-inner">
                                {item.icon}
                            </div>
                            
                            <h3 className="text-xl font-black uppercase text-gray-800 mb-2 tracking-wide">{item.role}</h3>
                            <div className="w-full h-px bg-gray-200 mb-4"></div>
                            
                            <div className="text-left space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">Current Status</p>
                                    <p className="text-sm text-gray-600 leading-snug">{item.pain}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-green-600">Mission Objective</p>
                                    <p className="text-sm text-gray-800 font-medium leading-snug">{item.gain}</p>
                                </div>
                            </div>
                        </div>

                        {/* Barcode */}
                        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-end opacity-50">
                            <div className="space-y-1">
                                <div className="h-1 w-24 bg-gray-800"></div>
                                <div className="h-1 w-20 bg-gray-800"></div>
                                <div className="h-2 w-28 bg-gray-800"></div>
                            </div>
                            <span className="font-mono text-[10px] text-gray-400">ACCESS GRANTED</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};