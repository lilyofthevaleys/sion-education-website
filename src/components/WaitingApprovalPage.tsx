import React from 'react';
import { Home, Mail, Clock, CheckCircle, AlertCircle, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function WaitingApprovalPage({ navigate, userRole = 'student' }) {
  const isStudent = userRole === 'student';

  const nextSteps = [
    { icon: '✓', text: 'Application received and logged' },
    { icon: '⏳', text: 'Currently under review by admin team' },
    { icon: '📧', text: 'Email notification will be sent upon decision' },
    { icon: '🔔', text: 'Expected response time: 2-3 business days' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Emoji */}
          <div className="bg-gradient-to-r from-[#1c398e] via-[#2563EB] to-[#4F46E5] p-8 text-center relative overflow-hidden">
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <motion.div 
                className="text-8xl mb-4"
                animate={{ 
                  rotate: [0, -10, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⏰
              </motion.div>
              <h1 className="font-['Cousine'] text-2xl text-white mb-2">APPLICATION STATUS</h1>
              <p className="font-['Arimo'] text-white/90">Your application is currently under review</p>
            </motion.div>
          </div>

          {/* Letter Content */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6"
            >
              <div className="space-y-4">
                <p className="font-['Cousine'] text-[#101828]">Dear Applicant,</p>
                
                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  Thank you for your interest in joining SION Education as {isStudent ? 'a student' : 'a teacher'}.
                </p>

                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  We have successfully received your application and it is currently being reviewed by our administration team.
                </p>

                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  The review process typically takes 2-3 business days. You will receive an email notification once a decision has been made regarding your application.
                </p>

                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  Please check your email regularly for updates. If you have any questions in the meantime, feel free to contact our support team.
                </p>

                <p className="font-['Cousine'] text-sm text-[#101828]">
                  Thank you for your patience!
                </p>

                <div className="pt-4 border-t border-blue-300">
                  <p className="font-['Cousine'] text-sm text-[#101828]">Sincerely,</p>
                  <p className="font-['Cousine'] text-sm text-[#101828]">SION Education Team</p>
                </div>
              </div>
            </motion.div>

            {/* What's Next Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 mb-6"
            >
              <h3 className="font-['Cousine'] text-[#101828] mb-4 text-center">
                📋 WHAT'S NEXT?
              </h3>
              <div className="space-y-3">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 bg-white rounded-lg p-3 border border-yellow-200"
                  >
                    <span className="text-lg">{step.icon}</span>
                    <p className="font-['Arimo'] text-sm text-[#4a5565] flex-1">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="space-y-4"
            >
              <motion.button
                onClick={() => navigate('landing')}
                className="w-full bg-gradient-to-r from-[#101828] to-[#1e293b] text-white py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5" />
                RETURN TO HOME
              </motion.button>

              <div className="pt-4 border-t-2 border-gray-100 text-center">
                <p className="font-['Arimo'] text-sm text-[#4a5565] mb-3">
                  Need to check something?
                </p>
                <motion.button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-[#4a5565] px-6 py-3 rounded-xl font-['Arimo'] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  CONTACT SUPPORT
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-lg">
            <GraduationCap className="w-5 h-5 text-[#2563EB]" />
            <span className="font-['Arimo'] text-sm text-[#4a5565]">SION Education Platform</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
