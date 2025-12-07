import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X } from 'lucide-react';

interface RequestInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
  studentName: string;
}

export default function RequestInfoModal({
  isOpen,
  onClose,
  onSend,
  studentName
}: RequestInfoModalProps) {
  const [message, setMessage] = useState(
    `Dear ${studentName},\n\nThank you for your application to SION Education. We need some additional information to proceed with your application:\n\n[Please specify what information is needed]\n\nPlease reply to this email at your earliest convenience.\n\nBest regards,\nSION Education Admin Team`
  );

  const handleSend = () => {
    onSend(message);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Arimo'] text-xl text-gray-900">Request More Information</h3>
                      <p className="font-['Arimo'] text-sm text-gray-600">Send email to {studentName}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <label className="font-['Arimo'] text-sm text-gray-700 mb-2 block">
                  Email Message Template
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={12}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Actions */}
              <div className="bg-gray-50 p-6 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-['Arimo'] shadow-md hover:bg-gray-50"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSend}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
