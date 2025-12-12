import React from 'react';
import { ArrowRight, MapPin, Bike } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl max-w-5xl mx-auto min-h-[600px] flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50 skew-x-12 translate-x-20 z-0"></div>
      
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-brand-red rounded-full text-sm font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            FIND YOUR PERFECT RIDE
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
            Discover Your Next <span className="text-brand-red">Cycling Adventure</span>
          </h1>
          
          <p className="text-xl text-gray-500 leading-relaxed">
            From grueling gravel challenges to leisure culture tours. Answer a few simple questions, and we'll match you with the perfect Pedal & Pause package.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-brand-red text-white text-lg font-bold rounded-xl shadow-xl shadow-red-200 hover:bg-red-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
            >
              Start the Quiz
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
               href="https://www.pedalandpause.com/services-9"
               className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-500 text-lg font-bold rounded-xl hover:border-brand-dark hover:text-brand-dark transition-all flex items-center justify-center"
            >
               Browse All
            </a>
          </div>

          <div className="pt-8 border-t border-gray-100 flex gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Bike size={16} />
              <span>Premium Bikes</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Curated Routes</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 h-full flex justify-center md:justify-end">
             <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-brand-red rounded-full opacity-10 blur-3xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://picsum.photos/id/191/600/600" 
                  alt="Cyclist on road" 
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-full transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
             </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;