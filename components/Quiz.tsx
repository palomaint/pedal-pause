import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { ArrowRight, ArrowLeft, Check, Mail } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState(''); // Local state for input fields

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
    // Auto advance for single choice if not last question
    if (currentStep < questions.length - 1 && currentQuestion.type === QuestionType.SINGLE_CHOICE) {
        setTimeout(() => {
            setCurrentStep(prev => prev + 1);
        }, 300); // Slight delay for visual feedback
    } else if (currentStep === questions.length - 1) {
        // If it's the last question and single choice, wait for manual next usually, 
        // but here we can keep the manual Next button for clarity on the final step
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: e.target.value,
    }));
  };

  const handleNext = () => {
    // Basic validation for Input types
    if (currentQuestion.type === QuestionType.INPUT) {
        if (currentQuestion.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputValue)) {
                alert('Please enter a valid email address.');
                return;
            }
        }
        if (!inputValue.trim()) return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setInputValue(''); // Reset input for next step if there is one
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setInputValue('');
    }
  };

  // Determine if we can proceed
  const isAnswered = currentQuestion.type === QuestionType.INPUT 
    ? inputValue.length > 0 
    : !!answers[currentQuestion.id];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px] flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2">
        <div 
          className="bg-brand-red h-2 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <span className="text-sm font-semibold text-brand-red tracking-wide uppercase">
            Question {currentStep + 1} of {questions.length}
          </span>
          <h2 className="text-3xl font-bold mt-2 text-brand-dark">{currentQuestion.text}</h2>
          {currentQuestion.helperText && (
            <p className="text-gray-400 mt-2">{currentQuestion.helperText}</p>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-grow">
            {currentQuestion.type === QuestionType.INPUT ? (
                <div className="mt-8">
                    <div className="relative">
                        <input
                            type="text" // simplified, could be email type
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder={currentQuestion.placeholder}
                            className="w-full p-6 text-xl border-2 border-gray-200 rounded-xl focus:border-brand-red focus:ring-0 outline-none transition-colors"
                            autoFocus
                        />
                        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                             {currentQuestion.id === 'email' && <Mail />}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-3">
                    {currentQuestion.options?.map((option) => {
                        const isSelected = answers[currentQuestion.id] === option.id;
                        return (
                        <button
                            key={option.id}
                            onClick={() => handleSelectOption(option.id)}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between group
                            ${isSelected 
                                ? 'border-brand-red bg-red-50 text-brand-dark' 
                                : 'border-gray-200 hover:border-brand-red/50 hover:bg-gray-50 text-gray-600'
                            }`}
                        >
                            <span className={`font-medium text-lg ${isSelected ? 'text-brand-red' : ''}`}>
                            {option.label}
                            </span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                            ${isSelected ? 'border-brand-red bg-brand-red text-white' : 'border-gray-300'}`}>
                            {isSelected && <Check size={14} strokeWidth={3} />}
                            </div>
                        </button>
                        );
                    })}
                </div>
            )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors
              ${currentStep === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-500 hover:text-brand-dark hover:bg-gray-100'}`}
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold shadow-lg transition-all transform
              ${!isAnswered
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-brand-red text-white hover:bg-red-600 hover:-translate-y-1 shadow-red-200'}`}
          >
            {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;