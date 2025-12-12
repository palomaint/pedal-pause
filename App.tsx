import React, { useState } from 'react';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Results from './components/Results';
import OptimizationTips from './components/OptimizationTips';
import { QUESTIONS } from './constants';
import { Package } from './types';

function App() {
  const [view, setView] = useState<'hero' | 'quiz' | 'results'>('hero');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const handleStartQuiz = () => {
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sendDataToWix = async (data: Record<string, string>) => {
    // --- WIX INTEGRATION CODE ---
    // Since this React app is running in the browser, you need to expose a public API endpoint
    // in your Wix backend (using Velo / HTTP Functions) to receive this data.
    
    // 1. In Wix Velo, create a file named `http-functions.js` in the Backend section.
    // 2. Create a `post_submitQuiz` function there that uses `wix-crm-backend` to create a contact.
    // 3. Replace 'YOUR_WIX_SITE_URL/_functions/submitQuiz' with your actual endpoint.

    const WIX_ENDPOINT = 'https://www.pedalandpause.com/_functions/submitQuiz';

    try {
      // NOTE: This fetch will likely fail in this preview environment because the endpoint doesn't exist yet.
      // Uncomment the fetch block below when your Wix backend is ready.

      /*
      await fetch(WIX_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          answers: data
        }),
      });
      */
      
      console.log("Sending data to Wix (Simulated):", data);
    } catch (error) {
      console.error("Failed to send data to Wix:", error);
    }
  };

  const handleQuizComplete = (answers: Record<string, string>) => {
    setUserAnswers(answers);
    sendDataToWix(answers); // Send lead gen data
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setUserAnswers({});
    setView('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#545454] font-sans selection:bg-[#fe5657] selection:text-white pb-20">
      
      {/* Navigation / Header */}
      <nav className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tighter text-[#545454]">
                PEDAL<span className="text-[#fe5657]">&</span>PAUSE
            </span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-500">
            <a href="#" className="hover:text-[#fe5657] transition-colors">PACKAGES</a>
            <a href="#" className="hover:text-[#fe5657] transition-colors">ABOUT</a>
            <a href="#" className="hover:text-[#fe5657] transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 pt-12 md:pt-20">
        
        {view === 'hero' && (
          <div className="animate-fade-in">
             <Hero onStart={handleStartQuiz} />
          </div>
        )}

        {view === 'quiz' && (
          <div className="animate-slide-up">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">Build Your Perfect Experience</h2>
                <p className="text-gray-400">Step-by-step to your ideal cycling holiday</p>
            </div>
            <Quiz 
              questions={QUESTIONS} 
              onComplete={handleQuizComplete} 
            />
          </div>
        )}

        {view === 'results' && (
          <Results 
            answers={userAnswers} 
            onRestart={handleRestart} 
          />
        )}

      </main>

      {/* Optimization Tips Modal for Client */}
      <OptimizationTips />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;