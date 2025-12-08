import React from 'react';
import { Home, ArrowLeft, Search, HelpCircle, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Error404({ navigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Error Number Section */}
          <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-8 sm:p-12 text-center relative overflow-hidden">
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
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="relative z-10"
            >
              <motion.h1 
                className="font-['Cousine'] text-6xl sm:text-8xl md:text-9xl text-white mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.h1>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 sm:px-8 py-3 sm:py-4 inline-block">
                <p className="font-['Arimo'] text-2xl text-white">PAGE NOT FOUND</p>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-[#101828] mb-3">
                Oops! We can't find that page.
              </h2>
              <p className="font-['Arimo'] text-[#4a5565]">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </motion.div>

            {/* Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-['Cousine'] text-sm text-[#101828]">SUGGESTIONS:</h3>
              </div>
              <ul className="space-y-2 font-['Arimo'] text-sm text-[#4a5565]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Check if the URL is typed correctly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Go back to the homepage and navigate from there</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Use the navigation menu to find what you're looking for</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-0.5">•</span>
                  <span>Contact support if you believe this is an error</span>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-6"
            >
              <h3 className="font-['Arimo'] text-sm text-[#101828] mb-3">Quick Links:</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigate('landing')}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border-2 border-gray-200 hover:border-[#2563EB] transition-all text-left"
                >
                  <p className="font-['Arimo'] text-sm text-[#101828]">🏠 Home</p>
                </button>
                <button
                  onClick={() => navigate('about-us')}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border-2 border-gray-200 hover:border-[#2563EB] transition-all text-left"
                >
                  <p className="font-['Arimo'] text-sm text-[#101828]">ℹ️ About Us</p>
                </button>
                <button
                  onClick={() => navigate('signup')}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border-2 border-gray-200 hover:border-[#2563EB] transition-all text-left"
                >
                  <p className="font-['Arimo'] text-sm text-[#101828]">📝 Sign Up</p>
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border-2 border-gray-200 hover:border-[#2563EB] transition-all text-left"
                >
                  <p className="font-['Arimo'] text-sm text-[#101828]">📧 Contact</p>
                </button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => navigate('landing')}
                className="flex-1 min-w-[200px] bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                GO HOME
              </motion.button>

              <motion.button
                onClick={() => window.history.back()}
                className="flex-1 min-w-[200px] border-2 border-[#2563EB] text-[#2563EB] px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-['Arimo'] hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                GO BACK
              </motion.button>
            </motion.div>

            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 pt-6 border-t-2 border-gray-100 text-center"
            >
              <p className="font-['Arimo'] text-sm text-[#4a5565]">
                Still need help?{' '}
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
          transition={{ delay: 1.4 }}
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
