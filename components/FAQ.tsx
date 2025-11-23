import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "I have zero sales experience. Will this work for me?",
        a: "Yes. In fact, it's often better. You haven't picked up bad habits yet. The 'Setter's Mindset' module is designed specifically to take you from 0 to your first deal."
    },
    {
        q: "Is this course live or pre-recorded?",
        a: "The core curriculum is pre-recorded so you can watch at your own pace. However, we have bi-weekly LIVE Q&A calls where I dissect your calls and answer specific questions."
    },
    {
        q: "How fast can I see results?",
        a: "My best students landed their first client within 14 days. If you follow the outreach scripts in Module 1 exactly as written, you should have interviews booked within your first week."
    },
    {
        q: "Do you offer refunds?",
        a: "We offer a 30-day action-based guarantee. If you watch the modules, do the work, and still don't think it's worth it, I'll refund you. I don't want your money if I didn't help you make more of it."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-800 text-gray-100 border-t-4 border-gray-900">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-mono text-green-400 mb-2">
                        &lt;System.Queries /&gt;
                    </h2>
                    <p className="text-gray-400">Everything you need to know before joining.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div key={idx} className="relative group">
                                {/* Tab effect */}
                                <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-300 ${isOpen ? 'bg-green-500' : 'bg-gray-700 group-hover:bg-gray-600'}`}></div>
                                
                                <div 
                                    className={`bg-gray-700/50 border border-gray-600 pl-6 pr-4 py-4 cursor-pointer transition-all duration-300 hover:bg-gray-700 ${isOpen ? 'bg-gray-700 shadow-lg' : ''}`}
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`font-bold text-lg ${isOpen ? 'text-white' : 'text-gray-300'}`}>{faq.q}</h3>
                                        <div className={`p-1 rounded-full border border-gray-500 ${isOpen ? 'bg-green-500 border-green-400 text-white' : 'text-gray-400'}`}>
                                            {isOpen ? <Minus size={16}/> : <Plus size={16}/>}
                                        </div>
                                    </div>

                                    <div 
                                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-gray-300 text-sm leading-relaxed border-t border-gray-600 pt-4">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};