import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar, BookOpen, FileText, CheckCircle, XCircle, Download, Clock, GraduationCap } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function ViewLogbookDetails({ navigate, logbookId, onApprove, onReject }) {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  // Mock logbook data - in production this would come from backend
  const logbook = {
    id: logbookId || 1,
    teacher: 'Ms. Sarah Johnson',
    teacherEmail: 'sarah.johnson@sion.edu',
    student: 'Alex Chen',
    studentGrade: 'Grade 10',
    subject: 'Algebra - Quadratic Equations',
    date: '2024-11-25',
    time: '3:00 PM - 4:30 PM',
    duration: '1.5 hours',
    topic: 'Quadratic Equations and Factoring',
    notes: `Today's session focused on quadratic equations. Alex demonstrated strong understanding of basic factoring techniques. We covered:

• Factoring by grouping
• Completing the square
• Quadratic formula applications

Alex completed 8/10 practice problems correctly. Areas for improvement: word problems requiring equation setup.

Homework assigned: Practice Set 5.2, problems 1-20.

Alex was engaged throughout the session and asked thoughtful questions about real-world applications.`,
    homework: 'Practice Set 5.2, problems 1-20 (due Nov 28)',
    studentBehavior: 'Excellent - Engaged and participated actively',
    nextTopic: 'Graphing Quadratic Functions',
    photos: [],
    attachmentUrl: null,
    submittedDate: '2024-11-25 at 5:30 PM',
    status: 'pending' // pending, approved, rejected
  };

  const handleApprove = () => {
    console.log('Approving logbook:', logbookId);
    if (onApprove) onApprove();
    setShowApproveModal(false);
    navigate('admin-dashboard');
  };

  const handleReject = () => {
    console.log('Rejecting logbook:', logbookId);
    if (onReject) onReject();
    setShowRejectModal(false);
    navigate('admin-dashboard');
  };

  const handleExport = () => {
    // Create CSV content
    const csvContent = `Teacher,Student,Subject,Date,Time,Duration,Topic,Notes,Homework,Student Behavior,Next Topic,Status
"${logbook.teacher}","${logbook.student}","${logbook.subject}","${logbook.date}","${logbook.time}","${logbook.duration}","${logbook.topic}","${logbook.notes.replace(/"/g, '""')}","${logbook.homework}","${logbook.studentBehavior}","${logbook.nextTopic}","${logbook.status}"`;

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logbook_${logbook.teacher}_${logbook.student}_${logbook.date}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = () => {
    switch (logbook.status) {
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-['Arimo']">Pending Review</span>;
      case 'approved':
        return <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-['Arimo']">Approved</span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-['Arimo']">Rejected</span>;
      default:
        return null;
    }
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
                <h1 className="font-['Arimo'] text-2xl text-gray-900">Logbook Details</h1>
                <p className="font-['Arimo'] text-sm text-gray-600">{logbook.teacher} - {logbook.student}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {getStatusBadge()}
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExport}
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-['Arimo'] shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export CSV
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-8"
        >
          {/* Teacher & Student Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-['Arimo'] text-sm text-gray-600">Teacher</p>
                  <p className="font-['Arimo'] text-lg text-gray-900">{logbook.teacher}</p>
                </div>
              </div>
              <p className="font-['Arimo'] text-sm text-gray-600">{logbook.teacherEmail}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#0891B2] rounded-xl flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-['Arimo'] text-sm text-gray-600">Student</p>
                  <p className="font-['Arimo'] text-lg text-gray-900">{logbook.student}</p>
                </div>
              </div>
              <p className="font-['Arimo'] text-sm text-gray-600">{logbook.studentGrade}</p>
            </div>
          </div>

          {/* Session Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0891B2] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Session Information</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Date</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{logbook.date}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Time</label>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <p className="font-['Arimo'] text-lg text-gray-900">{logbook.time}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-1">Duration</label>
                <p className="font-['Arimo'] text-lg text-gray-900">{logbook.duration}</p>
              </div>

              
            </div>
          </div>

          {/* Lesson Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#22C55E] rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Arimo'] text-2xl text-gray-900">Lesson Content</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-2">Topic Covered</label>
                <p className="font-['Arimo'] text-lg text-gray-900 bg-gray-50 p-4 rounded-xl">{logbook.topic}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-2">Session Notes</label>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-['Arimo'] text-gray-900 whitespace-pre-line leading-relaxed">{logbook.notes}</p>
                </div>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-2">Homework Assigned</label>
                <p className="font-['Arimo'] text-lg text-gray-900 bg-amber-50 p-4 rounded-xl border-2 border-amber-200">{logbook.homework}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-2">Student Behavior</label>
                <p className="font-['Arimo'] text-lg text-gray-900 bg-green-50 p-4 rounded-xl border-2 border-green-200">{logbook.studentBehavior}</p>
              </div>

              <div>
                <label className="block font-['Arimo'] text-sm text-gray-500 mb-2">Photo Evidence</label>
                <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  {(logbook.photos || []).length > 0 ? (
                    (logbook.photos || []).map((src, i) => (
                      <img key={i} src={src} alt={`Evidence ${i+1}`} className="rounded-xl border" />
                    ))
                  ) : (
                    <p className="font-['Arimo'] text-sm text-gray-500">No photos attached</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submission Info */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="font-['Arimo'] text-sm text-gray-600">
              Submitted on {logbook.submittedDate}
            </p>
          </div>

          {/* Action Buttons - Only show if pending */}
          {logbook.status === 'pending' && (
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowApproveModal(true)}
                className="flex-1 bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-white py-4 rounded-xl font-['Arimo'] text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-6 h-6" />
                Approve Logbook
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowRejectModal(true)}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-['Arimo'] text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <XCircle className="w-6 h-6" />
                Reject Logbook
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Approve Modal */}
      <ConfirmationModal
        isOpen={showApproveModal}
        onClose={() => setShowApproveModal(false)}
        onConfirm={handleApprove}
        title="Approve Logbook"
        message={`Are you sure you want to approve this logbook entry from ${logbook.teacher}?`}
        confirmText="Yes, Approve"
        confirmColor="from-[#16A34A] to-[#22C55E]"
        icon={<CheckCircle className="w-6 h-6 text-white" />}
      />

      {/* Reject Modal */}
      <ConfirmationModal
        isOpen={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        onConfirm={handleReject}
        title="Reject Logbook"
        message={`Are you sure you want to reject this logbook entry from ${logbook.teacher}? This action cannot be undone.`}
        confirmText="Yes, Reject"
        confirmColor="from-red-500 to-red-600"
        icon={<XCircle className="w-6 h-6 text-white" />}
      />
    </div>
  );
}
