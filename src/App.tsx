import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import StudentRegistration from './components/StudentRegistration';
import TeacherRegistration from './components/TeacherRegistration';
import OnlineTest from './components/OnlineTest';
import TestSubmission from './components/TestSubmission';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import InterviewScheduler from './components/InterviewScheduler';
import ForgotPassword from './components/ForgotPassword';
import SessionTimeout from './components/SessionTimeout';
import Error404 from './components/Error404';
import RejectionPage from './components/RejectionPage';
import WaitingApprovalPage from './components/WaitingApprovalPage';
import PendingApplicationsStudent from './components/PendingApplicationsStudent';
import PendingApplicationsTeacher from './components/PendingApplicationsTeacher';
import ViewStudentApplication from './components/ViewStudentApplication';
import ScheduleSelection from './components/ScheduleSelection';
import RequestScheduleChange from './components/RequestScheduleChange';
import AddNewStudent from './components/AddNewStudent';
import ViewStudentInfo from './components/ViewStudentInfo';
import EditStudentInfo from './components/EditStudentInfo';
import ViewTeacherProfile from './components/ViewTeacherProfile';
import EditTeacherProfile from './components/EditTeacherProfile';
import AddNewTeacher from './components/AddNewTeacher';
import ViewLogbookDetails from './components/ViewLogbookDetails';
import AddNewQuestion from './components/AddNewQuestion';
import EditQuestion from './components/EditQuestion';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentUser, setCurrentUser] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [pendingCounts, setPendingCounts] = useState({ students: 3, teachers: 5 });

  // App version for cache busting
  const APP_VERSION = '1.0.1';

  // Check if user is logged in
  useEffect(() => {
    // Check app version and clear stale data
    const storedVersion = localStorage.getItem('sion_app_version');
    if (storedVersion !== APP_VERSION) {
      // Clear all stored data on version change
      localStorage.clear();
      localStorage.setItem('sion_app_version', APP_VERSION);
      return;
    }

    const storedUser = localStorage.getItem('sion_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        // Validate the user object has required fields
        if (user && user.role && (user.email || user.username)) {
          setCurrentUser(user);
          // Navigate to appropriate dashboard
          if (user.role === 'student') {
            setCurrentPage('student-dashboard');
          } else if (user.role === 'teacher') {
            setCurrentPage('teacher-dashboard');
          } else if (user.role === 'admin') {
            setCurrentPage('admin-dashboard');
          }
        } else {
          // Invalid user data, clear it
          localStorage.removeItem('sion_user');
        }
      } catch (e) {
        console.error('Failed to parse stored user', e);
        localStorage.removeItem('sion_user');
      }
    }
  }, []);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      setPageData(data);
    }
    window.scrollTo(0, 0);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('sion_user', JSON.stringify(user));
    
    // Navigate to appropriate dashboard
    if (user.role === 'student') {
      navigate('student-dashboard');
    } else if (user.role === 'teacher') {
      navigate('teacher-dashboard');
    } else if (user.role === 'admin') {
      navigate('admin-dashboard');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('sion_user');
    navigate('landing');
  };

  const handleApproveStudent = () => {
    setPendingCounts(prev => ({ ...prev, students: Math.max(0, prev.students - 1) }));
  };

  const handleRejectStudent = () => {
    setPendingCounts(prev => ({ ...prev, students: Math.max(0, prev.students - 1) }));
  };

  const handleApproveTeacher = () => {
    setPendingCounts(prev => ({ ...prev, teachers: Math.max(0, prev.teachers - 1) }));
  };

  const handleRejectTeacher = () => {
    setPendingCounts(prev => ({ ...prev, teachers: Math.max(0, prev.teachers - 1) }));
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'landing' && (
        <LandingPage navigate={navigate} />
      )}
      
      {currentPage === 'login' && (
        <LoginPage navigate={navigate} onLogin={handleLogin} />
      )}
      
      {currentPage === 'signup' && (
        <SignUpPage navigate={navigate} />
      )}
      
      {currentPage === 'student-registration' && (
        <StudentRegistration navigate={navigate} />
      )}
      
      {currentPage === 'teacher-registration' && (
        <TeacherRegistration navigate={navigate} pageData={pageData} />
      )}
      
      {currentPage === 'online-test' && (
        <OnlineTest 
          navigate={navigate} 
          userRole={pageData?.userRole || 'student'}
        />
      )}
      
      {currentPage === 'test-submission' && (
        <TestSubmission 
          navigate={navigate}
          userRole={pageData?.userRole || 'student'}
          applicationId={pageData?.applicationId}
        />
      )}
      
      {currentPage === 'student-dashboard' && currentUser && (
        <StudentDashboard 
          navigate={navigate} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}
      
      {/* Redirect to login if trying to access student dashboard without auth */}
      {currentPage === 'student-dashboard' && !currentUser && (
        <LoginPage navigate={navigate} onLogin={handleLogin} />
      )}
      
      {currentPage === 'teacher-dashboard' && currentUser && (
        <TeacherDashboard 
          navigate={navigate} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}
      
      {/* Redirect to login if trying to access teacher dashboard without auth */}
      {currentPage === 'teacher-dashboard' && !currentUser && (
        <LoginPage navigate={navigate} onLogin={handleLogin} />
      )}
      
      {currentPage === 'admin-dashboard' && currentUser && (
        <AdminDashboard 
          navigate={navigate} 
          currentUser={currentUser}
          onLogout={handleLogout}
          pendingCounts={pendingCounts}
        />
      )}
      
      {/* Redirect to login if trying to access admin dashboard without auth */}
      {currentPage === 'admin-dashboard' && !currentUser && (
        <LoginPage navigate={navigate} onLogin={handleLogin} />
      )}
      
      {currentPage === 'about-us' && (
        <AboutUsPage navigate={navigate} />
      )}
      
      {currentPage === 'contact' && (
        <ContactPage navigate={navigate} />
      )}
      
      {currentPage === 'interview-scheduler' && (
        <InterviewScheduler 
          navigate={navigate} 
          teacher={pageData?.teacher}
        />
      )}
      
      {currentPage === 'forgot-password' && (
        <ForgotPassword navigate={navigate} />
      )}
      
      {currentPage === 'session-timeout' && (
        <SessionTimeout navigate={navigate} />
      )}
      
      {currentPage === 'error-404' && (
        <Error404 navigate={navigate} />
      )}
      
      {currentPage === 'rejection-page' && (
        <RejectionPage navigate={navigate} />
      )}
      
      {currentPage === 'waiting-approval-page' && (
        <WaitingApprovalPage navigate={navigate} />
      )}
      
      {currentPage === 'pending-applications-student' && (
        <PendingApplicationsStudent 
          navigate={navigate} 
          onApprove={handleApproveStudent}
          onReject={handleRejectStudent}
        />
      )}
      
      {currentPage === 'pending-applications-teacher' && (
        <PendingApplicationsTeacher 
          navigate={navigate} 
          onApprove={handleApproveTeacher}
          onReject={handleRejectTeacher}
        />
      )}
      
      {currentPage === 'view-student-application' && (
        <ViewStudentApplication 
          navigate={navigate} 
          applicationId={pageData?.id}
          onApprove={handleApproveStudent}
          onReject={handleRejectStudent}
        />
      )}
      
      {currentPage === 'schedule-selection' && (
        <ScheduleSelection 
          navigate={navigate} 
          currentUser={currentUser}
          onConfirmSchedules={(schedules) => {
            const updatedUser = {
              ...(currentUser || {}),
              profile: {
                ...((currentUser && currentUser.profile) || {}),
                hasSchedule: true,
                selectedSchedules: schedules
              }
            };
            setCurrentUser(updatedUser);
            try {
              localStorage.setItem('sion_user', JSON.stringify(updatedUser));
            } catch {}
          }}
        />
      )}
      
      {currentPage === 'request-schedule-change' && (
        <RequestScheduleChange 
          navigate={navigate} 
          currentUser={currentUser}
        />
      )}
      
      {currentPage === 'add-new-student' && (
        <AddNewStudent 
          navigate={navigate} 
          currentUser={currentUser}
        />
      )}
      
      {currentPage === 'view-student-info' && (
        <ViewStudentInfo 
          navigate={navigate} 
          studentId={pageData?.id}
        />
      )}
      
      {currentPage === 'edit-student-info' && (
        <EditStudentInfo 
          navigate={navigate} 
          studentId={pageData?.id}
        />
      )}
      
      {currentPage === 'view-teacher-profile' && (
        <ViewTeacherProfile 
          navigate={navigate} 
          teacherId={pageData?.id}
        />
      )}
      
      {currentPage === 'edit-teacher-profile' && (
        <EditTeacherProfile 
          navigate={navigate} 
          teacherId={pageData?.id}
        />
      )}
      
      {currentPage === 'add-new-teacher' && (
        <AddNewTeacher 
          navigate={navigate} 
          currentUser={currentUser}
        />
      )}
      
      {currentPage === 'view-logbook-details' && (
        <ViewLogbookDetails 
          navigate={navigate} 
          logbookId={pageData?.id}
        />
      )}
      
      {currentPage === 'add-new-question' && (
        <AddNewQuestion 
          navigate={navigate} 
          currentUser={currentUser}
        />
      )}
      
      {currentPage === 'edit-question' && (
        <EditQuestion 
          navigate={navigate} 
          questionId={pageData?.id}
        />
      )}
      
      {/* Catch-all for undefined routes - show 404 page */}
      {!['landing', 'login', 'signup', 'student-registration', 'teacher-registration', 'online-test', 'test-submission', 'student-dashboard', 'teacher-dashboard', 'admin-dashboard', 'about-us', 'contact', 'interview-scheduler', 'forgot-password', 'session-timeout', 'error-404', 'rejection-page', 'waiting-approval-page', 'pending-applications-student', 'pending-applications-teacher', 'view-student-application', 'schedule-selection', 'request-schedule-change', 'add-new-student', 'view-student-info', 'edit-student-info', 'view-teacher-profile', 'edit-teacher-profile', 'add-new-teacher', 'view-logbook-details', 'add-new-question', 'edit-question'].includes(currentPage) && (
        <Error404 navigate={navigate} />
      )}
    </div>
  );
}
