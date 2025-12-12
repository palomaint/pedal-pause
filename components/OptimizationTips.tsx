import React, { useState } from 'react';
import { Lightbulb, X, TrendingUp, Users, MousePointer } from 'lucide-react';

const OptimizationTips: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-dark text-white px-5 py-3 rounded-full shadow-lg hover:bg-black transition-colors flex items-center gap-2 z-50 text-sm font-semibold"
      >
        <Lightbulb size={18} className="text-yellow-400" />
        Optimization Suggestions
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="bg-brand-dark p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-green-400" />
            <h3 className="font-bold text-lg">Optimizing Your Bookings</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            <p className="text-gray-600 text-sm">
                I've designed this page to maximize conversion based on your data. Here are specific strategies implemented and further suggestions:
            </p>

            <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600"><MousePointer size={20} /></div>
                    <div>
                        <h4 className="font-bold text-brand-dark">Micro-Commitments</h4>
                        <p className="text-sm text-gray-500">Instead of a long form, we use a "Quiz" format. Users are more likely to finish a form if they take small steps (one question at a time) rather than seeing 20 inputs at once.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-red-50 p-3 rounded-lg h-fit text-brand-red"><Users size={20} /></div>
                    <div>
                        <h4 className="font-bold text-brand-dark">Lead Capture (Suggestion)</h4>
                        <p className="text-sm text-gray-500">
                            <strong>Crucial:</strong> Before showing the "Results", ask for their email address to send the detailed itinerary. This builds your mailing list even if they don't book immediately.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-purple-50 p-3 rounded-lg h-fit text-purple-600"><TrendingUp size={20} /></div>
                    <div>
                        <h4 className="font-bold text-brand-dark">Urgency & Trust</h4>
                        <p className="text-sm text-gray-500">
                           Add "Only 4 spots left for this date" or recent testimonials near the "Book Now" button on the results page to reduce hesitation.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 border border-gray-200">
                <strong>Color Psychology:</strong> Used <span className="text-brand-red font-bold">#fe5657</span> for primary actions to create excitement/urgency, and <span className="text-brand-dark font-bold">#545454</span> for text to maintain readability and a premium feel.
            </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationTips;