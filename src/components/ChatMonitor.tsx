import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronRight, MessageCircle, Send, Paperclip, MoreVertical } from 'lucide-react';

export default function ChatMonitor({ teacherData, studentData }) {
  const [selectedTeacher, setSelectedTeacher] = useState('Ms. Johnson');
  const [selectedStudent, setSelectedStudent] = useState('Emily Rodriguez');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTeachers, setExpandedTeachers] = useState(new Set(['Ms. Johnson']));

  // Mock chat data with placeholder conversation
  const chatData = {
    'Ms. Johnson': {
      'Emily Rodriguez': [
        { sender: 'student', text: 'Good morning Ms. Johnson! I have a question about yesterday\'s homework.', time: '9:15 AM', date: 'Today', isStudent: true },
        { sender: 'teacher', text: 'Good morning Emily! Of course, I\'d be happy to help. Which problem are you stuck on?', time: '9:18 AM', date: 'Today', isStudent: false },
        { sender: 'student', text: 'It\'s problem #7 on page 42. I don\'t understand how to solve for x in this equation.', time: '9:20 AM', date: 'Today', isStudent: true },
        { sender: 'teacher', text: 'Let me break it down step by step for you. First, you need to isolate the variable on one side.', time: '9:25 AM', date: 'Today', isStudent: false },
        { sender: 'student', text: 'Oh I see! So I move the constant to the right side first?', time: '9:28 AM', date: 'Today', isStudent: true },
        { sender: 'teacher', text: 'Exactly! You\'re getting it. Try working through it and let me know if you need more help.', time: '9:30 AM', date: 'Today', isStudent: false },
        { sender: 'student', text: 'Thank you so much! This makes a lot more sense now 😊', time: '9:35 AM', date: 'Today', isStudent: true }
      ],
      'James Wilson': [
        { sender: 'student', text: 'Hi! When is the next exam scheduled?', time: '2:30 PM', date: 'Yesterday', isStudent: true },
        { sender: 'teacher', text: 'Hello James! The next exam is scheduled for Friday, December 1st at 10 AM.', time: '2:45 PM', date: 'Yesterday', isStudent: false },
        { sender: 'student', text: 'Thanks! What chapters will it cover?', time: '3:00 PM', date: 'Yesterday', isStudent: true },
        { sender: 'teacher', text: 'Chapters 5-8. Make sure to review the practice problems we did in class.', time: '3:15 PM', date: 'Yesterday', isStudent: false }
      ],
      'Isabella Martinez': [
        { sender: 'student', text: 'Good afternoon! Ready for today\'s tutoring session.', time: '4:00 PM', date: 'Nov 23', isStudent: true },
        { sender: 'teacher', text: 'Great! Let\'s start with reviewing Chapter 5.', time: '4:05 PM', date: 'Nov 23', isStudent: false }
      ]
    },
    'Mr. Davis': {
      'Sarah Chen': [
        { sender: 'student', text: 'Hello Mr. Davis, can we reschedule today\'s session?', time: '8:45 AM', date: 'Today', isStudent: true },
        { sender: 'teacher', text: 'Hi Sarah! Yes, how about 4 PM instead?', time: '8:50 AM', date: 'Today', isStudent: false },
        { sender: 'student', text: 'Perfect! See you then.', time: '8:52 AM', date: 'Today', isStudent: true }
      ],
      'Alex Kim': [
        { sender: 'student', text: 'I finished all the practice problems!', time: '3:15 PM', date: 'Yesterday', isStudent: true },
        { sender: 'teacher', text: 'Excellent work Alex! I\'ll review them before our next class.', time: '3:20 PM', date: 'Yesterday', isStudent: false }
      ]
    },
    'Dr. Smith': {
      'Michael Brown': [
        { sender: 'student', text: 'Dr. Smith, I need help with the calculus homework.', time: '2:15 PM', date: 'Nov 22', isStudent: true },
        { sender: 'teacher', text: 'Sure! Which problems are you struggling with?', time: '2:20 PM', date: 'Nov 22', isStudent: false },
        { sender: 'student', text: 'Problems 5-8 about derivatives.', time: '2:25 PM', date: 'Nov 22', isStudent: true },
        { sender: 'teacher', text: 'Let\'s go through them one by one in our next session.', time: '2:30 PM', date: 'Nov 22', isStudent: false }
      ]
    },
    'Ms. Anderson': {
      'Sophia Taylor': [
        { sender: 'student', text: 'Thank you for the extra study materials!', time: '5:00 PM', date: 'Nov 21', isStudent: true },
        { sender: 'teacher', text: 'You\'re very welcome! Keep up the excellent work.', time: '5:05 PM', date: 'Nov 21', isStudent: false }
      ]
    }
  };

  const toggleTeacher = (teacherName) => {
    const newExpanded = new Set(expandedTeachers);
    if (newExpanded.has(teacherName)) {
      newExpanded.delete(teacherName);
    } else {
      newExpanded.add(teacherName);
    }
    setExpandedTeachers(newExpanded);
  };

  const selectConversation = (teacherName, studentName) => {
    setSelectedTeacher(teacherName);
    setSelectedStudent(studentName);
  };

  const getStudentsForTeacher = (teacherName) => {
    return studentData.filter(s => s.teacher === teacherName);
  };

  const currentChat = selectedTeacher && selectedStudent
    ? chatData[selectedTeacher]?.[selectedStudent] || []
    : [];

  const filteredTeachers = teacherData.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTeacherInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getStudentInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-['Arimo'] text-2xl text-gray-900">Chat Monitoring</h3>
          <p className="font-['Arimo'] text-sm text-gray-600 mt-1">View all teacher-student conversations</p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-xl border border-purple-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-['Arimo'] text-sm text-gray-700">Live Monitoring</span>
        </div>
      </div>

      <div className="flex gap-6 h-[700px]">
        {/* Left Sidebar - Teachers & Students */}
        <div className="w-96 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
          {/* Search */}
          <div className="p-5 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search teachers or students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Teacher List */}
          <div className="flex-1 overflow-y-auto">
            {filteredTeachers.map((teacher, idx) => {
              const students = getStudentsForTeacher(teacher.name);
              const isExpanded = expandedTeachers.has(teacher.name);

              return (
                <div key={teacher.id}>
                  {/* Teacher Row */}
                  <motion.div
                    whileHover={{ backgroundColor: 'rgb(249 250 251)' }}
                    onClick={() => toggleTeacher(teacher.name)}
                    className="p-4 cursor-pointer border-b border-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                        <span className="font-['Arimo']">{getTeacherInitials(teacher.name)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-['Arimo'] text-gray-900">{teacher.name}</p>
                        <p className="font-['Arimo'] text-xs text-gray-500">{students.length} active conversations</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Student List (Expanded) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 overflow-hidden"
                      >
                        {students.length > 0 ? (
                          <div className="py-2">
                            {students.map((student) => {
                              const isStudentSelected = selectedTeacher === teacher.name && selectedStudent === student.name;
                              const hasChat = chatData[teacher.name]?.[student.name];
                              const lastMessage = hasChat?.[hasChat.length - 1];

                              return (
                                <motion.div
                                  key={student.id}
                                  whileHover={{ x: 4, backgroundColor: 'rgb(255 255 255)' }}
                                  onClick={() => hasChat && selectConversation(teacher.name, student.name)}
                                  className={`pl-20 pr-4 py-3 cursor-pointer transition-all ${
                                    isStudentSelected ? 'bg-white border-l-4 border-l-blue-500' : ''
                                  } ${!hasChat ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                  <div className="flex items-center justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <p className="font-['Arimo'] text-sm text-gray-900 truncate">{student.name}</p>
                                        {hasChat && (
                                          <MessageCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                        )}
                                      </div>
                                      {lastMessage && (
                                        <p className="font-['Arimo'] text-xs text-gray-500 truncate mt-0.5">
                                          {lastMessage.text.substring(0, 35)}...
                                        </p>
                                      )}
                                    </div>
                                    {hasChat && (
                                      <span className="text-xs font-['Arimo'] text-gray-400 shrink-0">
                                        {lastMessage?.time}
                                      </span>
                                    )}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="py-4 px-20 text-center">
                            <p className="font-['Arimo'] text-xs text-gray-400 italic">No assigned students</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Chat View */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
          {selectedStudent ? (
            <>
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <span className="font-['Arimo']">{getStudentInitials(selectedStudent)}</span>
                  </div>
                  <div>
                    <p className="font-['Arimo'] text-white">{selectedStudent}</p>
                    <p className="font-['Arimo'] text-xs text-white/80">with {selectedTeacher}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  <MoreVertical className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
                {currentChat.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-start gap-3 ${
                      msg.isStudent ? '' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 ${
                      msg.isStudent 
                        ? 'bg-gradient-to-br from-[#0891B2] to-[#16A34A]' 
                        : 'bg-gradient-to-br from-[#2563EB] to-[#7C3AED]'
                    }`}>
                      <span className="text-sm font-['Arimo']">
                        {msg.isStudent ? getStudentInitials(selectedStudent) : getTeacherInitials(selectedTeacher)}
                      </span>
                    </div>
                    <div className={`max-w-md ${msg.isStudent ? '' : 'text-right'}`}>
                      <div
                        className={`px-5 py-3 rounded-2xl shadow-md font-['Arimo'] ${
                          msg.isStudent 
                            ? 'bg-white text-gray-900 rounded-tl-sm' 
                            : 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white rounded-tr-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <p className="font-['Arimo'] text-xs text-gray-500 mt-1.5 px-1">
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input (View-Only for Admin) */}
              <div className="border-t border-gray-200 p-5 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center gap-3 mb-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled
                    className="w-11 h-11 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 cursor-not-allowed"
                  >
                    <Paperclip className="w-5 h-5" />
                  </motion.button>
                  <input
                    type="text"
                    placeholder="Admins cannot send messages..."
                    disabled
                    className="flex-1 px-5 py-3 bg-gray-100 border border-gray-200 rounded-xl font-['Arimo'] text-gray-400 cursor-not-allowed"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled
                    className="w-11 h-11 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs">🔒</span>
                  </div>
                  <p className="font-['Arimo'] text-xs">Admin View Only - Cannot send messages</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <MessageCircle className="w-16 h-16 text-blue-500" />
                </motion.div>
                <h3 className="font-['Arimo'] text-xl text-gray-900 mb-2">Select a Conversation</h3>
                <p className="font-['Arimo'] text-gray-600 max-w-sm">
                  Choose a teacher from the sidebar and click on a student to view their conversation history
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
