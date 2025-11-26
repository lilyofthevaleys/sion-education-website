import React from 'react';
import { Home, Mail, XCircle, AlertCircle, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function RejectionPage({ navigate, userRole = 'student' }) {
  const isStudent = userRole === 'student';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Emoji */}
          <div className="bg-gradient-to-r from-[#EF4444] via-[#DC2626] to-[#B91C1C] p-8 text-center relative overflow-hidden">
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
              <div className="text-8xl mb-4">😔</div>
              <h1 className="font-['Cousine'] text-2xl text-white mb-2">APPLICATION STATUS</h1>
              <p className="font-['Arimo'] text-white/90">Unfortunately, your application was not approved</p>
            </motion.div>
          </div>

          {/* Letter Content */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 mb-6"
            >
              <div className="space-y-4">
                <p className="font-['Cousine'] text-[#101828]">Dear Applicant,</p>
                
                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  Thank you for your interest in joining SION Education as {isStudent ? 'a student' : 'a teacher'}.
                </p>

                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  After careful review of your application, we regret to inform you that we are unable to approve your {isStudent ? 'student registration' : 'teacher application'} at this time.
                </p>

                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  Additional details regarding this decision have been sent to your registered email address.
                </p>

                <p className="font-['Arimo'] text-sm text-[#4a5565]">
                  We appreciate the time and effort you put into your application and wish you the best in your future endeavors.
                </p>

                <div className="pt-4 border-t border-gray-300">
                  <p className="font-['Cousine'] text-sm text-[#101828]">Sincerely,</p>
                  <p className="font-['Cousine'] text-sm text-[#101828]">SION Education Team</p>
                </div>
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-['Cousine'] text-sm text-[#101828] mb-2">IMPORTANT:</h3>
                  <ul className="space-y-2 font-['Arimo'] text-sm text-[#4a5565]">
                    <li>• Check your email for detailed feedback</li>
                    <li>• You may reapply after 6 months</li>
                    <li>• Contact support if you have questions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
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
                  Questions about your application?
                </p>
                <motion.button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-[#4a5565] px-6 py-3 rounded-xl font-['Arimo'] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  CONTACT US
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-lg">
            <GraduationCap className="w-5 h-5 text-[#EF4444]" />
            <span className="font-['Arimo'] text-sm text-[#4a5565]">SION Education Platform</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
