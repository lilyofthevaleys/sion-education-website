import React, { useState } from 'react';
import { ArrowLeft, Calendar, Info, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';

export default function RequestScheduleChange({ navigate }) {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [transferToOwner, setTransferToOwner] = useState(false);
  const [newDay, setNewDay] = useState('');
  const [newDate, setNewDate] = useState('');
  const [reason, setReason] = useState('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleSubmit = () => {
    if (!currentDay || !currentDate || !reason || reason.length < 10) {
      alert('Please fill all required fields. Reason must be at least 10 characters.');
      return;
    }
    if (!transferToOwner && (!newDay || !newDate)) {
      alert('Please select new schedule or check "Transfer to Owner"');
      return;
    }
    setShowSubmitModal(true);
  };

  const confirmSubmit = () => {
    console.log('Submitting schedule change request:', {
      currentDay,
      currentDate,
      transferToOwner,
      newDay,
      newDate,
      reason
    });
    setShowSubmitModal(false);
    // Show success and navigate back
    alert('Schedule change request submitted successfully!');
    navigate('teacher-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#101828] via-[#1e293b] to-[#101828] shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center gap-6">
            <motion.button
              onClick={() => navigate('teacher-dashboard')}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-['Arimo'] backdrop-blur-sm transition-all shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </motion.button>
            <div className="h-8 w-px bg-white/30"></div>
            <h1 className="font-['Arimo'] text-2xl text-white">Schedule Change Request</h1>
          </div>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-3xl p-8 text-white shadow-2xl"
        >
          <h2 className="font-['Cousine'] text-3xl mb-3">Request Schedule Change</h2>
          <p className="font-['Arimo'] text-white/90 text-lg">
            Fill out the form below to request a change to your teaching schedule
          </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          <div className="p-8 space-y-8">
            {/* Current Schedule Section */}
            <div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-2xl mb-6 shadow-lg">
                <h3 className="font-['Arimo'] text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Current Schedule to Change
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['Cousine'] text-sm text-gray-700 mb-3">Select Day:</label>
                  <select
                    value={currentDay}
                    onChange={(e) => setCurrentDay(e.target.value)}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  >
                    <option value="">Choose a day...</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-['Cousine'] text-sm text-gray-700 mb-3">Select Date:</label>
                  <input
                    type="date"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Transfer to Owner Checkbox */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg"
            >
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={transferToOwner}
                  onChange={(e) => setTransferToOwner(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
                />
                <div>
                  <h4 className="font-['Cousine'] text-gray-900 mb-2">Request Transfer to Owner</h4>
                  <p className="font-['Arimo'] text-sm text-gray-700 leading-relaxed">
                    Check this box if you want to transfer this teaching session to the owner instead of rescheduling to a different time
                  </p>
                </div>
              </label>
            </motion.div>

            {/* New Schedule Section - Only show if not transferring */}
            {!transferToOwner && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-2xl mb-6 shadow-lg">
                  <h3 className="font-['Arimo'] text-lg flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    New Requested Schedule
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Cousine'] text-sm text-gray-700 mb-3">New Day:</label>
                    <select
                      value={newDay}
                      onChange={(e) => setNewDay(e.target.value)}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    >
                      <option value="">Choose a day...</option>
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Cousine'] text-sm text-gray-700 mb-3">New Date:</label>
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Reason Section */}
            <div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-2xl mb-6 shadow-lg">
                <h3 className="font-['Arimo'] text-lg">Reason for Change</h3>
              </div>

              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please provide a detailed reason for this schedule change request..."
                rows="6"
                className="w-full border-2 border-gray-300 rounded-2xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
              />
              <p className="font-['Arimo'] text-sm text-gray-500 mt-2">
                Minimum 10 characters required ({reason.length}/10)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.button
                onClick={() => navigate('teacher-dashboard')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl font-['Arimo'] text-lg transition-colors shadow-lg"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={!currentDay || !currentDate || !reason || reason.length < 10}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-['Arimo'] text-lg shadow-2xl hover:shadow-3xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-6 h-6" />
                Submit Change Request
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8 shadow-xl"
        >
          <h3 className="font-['Cousine'] text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#2563EB]" />
            Request Process:
          </h3>
          <ul className="space-y-3 font-['Arimo'] text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 shrink-0"></span>
              <span>Your request will be reviewed by the admin/owner</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 shrink-0"></span>
              <span>You will receive a notification once approved or denied</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 shrink-0"></span>
              <span>Schedule changes typically take 24-48 hours to process</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Submit Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onConfirm={confirmSubmit}
        title="Submit Schedule Change?"
        message={`Are you sure you want to submit this schedule change request? ${transferToOwner ? 'This session will be transferred to the owner.' : `The lesson will be rescheduled to ${newDay}, ${newDate}.`}`}
        confirmText="Yes, Submit Request"
        confirmColor="from-green-500 to-green-600"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
