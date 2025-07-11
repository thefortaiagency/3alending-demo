import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { 
  LayoutDashboard, FileText, Package, Image as ImageIcon, 
  Settings, LogOut, Menu, X, Plus, Edit, Trash2, Eye,
  TrendingUp, Users, DollarSign, FileCheck
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalPages: 0,
    totalPosts: 0,
    totalProducts: 0,
    totalSubmissions: 0
  });

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Fetch dashboard stats
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'pages', label: 'Pages', icon: FileText },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'products', label: 'Loan Products', icon: Package },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
    { id: 'settings', label: 'Site Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview stats={stats} />;
      case 'pages':
        return <PagesManager />;
      case 'blog':
        return <BlogManager />;
      case 'products':
        return <ProductsManager />;
      case 'media':
        return <MediaLibrary />;
      case 'settings':
        return <SiteSettings />;
      default:
        return <DashboardOverview stats={stats} />;
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard - 3A Lending CMS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-700 lg:hidden"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <Image 
                  src="/images/3A_Logo.jpg" 
                  width={40} 
                  height={40} 
                  alt="3A Lending" 
                  className="ml-4 rounded-lg"
                />
                <h1 className="ml-3 text-xl font-semibold text-gray-900">CMS Dashboard</h1>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex h-screen pt-16">
          {/* Sidebar */}
          <aside className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:block bg-white w-64 min-h-screen fixed lg:relative border-r border-gray-200 z-30`}>
            <nav className="mt-5 px-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full mb-1 ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="p-8">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// Dashboard Overview Component
function DashboardOverview({ stats }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Pages"
          value={stats.totalPages}
          icon={FileText}
          color="blue"
        />
        <StatCard
          title="Blog Posts"
          value={stats.totalPosts}
          icon={FileText}
          color="green"
        />
        <StatCard
          title="Loan Products"
          value={stats.totalProducts}
          icon={Package}
          color="purple"
        />
        <StatCard
          title="Form Submissions"
          value={stats.totalSubmissions}
          icon={FileCheck}
          color="orange"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Create New Page
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Write Blog Post
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Add Loan Product
          </button>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, icon: Icon, color }) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

// Pages Manager Component (placeholder)
function PagesManager() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pages</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Create Page
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <p className="p-6 text-gray-500">Page management interface coming soon...</p>
      </div>
    </div>
  );
}

// Blog Manager Component (placeholder)
function BlogManager() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          New Post
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <p className="p-6 text-gray-500">Blog management interface coming soon...</p>
      </div>
    </div>
  );
}

// Products Manager Component (placeholder)
function ProductsManager() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Loan Products</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <p className="p-6 text-gray-500">Product management interface coming soon...</p>
      </div>
    </div>
  );
}

// Media Library Component (placeholder)
function MediaLibrary() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Upload Media
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <p className="p-6 text-gray-500">Media library interface coming soon...</p>
      </div>
    </div>
  );
}

// Site Settings Component (placeholder)
function SiteSettings() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Site Settings</h2>
      <div className="bg-white rounded-lg shadow">
        <p className="p-6 text-gray-500">Settings management interface coming soon...</p>
      </div>
    </div>
  );
}