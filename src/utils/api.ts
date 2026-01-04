import { projectId, publicAnonKey } from './supabase/info.tsx';
import { 
  mockAuthApi, 
  mockTestApi, 
  mockAdminApi, 
  mockMessageApi, 
  mockDashboardApi 
} from './mockApi';

// PROTOTYPE MODE: Set to true to use mock API (no backend needed)
// Set to false when you deploy Supabase Edge Functions
const USE_MOCK_API = true;

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-5c52ac3e`;

interface ApiOptions {
  method?: string;
  body?: any;
  token?: string;
}

async function apiCall(endpoint: string, options: ApiOptions = {}) {
  const { method = 'GET', body, token } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token || publicAnonKey}`,
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (body && method !== 'GET') {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

// Auth APIs
export const authApi = USE_MOCK_API ? mockAuthApi : {
  registerStudent: (data: any) => apiCall('/auth/register-student', { method: 'POST', body: data }),
  registerTeacher: (data: any) => apiCall('/auth/register-teacher', { method: 'POST', body: data }),
  login: (email: string, password: string) => apiCall('/auth/login', { method: 'POST', body: { email, password } }),
};

// Test APIs
export const testApi = USE_MOCK_API ? mockTestApi : {
  getQuestions: (type: string = 'student_entry') => apiCall(`/test/questions?type=${type}`),
  submitTest: (data: any) => apiCall('/test/submit', { method: 'POST', body: data }),
};

// Admin APIs
export const adminApi = USE_MOCK_API ? mockAdminApi : {
  getPendingApplications: (type: string = 'all') => apiCall(`/admin/applications/pending?type=${type}`),
  approveApplication: (applicationId: string, notes: string) => 
    apiCall(`/admin/applications/${applicationId}/approve`, { method: 'POST', body: { notes } }),
  rejectApplication: (applicationId: string, reason: string) => 
    apiCall(`/admin/applications/${applicationId}/reject`, { method: 'POST', body: { reason } }),
  getUsers: (role?: string, status?: string) => {
    const params = new URLSearchParams();
    if (role) params.append('role', role);
    if (status) params.append('status', status);
    return apiCall(`/admin/users?${params.toString()}`);
  },
};

// Message APIs
export const messageApi = USE_MOCK_API ? mockMessageApi : {
  sendMessage: (senderId: string, receiverId: string, messageText: string) => 
    apiCall('/messages/send', { method: 'POST', body: { senderId, receiverId, messageText } }),
  getConversation: (otherUserId: string, currentUserId: string) => 
    apiCall(`/messages/${otherUserId}?currentUserId=${currentUserId}`),
  getUnreadCount: (userId: string) => apiCall(`/messages/unread/${userId}`),
};

// Dashboard APIs
export const dashboardApi = USE_MOCK_API ? mockDashboardApi : {
  getStudentDashboard: (userId: string) => apiCall(`/dashboard/student/${userId}`),
  getTeacherDashboard: (userId: string) => apiCall(`/dashboard/teacher/${userId}`),
};
