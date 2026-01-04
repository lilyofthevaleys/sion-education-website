// Mock API for prototype - simulates backend responses
// This allows the app to work without deploying Supabase Edge Functions

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate mock IDs
function generateId() {
  return crypto.randomUUID();
}

function generateApplicationId(role: string) {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  const prefix = role === 'teacher' ? 'T' : 'S';
  return `SION-${prefix}-${year}-${random}`;
}

// Store data in localStorage for prototype
const storage = {
  getUsers: () => JSON.parse(localStorage.getItem('mock_users') || '[]'),
  setUsers: (users: any[]) => localStorage.setItem('mock_users', JSON.stringify(users)),
  getUser: (email: string) => {
    const users = storage.getUsers();
    return users.find((u: any) => u.email === email);
  },
  addUser: (user: any) => {
    const users = storage.getUsers();
    users.push(user);
    storage.setUsers(users);
  }
};

// Mock Auth APIs
export const mockAuthApi = {
  registerStudent: async (data: any) => {
    await delay(500); // Simulate network delay
    
    // Check if email exists
    if (storage.getUser(data.email)) {
      return { error: 'Email already registered', success: false };
    }
    
    const userId = generateId();
    const applicationId = generateApplicationId('student');
    
    const user = {
      id: userId,
      email: data.email,
      role: 'student',
      status: 'pending',
      fullName: data.fullName,
      applicationId,
      ...data
    };
    
    storage.addUser(user);
    
    return { userId, applicationId, success: true };
  },
  
  registerTeacher: async (data: any) => {
    await delay(500);
    
    if (storage.getUser(data.email)) {
      return { error: 'Email already registered', success: false };
    }
    
    const userId = generateId();
    const applicationId = generateApplicationId('teacher');
    
    const user = {
      id: userId,
      email: data.email,
      role: 'teacher',
      status: 'pending',
      fullName: data.fullName,
      applicationId,
      ...data
    };
    
    storage.addUser(user);
    
    return { userId, applicationId, success: true };
  },
  
  login: async (email: string, password: string) => {
    await delay(500);
    
    const user = storage.getUser(email);
    
    if (!user) {
      return { error: 'Invalid credentials', success: false };
    }
    
    // For prototype, accept any password
    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status,
        fullName: user.fullName,
      },
    };
  },
};

// Mock Test APIs
export const mockTestApi = {
  getQuestions: async (type: string = 'student_entry') => {
    await delay(300);
    
    // Return some sample questions
    return {
      success: true,
      questions: [
        {
          id: '1',
          question_text: 'What is 5 + 7?',
          options: ['10', '11', '12', '13'],
          correct_answer: '12',
        },
        {
          id: '2',
          question_text: 'What is the capital of France?',
          options: ['London', 'Paris', 'Berlin', 'Madrid'],
          correct_answer: 'Paris',
        },
        {
          id: '3',
          question_text: 'What is 3 × 4?',
          options: ['7', '10', '12', '15'],
          correct_answer: '12',
        },
      ],
    };
  },
  
  submitTest: async (data: any) => {
    await delay(500);
    
    return {
      success: true,
      score: data.score || 0,
      message: 'Test submitted successfully',
    };
  },
};

// Mock Admin APIs
export const mockAdminApi = {
  getPendingApplications: async (type: string = 'all') => {
    await delay(300);
    return { success: true, applications: [] };
  },
  
  approveApplication: async (applicationId: string, notes: string) => {
    await delay(500);
    return { success: true };
  },
  
  rejectApplication: async (applicationId: string, reason: string) => {
    await delay(500);
    return { success: true };
  },
  
  getUsers: async (role?: string, status?: string) => {
    await delay(300);
    const users = storage.getUsers();
    return { success: true, users };
  },
};

// Mock Message APIs
export const mockMessageApi = {
  sendMessage: async (senderId: string, receiverId: string, messageText: string) => {
    await delay(300);
    return { success: true };
  },
  
  getConversation: async (otherUserId: string, currentUserId: string) => {
    await delay(300);
    return { success: true, messages: [] };
  },
  
  getUnreadCount: async (userId: string) => {
    await delay(200);
    return { success: true, count: 0 };
  },
};

// Mock Dashboard APIs
export const mockDashboardApi = {
  getStudentDashboard: async (userId: string) => {
    await delay(300);
    return {
      success: true,
      dashboard: {
        totalLessons: 0,
        completedLessons: 0,
        currentLevel: 'Beginner',
      },
    };
  },
  
  getTeacherDashboard: async (userId: string) => {
    await delay(300);
    return {
      success: true,
      dashboard: {
        totalStudents: 0,
        activeStudents: 0,
        rating: 0,
      },
    };
  },
};
