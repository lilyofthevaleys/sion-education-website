import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, GraduationCap, MapPin, Save, X, BookOpen, Award } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function AddNewTeacher({ navigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    subject: '',
    grades: '',
    address: '',
    education: '',
    certification: '',
    experience: ''
    
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Saving new teacher:', formData);
    // TODO: Save to backend
    setShowConfirmModal(false);
    navigate('admin-dashboard');
  };

  const handleCancel = () => {
    setShowCancelModal(false);
    navigate('admin-dashboard');
  };

  const subjects = [
    'Mathematics', 'English', 'Science', 'History', 'Physics', 'Chemistry', 
    'Biology', 'Computer Science', 'Art', 'Music'
  ];

  const gradeOptions = [
    'Grades 7-8', 'Grades 9-10', 'Grades 11-12', 'Grades 7-12', 'Grades 9-12'
  ];

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
                onClick={() => setShowCancelModal(true)}
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <div>
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Add New Teacher</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">Fill in teacher information</p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCancelModal(true)}
                className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-['Arimo'] shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConfirmModal(true)}
                className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Teacher
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Form */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, City, State..."
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                  required
                />
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
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Subject *</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Grade Levels *</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="grades"
                    value={formData.grades}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                    required
                  >
                    <option value="">Select Grade Range</option>
                    {gradeOptions.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Years of Experience *</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 10"
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                  required
                  min="0"
                />
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
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Education *</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="e.g., Master of Education - University Name"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Certification *</label>
                <div className="relative">
                  <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="certification"
                    value={formData.certification}
                    onChange={handleChange}
                    placeholder="e.g., State Certified Math Teacher"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/20 transition-all"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleSubmit}
        title="Add New Teacher"
        message={`Are you sure you want to add ${formData.firstName || '[Name]'} ${formData.lastName || '[Last Name]'} as a new teacher?`}
        confirmText="Yes, Add Teacher"
        confirmColor="from-[#4F46E5] to-[#7C3AED]"
        icon={<Save className="w-6 h-6 text-white" />}
      />

      {/* Cancel Modal */}
      <ConfirmationModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Cancel Adding Teacher"
        message="Are you sure you want to cancel? All entered information will be lost."
        confirmText="Yes, Cancel"
        confirmColor="from-red-500 to-red-600"
        icon={<X className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
