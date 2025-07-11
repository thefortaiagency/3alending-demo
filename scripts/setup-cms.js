const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Initialize Supabase client with service key for admin operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nopyaafyvxiggvklonqy.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vcHlhYWZ5dnhpZ2d2a2xvbnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwODE0MDksImV4cCI6MjA2NTY1NzQwOX0.9yEHMo7CD0dAofNwAxXRn8M71eoFfmwHYjDDSUmdaKk'
);

async function setupCMS() {
  console.log('🚀 Setting up CMS for 3A Lending...\n');

  try {
    // First, let's check if the admin_users table exists
    const { data: tables, error: tableError } = await supabase
      .from('admin_users')
      .select('id')
      .limit(1);

    if (tableError && tableError.code === '42P01') {
      console.log('❌ Tables not found. Please run the SQL schema first.');
      console.log('\nTo set up the database:');
      console.log('1. Go to your Supabase dashboard');
      console.log('2. Navigate to SQL Editor');
      console.log('3. Copy and paste the contents of sql/cms-schema.sql');
      console.log('4. Run the SQL');
      console.log('5. Then run this script again\n');
      return;
    }

    // Hash the default password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Check if admin user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('admin_users')
      .select('id')
      .eq('email', 'admin@3alending.com')
      .single();

    if (existingUser) {
      console.log('✅ Admin user already exists');
      
      // Update the password to ensure it works
      const { error: updateError } = await supabase
        .from('admin_users')
        .update({ 
          password_hash: hashedPassword,
          is_active: true 
        })
        .eq('email', 'admin@3alending.com');

      if (updateError) {
        console.error('Error updating admin user:', updateError);
      } else {
        console.log('✅ Admin password updated');
      }
    } else {
      // Create admin user
      const { data: newUser, error: createError } = await supabase
        .from('admin_users')
        .insert({
          email: 'admin@3alending.com',
          password_hash: hashedPassword,
          full_name: '3A Lending Admin',
          role: 'super_admin',
          is_active: true
        })
        .select()
        .single();

      if (createError) {
        console.error('Error creating admin user:', createError);
      } else {
        console.log('✅ Admin user created successfully');
      }
    }

    // Check if loan products exist
    const { data: products, error: productsError } = await supabase
      .from('loan_products')
      .select('id')
      .limit(1);

    if (!products || products.length === 0) {
      console.log('📦 Setting up default loan products...');
      
      const defaultProducts = [
        {
          slug: 'sba-504-loans',
          name: 'SBA 504 Loans',
          short_description: 'Commercial real estate and equipment financing',
          min_amount: 50000,
          max_amount: 5500000,
          min_rate: 6.5,
          term_options: '10, 20, or 25 years',
          features: ['Fixed interest rates', 'Long-term financing', '90% financing available', 'No prepayment penalties'],
          display_order: 1,
          is_active: true
        },
        {
          slug: 'sba-7a-loans',
          name: 'SBA 7(a) Loans',
          short_description: 'Versatile business financing for various needs',
          min_amount: 25000,
          max_amount: 5000000,
          min_rate: 7.0,
          term_options: 'Up to 25 years',
          features: ['Flexible use of funds', 'Longer repayment terms', 'Lower down payments', 'No collateral required for loans under $25,000'],
          display_order: 2,
          is_active: true
        },
        {
          slug: 'equipment-financing',
          name: 'Equipment Financing',
          short_description: 'Finance essential business equipment',
          min_amount: 5000,
          max_amount: 1000000,
          min_rate: 8.5,
          term_options: '2-7 years',
          features: ['100% financing available', 'Preserve working capital', 'Fast approval process'],
          display_order: 3,
          is_active: true
        },
        {
          slug: 'business-lines-of-credit',
          name: 'Business Lines of Credit',
          short_description: 'Flexible working capital for ongoing needs',
          min_amount: 25000,
          max_amount: 500000,
          min_rate: 9.0,
          term_options: '12 months renewable',
          features: ['Only pay interest on what you use', 'Revolving credit', '24/7 online access'],
          display_order: 4,
          is_active: true
        },
        {
          slug: 'commercial-real-estate-loans',
          name: 'Commercial Real Estate Loans',
          short_description: 'Finance commercial property purchases and improvements',
          min_amount: 100000,
          max_amount: 5000000,
          min_rate: 6.8,
          term_options: '15-25 years',
          features: ['Competitive fixed and variable rates', 'Up to 80% loan-to-value'],
          display_order: 5,
          is_active: true
        },
        {
          slug: 'business-acquisition-loans',
          name: 'Business Acquisition Loans',
          short_description: 'Finance the purchase of existing businesses',
          min_amount: 50000,
          max_amount: 5000000,
          min_rate: 7.5,
          term_options: '5-25 years',
          features: ['Finance up to 90% of purchase price', 'Include working capital in loan'],
          display_order: 6,
          is_active: true
        }
      ];

      const { error: productsInsertError } = await supabase
        .from('loan_products')
        .insert(defaultProducts);

      if (productsInsertError) {
        console.error('Error inserting products:', productsInsertError);
      } else {
        console.log('✅ Default loan products created');
      }
    }

    console.log('\n🎉 CMS Setup Complete!\n');
    console.log('You can now log in at: /admin/login');
    console.log('Email: admin@3alending.com');
    console.log('Password: admin123');
    console.log('\n⚠️  IMPORTANT: Change the password after first login!');

  } catch (error) {
    console.error('Setup error:', error);
  }
}

// Run the setup
setupCMS();