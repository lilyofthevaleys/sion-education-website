import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, School, GraduationCap, MapPin, Users, Calendar, Save, X } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function EditStudentInfo({ navigate, studentId }) {
  // Mock student data - in production this would come from backend
  const [formData, setFormData] = useState({
    id: studentId || 1,
    firstName: 'Alex',
    lastName: 'Chen',
    email: 'alex.chen@email.com',
    phone: '+1 (555) 234-5678',
    dateOfBirth: '2008-05-15',
    schoolName: 'Central High School',
    address: '123 Oak Street',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    parentName: 'Michael Chen',
    parentPhone: '+1 (555) 234-5679',
    parentEmail: 'michael.chen@email.com',
    emergencyContact: 'Susan Chen',
    emergencyPhone: '+1 (555) 234-5680'
  });

  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving student info:', formData);
    // TODO: Save to backend
    setShowSaveModal(false);
    navigate('view-student-info', { id: formData.id });
  };

  const handleCancel = () => {
    setShowCancelModal(false);
    navigate('admin-dashboard');
  };

  const grades = [
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-white/20"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCancelModal(true)}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <div>
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Edit Student Information</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">{formData.firstName} {formData.lastName}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCancelModal(true)}
                className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-['Arimo'] shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSaveModal(true)}
                className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Form */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-8"
        >
          {/* Student Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Student Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
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
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
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
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
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
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Date of Birth *</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    required
                  />
                </div>
              </div>

              
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">School Name *</label>
                <div className="relative">
                  <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    required
                  />
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

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Parent Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Save Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        onConfirm={handleSave}
        title="Save Changes"
        message={`Are you sure you want to save the changes to ${formData.firstName} ${formData.lastName}'s information?`}
        confirmText="Save Changes"
        confirmColor="from-[#2563EB] to-[#4F46E5]"
        icon={<Save className="w-6 h-6 text-white" />}
      />

      {/* Cancel Modal */}
      <ConfirmationModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Discard Changes"
        message="Are you sure you want to cancel? All unsaved changes will be lost."
        confirmText="Yes, Discard"
        confirmColor="from-red-500 to-red-600"
        icon={<X className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
