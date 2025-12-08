import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle, Mail, Download, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import RequestInfoModal from './RequestInfoModal';

export default function ViewStudentApplication({ navigate, applicationId, onApprove, onReject }) {
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, type: '' });
  const [requestInfoModal, setRequestInfoModal] = useState(false);

  // Mock application data
  const application = {
    id: applicationId || 1,
    name: 'Jessica Thompson',
    email: 'jessica.t@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: 'March 15, 2008',
    school: 'Lincoln High School',
    grade: 'Grade 11',
    address: '123 Main Street, Apt 4B, Springfield, IL 62701',
    parentName: 'Michael Thompson',
    parentEmail: 'michael.t@email.com',
    parentPhone: '+1 (555) 123-4568',
    testScore: 94,
    testDate: 'Nov 15, 2025',
    testDuration: '45 minutes',
    appliedDate: 'Nov 20, 2025',
    status: 'pending',
    motivation: 'I am passionate about learning and want to improve my academic performance. I believe SION Education can help me achieve my goals and prepare for college.',
    subjects: ['Mathematics', 'Physics', 'English Literature'],
    preferredSchedule: 'Weekday evenings (4PM-7PM)',
    learningStyle: 'Visual and hands-on learning',
    goals: 'Improve SAT scores, maintain GPA above 3.8, prepare for AP exams'
  };

  const handleApprove = () => {
    onApprove?.(application.id);
    navigate('pending-applications-student');
  };

  const handleReject = () => {
    onReject?.(application.id);
    navigate('pending-applications-student');
  };

  const handleRequestInfo = (message) => {
    console.log('Sending email:', message);
  };

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
                onClick={() => navigate('pending-applications-student')}
                className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <div>
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Student Application Review</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">Complete application details</p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-['Arimo'] shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export PDF
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b-2 border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {application.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-['Arimo'] text-2xl text-gray-900 mb-1">{application.name}</h2>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-['Arimo']">
                        {application.grade}
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-['Arimo']">
                        {application.school}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-['Arimo'] text-lg text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="font-['Arimo'] text-gray-900">{application.email}</p>
                  </div>
                  <div>
                    <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Phone Number</p>
                    <p className="font-['Arimo'] text-gray-900">{application.phone}</p>
                  </div>
                  <div>
                    <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Date of Birth</p>
                    <p className="font-['Arimo'] text-gray-900">{application.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Current School</p>
                    <p className="font-['Arimo'] text-gray-900">{application.school}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Parent/Guardian Information */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <h3 className="font-['Arimo'] text-lg text-gray-900 mb-4">Parent/Guardian Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Parent Name</p>
                  <p className="font-['Arimo'] text-gray-900">{application.parentName}</p>
                </div>
                <div>
                  <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Parent Email</p>
                  <p className="font-['Arimo'] text-gray-900">{application.parentEmail}</p>
                </div>
                <div>
                  <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Parent Phone</p>
                  <p className="font-['Arimo'] text-gray-900">{application.parentPhone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-['Arimo'] text-sm text-gray-500 mb-1">Home Address</p>
                  <p className="font-['Arimo'] text-gray-900">{application.address}</p>
                </div>
              </div>
            </motion.div>

            
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Test Score Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-20 sm:top-24"
            >
              <div className={`p-6 ${
                application.testScore >= 90
                  ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                  : application.testScore >= 80
                  ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                  : 'bg-gradient-to-br from-orange-500 to-amber-500'
              }`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{application.testScore}</p>
                      <p className="text-white/90 font-['Arimo'] text-base sm:text-lg">%</p>
                    </div>
                  </div>
                </div>
                <div className="text-center text-white">
                  <p className="font-['Arimo'] text-lg mb-1">Entrance Test Score</p>
                  <p className="font-['Arimo'] text-sm text-white/80">Duration: {application.testDuration}</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="font-['Arimo'] text-sm text-gray-500">Applied Date</span>
                  <span className="font-['Arimo'] text-sm text-gray-900">{application.appliedDate}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-['Arimo'] text-sm text-gray-500">Status</span>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-['Arimo']">
                    Pending Review
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setConfirmModal({ isOpen: true, type: 'approve' })}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve Application
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setRequestInfoModal(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Request More Info
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setConfirmModal({ isOpen: true, type: 'reject' })}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <XCircle className="w-5 h-5" />
                  Reject Application
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'approve'}
        onClose={() => setConfirmModal({ isOpen: false, type: '' })}
        onConfirm={handleApprove}
        title="Approve Application"
        message="Are you sure you want to approve this student application? They will receive access to their dashboard and a confirmation email."
        confirmText="Approve"
        confirmColor="from-green-500 to-emerald-500"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />

      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'reject'}
        onClose={() => setConfirmModal({ isOpen: false, type: '' })}
        onConfirm={handleReject}
        title="Reject Application"
        message="Are you sure you want to reject this student application? This action cannot be undone and the applicant will be notified."
        confirmText="Reject"
        confirmColor="from-red-500 to-red-600"
        icon={<XCircle className="w-6 h-6 text-white" />}
      />

      {/* Request Info Modal */}
      <RequestInfoModal
        isOpen={requestInfoModal}
        onClose={() => setRequestInfoModal(false)}
        onSend={handleRequestInfo}
        studentName={application.name}
      />
    </div>
  );
}
