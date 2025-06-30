import { Gem } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg transform animate-pulse">
            <Gem className="w-12 h-12 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-blue-200 rounded-full animate-ping"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Pearl Elegance
        </h1>
        
        <p className="text-xl text-gray-600 opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          Luxury Pearl Jewelry
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}