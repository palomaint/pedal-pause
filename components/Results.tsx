import React, { useMemo } from 'react';
import { PACKAGES } from '../constants';
import { Star, RefreshCw, Mail } from 'lucide-react';
import { Package } from '../types';

interface ResultsProps {
  answers: Record<string, string>;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ answers, onRestart }) => {
  // Logic to determine the best package based on specific hierarchy
  const recommendation = useMemo((): Package => {
    
    // 1. Strict Montañas Vacias Logic
    // Must be: Bikepacking YES + Gravel + 5 Days + Advanced
    // If they say YES to bikepacking but fail other criteria, they fall through to other packages.
    const isStrictMV = 
      answers['bikepacking'] === 'yes_bikepacking' &&
      answers['sport_type'] === 'gravel' &&
      answers['duration'] === '5_days' &&
      answers['level'] === 'advanced';

    if (isStrictMV) {
      const pkg = PACKAGES.find(p => p.id === 'mv_challenge');
      if (pkg) return pkg;
    }

    // 2. Culture / Wine Tasting Override
    // If culture is YES, we prioritize the Pedal and Pause packages.
    if (answers['culture'] === 'yes_culture') {
       if (answers['meal_preference'] === 'self_catered') {
         const pkg = PACKAGES.find(p => p.id === '3d_pp_sc');
         if (pkg) return pkg;
       }
       // Default to standard Pedal and Pause if not strictly self-catered
       const pkg = PACKAGES.find(p => p.id === '3d_pp');
       if (pkg) return pkg;
    }

    // 3. Standard Logic (Duration + Guide + Meal)
    // We try to find an exact match for the 3 variables.
    
    const durationTag = answers['duration'] === '5_days' ? '5_days' : '3_days'; // Default to 3 days if custom
    const guideTag = answers['guide_type'] === 'guided' ? 'guided' : 'unguided';
    const mealTag = answers['meal_preference'] || 'half_board'; // Default fallback

    // Attempt Exact Match
    let match = PACKAGES.find(pkg => 
      pkg.matchTags.includes(durationTag) && 
      pkg.matchTags.includes(guideTag) && 
      pkg.matchTags.includes(mealTag)
    );

    if (match) return match;

    // 4. Fallback Logic
    // If exact combination doesn't exist (e.g. 5 Day Assisted Self Catered might not be in the list),
    // we relax the Meal Preference constraint and find the closest match for Duration + Guide.
    match = PACKAGES.find(pkg => 
      pkg.matchTags.includes(durationTag) && 
      pkg.matchTags.includes(guideTag)
    );

    if (match) return match;

    // Ultimate Fallback (should rarely happen given the inputs)
    return PACKAGES[1]; // Return 3 Day Self Guided as safe default
  }, [answers]);

  const needsBike = answers['bike_rental']?.includes('yes');

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">We found your perfect ride!</h2>
        <p className="text-gray-500">Based on your preferences, we recommend:</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <img 
            src={recommendation.imageUrl} 
            alt={recommendation.title} 
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-brand-dark font-bold text-sm flex items-center gap-1 shadow-lg">
            <Star size={14} className="text-brand-red fill-current" />
            Top Match
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-brand-dark mb-4">{recommendation.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {recommendation.description}
          </p>

          <div className="space-y-3 mb-8">
            <p className="font-semibold text-sm text-brand-dark uppercase tracking-wider">Highlights:</p>
            {recommendation.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                {feature}
              </div>
            ))}
          </div>

          {needsBike && (
             <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-sm">
                <strong>🚲 Bike Rental Included:</strong> We've noted you need a bike. Our {answers['bike_rental'] === 'yes_premium' ? 'Premium' : 'Standard'} rental options will be available during booking.
             </div>
          )}

          <div className="space-y-4">
            <a 
              href={recommendation.bookingUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-200 transform hover:-translate-y-0.5"
            >
              Book This Package Now
            </a>
            <div className="flex gap-4">
               <button 
                  onClick={onRestart}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-500 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors font-medium"
                >
                  <RefreshCw size={18} />
                  Retake Quiz
               </button>
               <a 
                  href="mailto:info@pedalandpause.com"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-500 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors font-medium"
               >
                  <Mail size={18} />
                  Contact Us
               </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>Not sure? <a href="https://www.pedalandpause.com/" className="underline hover:text-brand-red">Browse all packages</a> directly on our site.</p>
      </div>
    </div>
  );
};

export default Results;