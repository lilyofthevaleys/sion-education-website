import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle, Eye, Calendar, FileText, Download, GraduationCap } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function PendingApplicationsTeacher({ navigate, onApprove, onReject }) {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Dr. Robert Chen',
      email: 'robert.chen@email.com',
      phone: '+1 (555) 987-6543',
      subject: 'Mathematics & Calculus',
      grades: 'Grades 10-12',
      experience: '8 years',
      education: 'Ph.D. Mathematics, MIT',
      availability: 'Mon-Fri, 2PM-9PM',
      appliedDate: 'Nov 21, 2025',
      resumeUrl: '/resumes/robert-chen.pdf'
    },
    {
      id: 2,
      name: 'Ms. Patricia Williams',
      email: 'patricia.w@email.com',
      phone: '+1 (555) 876-5432',
      subject: 'English Literature & Writing',
      grades: 'Grades 8-11',
      experience: '5 years',
      education: 'M.A. English Literature, Stanford',
      availability: 'Tue-Sat, 3PM-8PM',
      appliedDate: 'Nov 20, 2025',
      resumeUrl: '/resumes/patricia-williams.pdf'
    },
    {
      id: 3,
      name: 'Mr. James Rodriguez',
      email: 'james.r@email.com',
      phone: '+1 (555) 765-4321',
      subject: 'Physics & Chemistry',
      grades: 'Grades 9-12',
      experience: '10 years',
      education: 'M.S. Physics, Caltech',
      availability: 'Mon-Thu, 4PM-10PM',
      appliedDate: 'Nov 19, 2025',
      resumeUrl: '/resumes/james-rodriguez.pdf'
    }
  ]);

  const [confirmModal, setConfirmModal] = useState({ isOpen: false, type: '', id: null });

  const handleApprove = (id) => {
    setApplications(applications.filter(app => app.id !== id));
    onApprove?.();
  };

  const handleReject = (id) => {
    setApplications(applications.filter(app => app.id !== id));
    onReject?.();
  };

  const handleExport = () => {
    console.log('Exporting teacher applications...');
  };

  const handleViewResume = (resumeUrl) => {
    // In a real app, this would open a PDF viewer
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E8F0FE] to-[#F0F9FF]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-2xl shadow-lg sticky top-0 z-40 border-b border-white/20"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('admin-dashboard')}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>
              <div>
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Pending Teacher Applications</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">{applications.length} applications awaiting review</p>
              </div>
            </div>

            {/* Export Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExport}
              className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-['Arimo'] shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Export List
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Applications List */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="space-y-4">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b-2 border-purple-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-1">{app.name}</h3>
                      <p className="font-['Arimo'] text-lg text-purple-700 mb-2">{app.subject}</p>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-['Arimo']">
                          {app.grades}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-['Arimo']">
                          {app.experience} experience
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-['Arimo'] flex items-center gap-1">
                          📅 Interview Scheduled
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-['Arimo'] text-sm text-gray-600 mb-1">Applied: {app.appliedDate}</p>
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-['Arimo'] shadow-lg">
                      Pending Review
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="font-['Arimo'] text-sm text-gray-500">Email</span>
                      <span className="font-['Arimo'] text-sm text-gray-900">{app.email}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="font-['Arimo'] text-sm text-gray-500">Phone</span>
                      <span className="font-['Arimo'] text-sm text-gray-900">{app.phone}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="font-['Arimo'] text-sm text-gray-500">Education</span>
                      <span className="font-['Arimo'] text-sm text-gray-900 text-right">{app.education}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3">
                      <p className="font-['Arimo'] text-sm text-green-900 mb-1 flex items-center gap-2">
                        📅 <strong>Interview Scheduled:</strong>
                      </p>
                      <p className="font-['Arimo'] text-sm text-gray-700">
                        Saturday, Nov 27, 2025 at 2:00 PM
                      </p>
                      <p className="font-['Arimo'] text-xs text-gray-600 mt-1">
                        (30 minutes, video call)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewResume(app.resumeUrl)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    View Resume
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setConfirmModal({ isOpen: true, type: 'approve', id: app.id })}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 sm:py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Approve & Hire
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setConfirmModal({ isOpen: true, type: 'reject', id: app.id })}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 sm:py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-5 h-5" />
                    Reject
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {applications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-2">All Caught Up!</h3>
            <p className="font-['Arimo'] text-gray-600">No pending teacher applications at the moment.</p>
          </motion.div>
        )}
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'approve'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', id: null })}
        onConfirm={() => handleApprove(confirmModal.id)}
        title="Approve & Hire Teacher"
        message="Are you sure you want to approve this teacher application? They will receive access to their dashboard and a confirmation email."
        confirmText="Approve & Hire"
        confirmColor="from-green-500 to-emerald-500"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />

      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'reject'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', id: null })}
        onConfirm={() => handleReject(confirmModal.id)}
        title="Reject Application"
        message="Are you sure you want to reject this teacher application? This action cannot be undone and the applicant will be notified."
        confirmText="Reject"
        confirmColor="from-red-500 to-red-600"
        icon={<XCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
