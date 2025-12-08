import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, GraduationCap, MapPin, Calendar, Edit, BookOpen, Users, Award } from 'lucide-react';

export default function ViewTeacherProfile({ navigate, teacherId }) {
  // Mock teacher data - in production this would come from backend
  const teacher = {
    id: teacherId || 1,
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@sion.edu',
    phone: '+1 (555) 987-6543',
    dateOfBirth: '1985-03-20',
    subject: 'Mathematics',
    grades: 'Grades 9-12',
    address: '456 Maple Avenue',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62702',
    education: 'Master of Education - University of Illinois',
    certification: 'State Certified Math Teacher',
    experience: '12 years',
    joinDate: 'Jan 15, 2020',
    studentsAssigned: 15,
    availability: 'Mon-Fri 9AM-5PM',
    status: 'Active',
    specialties: ['Algebra', 'Calculus', 'SAT Prep']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-white/20"
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('admin-dashboard')}
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <div>
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Teacher Profile</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">{teacher.firstName} {teacher.lastName}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('edit-teacher-profile', { id: teacher.id })}
              className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Edit className="w-5 h-5" />
              Edit Profile
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Profile Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6 shadow-lg"
          >
            <p className="font-['Arimo'] text-sm text-gray-600 mb-1">Status</p>
            <p className="font-['Arimo'] text-2xl text-gray-900">{teacher.status}</p>
          </motion.div>

          {/* Join Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-6 shadow-lg"
          >
            <p className="font-['Arimo'] text-sm text-gray-600 mb-1">Joined Since</p>
            <p className="font-['Arimo'] text-2xl text-gray-900">{teacher.joinDate}</p>
          </motion.div>

          {/* Students Assigned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-6 shadow-lg"
          >
            <p className="font-['Arimo'] text-sm text-gray-600 mb-1">Students Assigned</p>
            <p className="font-['Arimo'] text-2xl text-gray-900">{teacher.studentsAssigned}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-8"
        >
          {/* Personal Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Personal Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">First Name</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{teacher.firstName}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Last Name</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{teacher.lastName}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Email</label>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.email}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Phone</label>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.phone}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Date of Birth</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.dateOfBirth}</p>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Address</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0891B2] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Teaching Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Subject</label>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.subject}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Grade Levels</label>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.grades}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Experience</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{teacher.experience}</p>
              </div>

              

              
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#22C55E] rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Qualifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Education</label>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.education}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Certification</label>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{teacher.certification}</p>
                </div>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>
    </div>
  );
}
