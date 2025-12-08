import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  AlertCircle, 
  TrendingUp, 
  Clock,
  Search,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Menu,
  LogOut,
  MessageSquare,
  Calendar,
  FileText,
  UserPlus,
  BarChart3,
  Activity,
  ArrowLeft,
  Download
} from 'lucide-react';
import { motion, useInView, useAnimation, AnimatePresence } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';
import ChatMonitor from './ChatMonitor';
import ProfileManager from './ProfileManager';

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

export default function AdminDashboard({ navigate, currentUser, onLogout, pendingCounts }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [assignedPairs, setAssignedPairs] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTeacherForAssign, setSelectedTeacherForAssign] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileManager, setShowProfileManager] = useState(false);
  const [studentModal, setStudentModal] = useState({ isOpen: false, type: '', student: null });
  const [showDeleteQuestionModal, setShowDeleteQuestionModal] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  // Student management handlers
  const handleViewStudent = (student) => {
    console.log('Viewing student:', student);
    navigate('view-student-info', { id: student.id });
  };

  const handleEditStudent = (student) => {
    console.log('Editing student:', student);
    navigate('edit-student-info', { id: student.id });
    setStudentModal({ isOpen: false, type: '', student: null });
  };

  const handleDeleteStudent = (student) => {
    console.log('Deleting student:', student);
    // TODO: Remove from database
    setStudentModal({ isOpen: false, type: '', student: null });
  };

  // Question management handlers
  const handleEditQuestion = (question) => {
    console.log('Editing question:', question);
    navigate('edit-question', { id: question.id });
  };

  const handleDeleteQuestion = (question) => {
    setQuestionToDelete(question);
    setShowDeleteQuestionModal(true);
  };

  const confirmDeleteQuestion = () => {
    console.log('Deleting question:', questionToDelete);
    // TODO: Remove from database
    setShowDeleteQuestionModal(false);
    setQuestionToDelete(null);
  };

  // Mock data
  const stats = {
    students: 156,
    teachers: 42,
    lessonsPerWeek: 284,
    pending: (pendingCounts?.students || 0) + (pendingCounts?.teachers || 0)
  };

  const pendingApplications = {
    students: pendingCounts?.students || 3,
    teachers: pendingCounts?.teachers || 5
  };

  const recentActivity = [
    { icon: '👤', text: 'New student: Alex Chen', time: '1h ago', color: 'from-blue-500 to-blue-600' },
    { icon: '✅', text: 'Teacher approved: Ms. Johnson', time: '2h ago', color: 'from-green-500 to-green-600' },
    { icon: '📝', text: 'Logbook: Mr. Smith', time: '3h ago', color: 'from-purple-500 to-purple-600' },
    { icon: '📅', text: 'Schedule change: Ms. Davis', time: '4h ago', color: 'from-orange-500 to-orange-600' }
  ];

  const studentData = [
    { id: 1, name: 'Alex Chen', email: 'alex.chen@email.com', school: 'Central High School', grade: 'Grade 10', score: '85%', teacher: 'Ms. Johnson', status: 'active' },
    { id: 2, name: 'Sarah Williams', email: 'sarah.w@email.com', school: 'East Side Academy', grade: 'Grade 9', score: '92%', teacher: 'Mr. Smith', status: 'active' },
    { id: 3, name: 'Michael Brown', email: 'mike.b@email.com', school: 'North High', grade: 'Grade 11', score: '78%', teacher: 'Ms. Davis', status: 'active' },
    { id: 4, name: 'Emma Martinez', email: 'emma.m@email.com', school: 'South School', grade: 'Grade 8', score: '88%', teacher: 'Ms. Johnson', status: 'active' },
    { id: 5, name: 'James Wilson', email: 'james.w@email.com', school: 'Central High School', grade: 'Grade 10', score: '91%', teacher: null, status: 'unassigned' }
  ];

  const teacherData = [
    { id: 1, name: 'Ms. Sarah Johnson', subject: 'Mathematics', grades: 'Grades 9-11', email: 'sarah.j@edu.edu', phone: '555-1001', students: 12, availability: 'Mon-Fri, 3PM-8PM' },
    { id: 2, name: 'Mr. David Smith', subject: 'Science & Physics', grades: 'Grades 10-12', email: 'david.smith@edu.edu', phone: '555-1802', students: 15, availability: 'Tue-Sat, 2PM-10PM' },
    { id: 3, name: 'Ms. Emily Davis', subject: 'English Literature', grades: 'Grades 8-10', email: 'emily.d@edu.edu', phone: '555-2003', students: 10, availability: 'Mon-Wed, 4PM-9PM' }
  ];

  const logbookEntries = [
    {
      id: 1,
      teacher: 'Ms. Sarah Johnson',
      student: 'Alex Chen',
      date: 'Nov 20, 2025',
      time: '15:30 - 16:30',
      subject: 'Algebra - Quadratic Equations',
      notes: 'Student showed great progress in solving quadratic equations. Completed 8 out of 10 practice problems correctly. Needs more practice with word problems.',
      status: 'pending',
      submittedDate: 'Nov 20, 2025 at 5:45 PM'
    },
    {
      id: 2,
      teacher: 'Mr. David Smith',
      student: 'Sarah Williams',
      date: 'Nov 19, 2025',
      time: '14:00 - 15:30',
      subject: 'Physics - Newton\'s Laws',
      notes: 'Excellent understanding of Newton\'s three laws. Student actively participated in demonstrations and asked insightful questions.',
      status: 'pending',
      submittedDate: 'Nov 19, 2025 at 4:15 PM'
    },
    {
      id: 3,
      teacher: 'Ms. Emily Davis',
      student: 'Michael Brown',
      date: 'Nov 18, 2025',
      time: '16:00 - 17:00',
      subject: 'Literature - Shakespeare',
      notes: 'Discussed Romeo and Juliet Act 3. Student needs to work on essay writing structure. Will focus on this in next session.',
      status: 'approved',
      submittedDate: 'Nov 18, 2025 at 6:00 PM'
    },
    {
      id: 4,
      teacher: 'Ms. Sarah Johnson',
      student: 'Emma Martinez',
      date: 'Nov 17, 2025',
      time: '10:00 - 11:30',
      subject: 'Algebra - Linear Functions',
      notes: 'Good progress on graphing linear functions. Student completed all homework assignments.',
      status: 'approved',
      submittedDate: 'Nov 17, 2025 at 12:00 PM'
    },
    {
      id: 5,
      teacher: 'Mr. David Smith',
      student: 'James Wilson',
      date: 'Nov 16, 2025',
      time: '13:00 - 14:00',
      subject: 'Physics - Energy',
      notes: 'Student struggled with potential vs kinetic energy concepts. Will revisit in next session.',
      status: 'rejected',
      submittedDate: 'Nov 16, 2025 at 3:30 PM'
    }
  ];

  const [logbookFilter, setLogbookFilter] = useState('all');

  const getFilteredLogbooks = () => {
    let filtered = [...logbookEntries];
    
    if (logbookFilter === 'pending') {
      filtered = filtered.filter(log => log.status === 'pending');
    } else if (logbookFilter === 'history') {
      filtered = filtered.filter(log => log.status === 'approved' || log.status === 'rejected');
    }
    
    return filtered.sort((a, b) => {
      if (a.status === 'pending' && b.status !== 'pending') return -1;
      if (a.status !== 'pending' && b.status === 'pending') return 1;
      return new Date(b.submittedDate) - new Date(a.submittedDate);
    });
  };

  const handleExportAllLogbooks = () => {
    const csvHeader = 'ID,Teacher,Student,Subject,Date,Time,Status,Notes,Submitted Date\n';
    const csvRows = logbookEntries.map(log => {
      return `${log.id},"${log.teacher}","${log.student}","${log.subject}","${log.date}","${log.time}","${log.status}","${log.notes.replace(/"/g, '""')}","${log.submittedDate}"`;
    }).join('\n');
    
    const csvContent = csvHeader + csvRows;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `all_logbooks_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const scheduleData = {
    'Ms. Sarah Johnson': {
      Monday: [
        { student: 'Alex Chen', time: '09:00 AM - 10:30 AM' },
        { student: 'Sarah Williams', time: '14:00 PM - 17:30 PM' },
        { student: 'Michael Brown', time: '03:00 PM - 01:30 PM' },
        { student: 'Jessica Lee', time: '03:00 PM - 01:30 PM' }
      ],
      Wednesday: [
        { student: 'David Martinez', time: '09:00 AM - 10:30 AM' },
        { student: 'Emma Thompson', time: '10:00 AM - 11:30 AM' },
        { student: 'James Wilson', time: '01:00 PM - 02:30 PM' },
        { student: 'Olivia Garcia', time: '02:00 PM - 03:30 PM' },
        { student: 'Daniel Kim', time: '04:00 PM - 05:00 PM' }
      ],
      Friday: [
        { student: 'Sophia Rodriguez', time: '09:00 AM - 10:30 AM' },
        { student: 'Liam Anderson', time: '11:00 AM - 12:00 PM' },
        { student: 'Isabella Taylor', time: '03:00 PM - 03:30 PM' },
        { student: 'Noah Davis', time: '03:00 PM - 09:30 PM' }
      ]
    }
  };

  const testQuestions = [
    { id: 1, question: 'What is 2 + 2?', optionA: '3', optionB: '4', optionC: '5', optionD: '6', correctAnswer: 'B' },
    { id: 2, question: 'What is the capital of France?', optionA: 'London', optionB: 'Berlin', optionC: 'Paris', optionD: 'Madrid', correctAnswer: 'C' },
    { id: 3, question: 'Which planet is closest to the sun?', optionA: 'Venus', optionB: 'Earth', optionC: 'Mercury', optionD: 'Mars', correctAnswer: 'C' }
  ];

  const handleAssign = () => {
    if (selectedStudent && selectedTeacherForAssign) {
      setAssignedPairs([...assignedPairs, { student: selectedStudent, teacher: selectedTeacherForAssign }]);
      setSelectedStudent(null);
      setSelectedTeacherForAssign(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Modern Header with Gradient */}
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
                <p className="font-['Arimo'] text-sm text-gray-600">Admin Portal</p>
              </div>
            </div>

            {/* User & Logout */}
            <div className="flex items-center gap-4">
              <div className="text-right mr-2">
                <p className="font-['Arimo'] text-sm text-gray-900">Admin User</p>
                <p className="font-['Arimo'] text-xs text-gray-500">System Administrator</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProfileManager(true)}
                className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-purple-100 hover:ring-purple-200 transition-all cursor-pointer"
              >
                <span className="text-lg font-bold">A</span>
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
              Welcome back, Admin! 👋
            </motion.h2>
            <motion.p 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-['Arimo'] text-white/90 text-lg"
            >
              Here's what's happening with your education platform today
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
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-['Arimo']">+12 this month</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.students} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Total Students</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-['Arimo']">+3 this month</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.teachers} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Total Teachers</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0891B2] to-[#06B6D4] rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-xs font-['Arimo']">Active</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.lessonsPerWeek} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Lessons / Week</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-2xl flex items-center justify-center shadow-lg">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-['Arimo']">Needs attention</span>
            </div>
            <p className="font-['Cousine'] text-5xl text-gray-900 mb-2">
              <AnimatedCounter value={stats.pending} />
            </p>
            <p className="font-['Arimo'] text-gray-600 text-lg">Pending Actions</p>
          </motion.div>
        </div>

        {/* Main Dashboard Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Colorful Tabs */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 overflow-x-auto">
            <div className="flex min-w-max">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'students', label: 'Students', icon: Users },
                { id: 'teachers', label: 'Teachers', icon: GraduationCap },
                { id: 'assign', label: 'Assign', icon: UserPlus },
                { id: 'logbooks', label: 'Logbooks', icon: FileText },
                { id: 'schedules', label: 'Schedules', icon: Calendar },
                { id: 'chat', label: 'Chat', icon: MessageSquare },
                { id: 'tests', label: 'Tests', icon: BookOpen }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 font-['Arimo'] px-6 py-4 transition-all relative flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-t-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <tab.icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('students')}
                      className="bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-left"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <Users className="w-6 h-6" />
                      </div>
                      <p className="font-['Arimo'] text-lg mb-1">Review Applications</p>
                      <p className="font-['Arimo'] text-sm text-white/80">{pendingApplications.students + pendingApplications.teachers} pending</p>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('chat')}
                      className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-left"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <p className="font-['Arimo'] text-lg mb-1">Monitor Chats</p>
                      <p className="font-['Arimo'] text-sm text-white/80">View conversations</p>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('schedules')}
                      className="bg-gradient-to-br from-[#0891B2] to-[#06B6D4] text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-left"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <p className="font-['Arimo'] text-lg mb-1">Manage Schedules</p>
                      <p className="font-['Arimo'] text-sm text-white/80">2 changes pending</p>
                    </motion.button>
                  </div>
                </div>

                <div>
                  <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-4">Analytics</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-3xl p-8 text-center shadow-lg">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                      <p className="font-['Arimo'] text-xl text-gray-900 mb-2">Student Growth Trend</p>
                      <p className="font-['Arimo'] text-sm text-gray-600">12% increase this month</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 text-center shadow-lg">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#16A34A] to-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Activity className="w-10 h-10 text-white" />
                      </div>
                      <p className="font-['Arimo'] text-xl text-gray-900 mb-2">Completion Rate</p>
                      <p className="font-['Arimo'] text-sm text-gray-600">89% average completion</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-['Arimo'] text-gray-900">{activity.text}</p>
                        </div>
                        <p className="font-['Arimo'] text-sm text-gray-500">{activity.time}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* CHAT TAB */}
            {activeTab === 'chat' && (
              <ChatMonitor teacherData={teacherData} studentData={studentData} />
            )}

            {/* STUDENTS TAB */}
            {activeTab === 'students' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">Student Management</h3>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('add-new-student')}
                    className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
                  >
                    + Add New Student
                  </motion.button>
                </div>

                <div className="max-w-md">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search students by name, email, or school..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all shadow-md"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-['Arimo'] text-gray-900 font-medium">
                          {pendingApplications.students} Pending Student Applications
                        </p>
                        <p className="font-['Arimo'] text-sm text-gray-600">Review and approve new registrations</p>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('pending-applications-student')}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
                    >
                      Review Now
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                          <th className="font-['Arimo'] text-left p-4 text-gray-700">Name</th>
                          <th className="font-['Arimo'] text-left p-4 text-gray-700">Email</th>
                          <th className="font-['Arimo'] text-left p-4 text-gray-700">School</th>
                          <th className="font-['Arimo'] text-left p-4 text-gray-700">Grade</th>
                          <th className="font-['Arimo'] text-left p-4 text-gray-700">Teacher</th>
                          <th className="font-['Arimo'] text-left p-4 text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentData.map((student, index) => (
                          <motion.tr 
                            key={index}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-t border-gray-100"
                          >
                            <td className="font-['Arimo'] p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                                  {student.name.charAt(0)}
                                </div>
                                <span className="text-gray-900">{student.name}</span>
                              </div>
                            </td>
                            <td className="font-['Arimo'] p-4 text-sm text-gray-600">{student.email}</td>
                            <td className="font-['Arimo'] p-4 text-sm text-gray-600">{student.school}</td>
                            <td className="font-['Arimo'] p-4">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs whitespace-nowrap">
                                {student.grade}
                              </span>
                            </td>
                            <td className="font-['Arimo'] p-4 text-sm text-gray-600">{student.teacher || 'Unassigned'}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <motion.button 
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleViewStudent(student)}
                                  className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white p-2 rounded-lg shadow-md hover:shadow-lg"
                                  title="View student details"
                                >
                                  <Eye className="w-4 h-4" />
                                </motion.button>
                                <motion.button 
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => setStudentModal({ isOpen: true, type: 'edit', student })}
                                  className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 shadow-md"
                                  title="Edit student"
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button 
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => setStudentModal({ isOpen: true, type: 'delete', student })}
                                  className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 shadow-md"
                                  title="Delete student"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* TEACHERS TAB */}
            {activeTab === 'teachers' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">Teacher Management</h3>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('add-new-teacher')}
                    className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
                  >
                    + Add New Teacher
                  </motion.button>
                </div>

                <div className="max-w-md">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search teachers by name or subject..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all shadow-md"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-['Arimo'] text-gray-900 font-medium">
                          {pendingApplications.teachers} Pending Teacher Applications
                        </p>
                        <p className="font-['Arimo'] text-sm text-gray-600">Review and approve new teacher registrations</p>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('pending-applications-teacher')}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
                    >
                      Review Now
                    </motion.button>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {teacherData.map((teacher, index) => (
                    <motion.div 
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                            {teacher.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-['Arimo'] text-xl text-gray-900 mb-1">{teacher.name}</h3>
                            <p className="font-['Arimo'] text-sm text-gray-600 mb-1">{teacher.subject}</p>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
                              {teacher.grades}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="font-['Arimo'] text-sm text-gray-500">Email</span>
                          <span className="font-['Arimo'] text-sm text-gray-900">{teacher.email}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="font-['Arimo'] text-sm text-gray-500">Phone</span>
                          <span className="font-['Arimo'] text-sm text-gray-900">{teacher.phone}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="font-['Arimo'] text-sm text-gray-500">Students</span>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            {teacher.students} assigned
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="font-['Arimo'] text-sm text-gray-500">Availability</span>
                          <span className="font-['Arimo'] text-sm text-gray-900">{teacher.availability}</span>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 flex gap-2">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('view-teacher-profile', { id: teacher.id })}
                          className="flex-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white py-3 rounded-xl font-['Arimo'] text-sm shadow-lg hover:shadow-xl"
                        >
                          View Full Profile
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('edit-teacher-profile', { id: teacher.id })}
                          className="bg-white border-2 border-gray-200 p-3 rounded-xl hover:bg-gray-50 shadow-md"
                        >
                          <Edit className="w-5 h-5 text-gray-700" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ASSIGN TAB */}
            {activeTab === 'assign' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-6">Assign Students to Teachers</h3>

                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                  {/* Available Students */}
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h4 className="font-['Arimo'] text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Select Student
                    </h4>
                    <div className="space-y-3">
                      {studentData.filter(s => !s.teacher).map((student) => (
                        <motion.div
                          key={student.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedStudent(student)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedStudent?.id === student.id
                              ? 'border-blue-500 bg-blue-50 ring-4 ring-blue-100'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-['Arimo'] text-gray-900">{student.name}</p>
                              <p className="font-['Arimo'] text-sm text-gray-600">{student.grade}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Auto-Suggest + Teachers */}
                  <div className="space-y-4">
                    {/* Auto-Suggest Feature */}
                    {selectedStudent && (() => {
                      // Calculate best match teacher
                      const suggestedTeacher = teacherData
                        .map(t => {
                          const studentGrade = parseInt(selectedStudent.grade.match(/\d+/)?.[0] || '0');
                          const teacherGrades = t.subject.match(/Grade\s*(\d+)(?:-(\d+))?/i);
                          if (!teacherGrades) return null;
                          
                          const teacherGradeStart = parseInt(teacherGrades[1]);
                          const teacherGradeEnd = teacherGrades[2] ? parseInt(teacherGrades[2]) : teacherGradeStart;
                          
                          if (studentGrade < teacherGradeStart || studentGrade > teacherGradeEnd) return null;
                          
                          const currentStudents = studentData.filter(s => s.teacher === t.name).length;
                          return { ...t, matchScore: 100 - (currentStudents * 5) };
                        })
                        .filter(t => t !== null)
                        .sort((a, b) => b.matchScore - a.matchScore)[0];

                      return (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-4 border-blue-500 p-6 shadow-2xl"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-2xl">🤖</span>
                            </div>
                            <div>
                              <h4 className="font-['Cousine'] text-lg text-gray-900">AUTO-SUGGEST FEATURE</h4>
                              <p className="font-['Arimo'] text-sm text-gray-600">AI matched based on subject, grade & availability</p>
                            </div>
                          </div>

                          {suggestedTeacher ? (
                            <motion.div
                              initial={{ scale: 0.95 }}
                              animate={{ scale: 1 }}
                              className="bg-white rounded-xl border-2 border-green-400 p-4 shadow-lg"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1">
                                  <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
                                      {suggestedTeacher.name.charAt(0)}
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                      <span className="text-xs text-white">✓</span>
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-['Cousine'] text-gray-900 font-medium">{suggestedTeacher.name}</p>
                                    <p className="font-['Arimo'] text-sm text-gray-600">
                                      {suggestedTeacher.subject} · {studentData.filter(s => s.teacher === suggestedTeacher.name).length} Students
                                    </p>
                                    <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-['Arimo']">
                                      ⭐ Best Match
                                    </span>
                                  </div>
                                </div>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => {
                                    setSelectedTeacherForAssign(suggestedTeacher);
                                    handleAssign();
                                  }}
                                  className="bg-black text-white px-6 py-3 rounded-lg font-['Arimo'] shadow-lg hover:shadow-xl transition-all"
                                >
                                  ASSIGN
                                </motion.button>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-4">
                              <p className="font-['Arimo'] text-gray-600 text-center">No matching teachers available</p>
                            </div>
                          )}
                        </motion.div>
                      );
                    })()}

                    {/* All Teachers */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                      <h4 className="font-['Arimo'] text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-purple-600" />
                        All Teachers
                      </h4>
                      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                        {teacherData.map((teacher) => {
                          const studentCount = studentData.filter(s => s.teacher === teacher.name).length;
                          return (
                            <motion.div
                              key={teacher.id}
                              whileHover={{ scale: 1.02 }}
                              className="p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium shadow-md">
                                    {teacher.name.charAt(0)}
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-['Cousine'] text-gray-900">{teacher.name}</p>
                                    <p className="font-['Arimo'] text-sm text-gray-600">
                                      {teacher.subject} · {studentCount} Students
                                    </p>
                                  </div>
                                </div>
                                {selectedStudent && (
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                      setSelectedTeacherForAssign(teacher);
                                      handleAssign();
                                    }}
                                    className="bg-black text-white px-6 py-2 rounded-lg font-['Arimo'] text-sm shadow-lg"
                                  >
                                    ASSIGN
                                  </motion.button>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Assigned Pairs */}
                {assignedPairs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-6"
                  >
                    <h4 className="font-['Arimo'] text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Recent Assignments
                    </h4>
                    <div className="space-y-3">
                      {assignedPairs.map((pair, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-green-50 rounded-xl border-2 border-green-200"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                                {pair.student.name.charAt(0)}
                              </div>
                              <span className="font-['Arimo'] text-gray-900">{pair.student.name}</span>
                            </div>
                            <span className="text-gray-400">→</span>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                                {pair.teacher.name.charAt(0)}
                              </div>
                              <span className="font-['Arimo'] text-gray-900">{pair.teacher.name}</span>
                            </div>
                          </div>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* LOGBOOKS TAB */}
            {activeTab === 'logbooks' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">Teacher Logbook Entries</h3>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleExportAllLogbooks}
                    className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Export All as CSV
                  </motion.button>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setLogbookFilter('all')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-3 rounded-xl font-['Arimo'] transition-all shadow-lg ${
                      logbookFilter === 'all'
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    ALL ({logbookEntries.length})
                  </motion.button>
                  <motion.button
                    onClick={() => setLogbookFilter('pending')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-3 rounded-xl font-['Arimo'] transition-all shadow-lg relative ${
                      logbookFilter === 'pending'
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    PENDING ({logbookEntries.filter(l => l.status === 'pending').length})
                    {logbookEntries.filter(l => l.status === 'pending').length > 0 && (
                      <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-lg ${
                        logbookFilter === 'pending' ? 'bg-white text-yellow-600' : 'bg-yellow-500 text-white'
                      }`}>
                        {logbookEntries.filter(l => l.status === 'pending').length}
                      </span>
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setLogbookFilter('history')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-3 rounded-xl font-['Arimo'] transition-all shadow-lg ${
                      logbookFilter === 'history'
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    HISTORY ({logbookEntries.filter(l => l.status === 'approved' || l.status === 'rejected').length})
                  </motion.button>
                </div>

                {/* Logbook List */}
                <div className="space-y-4">
                  {getFilteredLogbooks().map((entry, index) => (
                    <motion.div
                      key={entry.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <div className={`p-5 border-b-2 ${
                        entry.status === 'pending' ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' :
                        entry.status === 'approved' ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' :
                        'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
                              {entry.teacher.charAt(0)}
                            </div>
                            <div>
                              <p className="font-['Arimo'] text-gray-900 font-medium">{entry.teacher}</p>
                              <p className="font-['Arimo'] text-sm text-gray-600">with {entry.student}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {entry.status === 'pending' && (
                              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-['Arimo']">Pending</span>
                            )}
                            {entry.status === 'approved' && (
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-['Arimo']">Approved</span>
                            )}
                            {entry.status === 'rejected' && (
                              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-['Arimo']">Rejected</span>
                            )}
                            <div className="text-right">
                              <p className="font-['Arimo'] text-sm text-gray-900">{entry.date}</p>
                              <p className="font-['Arimo'] text-xs text-gray-600">{entry.time}</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Arimo'] text-indigo-900 font-medium">{entry.subject}</p>
                      </div>
                      <div className="p-5">
                        <p className="font-['Arimo'] text-gray-700 leading-relaxed line-clamp-2">{entry.notes}</p>
                      </div>
                      <div className="px-5 pb-5 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('view-logbook-details', { id: entry.id })}
                          className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-4 py-2 rounded-xl text-sm font-['Arimo'] shadow-md flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </motion.button>
                        {entry.status === 'pending' && (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-['Arimo'] shadow-md flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Approve
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm font-['Arimo'] shadow-md flex items-center gap-2"
                            >
                              <XCircle className="w-4 h-4" />
                              Reject
                            </motion.button>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* No Results */}
                  {getFilteredLogbooks().length === 0 && (
                    <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                      <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="font-['Arimo'] text-gray-500 text-lg">No logbooks found</p>
                      <p className="font-['Arimo'] text-gray-400 text-sm mt-2">
                        {logbookFilter === 'pending' && 'No pending logbooks to review'}
                        {logbookFilter === 'history' && 'No logbook history available'}
                        {logbookFilter === 'all' && 'No logbooks have been submitted yet'}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* SCHEDULES TAB */}
            {activeTab === 'schedules' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {!selectedTeacher ? (
                  <>
                    <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-6">Teacher Schedules</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {teacherData.map((teacher, index) => (
                        <motion.div
                          key={teacher.id}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          onClick={() => setSelectedTeacher(teacher)}
                          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                              {teacher.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-['Arimo'] text-gray-900 font-medium">{teacher.name}</p>
                              <p className="font-['Arimo'] text-sm text-gray-600">{teacher.subject}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-['Arimo'] text-sm text-gray-600">Total Students</span>
                              <span className="font-['Arimo'] text-sm text-gray-900 font-medium">{teacher.students}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-['Arimo'] text-sm text-gray-600">Availability</span>
                              <span className="font-['Arimo'] text-xs text-gray-900">{teacher.availability}</span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-xl font-['Arimo'] text-sm shadow-md"
                          >
                            View Schedule
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Teacher Schedule Details */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedTeacher(null)}
                          className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg"
                        >
                          <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </motion.button>
                        <div>
                          <h3 className="font-['Arimo'] text-2xl text-gray-900">{selectedTeacher.name}</h3>
                          <p className="font-['Arimo'] text-gray-600">{selectedTeacher.subject}</p>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-['Arimo'] text-sm">
                        Complete Schedule - November 2025
                      </span>
                    </div>

                    <div className="space-y-6">
                      {Object.entries(scheduleData[selectedTeacher.name] || {}).map(([day, sessions]) => (
                        <div key={day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                            <h4 className="font-['Arimo'] text-xl text-white">{day}</h4>
                          </div>
                          <div className="p-6 space-y-3">
                            {sessions.map((session, idx) => (
                              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-3">
                                  <input type="checkbox" className="w-5 h-5 rounded" />
                                  <div>
                                    <p className="font-['Arimo'] text-gray-900">{session.student}</p>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-['Arimo']">
                                      EXAM II
                                    </span>
                                  </div>
                                </div>
                                <span className="bg-gray-900 text-white px-4 py-2 rounded-lg font-['Arimo'] text-sm">
                                  {session.time}
                                </span>
                              </div>
                            ))}
                            <p className="font-['Arimo'] text-sm text-gray-600 pt-3">
                              TOTAL STUDENTS: {sessions.length}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTeacher(null)}
                        className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-['Arimo'] shadow-md hover:shadow-lg"
                      >
                        BACK TO SCHEDULES
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        EXPORT PDF
                      </motion.button>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* TESTS TAB */}
            {activeTab === 'tests' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Arimo'] text-2xl text-gray-900">Test Question Management</h3>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('add-new-question')}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
                  >
                    + Add New Question
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {testQuestions.map((question, index) => (
                    <motion.div
                      key={question.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                            {question.id}
                          </div>
                          <div className="flex-1">
                            <p className="font-['Arimo'] text-lg text-gray-900 mb-4">{question.question}</p>
                            <div className="grid grid-cols-2 gap-3">
                              <div className={`p-3 rounded-xl border-2 ${question.correctAnswer === 'A' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                                <span className="font-['Arimo'] text-sm text-gray-700">
                                  <strong>A:</strong> {question.optionA}
                                </span>
                              </div>
                              <div className={`p-3 rounded-xl border-2 ${question.correctAnswer === 'B' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                                <span className="font-['Arimo'] text-sm text-gray-700">
                                  <strong>B:</strong> {question.optionB}
                                </span>
                              </div>
                              <div className={`p-3 rounded-xl border-2 ${question.correctAnswer === 'C' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                                <span className="font-['Arimo'] text-sm text-gray-700">
                                  <strong>C:</strong> {question.optionC}
                                </span>
                              </div>
                              <div className={`p-3 rounded-xl border-2 ${question.correctAnswer === 'D' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                                <span className="font-['Arimo'] text-sm text-gray-700">
                                  <strong>D:</strong> {question.optionD}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4 border-t border-gray-200">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEditQuestion(question)}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-['Arimo'] shadow-md flex items-center gap-2"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDeleteQuestion(question)}
                          className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-['Arimo'] shadow-md hover:bg-red-200 flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Logout Confirmation Modal */}
      <ConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={onLogout}
        title="Logout Confirmation"
        message="Are you sure you want to logout? Any unsaved changes will be lost."
        confirmText="Yes, Logout"
        confirmColor="from-red-500 to-red-600"
        icon={<LogOut className="w-6 h-6 text-white" />}
      />

      {/* Delete Question Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeleteQuestionModal}
        onClose={() => {
          setShowDeleteQuestionModal(false);
          setQuestionToDelete(null);
        }}
        onConfirm={confirmDeleteQuestion}
        title="Delete Question"
        message={`Are you sure you want to delete this question? This action cannot be undone.${questionToDelete ? `\n\nQuestion: "${questionToDelete.question}"` : ''}`}
        confirmText="Yes, Delete"
        confirmColor="from-red-500 to-red-600"
        icon={<Trash2 className="w-6 h-6 text-white" />}
      />

      {/* Student Management Modals */}
      <ConfirmationModal
        isOpen={studentModal.isOpen && studentModal.type === 'edit'}
        onClose={() => setStudentModal({ isOpen: false, type: '', student: null })}
        onConfirm={() => handleEditStudent(studentModal.student)}
        title="Edit Student"
        message={`Do you want to edit ${studentModal.student?.name}'s information? You'll be able to modify their details.`}
        confirmText="Edit"
        confirmColor="from-gray-600 to-gray-700"
        icon={<Edit className="w-6 h-6 text-white" />}
      />

      <ConfirmationModal
        isOpen={studentModal.isOpen && studentModal.type === 'delete'}
        onClose={() => setStudentModal({ isOpen: false, type: '', student: null })}
        onConfirm={() => handleDeleteStudent(studentModal.student)}
        title="Delete Student"
        message={`Are you sure you want to delete ${studentModal.student?.name} from the system? This action cannot be undone and will remove all their data, including progress, assignments, and history.`}
        confirmText="Delete"
        confirmColor="from-red-500 to-red-600"
        icon={<Trash2 className="w-6 h-6 text-white" />}
      />

      {/* Profile Manager Modal */}
      <AnimatePresence>
        {showProfileManager && (
          <ProfileManager
            currentUser={currentUser}
            onClose={() => setShowProfileManager(false)}
            onSave={(profileData) => {
              console.log('Profile saved:', profileData);
              // Here you would save to backend
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
