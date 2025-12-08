import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar,
  MessageSquare,
  User,
  LogOut,
  Mail,
  Phone,
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle,
  Edit,
  MapPin,
  School,
  Users,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';
import ChatInterface from './ChatInterface';
import ProfileManager from './ProfileManager';

export default function StudentDashboard({ navigate, currentUser, onLogout }) {
  const [activeTab, setActiveTab] = useState('schedule');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfileManager, setShowProfileManager] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [editedProfile, setEditedProfile] = useState({
    name: currentUser?.fullName || 'Alex Chen',
    email: currentUser?.email || 'alex@email.com',
    phone: currentUser?.phone || '+1 234 567 8900',
    grade: currentUser?.profile?.gradeLevel || 'Grade 10',
    school: currentUser?.profile?.schoolName || 'Lincoln High School',
    address: currentUser?.profile?.address || '123 Main St',
    city: currentUser?.profile?.city || 'New York'
  });

  // Student data
  const studentData = {
    name: currentUser?.fullName || 'Alex Chen',
    email: currentUser?.email || 'alex@email.com',
    grade: currentUser?.profile?.gradeLevel || 'Grade 10',
    phone: currentUser?.phone || '+1 234 567 8900',
    school: currentUser?.profile?.schoolName || 'Lincoln High School',
    address: currentUser?.profile?.address || '123 Main St',
    city: currentUser?.profile?.city || 'New York',
    nextLesson: (currentUser?.profile?.selectedSchedules && currentUser.profile.selectedSchedules[0])
      ? `${currentUser.profile.selectedSchedules[0].subject} - ${currentUser.profile.selectedSchedules[0].day} ${currentUser.profile.selectedSchedules[0].time}`
      : 'Chemistry - Tuesday 5PM',
    hasSchedule: currentUser?.profile?.hasSchedule || false,
    selectedSchedules: currentUser?.profile?.selectedSchedules || []
  };

  const tabs = [
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const handleSaveProfile = () => {
    console.log('Saving profile:', editedProfile);
    // TODO: Save to backend
    setShowEditProfile(false);
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
          <div className="flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-2xl relative">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />
              </div>
              <div>
                <h1 className="font-['Arimo'] text-2xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  SION Education
                </h1>
                <p className="font-['Arimo'] text-sm text-gray-600">Student Portal</p>
              </div>
            </div>

            {/* User & Logout */}
            <div className="flex items-center gap-4">
              <div className="text-right mr-2">
                <p className="font-['Arimo'] text-sm text-gray-900">{studentData.name}</p>
                <p className="font-['Arimo'] text-xs text-gray-500">{studentData.grade}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProfileManager(true)}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-purple-100 hover:ring-purple-200 transition-all cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold">{studentData.name.charAt(0)}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-2xl transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {showBanner ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
          >
            <motion.button
              onClick={() => setShowBanner(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 top-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 text-white rounded-lg flex items-center justify-center shadow-md backdrop-blur-sm"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </motion.button>
            <div className="relative z-10">
              <motion.h2 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-['Arimo'] text-2xl sm:text-3xl lg:text-4xl mb-2"
              >
                Welcome back, {studentData.name.split(' ')[0]}! 👋
              </motion.h2>
              <motion.p 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-['Arimo'] text-white/90 text-base sm:text-lg"
              >
                {studentData.hasSchedule ? `Next Lesson: ${studentData.nextLesson}` : 'Select your schedule to get started!'}
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="mb-6 sm:mb-8" />
        )}

        {/* Main Dashboard Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Tabs - Same as Admin */}
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
                    className={`flex items-center gap-2 font-['Arimo'] px-6 py-4 transition-all relative flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-t-2xl"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className={`w-5 h-5 relative z-10`} />
                    <span className="relative z-10">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {/* SCHEDULE TAB */}
            {activeTab === 'schedule' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {!studentData.hasSchedule ? (
                  // Empty State - Schedule Selection Needed
                  <div className="text-center py-10 sm:py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mb-8"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-[#2563EB]" />
                      </div>
                    </motion.div>
                    
                    <h3 className="font-['Arimo'] text-2xl sm:text-3xl text-gray-900 mb-4">No Schedule Selected Yet</h3>
                    <p className="font-['Arimo'] text-gray-600 mb-8 max-w-md mx-auto text-base sm:text-lg">
                      Get started by selecting your preferred lesson times. You can choose up to 3 weekly time slots.
                    </p>

                    <motion.button
                      onClick={() => navigate('schedule-selection')}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-['Arimo'] text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center justify-center gap-3"
                    >
                      <ArrowRight className="w-6 h-6" />
                      Select Your Schedule
                    </motion.button>
                  </div>
                ) : (
                  // Schedule Display - NO EDIT BUTTON (One-time selection)
                  <div className="space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
                      <p className="font-['Arimo'] text-sm text-orange-800 text-center">
                        ⚠️ Your schedule is confirmed and cannot be changed. Contact your administrator if you need adjustments.
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className="font-['Arimo'] text-2xl text-gray-900">Your Weekly Schedule</h3>
                    <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 sm:px-4 py-2 rounded-xl font-['Arimo'] text-sm">
                      <CheckCircle className="w-5 h-5" />
                      Confirmed
                    </div>
                    </div>

                    <div className="grid gap-3 sm:gap-4">
                      {studentData.selectedSchedules.map((schedule, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center shadow-lg">
                                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                              </div>
                              <div>
                                <h4 className="font-['Arimo'] text-lg sm:text-xl text-gray-900 mb-1">{schedule.subject}</h4>
                                <p className="font-['Arimo'] text-gray-600 text-sm sm:text-base flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {schedule.day} • {schedule.time}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-green-100 text-green-600 px-3 sm:px-4 py-2 rounded-full text-sm font-['Arimo']">
                                Active
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* CHAT TAB */}
            {activeTab === 'chat' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10 sm:py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-8"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-[#4F46E5]" />
                  </div>
                </motion.div>

                <h3 className="font-['Arimo'] text-2xl sm:text-3xl text-gray-900 mb-4">Messages</h3>
                <p className="font-['Arimo'] text-gray-600 mb-8 max-w-md mx-auto text-base sm:text-lg">
                  Chat with your assigned teacher
                </p>

                <motion.button
                  onClick={() => setShowChat(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-['Arimo'] text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" />
                  Open Chat
                </motion.button>
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

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Field */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Full Name</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{studentData.name}</p>
                  </div>

                  {/* Email Field */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Email Address</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{studentData.email}</p>
                  </div>

                  {/* Grade Field */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Grade Level</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{studentData.grade}</p>
                  </div>

                  {/* Phone Field */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">Phone Number</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{studentData.phone}</p>
                  </div>

                  {/* School Field */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <School className="w-5 h-5 text-white" />
                      </div>
                      <label className="font-['Arimo'] text-sm text-gray-600">School Name</label>
                    </div>
                    <p className="font-['Arimo'] text-xl text-gray-900">{studentData.school}</p>
                  </div>

                  
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
        message="Are you sure you want to logout from your student account?"
        confirmText="Yes, Logout"
        confirmColor="from-red-500 to-red-600"
        icon={<LogOut className="w-6 h-6 text-white" />}
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
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Grade Level</label>
                <input
                  type="text"
                  value={editedProfile.grade}
                  onChange={(e) => setEditedProfile({ ...editedProfile, grade: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">School Name</label>
                <input
                  type="text"
                  value={editedProfile.school}
                  onChange={(e) => setEditedProfile({ ...editedProfile, school: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={editedProfile.address}
                  onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={editedProfile.city}
                  onChange={(e) => setEditedProfile({ ...editedProfile, city: e.target.value })}
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
                onClick={handleSaveProfile}
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

      {/* Chat Interface */}
      {showChat && (
        <ChatInterface
          currentUser={currentUser}
          onClose={() => setShowChat(false)}
        />
      )}

      {/* Profile Manager (Avatar change) */}
      {showProfileManager && (
        <ProfileManager
          currentUser={currentUser}
          onClose={() => setShowProfileManager(false)}
        />
      )}
    </div>
  );
}
