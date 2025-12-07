import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Middleware
app.use('*', logger(console.log));
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Helper: Hash password (simple for prototype)
function hashPassword(password: string): string {
  // In production, use bcrypt. For prototype, use base64
  return btoa(password);
}

function verifyPassword(password: string, hash: string): boolean {
  return btoa(password) === hash;
}

// Generate application ID
function generateApplicationId(role: string): string {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  const prefix = role === 'teacher' ? 'T' : 'S';
  return `SION-${prefix}-${year}-${random}`;
}

// ============ AUTH ENDPOINTS ============

// Register Student
app.post('/make-server-5c52ac3e/auth/register-student', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, fullName, age, gradeLevel, schoolName, parentName, parentPhone, parentEmail, address, city, phone } = body;

    // Check if email exists
    const existingUser = await kv.get(`user:email:${email}`);
    if (existingUser) {
      return c.json({ error: 'Email already registered' }, 400);
    }

    // Create user
    const userId = crypto.randomUUID();
    const applicationId = generateApplicationId('student');
    const user = {
      id: userId,
      email,
      passwordHash: hashPassword(password),
      role: 'student',
      status: 'pending',
      fullName,
      phone,
      applicationId,
      createdAt: new Date().toISOString(),
    };

    // Create student profile
    const studentProfile = {
      userId,
      age,
      gradeLevel,
      schoolName,
      parentName,
      parentPhone,
      parentEmail,
      address,
      city,
      totalLessons: 0,
      completedLessons: 0,
      currentLevel: 'Beginner',
    };

    // Save to KV store
    await kv.set(`user:${userId}`, user);
    await kv.set(`user:email:${email}`, userId);
    await kv.set(`student:profile:${userId}`, studentProfile);
    await kv.set(`application:${applicationId}`, userId);

    return c.json({ userId, applicationId, success: true });
  } catch (error) {
    console.error('Register student error:', error);
    return c.json({ error: 'Registration failed' }, 500);
  }
});

// Register Teacher
app.post('/make-server-5c52ac3e/auth/register-teacher', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, fullName, age, education, specialization, experienceYears, phone } = body;

    // Check if email exists
    const existingUser = await kv.get(`user:email:${email}`);
    if (existingUser) {
      return c.json({ error: 'Email already registered' }, 400);
    }

    // Create user
    const userId = crypto.randomUUID();
    const applicationId = generateApplicationId('teacher');
    const user = {
      id: userId,
      email,
      passwordHash: hashPassword(password),
      role: 'teacher',
      status: 'pending',
      fullName,
      phone,
      applicationId,
      createdAt: new Date().toISOString(),
    };

    // Create teacher profile
    const teacherProfile = {
      userId,
      age,
      education,
      specialization,
      experienceYears,
      maxStudents: 10,
      currentStudents: 0,
      totalLessonsTaught: 0,
    };

    // Save to KV store
    await kv.set(`user:${userId}`, user);
    await kv.set(`user:email:${email}`, userId);
    await kv.set(`teacher:profile:${userId}`, teacherProfile);
    await kv.set(`application:${applicationId}`, userId);

    return c.json({ userId, applicationId, success: true });
  } catch (error) {
    console.error('Register teacher error:', error);
    return c.json({ error: 'Registration failed' }, 500);
  }
});

// Login
app.post('/make-server-5c52ac3e/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json();

    // ========== HARDCODED USERS FOR TESTING ==========
    // Admin login
    if ((email === 'admin' || email === 'admin@sion.edu') && password === 'whiteleopard20') {
      return c.json({
        success: true,
        user: {
          id: 'admin-001',
          email: 'admin@sion.edu',
          role: 'admin',
          status: 'approved',
          fullName: 'System Administrator',
        },
        profile: null,
        message: 'Login successful',
      });
    }

    // Student dummy account
    if (email === 'student' && password === 'blackdragons14') {
      return c.json({
        success: true,
        user: {
          id: 'student-dummy-001',
          email: 'alex.chen@email.com',
          role: 'student',
          status: 'approved',
          fullName: 'Alex Chen',
          phone: '+1 234 567 8900',
          applicationId: 'SION-S-2025-12345',
        },
        profile: {
          userId: 'student-dummy-001',
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
          hasSchedule: true,
          selectedSchedules: [
            { day: 'Tuesday', time: '5:00 PM', subject: 'Chemistry' },
            { day: 'Wednesday', time: '7:00 PM', subject: 'Physics' },
            { day: 'Thursday', time: '3:00 PM', subject: 'Mathematics' }
          ]
        },
        message: 'Login successful',
      });
    }
    // ================================================

    // Get user
    const userId = await kv.get(`user:email:${email}`);
    if (!userId) {
      return c.json({ error: 'Invalid email or password' }, 401);
    }

    const user = await kv.get(`user:${userId}`);
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return c.json({ error: 'Invalid email or password' }, 401);
    }

    // Check if approved
    if (user.status !== 'approved') {
      if (user.status === 'pending') {
        return c.json({ error: 'Your application is still under review' }, 403);
      } else if (user.status === 'rejected') {
        return c.json({ error: 'Your application was not approved. Please contact support.' }, 403);
      }
    }

    // Get profile
    let profile = null;
    if (user.role === 'student') {
      profile = await kv.get(`student:profile:${userId}`);
    } else if (user.role === 'teacher') {
      profile = await kv.get(`teacher:profile:${userId}`);
    }

    // Create Supabase auth session
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email + '@sion-temp.local', // Temp email for auth
      password: user.id, // Use user ID as password
    });

    let accessToken = null;
    if (error) {
      // User doesn't exist in Supabase auth, create them
      const { data: signUpData, error: signUpError } = await supabase.auth.admin.createUser({
        email: email + '@sion-temp.local',
        password: user.id,
        email_confirm: true,
      });
      
      if (!signUpError && signUpData) {
        const { data: signInData } = await supabase.auth.signInWithPassword({
          email: email + '@sion-temp.local',
          password: user.id,
        });
        accessToken = signInData?.session?.access_token;
      }
    } else {
      accessToken = data?.session?.access_token;
    }

    return c.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        status: user.status,
        applicationId: user.applicationId,
      },
      profile,
      accessToken,
    });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Login failed' }, 500);
  }
});

// ============ TEST ENDPOINTS ============

// Get test questions
app.get('/make-server-5c52ac3e/test/questions', async (c) => {
  try {
    const type = c.req.query('type') || 'student_entry';
    
    // Sample questions (in production, would be in database)
    const questions = [
      { id: 1, question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4', category: 'Math' },
      { id: 2, question: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], correctAnswer: 'Paris', category: 'Geography' },
      { id: 3, question: 'What is 5 x 6?', options: ['25', '30', '35', '40'], correctAnswer: '30', category: 'Math' },
      { id: 4, question: 'Who wrote Romeo and Juliet?', options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'], correctAnswer: 'William Shakespeare', category: 'Literature' },
      { id: 5, question: 'What is the largest planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Jupiter', category: 'Science' },
      { id: 6, question: 'What is 12 - 7?', options: ['3', '4', '5', '6'], correctAnswer: '5', category: 'Math' },
      { id: 7, question: 'What color is the sky?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Blue', category: 'General' },
      { id: 8, question: 'How many days in a week?', options: ['5', '6', '7', '8'], correctAnswer: '7', category: 'General' },
      { id: 9, question: 'What is 10 / 2?', options: ['3', '4', '5', '6'], correctAnswer: '5', category: 'Math' },
      { id: 10, question: 'What is the opposite of hot?', options: ['Warm', 'Cold', 'Cool', 'Freezing'], correctAnswer: 'Cold', category: 'General' },
      { id: 11, question: 'What is 8 + 7?', options: ['14', '15', '16', '17'], correctAnswer: '15', category: 'Math' },
      { id: 12, question: 'What animal says "meow"?', options: ['Dog', 'Cat', 'Cow', 'Sheep'], correctAnswer: 'Cat', category: 'General' },
      { id: 13, question: 'What is 20 - 8?', options: ['10', '11', '12', '13'], correctAnswer: '12', category: 'Math' },
      { id: 14, question: 'How many months in a year?', options: ['10', '11', '12', '13'], correctAnswer: '12', category: 'General' },
      { id: 15, question: 'What is 3 x 4?', options: ['10', '11', '12', '13'], correctAnswer: '12', category: 'Math' },
      { id: 16, question: 'What do bees make?', options: ['Milk', 'Honey', 'Water', 'Juice'], correctAnswer: 'Honey', category: 'Science' },
      { id: 17, question: 'What is 16 / 4?', options: ['2', '3', '4', '5'], correctAnswer: '4', category: 'Math' },
      { id: 18, question: 'What shape has 3 sides?', options: ['Square', 'Circle', 'Triangle', 'Rectangle'], correctAnswer: 'Triangle', category: 'Math' },
      { id: 19, question: 'What is 9 + 6?', options: ['13', '14', '15', '16'], correctAnswer: '15', category: 'Math' },
      { id: 20, question: 'What color is grass?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Green', category: 'General' },
      { id: 21, question: 'What is 25 - 10?', options: ['13', '14', '15', '16'], correctAnswer: '15', category: 'Math' },
      { id: 22, question: 'How many legs does a spider have?', options: ['6', '7', '8', '9'], correctAnswer: '8', category: 'Science' },
      { id: 23, question: 'What is 7 x 3?', options: ['19', '20', '21', '22'], correctAnswer: '21', category: 'Math' },
      { id: 24, question: 'What is the opposite of up?', options: ['Left', 'Right', 'Down', 'Forward'], correctAnswer: 'Down', category: 'General' },
      { id: 25, question: 'What is 18 / 3?', options: ['4', '5', '6', '7'], correctAnswer: '6', category: 'Math' },
    ];

    return c.json({ questions, totalQuestions: 25 });
  } catch (error) {
    console.error('Get questions error:', error);
    return c.json({ error: 'Failed to load questions' }, 500);
  }
});

// Submit test
app.post('/make-server-5c52ac3e/test/submit', async (c) => {
  try {
    const { userId, answers, timeTaken, testType } = await c.req.json();

    // Get questions to check answers
    const questionsResponse = await fetch(`${c.req.url.split('/test/submit')[0]}/test/questions?type=${testType}`);
    const { questions } = await questionsResponse.json();

    // Calculate score
    let correctCount = 0;
    questions.forEach((q: any) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePercentage = (correctCount / 25) * 100;

    // Create test submission
    const submissionId = crypto.randomUUID();
    const submission = {
      id: submissionId,
      userId,
      testType,
      submittedAt: new Date().toISOString(),
      timeTaken,
      answers,
      correctAnswers: correctCount,
      wrongAnswers: 25 - correctCount,
      scorePercentage,
    };

    // Save submission
    await kv.set(`test:submission:${submissionId}`, submission);
    await kv.set(`test:user:${userId}`, submissionId);

    // Update user test score
    const user = await kv.get(`user:${userId}`);
    if (user) {
      user.testScore = correctCount;
      await kv.set(`user:${userId}`, user);
    }

    return c.json({
      success: true,
      submissionId,
      score: correctCount,
      totalQuestions: 25,
      percentage: scorePercentage,
    });
  } catch (error) {
    console.error('Submit test error:', error);
    return c.json({ error: 'Failed to submit test' }, 500);
  }
});

// ============ ADMIN ENDPOINTS ============

// Get pending applications
app.get('/make-server-5c52ac3e/admin/applications/pending', async (c) => {
  try {
    const type = c.req.query('type') || 'all';
    
    // Get all users with pending status
    const allKeys = await kv.getByPrefix('user:');
    const pendingApplications = [];

    for (const key of allKeys) {
      const user = await kv.get(key);
      if (user && user.status === 'pending') {
        if (type === 'all' || user.role === type) {
          // Get profile
          let profile = null;
          if (user.role === 'student') {
            profile = await kv.get(`student:profile:${user.id}`);
          } else if (user.role === 'teacher') {
            profile = await kv.get(`teacher:profile:${user.id}`);
          }

          // Get test submission
          const testSubmissionId = await kv.get(`test:user:${user.id}`);
          let testSubmission = null;
          if (testSubmissionId) {
            testSubmission = await kv.get(`test:submission:${testSubmissionId}`);
          }

          pendingApplications.push({
            ...user,
            profile,
            testSubmission,
          });
        }
      }
    }

    return c.json({ applications: pendingApplications });
  } catch (error) {
    console.error('Get pending applications error:', error);
    return c.json({ error: 'Failed to load applications' }, 500);
  }
});

// Approve application
app.post('/make-server-5c52ac3e/admin/applications/:id/approve', async (c) => {
  try {
    const applicationId = c.req.param('id');
    const { notes } = await c.req.json();

    // Get user
    const userId = await kv.get(`application:${applicationId}`);
    if (!userId) {
      return c.json({ error: 'Application not found' }, 404);
    }

    const user = await kv.get(`user:${userId}`);
    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    // Update status
    user.status = 'approved';
    user.updatedAt = new Date().toISOString();
    await kv.set(`user:${userId}`, user);

    // If student, assign to a teacher
    if (user.role === 'student') {
      // Find available teacher
      const allKeys = await kv.getByPrefix('user:');
      let assignedTeacherId = null;

      for (const key of allKeys) {
        const potentialTeacher = await kv.get(key);
        if (potentialTeacher && potentialTeacher.role === 'teacher' && potentialTeacher.status === 'approved') {
          const teacherProfile = await kv.get(`teacher:profile:${potentialTeacher.id}`);
          if (teacherProfile && teacherProfile.currentStudents < teacherProfile.maxStudents) {
            assignedTeacherId = potentialTeacher.id;
            // Update teacher's student count
            teacherProfile.currentStudents++;
            await kv.set(`teacher:profile:${potentialTeacher.id}`, teacherProfile);
            break;
          }
        }
      }

      // Assign teacher to student
      if (assignedTeacherId) {
        const studentProfile = await kv.get(`student:profile:${userId}`);
        if (studentProfile) {
          studentProfile.assignedTeacherId = assignedTeacherId;
          studentProfile.assignmentDate = new Date().toISOString();
          await kv.set(`student:profile:${userId}`, studentProfile);
        }
      }
    }

    return c.json({ success: true, message: 'Application approved' });
  } catch (error) {
    console.error('Approve application error:', error);
    return c.json({ error: 'Failed to approve application' }, 500);
  }
});

// Reject application
app.post('/make-server-5c52ac3e/admin/applications/:id/reject', async (c) => {
  try {
    const applicationId = c.req.param('id');
    const { reason } = await c.req.json();

    // Get user
    const userId = await kv.get(`application:${applicationId}`);
    if (!userId) {
      return c.json({ error: 'Application not found' }, 404);
    }

    const user = await kv.get(`user:${userId}`);
    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    // Update status
    user.status = 'rejected';
    user.rejectionReason = reason;
    user.updatedAt = new Date().toISOString();
    await kv.set(`user:${userId}`, user);

    return c.json({ success: true, message: 'Application rejected' });
  } catch (error) {
    console.error('Reject application error:', error);
    return c.json({ error: 'Failed to reject application' }, 500);
  }
});

// Get all users
app.get('/make-server-5c52ac3e/admin/users', async (c) => {
  try {
    const role = c.req.query('role');
    const status = c.req.query('status');

    const allKeys = await kv.getByPrefix('user:');
    const users = [];

    for (const key of allKeys) {
      // Skip email index keys
      if (key.includes('email:')) continue;
      
      const user = await kv.get(key);
      if (user && user.id) {
        if ((role && user.role !== role) || (status && user.status !== status)) {
          continue;
        }

        // Get profile
        let profile = null;
        if (user.role === 'student') {
          profile = await kv.get(`student:profile:${user.id}`);
        } else if (user.role === 'teacher') {
          profile = await kv.get(`teacher:profile:${user.id}`);
        }

        users.push({ ...user, profile });
      }
    }

    return c.json({ users, total: users.length });
  } catch (error) {
    console.error('Get users error:', error);
    return c.json({ error: 'Failed to load users' }, 500);
  }
});

// ============ MESSAGING ENDPOINTS ============

// Send message
app.post('/make-server-5c52ac3e/messages/send', async (c) => {
  try {
    const { senderId, receiverId, messageText } = await c.req.json();

    if (!messageText || messageText.trim().length === 0) {
      return c.json({ error: 'Message cannot be empty' }, 400);
    }

    // Create conversation ID (consistent for both directions)
    const ids = [senderId, receiverId].sort();
    const conversationId = `${ids[0]}_${ids[1]}`;

    // Create message
    const messageId = crypto.randomUUID();
    const message = {
      id: messageId,
      senderId,
      receiverId,
      messageText,
      conversationId,
      sentAt: new Date().toISOString(),
      isRead: false,
    };

    // Save message
    await kv.set(`message:${messageId}`, message);
    await kv.set(`conversation:${conversationId}:${Date.now()}`, messageId);

    return c.json({ success: true, messageId, message });
  } catch (error) {
    console.error('Send message error:', error);
    return c.json({ error: 'Failed to send message' }, 500);
  }
});

// Get conversation
app.get('/make-server-5c52ac3e/messages/:userId', async (c) => {
  try {
    const otherUserId = c.req.param('userId');
    const currentUserId = c.req.query('currentUserId');

    if (!currentUserId) {
      return c.json({ error: 'Current user ID required' }, 400);
    }

    // Create conversation ID
    const ids = [currentUserId, otherUserId].sort();
    const conversationId = `${ids[0]}_${ids[1]}`;

    // Get all messages in conversation
    const conversationKeys = await kv.getByPrefix(`conversation:${conversationId}:`);
    const messages = [];

    for (const key of conversationKeys) {
      const messageId = await kv.get(key);
      if (messageId) {
        const message = await kv.get(`message:${messageId}`);
        if (message) {
          messages.push(message);
        }
      }
    }

    // Sort by sent time
    messages.sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime());

    // Mark messages as read
    for (const message of messages) {
      if (message.receiverId === currentUserId && !message.isRead) {
        message.isRead = true;
        await kv.set(`message:${message.id}`, message);
      }
    }

    return c.json({ messages, totalCount: messages.length });
  } catch (error) {
    console.error('Get conversation error:', error);
    return c.json({ error: 'Failed to load messages' }, 500);
  }
});

// Get unread count
app.get('/make-server-5c52ac3e/messages/unread/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');

    // Get all messages
    const allMessageKeys = await kv.getByPrefix('message:');
    let unreadCount = 0;

    for (const key of allMessageKeys) {
      const message = await kv.get(key);
      if (message && message.receiverId === userId && !message.isRead) {
        unreadCount++;
      }
    }

    return c.json({ unreadCount });
  } catch (error) {
    console.error('Get unread count error:', error);
    return c.json({ error: 'Failed to load unread count' }, 500);
  }
});

// ============ DASHBOARD ENDPOINTS ============

// Get student dashboard data
app.get('/make-server-5c52ac3e/dashboard/student/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');

    const user = await kv.get(`user:${userId}`);
    const profile = await kv.get(`student:profile:${userId}`);

    // Get teacher info
    let teacher = null;
    let teacherProfile = null;
    if (profile && profile.assignedTeacherId) {
      teacher = await kv.get(`user:${profile.assignedTeacherId}`);
      teacherProfile = await kv.get(`teacher:profile:${profile.assignedTeacherId}`);
    }

    // Get test results
    const testSubmissionId = await kv.get(`test:user:${userId}`);
    let testSubmission = null;
    if (testSubmissionId) {
      testSubmission = await kv.get(`test:submission:${testSubmissionId}`);
    }

    // Get unread messages
    const allMessageKeys = await kv.getByPrefix('message:');
    let unreadCount = 0;
    for (const key of allMessageKeys) {
      const message = await kv.get(key);
      if (message && message.receiverId === userId && !message.isRead) {
        unreadCount++;
      }
    }

    return c.json({
      user,
      profile,
      teacher: teacher ? { ...teacher, profile: teacherProfile } : null,
      testSubmission,
      unreadMessages: unreadCount,
    });
  } catch (error) {
    console.error('Get student dashboard error:', error);
    return c.json({ error: 'Failed to load dashboard' }, 500);
  }
});

// Get teacher dashboard data
app.get('/make-server-5c52ac3e/dashboard/teacher/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');

    const user = await kv.get(`user:${userId}`);
    const profile = await kv.get(`teacher:profile:${userId}`);

    // Get assigned students
    const allKeys = await kv.getByPrefix('student:profile:');
    const students = [];

    for (const key of allKeys) {
      const studentProfile = await kv.get(key);
      if (studentProfile && studentProfile.assignedTeacherId === userId) {
        const student = await kv.get(`user:${studentProfile.userId}`);
        if (student) {
          students.push({ ...student, profile: studentProfile });
        }
      }
    }

    return c.json({
      user,
      profile,
      students,
    });
  } catch (error) {
    console.error('Get teacher dashboard error:', error);
    return c.json({ error: 'Failed to load dashboard' }, 500);
  }
});

// Health check
app.get('/make-server-5c52ac3e/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);