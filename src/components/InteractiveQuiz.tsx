import React, { useState } from 'react';
import { PREPAREDNESS_QUIZZES } from '../data/quizData';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, ShieldCheck } from 'lucide-react';

interface InteractiveQuizProps {
  lang: 'en' | 'ne';
  onNavigateToGuides?: (disasterId?: string) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  lang,
  onNavigateToGuides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionIndex: number; optionIndex: number; isCorrect: boolean }[]>([]);

  const currentQ = PREPAREDNESS_QUIZZES[currentIndex];
  const totalQuestions = PREPAREDNESS_QUIZZES.length;

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOptionIndex(idx);
    setHasAnswered(true);
    const isCorrect = currentQ.options[idx].isCorrect;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [
      ...prev,
      { questionIndex: currentIndex, optionIndex: idx, isCorrect },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setHasAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setHasAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-7 transition-all">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
              {lang === 'en' ? 'Interactive Knowledge Check' : 'सुरक्षा ज्ञान परीक्षण'}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {lang === 'en' ? 'Calm Learning · No Timers' : 'शान्त सिकाइ · समय सीमा बिना'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {lang === 'en' ? 'Disaster Preparedness Quiz' : 'विपद् पूर्वतयारी हाजिरीजवाफ'}
          </h2>
        </div>

        {!isFinished && (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-500 font-medium block">
                {lang === 'en' ? 'Question' : 'प्रश्न'}
              </span>
              <span className="text-sm font-bold text-slate-800 tabular-nums">
                {currentIndex + 1} / {totalQuestions}
              </span>
            </div>
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="mt-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-2 mb-6 overflow-hidden">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              role="progressbar"
              aria-valuenow={currentIndex + 1}
              aria-valuemin={1}
              aria-valuemax={totalQuestions}
            />
          </div>

          {/* Question topic & text */}
          <div className="mb-6">
            <div className="text-xs font-semibold text-slate-600 mb-1">
              {lang === 'en' ? currentQ.disaster : currentQ.disasterNepali}
            </div>
            <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {lang === 'en' ? currentQ.question : currentQ.questionNepali}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOptionIndex === idx;
              let btnClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

              if (hasAnswered) {
                if (option.isCorrect) {
                  btnClass = 'bg-teal-50 border-teal-500 text-teal-950 ring-1 ring-teal-500';
                } else if (isSelected && !option.isCorrect) {
                  btnClass = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
                } else {
                  btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base font-medium transition-all flex items-start gap-3 cursor-pointer min-h-[48px] ${btnClass}`}
                >
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="flex-1">
                    <span>{lang === 'en' ? option.text : option.textNepali}</span>
                    {hasAnswered && isSelected && (
                      <span className="block mt-1 text-xs font-bold">
                        {option.isCorrect
                          ? lang === 'en'
                            ? '✓ Correct Answer'
                            : '✓ सहि जवाफ'
                          : lang === 'en'
                          ? '✗ Incorrect Selection'
                          : '✗ गलत छनौट'}
                      </span>
                    )}
                  </div>
                  {hasAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Authoritative explanation card */}
          {hasAnswered && selectedOptionIndex !== null && (
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 transition-all animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>{lang === 'en' ? 'Official Safety Explanation' : 'आधिकारिक सुरक्षा व्याख्या'}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {lang === 'en'
                  ? currentQ.options[selectedOptionIndex].explanation
                  : currentQ.options[selectedOptionIndex].explanationNepali}
              </p>
            </div>
          )}

          {/* Next / Continue button */}
          {hasAnswered && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-colors cursor-pointer min-h-[44px]"
              >
                <span>
                  {currentIndex + 1 === totalQuestions
                    ? lang === 'en'
                      ? 'View Results'
                      : 'नतिजा हेर्नुहोस्'
                    : lang === 'en'
                    ? 'Next Question'
                    : 'अर्को प्रश्न'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Summary / Completion Screen */
        <div className="mt-6 py-4 text-center">
          <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
            {lang === 'en' ? 'Preparedness Check Complete!' : 'ज्ञान परीक्षण सम्पन्न भयो!'}
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            {lang === 'en'
              ? 'Preparedness builds muscle memory and calmness before an actual emergency.'
              : 'पूर्वजानकारीले विपद्को वास्तविक समयमा सही निर्णय लिन मद्दत पुर्याउँछ।'}
          </p>

          <div className="inline-block px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
            <span className="text-xs uppercase font-bold text-slate-500 block mb-1">
              {lang === 'en' ? 'Final Score' : 'अन्तिम नतिजा'}
            </span>
            <div className="text-4xl font-extrabold text-slate-900 tabular-nums">
              {score} <span className="text-lg text-slate-500 font-normal">/ {totalQuestions}</span>
            </div>
            <div className="text-xs font-semibold text-teal-700 mt-1">
              {score === totalQuestions
                ? lang === 'en'
                  ? 'Outstanding! You know official survival protocols.'
                  : 'उत्कृष्ट! तपाईंलाई मुख्य जीवनरक्षक नियमहरू थाहा छ।'
                : score >= 3
                ? lang === 'en'
                  ? 'Good job! A solid foundation of emergency awareness.'
                  : 'राम्रो! विपद् सचेतनामा तपाईंको राम्रो ज्ञान छ।'
                : lang === 'en'
                ? 'Review the Simple Mode guides to strengthen key safety actions.'
                : 'मुख्य सुरक्षा चरणहरू सिक्न निर्देशिका हेर्नुहोस्।'}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors cursor-pointer min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{lang === 'en' ? 'Restart Quiz' : 'पुनः सुरु गर्नुहोस्'}</span>
            </button>

            {onNavigateToGuides && (
              <button
                onClick={() => onNavigateToGuides()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 font-semibold text-sm border border-teal-200 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>{lang === 'en' ? 'Review Safety Guides' : 'सुरक्षा निर्देशिका पढ्नुहोस्'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
