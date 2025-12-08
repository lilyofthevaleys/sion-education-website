import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Save, X, HelpCircle, CheckCircle } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function AddNewQuestion({ navigate }) {
  const [formData, setFormData] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: 'A', // Default to A
    gradeLevel: ''
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Saving new question:', formData);
    // TODO: Save to backend
    setShowConfirmModal(false);
    navigate('admin-dashboard');
  };

  const handleCancel = () => {
    setShowCancelModal(false);
    navigate('admin-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-white/20"
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCancelModal(true)}
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <div>
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Add New Test Question</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">Create a multiple choice question</p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCancelModal(true)}
                className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-['Arimo'] shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConfirmModal(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Question
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Form */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-8"
        >
          {/* Question */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Question</h2>
            </div>

          <div>
            <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Question Text *</label>
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Enter your question here..."
              rows="3"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all resize-none"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Grade Level *</label>
              <select
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                required
              >
                <option value="">Select grade</option>
                {gradeOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>
          </div>

          {/* Options */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#22C55E] rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Answer Options</h2>
            </div>

            <div className="space-y-6">
              {/* Option A */}
              <div className="relative">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Option A *</label>
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="optionA"
                      value={formData.optionA}
                      onChange={handleChange}
                      placeholder="Enter option A..."
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                      required
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-100 transition-all">
                    <input
                      type="radio"
                      name="correctAnswer"
                      value="A"
                      checked={formData.correctAnswer === 'A'}
                      onChange={handleChange}
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                    />
                    <span className="font-['Arimo'] text-sm text-gray-700">Correct Answer</span>
                  </label>
                </div>
              </div>

              {/* Option B */}
              <div className="relative">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Option B *</label>
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="optionB"
                      value={formData.optionB}
                      onChange={handleChange}
                      placeholder="Enter option B..."
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                      required
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-100 transition-all">
                    <input
                      type="radio"
                      name="correctAnswer"
                      value="B"
                      checked={formData.correctAnswer === 'B'}
                      onChange={handleChange}
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                    />
                    <span className="font-['Arimo'] text-sm text-gray-700">Correct Answer</span>
                  </label>
                </div>
              </div>

              {/* Option C */}
              <div className="relative">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Option C *</label>
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="optionC"
                      value={formData.optionC}
                      onChange={handleChange}
                      placeholder="Enter option C..."
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                      required
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-100 transition-all">
                    <input
                      type="radio"
                      name="correctAnswer"
                      value="C"
                      checked={formData.correctAnswer === 'C'}
                      onChange={handleChange}
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                    />
                    <span className="font-['Arimo'] text-sm text-gray-700">Correct Answer</span>
                  </label>
                </div>
              </div>

              {/* Option D */}
              <div className="relative">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Option D *</label>
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="optionD"
                      value={formData.optionD}
                      onChange={handleChange}
                      placeholder="Enter option D..."
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                      required
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-100 transition-all">
                    <input
                      type="radio"
                      name="correctAnswer"
                      value="D"
                      checked={formData.correctAnswer === 'D'}
                      onChange={handleChange}
                      className="w-5 h-5 text-green-500 focus:ring-green-500"
                    />
                    <span className="font-['Arimo'] text-sm text-gray-700">Correct Answer</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="font-['Arimo'] text-lg text-gray-900 mb-4">Preview</h3>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="font-['Arimo'] text-gray-900 mb-4">
                {formData.question || 'Your question will appear here...'}
              </p>

              <div className="space-y-3">
                <div className={`p-3 rounded-lg border-2 ${formData.correctAnswer === 'A' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <span className="font-['Arimo'] text-gray-700">A. {formData.optionA || 'Option A'}</span>
                  {formData.correctAnswer === 'A' && <span className="ml-2 text-green-600 text-sm">✓ Correct</span>}
                </div>
                <div className={`p-3 rounded-lg border-2 ${formData.correctAnswer === 'B' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <span className="font-['Arimo'] text-gray-700">B. {formData.optionB || 'Option B'}</span>
                  {formData.correctAnswer === 'B' && <span className="ml-2 text-green-600 text-sm">✓ Correct</span>}
                </div>
                <div className={`p-3 rounded-lg border-2 ${formData.correctAnswer === 'C' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <span className="font-['Arimo'] text-gray-700">C. {formData.optionC || 'Option C'}</span>
                  {formData.correctAnswer === 'C' && <span className="ml-2 text-green-600 text-sm">✓ Correct</span>}
                </div>
                <div className={`p-3 rounded-lg border-2 ${formData.correctAnswer === 'D' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <span className="font-['Arimo'] text-gray-700">D. {formData.optionD || 'Option D'}</span>
                  {formData.correctAnswer === 'D' && <span className="ml-2 text-green-600 text-sm">✓ Correct</span>}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleSubmit}
        title="Add New Question"
        message="Are you sure you want to add this question to the test question bank?"
        confirmText="Yes, Add Question"
        confirmColor="from-green-500 to-emerald-500"
        icon={<Save className="w-6 h-6 text-white" />}
      />

      {/* Cancel Modal */}
      <ConfirmationModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Cancel Adding Question"
        message="Are you sure you want to cancel? All entered information will be lost."
        confirmText="Yes, Cancel"
        confirmColor="from-red-500 to-red-600"
        icon={<X className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
  const gradeOptions = [
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];
