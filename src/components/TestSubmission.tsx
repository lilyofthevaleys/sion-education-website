import React from 'react';
import { CheckCircle, Mail, Clock, Calendar, BookOpen, Home, LogIn, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function TestSubmission({ navigate, userRole = 'student', applicationId }) {
  const isStudent = userRole === 'student';
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yy = String(now.getFullYear()).slice(-2);
  const seq = parseInt(localStorage.getItem('applicationSeq') || '0', 10);
  const defaultId = `S-${dd}${mm}${yy}-${String(seq).padStart(3, '0')}`;
  const generatedId = applicationId || defaultId;

  const nextSteps = isStudent ? [
    {
      icon: Mail,
      title: '[1] Email Confirmation',
      description: 'Check your email for details',
      color: 'from-[#2563EB] to-[#3B82F6]'
    },
    {
      icon: Clock,
      title: '[2] Review Process',
      description: '2-3 business days',
      color: 'from-[#4F46E5] to-[#6366F1]'
    },
    {
      icon: BookOpen,
      title: '[3] Start Learning',
      description: 'Get access to Student Dashboard',
      color: 'from-[#16A34A] to-[#22C55E]'
    }
  ] : [
    {
      icon: Mail,
      title: '[1] Email Confirmation',
      description: 'Check your email for details',
      color: 'from-[#2563EB] to-[#3B82F6]'
    },
    {
      icon: Clock,
      title: '[2] Review Process',
      description: '2-3 business days',
      color: 'from-[#4F46E5] to-[#6366F1]'
    },
    {
      icon: Calendar,
      title: '[3] Interview (Teachers)',
      description: 'Schedule if approved',
      color: 'from-[#0891B2] to-[#06B6D4]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#E0E7FF] flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Success Card */}
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Success Icon */}
          <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#16A34A] p-8 text-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <CheckCircle className="w-16 h-16 text-[#16A34A]" />
              </div>
              <h1 className="font-['Arimo'] text-3xl text-white mb-2">TEST SUBMITTED!</h1>
              <p className="font-['Arimo'] text-white/90">Your application is now under review</p>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* What Happens Next Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="font-['Arimo'] text-xl text-[#101828] mb-6 pb-3 border-b-2 border-gray-100">
                WHAT HAPPENS NEXT?
              </h2>

              <div className="space-y-4">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Cousine'] text-[#101828] mb-1">{step.title}</h3>
                      <p className="font-['Arimo'] text-sm text-[#4a5565]">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <motion.button
                onClick={() => navigate('login')}
                className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-8 py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-5 h-5" />
                GO TO LOGIN
              </motion.button>

              <motion.button
                onClick={() => navigate('landing')}
                className="flex items-center gap-2 border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-xl font-['Arimo'] hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                BACK HOME
              </motion.button>
            </motion.div>

            {/* Application ID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="border-t-2 border-gray-100 pt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-xl mb-2">
                <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                <span className="font-['Arimo'] text-sm text-[#4a5565]">Application ID:</span>
                <span className="font-['Cousine'] text-[#101828] font-bold">{generatedId}</span>
              </div>
              <p className="font-['Arimo'] text-xs text-[#4a5565]">Save this ID for reference</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 text-center"
        >
          <p className="font-['Arimo'] text-sm text-[#4a5565]">
            Need help?{' '}
            <a href="mailto:support@sioneducation.com" className="text-[#2563EB] hover:underline">
              support@sioneducation.com
            </a>
            {' '}or contact our socials.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
