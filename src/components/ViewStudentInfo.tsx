import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, School, GraduationCap, MapPin, Users, Calendar, Edit } from 'lucide-react';

export default function ViewStudentInfo({ navigate, studentId }) {
  // Mock student data - in production this would come from backend
  const student = {
    id: studentId || 1,
    firstName: 'Alex',
    lastName: 'Chen',
    email: 'alex.chen@email.com',
    phone: '+1 (555) 234-5678',
    dateOfBirth: '2008-05-15',
    gradeLevel: 'Grade 10',
    schoolName: 'Central High School',
    address: '123 Oak Street',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    parentName: 'Michael Chen',
    parentPhone: '+1 (555) 234-5679',
    parentEmail: 'michael.chen@email.com',
    emergencyContact: 'Susan Chen',
    emergencyPhone: '+1 (555) 234-5680',
    enrollmentDate: 'Sep 1, 2024',
    assignedTeacher: 'Ms. Johnson',
    status: 'Active'
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
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Student Profile</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">{student.firstName} {student.lastName}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('edit-student-info', { id: student.id })}
              className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Edit className="w-5 h-5" />
              Edit Information
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
            <p className="font-['Arimo'] text-2xl text-gray-900">{student.status}</p>
          </motion.div>

          {/* Enrollment Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-6 shadow-lg"
          >
            <p className="font-['Arimo'] text-sm text-gray-600 mb-1">Enrolled Since</p>
            <p className="font-['Arimo'] text-2xl text-gray-900">{student.enrollmentDate}</p>
          </motion.div>

          {/* Assigned Teacher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-6 shadow-lg"
          >
            <p className="font-['Arimo'] text-sm text-gray-600 mb-1">Assigned Teacher</p>
            <p className="font-['Arimo'] text-2xl text-gray-900">{student.assignedTeacher}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-8"
        >
          {/* Student Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Student Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">First Name</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{student.firstName}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Last Name</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{student.lastName}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Email</label>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.email}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Phone</label>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.phone}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Date of Birth</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.dateOfBirth}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Grade Level</label>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.gradeLevel}</p>
                </div>
              </div>
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">School Name</label>
                <div className="flex items-center gap-2">
                  <School className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.schoolName}</p>
                </div>
              </div>
            </div>
          </div>

          

          {/* Parent/Guardian Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0891B2] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Parent/Guardian Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Parent/Guardian Name</label>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.parentName}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Parent Phone</label>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.parentPhone}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Parent Email</label>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.parentEmail}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Address</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{student.address}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">City</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{student.city}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
