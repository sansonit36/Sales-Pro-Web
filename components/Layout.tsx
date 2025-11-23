import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SkeuoButton } from './ui/Skeuomorphic';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen noise-bg flex flex-col font-sans text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-3 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded shadow-lg flex items-center justify-center text-white font-black italic font-serif">
                    SP
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-800 font-[Playfair Display]">Sales Pro</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link to="/" className="hover:text-blue-600 transition-colors">Curriculum</Link>
                <Link to="/vsl" className="hover:text-blue-600 transition-colors">Free Training (VSL)</Link>
                <Link to="/" className="hover:text-blue-600 transition-colors">About Abdullah</Link>
            </nav>

            <div className="flex items-center gap-4">
                <span className="hidden md:block text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded shadow-inner">Enrollment Open</span>
                <SkeuoButton size="sm" variant="primary">Join Now</SkeuoButton>
                <button className="md:hidden text-gray-600"><Menu/></button>
            </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-gray-300 py-12 border-t-8 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Sales Pro</h4>
                <p className="max-w-xs text-gray-400">
                    The only sales training grounded in real-time market data and $700k+ in verified collected cash.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white">Earnings Disclaimer</a></li>
                </ul>
            </div>
            <div className="text-right">
                <p>&copy; {new Date().getFullYear()} Abdullah Rauf.</p>
                <p className="text-gray-500 text-xs mt-2">Designed with obsession.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};