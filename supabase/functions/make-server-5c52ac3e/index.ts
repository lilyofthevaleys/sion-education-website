import { Hono } from 'https://deno.land/x/hono@v4.0.0/mod.ts';
import { cors } from 'https://deno.land/x/hono@v4.0.0/middleware.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const app = new Hono();

// CORS middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Helper functions
function hashPassword(password: string): string {
  return btoa(password);
}

function verifyPassword(password: string, hash: string): boolean {
  return btoa(password) === hash;
}

function generateApplicationId(role: string): string {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  const prefix = role === 'teacher' ? 'T' : 'S';
  return `SION-${prefix}-${year}-${random}`;
}

// ============ AUTH ENDPOINTS ============

// Register Student
app.post('/auth/register-student', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, fullName, age, gradeLevel, schoolName, parentName, parentPhone, parentEmail, address, city, phone } = body;

    // Check if email exists in users table
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return c.json({ error: 'Email already registered' }, 400);
    }

    // Create user
    const userId = crypto.randomUUID();
    const applicationId = generateApplicationId('student');
    
    const { error: userError } = await supabase
      .from('users')
      .insert({
        id: userId,
        email,
        password_hash: hashPassword(password),
        role: 'student',
        status: 'pending',
        full_name: fullName,
        phone,
        application_id: applicationId,
      });

    if (userError) {
      console.error('User insert error:', userError);
      return c.json({ error: 'Failed to create user' }, 500);
    }

    // Create student profile
    const { error: profileError } = await supabase
      .from('student_profiles')
      .insert({
        user_id: userId,
        age,
        grade_level: gradeLevel,
        school_name: schoolName,
        parent_name: parentName,
        parent_phone: parentPhone,
        parent_email: parentEmail,
        address,
        city,
        total_lessons: 0,
        completed_lessons: 0,
        current_level: 'Beginner',
      });

    if (profileError) {
      console.error('Profile insert error:', profileError);
      return c.json({ error: 'Failed to create profile' }, 500);
    }

    return c.json({ userId, applicationId, success: true });
  } catch (error) {
    console.error('Register student error:', error);
    return c.json({ error: 'Registration failed', details: error.message }, 500);
  }
});

// Register Teacher
app.post('/auth/register-teacher', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, fullName, phone, qualifications, experience, specialization, hourlyRate, availability } = body;

    // Check if email exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return c.json({ error: 'Email already registered' }, 400);
    }

    // Create user
    const userId = crypto.randomUUID();
    const applicationId = generateApplicationId('teacher');

    const { error: userError } = await supabase
      .from('users')
      .insert({
        id: userId,
        email,
        password_hash: hashPassword(password),
        role: 'teacher',
        status: 'pending',
        full_name: fullName,
        phone,
        application_id: applicationId,
      });

    if (userError) {
      return c.json({ error: 'Failed to create user' }, 500);
    }

    // Create teacher profile
    const { error: profileError } = await supabase
      .from('teacher_profiles')
      .insert({
        user_id: userId,
        qualifications,
        experience,
        specialization,
        hourly_rate: hourlyRate,
        availability,
        total_students: 0,
        active_students: 0,
        rating: 0,
      });

    if (profileError) {
      return c.json({ error: 'Failed to create profile' }, 500);
    }

    return c.json({ userId, applicationId, success: true });
  } catch (error) {
    console.error('Register teacher error:', error);
    return c.json({ error: 'Registration failed' }, 500);
  }
});

// Login
app.post('/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json();

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }

    if (!verifyPassword(password, user.password_hash)) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }

    return c.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status,
        fullName: user.full_name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Login failed' }, 500);
  }
});

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch all
app.all('*', (c) => {
  return c.json({ error: 'Not found' }, 404);
});

Deno.serve(app.fetch);
