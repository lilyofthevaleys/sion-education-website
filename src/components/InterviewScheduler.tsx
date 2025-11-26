import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function InterviewScheduler({ navigate, teacher }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10)); // November 2025
  const [confirmModal, setConfirmModal] = useState(false);

  // Mock available/unavailable dates
  const availability = {
    '2025-11-12': 'available',
    '2025-11-13': 'unavailable',
    '2025-11-14': 'available',
    '2025-11-17': 'available',
    '2025-11-18': 'unavailable',
    '2025-11-19': 'available',
    '2025-11-20': 'available',
    '2025-11-21': 'unavailable',
    '2025-11-24': 'available',
    '2025-11-25': 'unavailable',
    '2025-11-26': 'available',
    '2025-11-27': 'available',
    '2025-11-28': 'unavailable'
  };

  const timeSlots = [
    { time: '10:00 AM', duration: '30 minutes' },
    { time: '11:00 AM', duration: '30 minutes' },
    { time: '02:00 PM', duration: '30 minutes' },
    { time: '04:00 PM', duration: '30 minutes' }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const getDateKey = (day) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getDayStatus = (day) => {
    if (!day) return null;
    const dateKey = getDateKey(day);
    return availability[dateKey] || 'sunday';
  };

  const handleDateClick = (day) => {
    const status = getDayStatus(day);
    if (status === 'available') {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleConfirmInterview = () => {
    console.log('Interview scheduled:', {
      teacher: teacher?.name,
      date: selectedDate,
      time: selectedTime
    });
    navigate('pending-applications-teacher');
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const days = getDaysInMonth(currentMonth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-white/20"
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('pending-applications-teacher')}
              className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            <div>
              <h1 className="font-['Arimo'] text-2xl text-gray-900">Interview Scheduler</h1>
              <p className="font-['Arimo'] text-sm text-gray-600">Schedule interview for {teacher?.name || 'Teacher'}</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="mb-6">
                <h2 className="font-['Arimo'] text-2xl text-gray-900 mb-2">Schedule Your Interview</h2>
                <p className="font-['Arimo'] text-gray-600">Select an available date (green) and time. Interview conducted via video call.</p>
              </div>

              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </motion.button>
                <h3 className="font-['Arimo'] text-xl text-gray-900">{monthName.toUpperCase()}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </motion.button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                  <div key={day} className="text-center py-2 font-['Arimo'] text-sm text-gray-600">
                    {day}
                  </div>
                ))}
                {days.map((day, index) => {
                  const status = getDayStatus(day);
                  const isSelected = selectedDate === day;
                  
                  return (
                    <motion.div
                      key={index}
                      whileHover={status === 'available' ? { scale: 1.1 } : {}}
                      onClick={() => handleDateClick(day)}
                      className={`
                        aspect-square flex items-center justify-center rounded-xl font-['Arimo'] text-lg
                        ${!day ? '' : 
                          status === 'available' ? 'bg-green-100 text-green-700 cursor-pointer hover:bg-green-200' :
                          status === 'unavailable' ? 'bg-red-100 text-red-700' :
                          'bg-white text-gray-300'}
                        ${isSelected ? 'ring-4 ring-blue-500 bg-green-500 text-white' : ''}
                      `}
                    >
                      {day && (
                        <>
                          {day}
                          {status === 'available' && (
                            <div className="absolute mt-10 text-xs">
                              {isSelected && '✓'}
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded"></div>
                  <span className="font-['Arimo'] text-sm text-gray-600">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-100 rounded"></div>
                  <span className="font-['Arimo'] text-sm text-gray-600">Unavailable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded"></div>
                  <span className="font-['Arimo'] text-sm text-gray-600">Sunday (Off)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Time Slots Sidebar */}
          <div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-3xl shadow-xl p-6 sticky top-24"
            >
              <h3 className="font-['Arimo'] text-lg text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                SELECT TIME
              </h3>

              {selectedDate ? (
                <>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                    <p className="font-['Arimo'] text-sm text-gray-600 mb-1">SELECTED DATE:</p>
                    <p className="font-['Arimo'] text-lg text-gray-900">
                      Saturday, November {selectedDate}, 2025
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {timeSlots.map((slot, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`
                          p-4 rounded-xl cursor-pointer transition-all border-2
                          ${selectedTime === slot.time
                            ? 'bg-gray-900 border-gray-900 text-white'
                            : 'bg-white border-gray-200 hover:border-blue-300'}
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-['Arimo'] text-lg">{slot.time}</p>
                            <p className={`font-['Arimo'] text-sm ${selectedTime === slot.time ? 'text-white/80' : 'text-gray-600'}`}>
                              {slot.duration}
                            </p>
                          </div>
                          {selectedTime === slot.time && (
                            <Check className="w-6 h-6" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <p className="font-['Arimo'] text-sm text-green-900 font-medium">INTERVIEW SCHEDULED</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Arimo'] text-sm text-gray-700">
                          <strong>DATE:</strong> Saturday, November {selectedDate}, 2025
                        </p>
                        <p className="font-['Arimo'] text-sm text-gray-700">
                          <strong>TIME:</strong> {selectedTime} (30 minutes)
                        </p>
                      </div>
                      <p className="font-['Arimo'] text-xs text-gray-600 mt-3">
                        📹 Video call link will be sent to your email.
                      </p>
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setConfirmModal(true)}
                      disabled={!selectedTime}
                      className={`w-full py-4 rounded-xl font-['Arimo'] shadow-lg transition-all ${
                        selectedTime
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      CONFIRM INTERVIEW
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('pending-applications-teacher')}
                      className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-['Arimo'] shadow-md hover:bg-gray-50"
                    >
                      CANCEL
                    </motion.button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📅</span>
                  </div>
                  <p className="font-['Arimo'] text-gray-600">
                    Please select a date from the calendar to view available time slots.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        onConfirm={handleConfirmInterview}
        title="Confirm Interview Schedule"
        message={`Are you sure you want to schedule an interview with ${teacher?.name || 'this teacher'} on Saturday, November ${selectedDate}, 2025 at ${selectedTime}?`}
        confirmText="Confirm Interview"
        confirmColor="from-green-500 to-emerald-500"
        icon={<Check className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
