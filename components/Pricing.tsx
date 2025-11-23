import React from 'react';
import { SkeuoButton } from './ui/Skeuomorphic';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-gray-100">
            <div className="max-w-md mx-auto">
                {/* Receipt Container */}
                <div className="bg-white filter drop-shadow-2xl relative">
                    {/* Jagged Top */}
                    <div className="absolute top-0 left-0 w-full h-4 -mt-4 bg-[linear-gradient(135deg,transparent_75%,#fff_75%),linear-gradient(225deg,transparent_75%,#fff_75%)] bg-[length:20px_20px]"></div>
                    
                    <div className="p-8 text-center border-b-2 border-dashed border-gray-300">
                        <h3 className="font-mono text-2xl font-bold uppercase tracking-widest text-gray-800 mb-2">Sales Pro Invoice</h3>
                        <p className="text-xs font-mono text-gray-500">Order #8821-XP • Date: TODAY</p>
                    </div>

                    <div className="p-8 space-y-4">
                        <div className="flex justify-between font-mono text-sm items-end">
                            <span className="text-gray-600">Sales Pro Full Course</span>
                            <span className="font-bold">$997.00</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm items-end">
                            <span className="text-gray-600">Objection Scripts (Bonus)</span>
                            <span className="font-bold text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm items-end">
                            <span className="text-gray-600">Private Discord Access</span>
                            <span className="font-bold text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm items-end text-gray-400 line-through">
                            <span>Total Value</span>
                            <span>$2,497.00</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 border-t-2 border-dashed border-gray-300">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-mono font-bold text-xl uppercase">Total Due:</span>
                            <span className="font-black text-4xl text-gray-900">$197</span>
                        </div>
                        
                        <SkeuoButton fullWidth size="lg" variant="primary" className="mb-4">
                            Complete Order
                        </SkeuoButton>
                        
                        <p className="text-center text-[10px] text-gray-400 font-mono">
                            SECURE 256-BIT ENCRYPTED PAYMENT.<br/>
                            30-DAY MONEY BACK GUARANTEE.
                        </p>
                    </div>

                    {/* Jagged Bottom */}
                     <div className="absolute bottom-0 left-0 w-full h-4 -mb-4 bg-[linear-gradient(45deg,transparent_75%,#fff_75%),linear-gradient(-45deg,transparent_75%,#fff_75%)] bg-[length:20px_20px]"></div>
                </div>

                <div className="mt-12 text-center space-y-2">
                    <p className="font-bold text-gray-700">What's included:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center justify-center gap-2"><Check size={14} className="text-green-500"/> Lifetime Access to Materials</li>
                        <li className="flex items-center justify-center gap-2"><Check size={14} className="text-green-500"/> Bi-Weekly Q&A Calls</li>
                        <li className="flex items-center justify-center gap-2"><Check size={14} className="text-green-500"/> Contract Templates</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
