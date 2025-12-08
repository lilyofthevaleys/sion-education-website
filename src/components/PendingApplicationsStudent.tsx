import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Eye, Download, GraduationCap, Trash2 } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function PendingApplicationsStudent({ navigate, onApprove, onReject }) {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Jessica Thompson',
      email: 'jessica.t@email.com',
      phone: '+1 (555) 123-4567',
      school: 'Lincoln High School',
      grade: 'Grade 11',
      testScore: 94,
      appliedDate: 'Nov 20, 2025',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      email: 'marcus.j@email.com',
      phone: '+1 (555) 234-5678',
      school: 'Washington Academy',
      grade: 'Grade 10',
      testScore: 88,
      appliedDate: 'Nov 19, 2025',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Olivia Martinez',
      email: 'olivia.m@email.com',
      phone: '+1 (555) 345-6789',
      school: 'Roosevelt Middle School',
      grade: 'Grade 9',
      testScore: 91,
      appliedDate: 'Nov 18, 2025',
      status: 'pending'
    }
  ]);

  const [confirmModal, setConfirmModal] = useState({ isOpen: false, type: '', id: null });

  const handleDelete = (id) => {
    setApplications(applications.filter(app => app.id !== id));
    setConfirmModal({ isOpen: false, type: '', id: null });
  };

  const handleApprove = (id) => {
    setApplications(applications.filter(app => app.id !== id));
    onApprove?.();
  };

  const handleReject = (id) => {
    setApplications(applications.filter(app => app.id !== id));
    onReject?.();
  };

  

  const handleExport = () => {
    console.log('Exporting applications...');
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
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Pending Student Applications</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">{applications.length} applications awaiting review</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
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
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-['Arimo'] text-xl text-gray-900 mb-1">{app.name}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                        <span className="font-['Arimo'] text-sm text-gray-600">{app.email}</span>
                        <span className="text-gray-300">•</span>
                        <span className="font-['Arimo'] text-sm text-gray-600">{app.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-['Arimo']">
                          {app.grade}
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-['Arimo']">
                          {app.school}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-['Arimo'] text-base sm:text-lg shadow-md ${
                        app.testScore >= 90
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : app.testScore >= 80
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                      }`}>
                        <GraduationCap className="w-5 h-5" />
                        Test Score: {app.testScore}%
                      </span>
                    </div>
                    <p className="font-['Arimo'] text-sm text-gray-600">Applied: {app.appliedDate}</p>
                  </div>
                </div>

                {/* Action Button - View Application Only */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('view-student-application', { id: app.id })}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 sm:py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    title="View full application details"
                  >
                    <Eye className="w-5 h-5" />
                    View Application
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
              <CheckCircle className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="font-['Arimo'] text-2xl text-gray-900 mb-2">All Caught Up!</h3>
            <p className="font-['Arimo'] text-gray-600">No pending student applications at the moment.</p>
          </motion.div>
        )}
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'approve'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', id: null })}
        onConfirm={() => handleApprove(confirmModal.id)}
        title="Approve Application"
        message="Are you sure you want to approve this student application? They will receive access to their dashboard and a confirmation email."
        confirmText="Approve"
        confirmColor="from-green-500 to-emerald-500"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />

      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'reject'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', id: null })}
        onConfirm={() => handleReject(confirmModal.id)}
        title="Reject Application"
        message="Are you sure you want to reject this student application? This action cannot be undone and the applicant will be notified."
        confirmText="Reject"
        confirmColor="from-red-500 to-red-600"
        icon={<Trash2 className="w-6 h-6 text-white" />}
      />

      

      <ConfirmationModal
        isOpen={confirmModal.isOpen && confirmModal.type === 'delete'}
        onClose={() => setConfirmModal({ isOpen: false, type: '', id: null })}
        onConfirm={() => handleDelete(confirmModal.id)}
        title="Delete Application"
        message="Are you sure you want to delete this application? This action cannot be undone and all application data will be permanently removed."
        confirmText="Delete"
        confirmColor="from-red-500 to-red-600"
        icon={<Trash2 className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
