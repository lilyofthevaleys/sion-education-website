import React, { useState } from 'react';
import { GraduationCap, AlertCircle, ArrowLeft, User, Mail, Phone, Lock, BookOpen, Users, MapPin, ChevronRight, CheckCircle, FileText, Calendar, Eye, EyeOff } from 'lucide-react';
import { authApi } from '../utils/api';
import { motion } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';

export default function StudentRegistration({ navigate }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gradeLevel: '',
    schoolName: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    city: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const steps = [
    { number: 1, label: 'Apply', icon: FileText },
    { number: 2, label: 'Test', icon: BookOpen },
    { number: 3, label: 'Review', icon: CheckCircle },
    { number: 4, label: 'Done', icon: GraduationCap },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      setError('Please fill all required fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email format');
      return false;
    }

    if (formData.password.length < 7 || formData.password.includes(' ')) {
      setError('Password must be at least 7 characters and no spaces');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    const age = parseInt(formData.age);
    if (age && (age < 5 || age > 25)) {
      setError('Student age must be between 5 and 25');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    // Show confirmation modal instead of directly submitting
    setShowSubmitModal(true);
  };

  const confirmSubmit = async () => {
    setShowSubmitModal(false);
    setLoading(true);

    try {
      const response = await authApi.registerStudent(formData);
      
      if (response.success) {
        navigate('online-test', { userRole: 'student' });
      } else {
        setError(response.error || 'Registration failed');
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#E0E7FF]">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-['Arimo'] text-xl text-[#101828]">SION Education</span>
                <p className="font-['Arimo'] text-xs text-[#4a5565]">Student Registration</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('signup')}
              className="flex items-center gap-2 text-[#4a5565] hover:text-[#2563EB] transition-colors font-['Arimo']"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>
      </motion.header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div 
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all
                    ${step.number === currentStep 
                      ? 'bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white shadow-lg scale-110' 
                      : step.number < currentStep
                      ? 'bg-[#16A34A] text-white'
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className={`
                    font-['Arimo'] text-sm
                    ${step.number === currentStep ? 'text-[#2563EB]' : 'text-[#4a5565]'}
                  `}>
                    {step.label}
                  </span>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`
                    flex-1 h-1 mx-4 rounded-full transition-all
                    ${step.number < currentStep ? 'bg-[#16A34A]' : 'bg-gray-200'}
                  `} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h1 className="font-['Arimo'] text-3xl text-[#101828] mb-2">Student Registration Form</h1>
            <p className="font-['Arimo'] text-[#4a5565]">Start your learning journey with us</p>
          </div>

          {error && (
            <motion.div 
              className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="font-['Arimo'] text-sm text-red-800">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h3 className="font-['Arimo'] text-lg text-[#101828] pb-2 border-b-2 border-gray-100">
                Student Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <User className="w-4 h-4 text-[#2563EB]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Calendar className="w-4 h-4 text-[#2563EB]" />
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="15"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Phone className="w-4 h-4 text-[#2563EB]" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="+1234567890"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Lock className="w-4 h-4 text-[#2563EB]" />
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      placeholder="Minimum 7 characters"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Lock className="w-4 h-4 text-[#2563EB]" />
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      placeholder="Re-enter password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <BookOpen className="w-4 h-4 text-[#2563EB]" />
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="Your School"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <BookOpen className="w-4 h-4 text-[#2563EB]" />
                    Grade Level *
                  </label>
                  <select
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select Grade</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              
            </div>

            {/* Parent/Guardian Information */}
            <div className="space-y-4">
              <h3 className="font-['Arimo'] text-lg text-[#101828] pb-2 border-b-2 border-gray-100">
                Parent/Guardian Information
              </h3>

              <div>
                <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                  <Users className="w-4 h-4 text-[#2563EB]" />
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  placeholder="Parent Name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Phone className="w-4 h-4 text-[#2563EB]" />
                    Parent Phone *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="+1234567890"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                    Parent Email *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="parent@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="Street Address"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="City"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Information removed per new policy */}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
              <button
                type="button"
                onClick={() => navigate('signup')}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 text-[#4a5565] hover:border-[#2563EB] hover:text-[#2563EB] transition-all font-['Arimo']"
              >
                Cancel
              </button>

              <motion.button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white px-8 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Submitting...' : 'Register & Start Test'}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onConfirm={confirmSubmit}
        title="Confirm Registration"
        message="Are you sure you want to submit your registration and proceed to the online test? You cannot go back after this step."
        confirmText="Yes, Register"
        confirmColor="from-green-500 to-green-600"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
