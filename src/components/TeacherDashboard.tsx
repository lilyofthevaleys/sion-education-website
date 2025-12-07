import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  Calendar,
  Users,
  FileText,
  MessageSquare,
  User,
  LogOut,
  Clock,
  BookOpen,
  Send,
  Upload,
  CheckCircle,
  Mail,
  Phone,
  School,
  MapPin,
  Edit,
  Search
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';
import ChatInterface from './ChatInterface';
import ProfileManager from './ProfileManager';
import ScheduleCalendar from './ScheduleCalendar';

// Counter Animation Component
function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function TeacherDashboard({ navigate, currentUser, onLogout }) {
  const [activeTab, setActiveTab] = useState('schedule');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileManager, setShowProfileManager] = useState(false);
  const [selectedChatStudent, setSelectedChatStudent] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatFilter, setChatFilter] = useState('ALL'); // 'ALL' or 'UNREAD'
  const [showCalendar, setShowCalendar] = useState(false);
  const [dayFilter, setDayFilter] = useState('All Days'); // New state for day filter
  const [showSaveProfileModal, setShowSaveProfileModal] = useState(false);
  
  // Logbook state
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [logbookDate, setLogbookDate] = useState('');
  const [logbookTopic, setLogbookTopic] = useState('');
  const [logbookNotes, setLogbookNotes] = useState('');
  const [logbookHomework, setLogbookHomework] = useState('');
  const [logbookBehavior, setLogbookBehavior] = useState('');
  const [logbookNextTopic, setLogbookNextTopic] = useState('');
  const [showLogbookSubmitModal, setShowLogbookSubmitModal] = useState(false);

  // Edit Profile state
  const [editedProfile, setEditedProfile] = useState({
    name: currentUser?.fullName || 'Ms. Johnson',
    email: currentUser?.email || 'teacher@sion.edu',
    phone: currentUser?.phone || '+1 555 1001',
    subject: currentUser?.profile?.subject || 'Mathematics',
    grades: currentUser?.profile?.grades || 'Grades 9-11',
    availability: currentUser?.profile?.availability || 'Mon-Fri, 3PM-8PM'
  });

  const stats = {
    students: currentUser?.profile?.students || 15,
    thisWeek: 24,
    pendingLogs: currentUser?.profile?.pendingLogs || 2,
    messages: 7
  };

  const students = [
    { id: 1, name: 'Alex Chen', grade: 'Grade 10', nextLesson: 'Tue 5PM', avatar: 'A', subject: 'Math', unreadMessages: 2 },
    { id: 2, name: 'Sarah Williams', grade: 'Grade 9', nextLesson: 'Wed 3PM', avatar: 'S', subject: 'Algebra', unreadMessages: 0 },
    { id: 3, name: 'Michael Brown', grade: 'Grade 11', nextLesson: 'Thu 4PM', avatar: 'M', subject: 'Calculus', unreadMessages: 1 },
    { id: 4, name: 'Emma Martinez', grade: 'Grade 10', nextLesson: 'Fri 5PM', avatar: 'E', subject: 'Geometry', unreadMessages: 0 }
  ];

  const todaysLessons = [
    { id: 1, student: 'Alex Chen', subject: 'Math', time: '5PM - 6PM', avatar: 'A' },
    { id: 2, student: 'Alex Chun', subject: 'Physics', time: '5PM - 7PM', avatar: 'A' },
    { id: 3, student: 'Alex Chan', subject: 'Chemistry', time: '5PM - 6:30PM', avatar: 'A' }
  ];

  // Weekly schedule data
  const weeklySchedule = [
    { day: 'Monday', date: 'Nov 25', lessons: [
      { time: '3:00 PM', student: 'Alex Chen', subject: 'Math', avatar: 'A', color: 'from-blue-500 to-blue-600' },
      { time: '5:00 PM', student: 'Sarah Williams', subject: 'Algebra', avatar: 'S', color: 'from-purple-500 to-purple-600' }
    ]},
    { day: 'Tuesday', date: 'Nov 26', lessons: [
      { time: '4:00 PM', student: 'Michael Brown', subject: 'Calculus', avatar: 'M', color: 'from-green-500 to-green-600' },
      { time: '6:00 PM', student: 'Emma Martinez', subject: 'Geometry', avatar: 'E', color: 'from-pink-500 to-pink-600' }
    ]},
    { day: 'Wednesday', date: 'Nov 27', lessons: [
      { time: '3:00 PM', student: 'Alex Chen', subject: 'Math', avatar: 'A', color: 'from-blue-500 to-blue-600' },
      { time: '5:30 PM', student: 'Sarah Williams', subject: 'Algebra', avatar: 'S', color: 'from-purple-500 to-purple-600' }
    ]},
    { day: 'Thursday', date: 'Nov 28', lessons: [
      { time: '4:00 PM', student: 'Michael Brown', subject: 'Calculus', avatar: 'M', color: 'from-green-500 to-green-600' }
    ]},
    { day: 'Friday', date: 'Nov 29', lessons: [
      { time: '3:00 PM', student: 'Emma Martinez', subject: 'Geometry', avatar: 'E', color: 'from-pink-500 to-pink-600' },
      { time: '5:00 PM', student: 'Alex Chen', subject: 'Math', avatar: 'A', color: 'from-blue-500 to-blue-600' },
      { time: '7:00 PM', student: 'Sarah Williams', subject: 'Algebra', avatar: 'S', color: 'from-purple-500 to-purple-600' }
    ]},
    { day: 'Saturday', date: 'Nov 30', lessons: [
      { time: '10:00 AM', student: 'Michael Brown', subject: 'Calculus', avatar: 'M', color: 'from-green-500 to-green-600' }
    ]},
    { day: 'Sunday', date: 'Dec 1', lessons: [] }
  ];

  const tabs = [
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'logbook', label: 'Logbook', icon: FileText },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const handleLogbookSubmit = () => {
    console.log('Submitting logbook:', { selectedStudent, logbookDate, logbookTopic, logbookNotes, logbookHomework, logbookBehavior, logbookNextTopic });
    // Reset form
    setSelectedStudent([]);
    setLogbookDate('');
    setLogbookTopic('');
    setLogbookNotes('');
    setLogbookHomework('');
    setLogbookBehavior('');
    setLogbookNextTopic('');
    setShowLogbookSubmitModal(false);
  };

  const handleSaveProfile = () => {
    console.log('Saving teacher profile:', editedProfile);
    // TODO: Save to backend
    setShowSaveProfileModal(false);
    setShowEditProfile(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header - Same as Admin/Student */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-50 border-b border-white/20"
      >
        <div className="max-w-[1800px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-2xl relative">
                <GraduationCap className="w-8 h-8 text-white relative z-10" />
              </div>
              <div>
                <h1 className="font-['Arimo'] text-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  SION Education
                </h1>
                <p className="font-['Arimo'] text-sm text-gray-600">Teacher Portal</p>
              </div>
            </div>

            {/* User & Logout */}
            <div className="flex items-center gap-4">
              <div className="text-right mr-2">
                <p className="font-['Arimo'] text-sm text-gray-900">{editedProfile.name}</p>
                <p className="font-['Arimo'] text-xs text-gray-500">{editedProfile.subject}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProfileManager(true)}
                className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-purple-100 hover:ring-purple-200 transition-all cursor-pointer"
              >
                <span className="text-lg font-bold">{editedProfile.name.charAt(0)}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1800px] mx-auto px-8 py-8">
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
              Welcome back, {editedProfile.name.split(' ')[0]}! 👋
            </motion.h2>
            <motion.p 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-['Arimo'] text-white/90 text-lg"
            >
              {todaysLessons.length} lessons today • {stats.pendingLogs} pending logbooks
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-['Arimo']">Active</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.students} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Students</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-['Arimo']">This week</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.thisWeek} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Lessons</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-['Arimo']">Pending</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.pendingLogs} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Logbooks</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0891B2] to-[#06B6D4] rounded-2xl flex items-center justify-center shadow-lg">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-xs font-['Arimo']">Unread</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.messages} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Messages</p>
          </motion.div>
        </div>

        {/* Main Dashboard Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 overflow-x-auto">
            <div className="flex min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 font-['Arimo'] px-6 py-4 transition-all relative ${
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* SCHEDULE TAB */}
            {activeTab === 'schedule' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">My Schedule</h3>
                  <motion.button
                    onClick={() => navigate('request-schedule-change')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Request Change
                  </motion.button>
                </div>

                {/* Weekly Schedule with View Calendar Button */}
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-xl border-2 border-blue-200 relative"
                >
                  {/* Header with Day Filter and View Calendar Button */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <h4 className="font-['Arimo'] text-xl text-gray-900">This Week's Schedule</h4>
                      
                      {/* Day Filter Dropdown */}
                      <div className="relative">
                        <select
                          value={dayFilter}
                          onChange={(e) => setDayFilter(e.target.value)}
                          className="appearance-none bg-white border-2 border-blue-300 rounded-xl pl-4 pr-10 py-2 font-['Arimo'] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-md hover:shadow-lg cursor-pointer"
                        >
                          <option value="All Days">All Days</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => setShowCalendar(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all shrink-0"
                    >
                      <Calendar className="w-4 h-4" />
                      View Calendar
                    </motion.button>
                  </div>

                  {/* Scrollable Weekly Schedule */}
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {weeklySchedule
                      .filter(day => dayFilter === 'All Days' || day.day === dayFilter)
                      .map((day, dayIndex) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: dayIndex * 0.05 }}
                        className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                      >
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                          <div>
                            <h5 className="font-['Arimo'] text-lg text-gray-900">{day.day}</h5>
                            <p className="font-['Arimo'] text-sm text-gray-500">{day.date}</p>
                          </div>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-['Arimo']">
                            {day.lessons.length} {day.lessons.length === 1 ? 'lesson' : 'lessons'}
                          </span>
                        </div>

                        {day.lessons.length > 0 ? (
                          <div className="space-y-2">
                            {day.lessons.map((lesson, lessonIndex) => (
                              <motion.div
                                key={lessonIndex}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all cursor-pointer"
                              >
                                <div className={`w-10 h-10 bg-gradient-to-br ${lesson.color} rounded-full flex items-center justify-center text-white shadow-md shrink-0`}>
                                  <span className="font-bold text-sm">{lesson.avatar}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-['Arimo'] text-sm text-gray-900 truncate">{lesson.student}</p>
                                  <p className="font-['Arimo'] text-xs text-gray-600">{lesson.subject}</p>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                  <Clock className="w-3 h-3 text-gray-500" />
                                  <span className="font-['Arimo'] text-xs text-gray-700">{lesson.time}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <p className="font-['Arimo'] text-sm text-gray-400 text-center py-4">No lessons scheduled</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Today's Lessons */}
                <div>
                  <h4 className="font-['Arimo'] text-xl text-gray-900 mb-4">Today's Lessons:</h4>
                  <div className="space-y-3">
                    {todaysLessons.map((lesson, index) => (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-full flex items-center justify-center text-white shadow-lg">
                              <span className="font-bold">{lesson.avatar}</span>
                            </div>
                            <div>
                              <h5 className="font-['Arimo'] text-lg text-gray-900">{lesson.student} - {lesson.subject}</h5>
                              <p className="font-['Arimo'] text-gray-600 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {lesson.time}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg"
                          >
                            Details
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STUDENTS TAB */}
            {activeTab === 'students' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="font-['Arimo'] text-2xl text-gray-900">Assigned Students</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {students.map((student, index) => (
                    <motion.div
                      key={student.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-full flex items-center justify-center text-white shadow-lg text-xl font-bold">
                          {student.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-['Cousine'] text-lg text-gray-900 mb-1">{student.name}</h4>
                          <p className="font-['Arimo'] text-gray-600 text-sm">{student.grade}</p>
                          <p className="font-['Arimo'] text-gray-600 text-sm">Next: {student.nextLesson}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowChat(true)}
                        className="w-full bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* LOGBOOK TAB */}
            {activeTab === 'logbook' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">Teaching Logbook</h3>
                </div>

                {/* Student Selection */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h4 className="font-['Cousine'] text-lg text-gray-900 mb-4">Select Student</h4>
                  <div className="space-y-2">
                    {students.map((student) => (
                      <label key={student.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedStudent.includes(student.name)}
                          onChange={() => setSelectedStudent(prev => prev.includes(student.name) ? prev.filter(name => name !== student.name) : [...prev, student.name])}
                          className="w-5 h-5 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
                        />
                        <span className="font-['Arimo'] text-gray-700">{student.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Logbook Form */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 space-y-6">
                  <h4 className="font-['Arimo'] text-xl text-gray-900">New Entry</h4>

                  <div>
                    <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Date & Time</label>
                    <input
                      type="datetime-local"
                      value={logbookDate}
                      onChange={(e) => setLogbookDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Topic</label>
                    <input
                      type="text"
                      value={logbookTopic}
                      onChange={(e) => setLogbookTopic(e.target.value)}
                      placeholder="Lesson topic..."
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Notes</label>
                    <textarea
                      value={logbookNotes}
                      onChange={(e) => setLogbookNotes(e.target.value)}
                      placeholder="Progress, homework..."
                      rows="6"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Homework</label>
                    <textarea
                      value={logbookHomework}
                      onChange={(e) => setLogbookHomework(e.target.value)}
                      placeholder="Assign homework..."
                      rows="4"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Behavior</label>
                    <textarea
                      value={logbookBehavior}
                      onChange={(e) => setLogbookBehavior(e.target.value)}
                      placeholder="Student behavior..."
                      rows="4"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Upload Photo</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#2563EB] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="font-['Arimo'] text-gray-500">↑ Click to upload</p>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setShowLogbookSubmitModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-['Arimo'] text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6" />
                    Submit Logbook
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* CHAT TAB */}
            {activeTab === 'chat' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="font-['Arimo'] text-2xl text-gray-900">Select a Student to Chat</h3>
                
                {/* Search Bar and Filter Buttons */}
                <div className="space-y-4">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-3 font-['Arimo'] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-lg"
                    />
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setChatFilter('ALL')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 py-3 rounded-xl font-['Arimo'] transition-all shadow-lg ${
                        chatFilter === 'ALL'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                      }`}
                    >
                      ALL
                    </motion.button>
                    <motion.button
                      onClick={() => setChatFilter('UNREAD')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 py-3 rounded-xl font-['Arimo'] transition-all shadow-lg relative ${
                        chatFilter === 'UNREAD'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                      }`}
                    >
                      UNREAD
                      {students.filter(s => s.unreadMessages > 0).length > 0 && (
                        <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg ${
                          chatFilter === 'UNREAD' ? 'bg-white text-[#2563EB]' : 'bg-red-500 text-white'
                        }`}>
                          {students.filter(s => s.unreadMessages > 0).length}
                        </span>
                      )}
                    </motion.button>
                  </div>
                </div>
                
                {/* Student List */}
                <div className="grid md:grid-cols-2 gap-6">
                  {students
                    .filter(student => {
                      // Search filter
                      const matchesSearch = searchQuery === '' || 
                        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        student.grade.toLowerCase().includes(searchQuery.toLowerCase());
                      
                      // Unread filter
                      const matchesFilter = chatFilter === 'ALL' || 
                        (chatFilter === 'UNREAD' && student.unreadMessages > 0);
                      
                      return matchesSearch && matchesFilter;
                    })
                    .map((student, index) => (
                      <motion.button
                        key={student.id}
                        onClick={() => {
                          setSelectedChatStudent(student);
                          setShowChat(true);
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-left relative"
                      >
                        {/* Unread Badge */}
                        {student.unreadMessages > 0 && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                            {student.unreadMessages}
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-full flex items-center justify-center text-white shadow-lg text-xl font-bold">
                            {student.avatar}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-['Cousine'] text-lg text-gray-900 mb-1">{student.name}</h4>
                            <p className="font-['Arimo'] text-gray-600 text-sm">{student.grade}</p>
                            <p className="font-['Arimo'] text-gray-600 text-sm flex items-center gap-2 mt-2">
                              <MessageSquare className="w-4 h-4" />
                              {student.unreadMessages > 0 ? `${student.unreadMessages} unread messages` : 'Click to start chat'}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))
                  }
                  
                  {/* No Results */}
                  {students.filter(student => {
                    const matchesSearch = searchQuery === '' || 
                      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      student.grade.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesFilter = chatFilter === 'ALL' || 
                      (chatFilter === 'UNREAD' && student.unreadMessages > 0);
                    return matchesSearch && matchesFilter;
                  }).length === 0 && (
                    <div className="col-span-2 text-center py-12">
                      <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="font-['Arimo'] text-gray-500 text-lg">No students found</p>
                      <p className="font-['Arimo'] text-gray-400 text-sm mt-2">
                        {chatFilter === 'UNREAD' ? 'No unread messages' : 'Try adjusting your search'}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">My Profile</h3>
                  <motion.button
                    onClick={() => setShowEditProfile(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-4 py-2 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </motion.button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Full Name</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{editedProfile.name}</p>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Email Address</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{editedProfile.email}</p>
                  </div>

                  {/* Subject */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Subject</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{editedProfile.subject}</p>
                  </div>

                  {/* Phone */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Phone Number</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{editedProfile.phone}</p>
                  </div>

                  {/* Grades */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <School className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Grade Levels</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{editedProfile.grades}</p>
                  </div>

                  {/* Availability */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Availability</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{editedProfile.availability}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Logout Modal */}
      <ConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={onLogout}
        title="Logout Confirmation"
        message="Are you sure you want to logout from your teacher account?"
        confirmText="Yes, Logout"
        confirmColor="from-red-500 to-red-600"
        icon={<LogOut className="w-6 h-6 text-white" />}
      />

      {/* Chat Interface */}
      {showChat && (
        <ChatInterface
          currentUser={currentUser}
          onClose={() => setShowChat(false)}
        />
      )}

      {/* Profile Manager */}
      {showProfileManager && (
        <ProfileManager
          currentUser={currentUser}
          onClose={() => setShowProfileManager(false)}
        />
      )}

      {/* Schedule Calendar */}
      {showCalendar && (
        <ScheduleCalendar
          currentUser={currentUser}
          onClose={() => setShowCalendar(false)}
        />
      )}

      {/* Logbook Submit Modal */}
      <ConfirmationModal
        isOpen={showLogbookSubmitModal}
        onClose={() => setShowLogbookSubmitModal(false)}
        onConfirm={handleLogbookSubmit}
        title="Submit Logbook"
        message="Are you sure you want to submit this logbook entry?"
        confirmText="Submit"
        confirmColor="from-green-500 to-green-600"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] p-6 text-white">
              <h3 className="font-['Arimo'] text-2xl">Edit Profile</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={editedProfile.subject}
                  onChange={(e) => setEditedProfile({ ...editedProfile, subject: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Grade Levels</label>
                <input
                  type="text"
                  value={editedProfile.grades}
                  onChange={(e) => setEditedProfile({ ...editedProfile, grades: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Availability</label>
                <input
                  type="text"
                  value={editedProfile.availability}
                  onChange={(e) => setEditedProfile({ ...editedProfile, availability: e.target.value })}
                  placeholder="e.g. Mon-Fri, 3PM-8PM"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>
            <div className="p-6 flex gap-3 border-t border-gray-200">
              <motion.button
                onClick={() => setShowEditProfile(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-['Arimo'] hover:bg-gray-300 transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={() => setShowSaveProfileModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Save Profile Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSaveProfileModal}
        onClose={() => setShowSaveProfileModal(false)}
        onConfirm={handleSaveProfile}
        title="Save Profile Changes?"
        message="Are you sure you want to update your profile information?"
        confirmText="Yes, Save"
        confirmColor="from-green-500 to-green-600"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}