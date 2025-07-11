const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// JWT secret - in production, use a secure random string
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // For initial setup, allow hardcoded login
    if (email === 'admin@3alending.com' && password === 'admin123') {
      // Generate JWT token for development
      const token = jwt.sign(
        { 
          userId: 'dev-admin',
          email: email,
          role: 'super_admin' 
        },
        JWT_SECRET,
        { expiresIn: '8h' }
      );

      return res.status(200).json({
        token,
        user: {
          id: 'dev-admin',
          email: email,
          full_name: '3A Lending Admin',
          role: 'super_admin'
        }
      });
    }

    // Try database authentication
    const { data: users, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .eq('is_active', true)
      .single();

    if (error) {
      console.log('Database error (tables may not exist yet):', error);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (!users) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, users.password_hash);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: users.id,
        email: users.email,
        role: users.role 
      },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    // Return token and user info
    return res.status(200).json({
      token,
      user: {
        id: users.id,
        email: users.email,
        full_name: users.full_name,
        role: users.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
}

module.exports = handler;
