import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Phone, School, GraduationCap, MapPin, Users, Save, X } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function AddNewStudent({ navigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gradeLevel: '',
    schoolName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    emergencyContact: '',
    emergencyPhone: ''
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
    console.log('Saving new student:', formData);
    // TODO: Save to backend
    setShowConfirmModal(false);
    navigate('admin-dashboard');
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
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Add New Student</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">Manually add a student to the system</p>
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
                className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Student
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
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="Enter first name"
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
                  placeholder="Enter last name"
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
                    placeholder="student@example.com"
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
                    placeholder="+1 (555) 000-0000"
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
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Grade Level *</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    required
                  >
                    <option value="">Select grade level</option>
                    {grades.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* School Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg">
                <School className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">School & Address</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">School Name *</label>
                <div className="relative">
                  <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    placeholder="Enter school name"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Street Address *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    placeholder="123 Main Street"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="City"
                  required
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="State"
                  required
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="12345"
                  required
                />
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
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Parent/Guardian Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    placeholder="Enter parent/guardian name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Parent Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
              </div>

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
                    placeholder="parent@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Emergency Contact Name</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                  placeholder="Emergency contact name"
                />
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-700 mb-2">Emergency Phone</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pl-12 font-['Arimo'] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/20 transition-all"
                    placeholder="+1 (555) 000-0000"
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
        title="Save New Student"
        message="Are you sure you want to add this student to the system? They will be able to access their dashboard immediately."
        confirmText="Save Student"
        confirmColor="from-[#2563EB] to-[#4F46E5]"
        icon={<Save className="w-6 h-6 text-white" />}
      />

      {/* Cancel Modal */}
      <ConfirmationModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Cancel Adding Student"
        message="Are you sure you want to cancel? All entered information will be lost."
        confirmText="Yes, Cancel"
        confirmColor="from-red-500 to-red-600"
        icon={<X className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
