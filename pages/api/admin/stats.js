const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware to verify JWT token
const verifyToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify authentication
  const decoded = verifyToken(req);
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Fetch counts from each table
    const [pages, posts, products, submissions] = await Promise.all([
      supabase.from('pages').select('id', { count: 'exact' }),
      supabase.from('blog_posts').select('id', { count: 'exact' }),
      supabase.from('loan_products').select('id', { count: 'exact' }),
      supabase.from('form_submissions').select('id', { count: 'exact' })
    ]);

    return res.status(200).json({
      totalPages: pages.count || 0,
      totalPosts: posts.count || 0,
      totalProducts: products.count || 6, // Default to 6 if table doesn't exist yet
      totalSubmissions: submissions.count || 0
    });

  } catch (error) {
    console.error('Stats error:', error);
    // Return default values if tables don't exist yet
    return res.status(200).json({
      totalPages: 0,
      totalPosts: 0,
      totalProducts: 6,
      totalSubmissions: 0
    });
  }
}

module.exports = handler;
