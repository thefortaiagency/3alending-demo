-- 3A Lending CMS Database Schema
-- This creates all necessary tables for content management

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'editor',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Pages table for dynamic content
CREATE TABLE IF NOT EXISTS pages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  og_image VARCHAR(500),
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  template VARCHAR(50) DEFAULT 'default',
  page_order INTEGER DEFAULT 0,
  created_by UUID REFERENCES admin_users(id),
  updated_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image VARCHAR(500),
  category VARCHAR(100),
  tags TEXT[],
  meta_title VARCHAR(255),
  meta_description TEXT,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  view_count INTEGER DEFAULT 0,
  author_id UUID REFERENCES admin_users(id),
  created_by UUID REFERENCES admin_users(id),
  updated_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Loan products table (editable through CMS)
CREATE TABLE IF NOT EXISTS loan_products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  short_description TEXT,
  long_description TEXT,
  icon_url VARCHAR(500),
  min_amount DECIMAL(15,2),
  max_amount DECIMAL(15,2),
  min_rate DECIMAL(5,2),
  max_rate DECIMAL(5,2),
  term_options VARCHAR(255),
  features TEXT[],
  requirements TEXT[],
  use_cases TEXT[],
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
  updated_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Media library table
CREATE TABLE IF NOT EXISTS media (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255),
  file_path VARCHAR(500) NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  file_type VARCHAR(50),
  file_size INTEGER,
  width INTEGER,
  height INTEGER,
  alt_text VARCHAR(255),
  caption TEXT,
  uploaded_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type VARCHAR(50) DEFAULT 'text',
  description TEXT,
  updated_by UUID REFERENCES admin_users(id),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Navigation menus
CREATE TABLE IF NOT EXISTS navigation_menus (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  menu_name VARCHAR(100) NOT NULL,
  menu_location VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Navigation menu items
CREATE TABLE IF NOT EXISTS navigation_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  menu_id UUID REFERENCES navigation_menus(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES navigation_items(id),
  label VARCHAR(255) NOT NULL,
  url VARCHAR(500),
  page_id UUID REFERENCES pages(id),
  target VARCHAR(20) DEFAULT '_self',
  css_class VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Form submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  form_type VARCHAR(50) NOT NULL,
  form_data JSONB NOT NULL,
  ip_address INET,
  user_agent TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_published ON pages(is_published, published_at);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published, published_at);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_loan_products_slug ON loan_products(slug);
CREATE INDEX idx_loan_products_active ON loan_products(is_active);
CREATE INDEX idx_media_uploaded_by ON media(uploaded_by);
CREATE INDEX idx_form_submissions_type ON form_submissions(form_type, created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to tables
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_loan_products_updated_at BEFORE UPDATE ON loan_products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user (password: admin123 - change immediately!)
-- Password hash is for bcrypt with 10 rounds
INSERT INTO admin_users (email, password_hash, full_name, role) 
VALUES (
  'admin@3alending.com',
  '$2a$10$YourHashHere', -- Replace with actual bcrypt hash
  '3A Lending Admin',
  'super_admin'
) ON CONFLICT (email) DO NOTHING;

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES
  ('site_name', '3A Lending LLC', 'text', 'Website name'),
  ('site_tagline', 'Making Small Business Dreams A Reality Nationwide', 'text', 'Website tagline'),
  ('contact_email', 'info@3alending.com', 'email', 'Primary contact email'),
  ('contact_phone', '1-260-123-4567', 'tel', 'Primary contact phone'),
  ('google_analytics', '', 'text', 'Google Analytics ID'),
  ('facebook_pixel', '', 'text', 'Facebook Pixel ID'),
  ('default_meta_description', 'Expert commercial lending and SBA loans for small businesses nationwide.', 'textarea', 'Default meta description')
ON CONFLICT (setting_key) DO NOTHING;

-- Insert current loan products
INSERT INTO loan_products (slug, name, short_description, min_amount, max_amount, min_rate, term_options, features, display_order) VALUES
  ('sba-504-loans', 'SBA 504 Loans', 'Commercial real estate and equipment financing', 50000, 5500000, 6.5, '10, 20, or 25 years', ARRAY['Fixed interest rates', 'Long-term financing', '90% financing available', 'No prepayment penalties'], 1),
  ('sba-7a-loans', 'SBA 7(a) Loans', 'Versatile business financing for various needs', 25000, 5000000, 7.0, 'Up to 25 years', ARRAY['Flexible use of funds', 'Longer repayment terms', 'Lower down payments', 'No collateral required for loans under $25,000'], 2),
  ('equipment-financing', 'Equipment Financing', 'Finance essential business equipment', 5000, 1000000, 8.5, '2-7 years', ARRAY['100% financing available', 'Preserve working capital', 'Fast approval process'], 3),
  ('business-lines-of-credit', 'Business Lines of Credit', 'Flexible working capital for ongoing needs', 25000, 500000, 9.0, '12 months renewable', ARRAY['Only pay interest on what you use', 'Revolving credit', '24/7 online access'], 4),
  ('commercial-real-estate-loans', 'Commercial Real Estate Loans', 'Finance commercial property purchases and improvements', 100000, 5000000, 6.8, '15-25 years', ARRAY['Competitive fixed and variable rates', 'Up to 80% loan-to-value'], 5),
  ('business-acquisition-loans', 'Business Acquisition Loans', 'Finance the purchase of existing businesses', 50000, 5000000, 7.5, '5-25 years', ARRAY['Finance up to 90% of purchase price', 'Include working capital in loan'], 6)
ON CONFLICT (slug) DO NOTHING;