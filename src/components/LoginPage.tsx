import React, { useState } from 'react';
import { GraduationCap, AlertCircle, ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function LoginPage({ navigate, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Dummy credentials for demo - supports both username and email
    const dummyAccounts = [
      // Admin account
      { 
        username: 'admin', 
        email: 'admin@sion.edu',
        password: 'whiteleopard20', 
        role: 'admin', 
        name: 'Admin User',
        status: 'approved' // Admin is always approved
      },
      // Student accounts
      { 
        username: 'student', 
        email: 'alex.chen@email.com',
        password: 'blackdragons14', 
        role: 'student', 
        name: 'Alex Chen',
        phone: '+1 234 567 8900',
        status: 'approved', // This student is approved
        profile: {
          age: '16',
          gradeLevel: 'Grade 10',
          schoolName: 'Lincoln High School',
          parentName: 'Robert Chen',
          parentPhone: '+1 234 567 8901',
          parentEmail: 'robert.chen@email.com',
          address: '123 Main St',
          city: 'New York',
          totalLessons: 12,
          completedLessons: 8,
          currentLevel: 'Intermediate',
          hasSchedule: false,
          selectedSchedules: []
        }
      },
      { 
        username: 'janesmith', 
        email: 'student@test.com',
        password: 'password', 
        role: 'student', 
        name: 'Jane Smith',
        status: 'pending' // This student is pending approval
      },
      { 
        username: 'rejected_student', 
        email: 'rejected@test.com',
        password: 'password', 
        role: 'student', 
        name: 'John Rejected',
        status: 'rejected' // This student was rejected
      },
      // Teacher accounts
      { 
        username: 'teacher', 
        email: 'teacher@sion.edu',
        password: 'wakasaaa04', 
        role: 'teacher', 
        name: 'Ms. Johnson',
        phone: '+1 555 1001',
        status: 'approved', // This teacher is approved
        profile: {
          subject: 'Mathematics',
          grades: 'Grades 9-11',
          students: 15,
          availability: 'Mon-Fri, 3PM-8PM',
          pendingLogs: 2
        }
      },
      { 
        username: 'mrsmith', 
        email: 'teacher@test.com',
        password: 'password', 
        role: 'teacher', 
        name: 'Mr. Smith',
        status: 'pending' // This teacher is pending approval
      }
    ];

    // Find account by username OR email
    const account = dummyAccounts.find(acc => 
      (acc.username === email || acc.email === email) && acc.password === password
    );
    
    if (account) {
      // Check application status before allowing login
      if (account.status === 'pending' && account.role !== 'admin') {
        // Redirect to waiting approval page
        navigate('waiting-approval-page');
        return;
      }
      
      if (account.status === 'rejected' && account.role !== 'admin') {
        // Redirect to rejection page
        navigate('rejection-page');
        return;
      }
      
      // Only approved users (or admin) can proceed to dashboard
      if (account.status === 'approved' || account.role === 'admin') {
        const user = {
          email: account.email,
          username: account.username,
          role: account.role,
          fullName: account.name,
          phone: account.phone,
          profile: account.profile,
          status: account.status
        };
        onLogin(user);
      }
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Arimo'] text-xl text-[#101828]">SION Education</span>
            </div>

            <button 
              onClick={() => navigate('landing')}
              className="flex items-center gap-2 text-[#4a5565] hover:text-[#2563EB] transition-colors font-['Arimo']"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="max-w-md mx-auto px-4 py-10 sm:py-14 lg:py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-['Arimo'] text-3xl text-[#101828] mb-2">Welcome Back</h1>
            <p className="font-['Arimo'] text-[#4a5565]">Login to access your dashboard</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="font-['Arimo'] text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-['Arimo'] text-sm text-[#101828] mb-2">Email or Username</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                placeholder="your.email@example.com or username"
                autoComplete="off"
                autoCapitalize="none"
              />
            </div>

            <div>
              <label className="block font-['Arimo'] text-sm text-[#101828] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  autoComplete="off"
                  autoCapitalize="none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 sm:py-4 rounded-lg font-['Arimo'] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('forgot-password')}
              className="font-['Arimo'] text-sm text-[#2563EB] hover:text-[#1D4ED8] hover:underline transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="font-['Arimo'] text-sm text-center text-[#4a5565] mb-4">Don't have an account?</p>
            <div className="space-y-3">
              <button
                onClick={() => navigate('student-registration')}
                className="w-full border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] py-3 rounded-lg font-['Arimo'] transition-colors"
              >
                Register as Student
              </button>
              <button
                onClick={() => navigate('teacher-registration')}
                className="w-full border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#F5F3FF] py-3 rounded-lg font-['Arimo'] transition-colors"
              >
                Apply as Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
