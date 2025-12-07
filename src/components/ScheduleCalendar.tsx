import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Clock, User, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScheduleCalendar({ onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Mock lesson data - dates with lessons
  const lessons = {
    '2024-12-24': [
      { id: 1, student: 'Alex Chen', subject: 'Math', time: '5:00 PM - 7:00 PM', avatar: 'A', color: 'from-blue-500 to-blue-600' }
    ],
    '2024-12-26': [
      { id: 2, student: 'Sarah Williams', subject: 'Algebra', time: '3:00 PM - 4:30 PM', avatar: 'S', color: 'from-purple-500 to-purple-600' },
      { id: 3, student: 'Michael Brown', subject: 'Calculus', time: '5:00 PM - 6:30 PM', avatar: 'M', color: 'from-cyan-500 to-cyan-600' }
    ],
    '2024-12-27': [
      { id: 4, student: 'Emma Martinez', subject: 'Geometry', time: '4:00 PM - 5:30 PM', avatar: 'E', color: 'from-green-500 to-green-600' }
    ],
    '2024-12-30': [
      { id: 5, student: 'Alex Chen', subject: 'Physics', time: '6:00 PM - 7:30 PM', avatar: 'A', color: 'from-orange-500 to-orange-600' }
    ],
    '2025-01-02': [
      { id: 6, student: 'Sarah Williams', subject: 'Chemistry', time: '3:30 PM - 5:00 PM', avatar: 'S', color: 'from-pink-500 to-pink-600' }
    ],
    '2025-01-03': [
      { id: 7, student: 'Michael Brown', subject: 'Math', time: '5:00 PM - 6:00 PM', avatar: 'M', color: 'from-indigo-500 to-indigo-600' }
    ]
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const formatDateKey = (year, month, day) => {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (lessons[dateKey]) {
      setSelectedDate({ day, dateKey, lessons: lessons[dateKey] });
    } else {
      setSelectedDate({ day, dateKey, lessons: [] });
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const blanks = [];

    // Add blank cells for days before the first day of month
    for (let i = 0; i < startingDayOfWeek; i++) {
      blanks.push(
        <div key={`blank-${i}`} className="aspect-square"></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day);
      const hasLesson = lessons[dateKey];
      const isSelected = selectedDate?.day === day && selectedDate?.dateKey === dateKey;
      const isToday = 
        day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();

      days.push(
        <motion.button
          key={day}
          onClick={() => handleDateClick(day)}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`aspect-square rounded-2xl flex flex-col items-center justify-center font-['Arimo'] relative transition-all ${
            isSelected
              ? 'bg-gradient-to-br from-[#2563EB] to-[#4F46E5] text-white shadow-2xl ring-4 ring-blue-200'
              : hasLesson
              ? 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-900 shadow-lg'
              : isToday
              ? 'bg-gradient-to-br from-green-100 to-cyan-100 text-gray-900 shadow-md'
              : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md'
          }`}
        >
          <span className="text-xl font-bold">{day}</span>
          {hasLesson && (
            <div className="absolute bottom-1 flex gap-1">
              {lessons[dateKey].slice(0, 3).map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-white' : 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED]'
                  }`}
                />
              ))}
            </div>
          )}
          {isToday && !isSelected && (
            <div className="absolute top-1 right-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          )}
        </motion.button>
      );
    }

    return [...blanks, ...days];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-6 text-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-['Arimo'] text-2xl">Teaching Schedule</h3>
                <p className="font-['Arimo'] text-white/90 text-sm">View and manage your lessons</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white/20 hover:bg-red-500 rounded-xl flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="p-8">
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={prevMonth}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <h4 className="font-['Cousine'] text-3xl text-gray-900">{monthName}</h4>
            
            <motion.button
              onClick={nextMonth}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-100 to-cyan-100 border-2 border-green-500"></div>
              <span className="font-['Arimo'] text-sm text-gray-700">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-500"></div>
              <span className="font-['Arimo'] text-sm text-gray-700">Has Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#2563EB] to-[#4F46E5] border-2 border-blue-700"></div>
              <span className="font-['Arimo'] text-sm text-gray-700">Selected</span>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-4 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-['Cousine'] text-sm text-gray-600 font-bold">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-4 mb-8">
            {renderCalendarDays()}
          </div>

          {/* Selected Date Details */}
          <AnimatePresence mode="wait">
            {selectedDate && (
              <motion.div
                key={selectedDate.dateKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Cousine'] text-2xl text-gray-900">
                      {new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate.day).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </h4>
                    <p className="font-['Arimo'] text-gray-600">
                      {selectedDate.lessons.length === 0 
                        ? 'No lessons scheduled' 
                        : `${selectedDate.lessons.length} lesson${selectedDate.lessons.length > 1 ? 's' : ''} scheduled`
                      }
                    </p>
                  </div>
                </div>

                {selectedDate.lessons.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDate.lessons.map((lesson, index) => (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${lesson.color} rounded-2xl flex items-center justify-center text-white shadow-lg text-xl font-bold`}>
                            {lesson.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <User className="w-4 h-4 text-gray-500" />
                              <h5 className="font-['Cousine'] text-lg text-gray-900">{lesson.student}</h5>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <BookOpen className="w-4 h-4 text-gray-500" />
                              <p className="font-['Arimo'] text-gray-700">{lesson.subject}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <p className="font-['Arimo'] text-gray-700">{lesson.time}</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
                          >
                            Details
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-12 h-12 text-gray-500" />
                    </div>
                    <p className="font-['Arimo'] text-gray-500 text-lg">No lessons scheduled for this day</p>
                    <p className="font-['Arimo'] text-gray-400 text-sm mt-2">Select a date with lessons to view details</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instructions */}
          {!selectedDate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200"
            >
              <h4 className="font-['Cousine'] text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#2563EB]" />
                How to use:
              </h4>
              <ul className="space-y-2 font-['Arimo'] text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 shrink-0"></span>
                  <span>Click on any highlighted date to view lesson details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 shrink-0"></span>
                  <span>Dates with lessons are highlighted in blue/purple</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 shrink-0"></span>
                  <span>Use the arrows to navigate between months</span>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
