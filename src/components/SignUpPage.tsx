import React, { useState } from 'react';
import { GraduationCap, Users, BookOpen, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function SignUpPage({ navigate }) {
  const [selectedType, setSelectedType] = useState<'student' | 'teacher' | null>(null);

  const handleContinue = () => {
    if (selectedType === 'student') {
      navigate('student-registration');
    } else if (selectedType === 'teacher') {
      navigate('teacher-registration');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl blur opacity-75 animate-pulse"></div>
                <GraduationCap className="w-6 h-6 text-white relative z-10" />
              </div>
              <span className="font-['Arimo'] text-xl bg-gradient-to-r from-[#2563EB] to-[#4F46E5] bg-clip-text text-transparent">SION Education</span>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('landing')}
                className="font-['Arimo'] text-[#4a5565] hover:text-[#2563EB] transition-colors"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="font-['Arimo'] text-5xl md:text-6xl mb-4">
            <span className="font-bold text-[#101828]">Create Your Account</span>
          </h1>
          <p className="font-['Arimo'] text-xl text-[#4a5565]">
            Join <span className="font-bold text-[#2563EB]">SION Education</span> as a student or teacher
          </p>
        </motion.div>

        {/* Account Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-['Arimo'] text-2xl text-center mb-8">
            <span className="font-bold text-[#101828]">Select Account Type</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Student Card */}
            <motion.button
              onClick={() => setSelectedType('student')}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl transform translate-x-2 translate-y-2 blur-lg transition-opacity ${
                selectedType === 'student' ? 'from-[#2563EB] to-[#3B82F6] opacity-30' : 'from-gray-200 to-gray-300 opacity-20'
              }`}></div>
              
              <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all shadow-xl ${
                selectedType === 'student' 
                  ? 'border-[#2563EB] ring-4 ring-[#2563EB]/20' 
                  : 'border-gray-200 hover:border-[#2563EB]/50'
              }`}>
                {/* Selection Indicator */}
                <div className="absolute top-6 right-6">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedType === 'student' 
                      ? 'border-[#2563EB] bg-[#2563EB]' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedType === 'student' && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <span className="text-4xl">🎓</span>
                </div>

                {/* Title */}
                <h3 className="font-['Arimo'] text-2xl text-center mb-4 font-bold text-[#101828]">
                  STUDENT
                </h3>

                {/* Features */}
                <div className="space-y-3 text-left">
                  {[
                    'Take online test',
                    'Get matched with teacher',
                    'Schedule lessons',
                    'Track your progress'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#16A34A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                      </div>
                      <span className="font-['Arimo'] text-sm text-[#4a5565]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.button>

            {/* Teacher Card */}
            <motion.button
              onClick={() => setSelectedType('teacher')}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl transform translate-x-2 translate-y-2 blur-lg transition-opacity ${
                selectedType === 'teacher' ? 'from-[#4F46E5] to-[#6366F1] opacity-30' : 'from-gray-200 to-gray-300 opacity-20'
              }`}></div>
              
              <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all shadow-xl ${
                selectedType === 'teacher' 
                  ? 'border-[#4F46E5] ring-4 ring-[#4F46E5]/20' 
                  : 'border-gray-200 hover:border-[#4F46E5]/50'
              }`}>
                {/* Selection Indicator */}
                <div className="absolute top-6 right-6">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedType === 'teacher' 
                      ? 'border-[#4F46E5] bg-[#4F46E5]' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedType === 'teacher' && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <span className="text-4xl">👨‍🏫</span>
                </div>

                {/* Title */}
                <h3 className="font-['Arimo'] text-2xl text-center mb-4 font-bold text-[#101828]">
                  TEACHER
                </h3>

                {/* Features */}
                <div className="space-y-3 text-left">
                  {[
                    'Submit application',
                    'Take qualification test',
                    'Attend interview',
                    'Start teaching'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#16A34A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                      </div>
                      <span className="font-['Arimo'] text-sm text-[#4a5565]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-yellow-50 border-2 border-[#d08700] rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#d08700] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">⚠️</span>
              </div>
              <div>
                <h3 className="font-['Arimo'] font-bold text-[#101828] mb-2">IMPORTANT NOTICE</h3>
                <ul className="font-['Arimo'] text-sm text-[#4a5565] space-y-1">
                  <li>• You can only register as either a <span className="font-bold">STUDENT</span> or <span className="font-bold">TEACHER</span>, not both</li>
                  <li>• Once approved, you <span className="font-bold">cannot change</span> your account type</li>
                  <li>• Choose carefully before proceeding</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            onClick={handleContinue}
            disabled={!selectedType}
            whileHover={selectedType ? { scale: 1.05 } : {}}
            whileTap={selectedType ? { scale: 0.95 } : {}}
            className={`px-12 py-4 rounded-xl font-['Arimo'] text-lg transition-all shadow-lg relative overflow-hidden ${
              selectedType
                ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] text-white shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {selectedType ? 'Continue to Registration' : 'Select Account Type to Continue'}
              {selectedType && <ArrowRight className="w-5 h-5" />}
            </span>
          </motion.button>
        </motion.div>

        {/* Already have account */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="font-['Arimo'] text-[#4a5565]">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('login')}
              className="text-[#2563EB] font-bold hover:underline"
            >
              Login
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
