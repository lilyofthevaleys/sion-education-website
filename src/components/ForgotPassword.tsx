import React, { useState } from 'react';
import { ArrowLeft, Mail, Send, CheckCircle, AlertCircle, Lock, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function ForgotPassword({ navigate }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center p-6">
        <motion.div 
          className="max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#16A34A] to-[#22C55E] p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-[#16A34A]" />
                </div>
                <h1 className="font-['Arimo'] text-2xl text-white mb-2">Email Sent!</h1>
                <p className="font-['Arimo'] text-white/90 text-sm">Check your inbox</p>
              </motion.div>
            </div>

            <div className="p-8">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
                <p className="font-['Arimo'] text-sm text-[#101828] mb-4">
                  We've sent password reset instructions to:
                </p>
                <p className="font-['Arimo'] text-[#2563EB] mb-4">
                  {email}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-['Arimo'] text-[#4a5565]">
                    • Check your spam/junk folder
                  </p>
                  <p className="font-['Arimo'] text-[#4a5565]">
                    • Link expires in 24 hours
                  </p>
                  <p className="font-['Arimo'] text-[#4a5565]">
                    • Contact support if you don't receive it
                  </p>
                </div>
              </div>

              <motion.button
                onClick={() => navigate('login')}
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Login
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF]">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Arimo'] text-xl text-[#101828]">SION Education</span>
            </div>

            <button 
              onClick={() => navigate('login')}
              className="flex items-center gap-2 text-[#4a5565] hover:text-[#2563EB] transition-colors font-['Arimo']"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Login
            </button>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center px-6 py-16">
        <motion.div 
          className="max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Icon and Title */}
            <div className="text-center mb-8">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Lock className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="font-['Arimo'] text-3xl text-[#101828] mb-2">Reset Your Password</h1>
              <p className="font-['Arimo'] text-[#4a5565]">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>

            {error && (
              <motion.div 
                className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="font-['Arimo'] text-sm text-red-800">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Reset Link
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-6 pt-6 border-t-2 border-gray-100">
              <button
                onClick={() => navigate('login')}
                className="w-full border-2 border-gray-300 text-[#4a5565] py-3 rounded-xl font-['Arimo'] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
              >
                Back to Login
              </button>
            </div>
          </div>

          {/* Tips Section */}
          <motion.div
            className="mt-6 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-['Cousine'] text-sm text-[#101828] mb-3">💡 TIPS</h3>
            <ul className="space-y-2 font-['Arimo'] text-xs text-[#4a5565]">
              <li>• Make sure to use the email you registered with</li>
              <li>• Check your spam/junk folder</li>
              <li>• Contact us if you need further assistance</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
