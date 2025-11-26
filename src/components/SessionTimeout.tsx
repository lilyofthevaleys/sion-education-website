import React from 'react';
import { Clock, Home, LogIn, Shield, AlertCircle, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function SessionTimeout({ navigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Icon Section */}
          <div className="bg-gradient-to-r from-[#EF4444] via-[#F97316] to-[#EAB308] p-8 text-center relative overflow-hidden">
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
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Clock className="w-16 h-16 text-[#EF4444]" />
              </div>
              <h1 className="font-['Cousine'] text-3xl text-white mb-2">SESSION TIMEOUT</h1>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 inline-block">
                <p className="font-['Arimo'] text-white">YOUR SESSION EXPIRED</p>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 mb-6 text-center"
            >
              <AlertCircle className="w-8 h-8 text-[#EF4444] mx-auto mb-3" />
              <p className="font-['Arimo'] text-[#101828] mb-2">
                You've been logged out due to inactivity.
              </p>
              <p className="font-['Arimo'] text-sm text-[#4a5565]">
                Please log in again to continue.
              </p>
            </motion.div>

            {/* Security Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-['Cousine'] text-sm text-[#101828]">SECURITY TIPS:</h3>
              </div>
              <ul className="space-y-2 font-['Arimo'] text-sm text-[#4a5565]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Sessions expire after 30 minutes of inactivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Always logout when using shared devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Enable "Remember Me" only on trusted devices</span>
                </li>
              </ul>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => navigate('login')}
                className="flex-1 min-w-[200px] bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-6 py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-5 h-5" />
                LOGIN
              </motion.button>

              <motion.button
                onClick={() => navigate('landing')}
                className="flex-1 min-w-[200px] border-2 border-[#2563EB] text-[#2563EB] px-6 py-4 rounded-xl font-['Arimo'] hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                HOME
              </motion.button>
            </motion.div>

            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 pt-6 border-t-2 border-gray-100 text-center"
            >
              <p className="font-['Arimo'] text-sm text-[#4a5565]">
                Need help?{' '}
                <a href="mailto:support@sioneducation.com" className="text-[#2563EB] hover:underline">
                  support@sioneducation.com
                </a>
              </p>
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
