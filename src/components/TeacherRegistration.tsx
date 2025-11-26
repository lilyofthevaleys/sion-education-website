import React, { useState, useEffect } from 'react';
import { GraduationCap, AlertCircle, ArrowLeft, Upload, FileText, CheckCircle, ChevronRight, ChevronLeft, User, Mail, Phone, Lock, BookOpen, Award, Calendar, Eye, EyeOff } from 'lucide-react';
import { authApi } from '../utils/api';
import { motion } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';
import InterviewScheduler from './InterviewScheduler';

export default function TeacherRegistration({ navigate, pageData }) {
  const [currentStep, setCurrentStep] = useState(pageData?.step || 1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    grade: '',
    experienceYears: '',
    education: '',
    certifications: '',
    address: '',
  });

  const [documents, setDocuments] = useState({
    cv: null,
    portfolio: null,
  });

  const [interviewSchedule, setInterviewSchedule] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, type: '', action: null });

  // When returning from test, go to step 3
  useEffect(() => {
    if (pageData?.testCompleted) {
      setCurrentStep(3);
    }
  }, [pageData]);

  const steps = [
    { number: 1, label: 'Apply', icon: FileText },
    { number: 2, label: 'Test', icon: BookOpen },
    { number: 3, label: 'Interview', icon: Calendar },
    { number: 4, label: 'Done', icon: CheckCircle },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments({
        ...documents,
        [field]: file,
      });
    }
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
    if (age && (age < 21 || age > 100)) {
      setError('Teacher age must be between 21 and 100');
      return false;
    }

    return true;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    // Show confirmation before proceeding to test
    setConfirmModal({
      isOpen: true,
      type: 'submit-form',
      action: proceedToTest
    });
  };

  const proceedToTest = async () => {
    setLoading(true);
    try {
      const response = await authApi.registerTeacher(formData);
      
      if (response.success) {
        setCurrentStep(2);
        navigate('online-test', { userRole: 'teacher', returnTo: 'teacher-registration' });
      } else {
        setError(response.error || 'Registration failed');
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTestComplete = () => {
    // Called when test is completed
    setCurrentStep(3);
  };

  const handleInterviewScheduled = (date, time) => {
    setInterviewSchedule({ date, time });
    setCurrentStep(4);
  };

  const handleCancel = () => {
    setConfirmModal({
      isOpen: true,
      type: 'cancel',
      action: () => navigate('landing')
    });
  };

  const handleBack = () => {
    setConfirmModal({
      isOpen: true,
      type: 'back',
      action: () => navigate('landing')
    });
  };

  // Step 3: Interview Scheduler (embedded)
  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
        {/* Header */}
        <motion.header 
          className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-white/20"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-['Arimo'] text-xl text-[#101828]">SION Education</span>
                  <p className="font-['Arimo'] text-xs text-[#4a5565]">Teacher Application - Step 3 of 4</p>
                </div>
              </div>
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
                        ? 'bg-gradient-to-br from-[#4F46E5] to-[#6366F1] text-white shadow-lg scale-110' 
                        : step.number < currentStep
                        ? 'bg-[#16A34A] text-white'
                        : 'bg-gray-200 text-gray-500'
                      }
                    `}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className={`
                      font-['Arimo'] text-sm
                      ${step.number === currentStep ? 'text-[#4F46E5]' : 'text-[#4a5565]'}
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

        {/* Interview Scheduler Content */}
        <div className="max-w-[1400px] mx-auto px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8"
          >
            <div className="mb-6">
              <h2 className="font-['Arimo'] text-3xl text-gray-900 mb-2">Schedule Your Interview</h2>
              <p className="font-['Arimo'] text-gray-600">Please select a date and time for your video interview with our team.</p>
            </div>

            <InterviewSchedulerEmbed 
              onSchedule={handleInterviewScheduled}
              onCancel={() => setConfirmModal({ isOpen: true, type: 'cancel', action: () => navigate('landing') })}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  // Step 4: Confirmation (Done)
  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#E0E7FF] flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="font-['Arimo'] text-4xl text-gray-900 mb-4">Application Submitted!</h1>
          <p className="font-['Arimo'] text-lg text-gray-600 mb-8">
            Thank you for applying to SION Education. Your application is now under review.
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
            <h3 className="font-['Arimo'] text-lg text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5">1</div>
                <p className="font-['Arimo'] text-sm text-gray-700">
                  Our team will review your application and test results
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5">2</div>
                <p className="font-['Arimo'] text-sm text-gray-700">
                  You'll receive an interview invitation at: <strong>{interviewSchedule?.date}</strong> at <strong>{interviewSchedule?.time}</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5">3</div>
                <p className="font-['Arimo'] text-sm text-gray-700">
                  After a successful interview, you'll get access to your teacher dashboard
                </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('landing')}
            className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white px-12 py-4 rounded-xl font-['Arimo'] text-lg shadow-lg hover:shadow-xl"
          >
            Return to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Step 1: Application Form
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
              <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-['Arimo'] text-xl text-[#101828]">SION Education</span>
                <p className="font-['Arimo'] text-xs text-[#4a5565]">Teacher Application</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className="flex items-center gap-2 text-[#4a5565] hover:text-[#4F46E5] transition-colors font-['Arimo']"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>
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
                      ? 'bg-gradient-to-br from-[#4F46E5] to-[#6366F1] text-white shadow-lg scale-110' 
                      : step.number < currentStep
                      ? 'bg-[#16A34A] text-white'
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className={`
                    font-['Arimo'] text-sm
                    ${step.number === currentStep ? 'text-[#4F46E5]' : 'text-[#4a5565]'}
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
            <h1 className="font-['Arimo'] text-3xl text-[#101828] mb-2">Teacher Application Form</h1>
            <p className="font-['Arimo'] text-[#4a5565]">Join our community of expert educators</p>
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

          <form onSubmit={handleSubmitForm} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-['Arimo'] text-lg text-[#101828] pb-2 border-b-2 border-gray-100">
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <User className="w-4 h-4 text-[#4F46E5]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Calendar className="w-4 h-4 text-[#4F46E5]" />
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                    placeholder="25"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Mail className="w-4 h-4 text-[#4F46E5]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Phone className="w-4 h-4 text-[#4F46E5]" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                    placeholder="+1234567890"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Lock className="w-4 h-4 text-[#4F46E5]" />
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
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
                    <Lock className="w-4 h-4 text-[#4F46E5]" />
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
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
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h3 className="font-['Arimo'] text-lg text-[#101828] pb-2 border-b-2 border-gray-100">
                Qualifications
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <Award className="w-4 h-4 text-[#4F46E5]" />
                    Subject/Grade *
                  </label>
                  <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                    placeholder="e.g. Math, Grades 9-12"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <BookOpen className="w-4 h-4 text-[#4F46E5]" />
                    Years Experience *
                  </label>
                  <input
                    type="number"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                    placeholder="5"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                  <BookOpen className="w-4 h-4 text-[#4F46E5]" />
                  Education Details *
                </label>
                <textarea
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all resize-none"
                  placeholder="University, Degree, Year..."
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                  <Award className="w-4 h-4 text-[#4F46E5]" />
                  Certifications
                </label>
                <textarea
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all resize-none"
                  placeholder="Teaching licenses, certifications..."
                  rows={2}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                  <User className="w-4 h-4 text-[#4F46E5]" />
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all resize-none"
                  placeholder="Street, City, State..."
                  rows={2}
                  required
                />
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-4">
              <h3 className="font-['Arimo'] text-lg text-[#101828] pb-2 border-b-2 border-gray-100">
                Documents
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <FileText className="w-4 h-4 text-[#4F46E5]" />
                    CV/Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'cv')}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-8 cursor-pointer hover:border-[#4F46E5] hover:bg-blue-50 transition-all"
                    >
                      <Upload className="w-5 h-5 text-[#4a5565]" />
                      <span className="font-['Arimo'] text-sm text-[#4a5565]">
                        {documents.cv ? documents.cv.name : 'Click to upload (PDF, DOC)'}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 font-['Arimo'] text-sm text-[#101828] mb-2">
                    <FileText className="w-4 h-4 text-[#4F46E5]" />
                    Portfolio
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.zip"
                      onChange={(e) => handleFileChange(e, 'portfolio')}
                      className="hidden"
                      id="portfolio-upload"
                    />
                    <label
                      htmlFor="portfolio-upload"
                      className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-8 cursor-pointer hover:border-[#4F46E5] hover:bg-blue-50 transition-all"
                    >
                      <Upload className="w-5 h-5 text-[#4a5565]" />
                      <span className="font-['Arimo'] text-sm text-[#4a5565]">
                        {documents.portfolio ? documents.portfolio.name : 'Click to upload (PDF, ZIP)'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 text-[#4a5565] hover:border-[#4F46E5] hover:text-[#4F46E5] transition-all font-['Arimo']"
              >
                Cancel
              </motion.button>

              <motion.button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white px-8 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Submitting...' : 'Submit & Start Test'}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'submit-form'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', action: null })}
        onConfirm={confirmModal.action}
        title="Submit Application"
        message="Are you sure you want to submit your application? You will proceed to take the entrance test next."
        confirmText="Submit & Continue"
        confirmColor="from-blue-500 to-blue-600"
        icon={<FileText className="w-6 h-6 text-white" />}
      />

      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'cancel'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', action: null })}
        onConfirm={confirmModal.action}
        title="Cancel Application"
        message="Are you sure you want to cancel? All your entered information will be lost."
        confirmText="Yes, Cancel"
        confirmColor="from-red-500 to-red-600"
        icon={<AlertCircle className="w-6 h-6 text-white" />}
      />

      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'back'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', action: null })}
        onConfirm={confirmModal.action}
        title="Leave Application"
        message="Are you sure you want to go back? Your progress will not be saved."
        confirmText="Yes, Go Back"
        confirmColor="from-orange-500 to-orange-600"
        icon={<ArrowLeft className="w-6 h-6 text-white" />}
      />
    </div>
  );
}

// Embedded Interview Scheduler Component
function InterviewSchedulerEmbed({ onSchedule, onCancel }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10));
  const [confirmModal, setConfirmModal] = useState(false);

  const availability = {
    '2025-11-26': 'available',
    '2025-11-27': 'available',
    '2025-11-28': 'available',
    '2025-12-01': 'available',
    '2025-12-02': 'available',
    '2025-12-03': 'available',
    '2025-12-04': 'available'
  };

  const timeSlots = [
    { time: '10:00 AM', duration: '30 minutes' },
    { time: '11:00 AM', duration: '30 minutes' },
    { time: '02:00 PM', duration: '30 minutes' },
    { time: '04:00 PM', duration: '30 minutes' }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const getDateKey = (day) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getDayStatus = (day) => {
    if (!day) return null;
    const dateKey = getDateKey(day);
    return availability[dateKey] || 'unavailable';
  };

  const handleDateClick = (day) => {
    const status = getDayStatus(day);
    if (status === 'available') {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleConfirm = () => {
    const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    onSchedule(`${monthName} ${selectedDate}`, selectedTime);
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const days = getDaysInMonth(currentMonth);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Calendar */}
      <div className="lg:col-span-2">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <h3 className="font-['Arimo'] text-xl text-gray-900">{monthName.toUpperCase()}</h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <div key={day} className="text-center py-2 font-['Arimo'] text-sm text-gray-600">
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            const status = getDayStatus(day);
            const isSelected = selectedDate === day;
            
            return (
              <motion.div
                key={index}
                whileHover={status === 'available' ? { scale: 1.1 } : {}}
                onClick={() => handleDateClick(day)}
                className={`
                  aspect-square flex items-center justify-center rounded-xl font-['Arimo'] text-lg
                  ${!day ? '' : 
                    status === 'available' ? 'bg-green-100 text-green-700 cursor-pointer hover:bg-green-200' :
                    'bg-red-100 text-red-400'}
                  ${isSelected ? 'ring-4 ring-blue-500 bg-green-500 text-white' : ''}
                `}
              >
                {day}
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-100 rounded"></div>
            <span className="font-['Arimo'] text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-100 rounded"></div>
            <span className="font-['Arimo'] text-sm text-gray-600">Unavailable</span>
          </div>
        </div>
      </div>

      {/* Time Slots Sidebar */}
      <div>
        <h3 className="font-['Arimo'] text-lg text-gray-900 mb-4">SELECT TIME</h3>

        {selectedDate ? (
          <>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
              <p className="font-['Arimo'] text-sm text-gray-600 mb-1">SELECTED DATE:</p>
              <p className="font-['Arimo'] text-lg text-gray-900">
                {monthName} {selectedDate}, 2025
              </p>
            </div>

            <div className="space-y-2 mb-6">
              {timeSlots.map((slot, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`
                    p-4 rounded-xl cursor-pointer transition-all border-2
                    ${selectedTime === slot.time
                      ? 'bg-gray-900 border-gray-900 text-white'
                      : 'bg-white border-gray-200 hover:border-blue-300'}
                  `}
                >
                  <p className="font-['Arimo'] text-lg">{slot.time}</p>
                  <p className={`font-['Arimo'] text-sm ${selectedTime === slot.time ? 'text-white/80' : 'text-gray-600'}`}>
                    {slot.duration}
                  </p>
                </motion.div>
              ))}
            </div>

            {selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4"
              >
                <p className="font-['Arimo'] text-sm text-green-900 mb-2">✅ Interview Scheduled</p>
                <p className="font-['Arimo'] text-sm text-gray-700">
                  {monthName} {selectedDate} at {selectedTime}
                </p>
              </motion.div>
            )}

            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setConfirmModal(true)}
                disabled={!selectedTime}
                className={`w-full py-4 rounded-xl font-['Arimo'] shadow-lg transition-all ${
                  selectedTime
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                CONFIRM INTERVIEW
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCancel}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-['Arimo'] shadow-md hover:bg-gray-50"
              >
                CANCEL
              </motion.button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📅</span>
            </div>
            <p className="font-['Arimo'] text-gray-600">
              Please select a date from the calendar
            </p>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        onConfirm={handleConfirm}
        title="Confirm Interview Schedule"
        message={`Are you sure you want to schedule your interview on ${monthName} ${selectedDate}, 2025 at ${selectedTime}?`}
        confirmText="Confirm"
        confirmColor="from-green-500 to-emerald-500"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}