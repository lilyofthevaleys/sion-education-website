import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CheckCircle, XCircle, Trash2, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';

export default function ScheduleSelection({ navigate, currentUser, onConfirmSchedules }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSchedules, setSelectedSchedules] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Math');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const subjects = [
    'Math',
    'English',
    'Science',
    'Physics',
    'Chemistry',
    'Biology',
    'History',
    'Geography'
  ];

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleTimeSelect = (time) => {
    if (!selectedDay) return;

    // Check if already selected
    const exists = selectedSchedules.find(s => s.day === selectedDay && s.time === time);
    if (exists) {
      setSelectedSchedules(selectedSchedules.filter(s => !(s.day === selectedDay && s.time === time)));
      return;
    }

    // Max 3 schedules
    if (selectedSchedules.length >= 3) {
      alert('You can only select up to 3 time slots!');
      return;
    }

    setSelectedSchedules([...selectedSchedules, {
      day: selectedDay,
      time: time,
      subject: selectedSubject
    }]);

    setSelectedDay(null);
  };

  const removeSchedule = (index) => {
    setSelectedSchedules(selectedSchedules.filter((_, i) => i !== index));
  };

  const handleConfirmSchedules = () => {
    if (selectedSchedules.length === 0) {
      alert('Please select at least one schedule!');
      return;
    }
    setShowConfirmModal(true);
  };

  const finalizeSchedules = () => {
    const schedules = selectedSchedules;
    const updatedUser = {
      ...(currentUser || {}),
      profile: {
        ...((currentUser && currentUser.profile) || {}),
        hasSchedule: true,
        selectedSchedules: schedules
      }
    };

    try {
      localStorage.setItem('sion_user', JSON.stringify(updatedUser));
    } catch {}

    if (typeof onConfirmSchedules === 'function') {
      onConfirmSchedules(schedules);
    }

    setShowConfirmModal(false);
    navigate('student-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header - Same as Admin */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-50 border-b border-white/20"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => navigate('student-dashboard')}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </motion.button>
            <div className="h-8 w-px bg-gray-300"></div>
            <h1 className="font-['Arimo'] text-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Schedule Selection
            </h1>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-['Arimo'] text-4xl mb-2"
            >
              Select Your Weekly Schedule 📅
            </motion.h2>
            <motion.p 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-['Arimo'] text-white/90 text-lg"
            >
              Choose up to 3 time slots for your lessons • {selectedSchedules.length}/3 selected
            </motion.p>
          </div>
        </motion.div>

        {/* Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Day Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
              <h3 className="font-['Arimo'] text-xl text-gray-900 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#2563EB]" />
                Select Day
              </h3>
            </div>
            <div className="p-6 space-y-3">
              {days.map((day, index) => (
                <motion.button
                  key={day}
                  onClick={() => handleDaySelect(day)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-2xl p-5 text-left font-['Arimo'] text-lg transition-all shadow-lg hover:shadow-xl border-2 ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white border-[#2563EB]'
                      : 'bg-white text-gray-900 border-gray-200 hover:border-[#2563EB]'
                  }`}
                >
                  {day}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Subject Selection */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
              <h3 className="font-['Arimo'] text-xl text-gray-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#0891B2]" />
                Select Subject
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <p className="font-['Arimo'] text-sm text-gray-600">This subject will be applied to the time you select.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {subjects.map((subject) => (
                  <motion.button
                    key={subject}
                    onClick={() => setSelectedSubject(subject)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-2xl p-4 text-left font-['Arimo'] text-lg transition-all shadow-lg hover:shadow-xl border-2 ${
                      selectedSubject === subject
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white border-[#2563EB] ring-4 ring-[#2563EB]/20'
                        : 'bg-white text-gray-900 border-gray-200 hover:border-[#2563EB]'
                    }`}
                  >
                    {subject}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Time Selection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
              <h3 className="font-['Arimo'] text-xl text-gray-900 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#4F46E5]" />
                Select Time
              </h3>
            </div>
            <div className="p-6">
              {!selectedDay ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Clock className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="font-['Arimo'] text-gray-500 text-lg">Select a day first</p>
                </div>
              ) : (
                <div>
                  <p className="font-['Arimo'] text-center text-gray-900 mb-4 text-lg">
                    Choose a time for <span className="font-bold text-[#2563EB]">{selectedDay}</span>
                    {selectedSubject && (
                      <span className="ml-2 text-sm text-gray-600">• Subject: <span className="font-bold text-[#4F46E5]">{selectedSubject}</span></span>
                    )}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
                    {timeSlots.map((time, index) => {
                      const isSelected = selectedSchedules.some(s => s.day === selectedDay && s.time === time);
                      return (
                        <motion.button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-3 rounded-xl font-['Arimo'] transition-all shadow-lg hover:shadow-xl border-2 ${
                            isSelected
                              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500'
                              : 'bg-white border-gray-200 text-gray-900 hover:border-[#4F46E5]'
                          }`}
                        >
                          {isSelected && <CheckCircle className="w-4 h-4 inline mr-2" />}
                          {time}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Selected Schedules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6 flex items-center justify-between">
            <h3 className="font-['Arimo'] text-xl text-gray-900 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#2563EB]" />
              Your Selected Schedules ({selectedSchedules.length}/3)
            </h3>
            {selectedSchedules.length > 0 && (
              <motion.button
                onClick={() => setSelectedSchedules([])}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </motion.button>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {selectedSchedules.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="w-12 h-12 text-[#2563EB]" />
                </div>
                <p className="font-['Arimo'] text-gray-500 text-lg">No schedules selected yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence>
                  {selectedSchedules.map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center shadow-lg">
                            <Clock className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h4 className="font-['Arimo'] text-xl text-gray-900 mb-1">{schedule.day}</h4>
                            <p className="font-['Arimo'] text-gray-600">{schedule.time} • {schedule.subject}</p>
                          </div>
                        </div>
                        <motion.button
                          onClick={() => removeSchedule(index)}
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                        >
                          <XCircle className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Confirm Button */}
          {selectedSchedules.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <motion.button
                onClick={handleConfirmSchedules}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-['Arimo'] text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-6 h-6" />
                Confirm Schedules
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={finalizeSchedules}
        title="Confirm Your Schedule?"
        message={`⚠️ IMPORTANT: You are about to confirm ${selectedSchedules.length} weekly lesson(s). Once confirmed, your schedule CANNOT be changed. Please make sure you've selected the correct time slots before proceeding.`}
        confirmText="Yes, Confirm Schedule"
        confirmColor="from-green-500 to-green-600"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
