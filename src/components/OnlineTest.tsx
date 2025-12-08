import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, ChevronRight, ChevronLeft, GraduationCap, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';

const questions = [
  {
    id: 1,
    subject: 'Math',
    question: 'What is the value of x in the equation: 2x + 5 = 13?',
    options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
    correctAnswer: 1
  },
  {
    id: 2,
    subject: 'Math',
    question: 'If a triangle has angles measuring 60°, 60°, and 60°, what type of triangle is it?',
    options: ['Scalene', 'Isosceles', 'Equilateral', 'Right'],
    correctAnswer: 2
  },
  {
    id: 3,
    subject: 'Math',
    question: 'What is the area of a circle with radius 5 cm? (Use π ≈ 3.14)',
    options: ['78.5 cm²', '31.4 cm²', '15.7 cm²', '62.8 cm²'],
    correctAnswer: 0
  },
  {
    id: 4,
    subject: 'Math',
    question: 'Simplify: (x² + 5x + 6) ÷ (x + 2)',
    options: ['x + 3', 'x + 2', 'x + 4', 'x - 3'],
    correctAnswer: 0
  },
  {
    id: 5,
    subject: 'Math',
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2
  },
  {
    id: 6,
    subject: 'Math',
    question: 'If f(x) = 3x + 2, what is f(4)?',
    options: ['12', '14', '16', '18'],
    correctAnswer: 1
  },
  {
    id: 7,
    subject: 'Math',
    question: 'What is 15% of 200?',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1
  },
  {
    id: 8,
    subject: 'Math',
    question: 'What is the slope of a line passing through points (2, 3) and (4, 7)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1
  },
  {
    id: 9,
    subject: 'Math',
    question: 'Evaluate 3² + 4².',
    options: ['12', '25', '7', '5'],
    correctAnswer: 1
  },
  {
    id: 10,
    subject: 'Math',
    question: 'Solve for x: x / 5 = 7.',
    options: ['35', '12', '25', '30'],
    correctAnswer: 0
  },
  {
    id: 11,
    subject: 'Math',
    question: 'What is the derivative of f(x) = x²?',
    options: ['x', '2x', 'x²', '1'],
    correctAnswer: 1
  },
  {
    id: 12,
    subject: 'Math',
    question: 'What is the median of the set [3, 7, 9, 10, 11]?',
    options: ['7', '8', '9', '10'],
    correctAnswer: 2
  },
  {
    id: 13,
    subject: 'Math',
    question: 'Solve for x: 2x − 3 = 11.',
    options: ['4', '7', '8', '10'],
    correctAnswer: 1
  },
  {
    id: 14,
    subject: 'Math',
    question: 'Simplify the fraction 6/8.',
    options: ['3/4', '6/8', '1/2', '2/3'],
    correctAnswer: 0
  },
  {
    id: 15,
    subject: 'Math',
    question: 'What is the value of 5! (factorial)?',
    options: ['24', '60', '120', '720'],
    correctAnswer: 2
  },
  {
    id: 16,
    subject: 'Math',
    question: 'In a triangle, if angles A = 30° and B = 60°, what is angle C?',
    options: ['60°', '90°', '120°', '45°'],
    correctAnswer: 1
  },
  {
    id: 17,
    subject: 'Math',
    question: 'Solve the system: x + y = 10 and x − y = 2. What is x?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1
  },
  {
    id: 18,
    subject: 'Math',
    question: 'Evaluate √81.',
    options: ['8', '9', '10', '81'],
    correctAnswer: 1
  },
  {
    id: 19,
    subject: 'Math',
    question: 'What is the mean (average) of [5, 7, 9]?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2
  },
  {
    id: 20,
    subject: 'Math',
    question: 'Find the perimeter of a rectangle with length 12 and width 5.',
    options: ['34', '30', '24', '17'],
    correctAnswer: 0
  },
  {
    id: 21,
    subject: 'Math',
    question: 'Solve for x: 3(x − 4) = 15.',
    options: ['5', '7', '9', '12'],
    correctAnswer: 2
  },
  {
    id: 22,
    subject: 'Math',
    question: 'For the sequence 2, 5, 8, 11, what is the 6th term?',
    options: ['16', '17', '18', '19'],
    correctAnswer: 1
  },
  {
    id: 23,
    subject: 'Math',
    question: 'Find the hypotenuse of a right triangle with legs 6 and 8.',
    options: ['7', '10', '12', '14'],
    correctAnswer: 1
  },
  {
    id: 24,
    subject: 'Math',
    question: 'Evaluate (−3)².',
    options: ['−9', '9', '6', '3'],
    correctAnswer: 1
  },
  {
    id: 25,
    subject: 'Math',
    question: 'If f(x) = 2x + 1, find f⁻¹(5).',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1
  }
];

export default function OnlineTest({ navigate, userRole = 'student' }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleMarkForReview = () => {
    const newMarked = new Set(markedForReview);
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion);
    } else {
      newMarked.add(currentQuestion);
    }
    setMarkedForReview(newMarked);
  };

  const handleSubmit = () => {
    // For teachers, go to interview scheduler (step 3 of teacher registration)
    // For students, go to test submission page
    if (userRole === 'teacher') {
      navigate('teacher-registration', { step: 3, testCompleted: true });
    } else {
      navigate('test-submission', { userRole, answers, applicationId: 'S-301125-001' });
    }
  };

  const getQuestionStatus = (index) => {
    if (answers[index] !== undefined) return 'answered';
    if (markedForReview.has(index)) return 'marked';
    return 'unanswered';
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF]">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-[#2563EB]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-['Arimo'] text-xl text-[#101828]">Assessment Test</h1>
                <p className="font-['Arimo'] text-xs text-[#4a5565]">{userRole === 'student' ? 'Student' : 'Teacher'} Evaluation</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white px-4 py-2 rounded-lg shadow-lg">
                <Clock className="w-5 h-5" />
                <span className="font-['Arimo'] font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-['Arimo'] text-sm text-[#4a5565]">Progress: {Object.keys(answers).length} / {questions.length}</span>
              <span className="font-['Arimo'] text-sm text-[#4a5565]">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#16A34A] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Question Navigator Sidebar */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#2563EB]" />
              <h2 className="font-['Arimo'] text-lg text-[#101828]">Questions</h2>
            </div>

            <div className="grid grid-cols-5 gap-2 mb-6">
              {questions.map((_, index) => {
                const status = getQuestionStatus(index);
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`
                      w-10 h-10 rounded-lg font-['Arimo'] text-sm transition-all
                      ${currentQuestion === index 
                        ? 'bg-gradient-to-br from-[#2563EB] to-[#4F46E5] text-white shadow-lg scale-110' 
                        : status === 'answered'
                        ? 'bg-[#16A34A] text-white'
                        : status === 'marked'
                        ? 'bg-[#EAB308] text-white'
                        : 'bg-gray-100 text-[#4a5565] hover:bg-gray-200'
                      }
                    `}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#16A34A] rounded"></div>
                <span className="font-['Arimo'] text-xs text-[#4a5565]">Answered ({Object.keys(answers).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#EAB308] rounded"></div>
                <span className="font-['Arimo'] text-xs text-[#4a5565]">Marked ({markedForReview.size})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 rounded"></div>
                <span className="font-['Arimo'] text-xs text-[#4a5565]">Unanswered ({questions.length - Object.keys(answers).length})</span>
              </div>
            </div>
          </motion.div>

          {/* Question Content */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Question Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-['Arimo']
                      ${questions[currentQuestion].subject === 'Math' 
                        ? 'bg-blue-100 text-blue-700'
                        : questions[currentQuestion].subject === 'Physics'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-green-100 text-green-700'
                      }
                    `}>
                      {questions[currentQuestion].subject}
                    </span>
                    <span className="font-['Arimo'] text-sm text-[#4a5565]">
                      Question {currentQuestion + 1} / {questions.length}
                    </span>
                  </div>
                  
                  <h3 className="font-['Arimo'] text-xl text-[#101828] leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`
                        w-full text-left p-4 rounded-xl border-2 transition-all font-['Arimo']
                        ${answers[currentQuestion] === index
                          ? 'border-[#2563EB] bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-[#2563EB] hover:bg-gray-50'
                        }
                      `}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`
                          w-6 h-6 rounded-full border-2 flex items-center justify-center
                          ${answers[currentQuestion] === index
                            ? 'border-[#2563EB] bg-[#2563EB]'
                            : 'border-gray-300'
                          }
                        `}>
                          {answers[currentQuestion] === index && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="text-[#101828]">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 text-[#4a5565] hover:border-[#2563EB] hover:text-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-['Arimo']"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>

                  <button
                    onClick={handleMarkForReview}
                    className={`
                      px-6 py-3 rounded-xl border-2 transition-all font-['Arimo']
                      ${markedForReview.has(currentQuestion)
                        ? 'border-[#EAB308] bg-[#EAB308] text-white'
                        : 'border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white'
                      }
                    `}
                  >
                    {markedForReview.has(currentQuestion) ? 'Unmark' : 'Mark for Review'}
                  </button>

                  {currentQuestion === questions.length - 1 ? (
                    <button
                      onClick={() => setShowConfirmationModal(true)}
                      className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-white hover:shadow-xl transition-all font-['Arimo']"
                    >
                      Submit Test
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white hover:shadow-xl transition-all font-['Arimo']"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={handleSubmit}
        title="Submit Test"
        message="Are you sure you want to submit the test? This action cannot be undone."
      />
    </div>
  );
}
