import React from 'react';

// A tactile, raised button that feels like plastic or metal
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const SkeuoButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase tracking-wide transition-all active:scale-[0.98] active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-b from-blue-500 to-blue-700 text-white border-t border-blue-400 shadow-[0_4px_0_rgb(29,78,216),0_8px_10px_rgba(0,0,0,0.3)] active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.4)] hover:brightness-110 rounded-lg",
    secondary: "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 border-t border-white shadow-[0_4px_0_rgb(156,163,175),0_8px_10px_rgba(0,0,0,0.1)] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.2)] hover:brightness-105 rounded-lg",
    danger: "bg-gradient-to-b from-red-500 to-red-700 text-white border-t border-red-400 shadow-[0_4px_0_rgb(185,28,28),0_8px_10px_rgba(0,0,0,0.3)] active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.4)] hover:brightness-110 rounded-lg",
    gold: "bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-yellow-900 border-t border-yellow-200 shadow-[0_4px_0_rgb(180,83,9),0_8px_15px_rgba(245,158,11,0.4)] active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.2)] hover:brightness-110 rounded-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="drop-shadow-sm">{children}</span>
    </button>
  );
};

// A panel that looks like a physical object/device
export const SkeuoCard: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => {
  return (
    <div className={`relative bg-gray-100 rounded-xl p-1 border border-gray-200 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] ${className}`}>
       {title && (
        <div className="bg-gray-200 rounded-t-lg px-4 py-2 border-b border-gray-300 mb-4 flex items-center justify-between">
            <span className="font-bold text-gray-600 uppercase text-xs tracking-wider">{title}</span>
            <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-400 shadow-inner"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-inner"></div>
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-inner"></div>
            </div>
        </div>
       )}
       <div className={`${title ? 'px-4 pb-4' : 'p-4'}`}>
        {children}
       </div>
    </div>
  );
};

// A display panel for stats (LED style)
export const DigitalDisplay: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border-4 border-gray-700 shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none"></div>
      <p className="text-gray-400 text-xs font-mono uppercase mb-1 tracking-widest">{label}</p>
      <p className="font-mono text-3xl md:text-4xl text-green-400 font-black tracking-widest drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">
        {value}
      </p>
    </div>
  );
};

// A "Sticky Note" component
export const StickyNote: React.FC<{ children: React.ReactNode; color?: string; rotate?: string }> = ({ children, color = 'bg-yellow-200', rotate = 'rotate-1' }) => {
    return (
        <div className={`${color} text-gray-800 p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.2)] transform ${rotate} transition-transform hover:scale-105 hover:z-10 relative`}>
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-400/30 blur-sm rotate-1"></div>
            {children}
        </div>
    )
}
