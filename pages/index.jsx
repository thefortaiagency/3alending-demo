import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, ClipboardList } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import AIAssistant from '../components/AIAssistant';
import MobileMenu from '../components/MobileMenu';
import TaskCreator from '../components/TaskCreator';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);

  const features = [
    {
      icon: <Image src="/images/sbaloan.jpg" width={60} height={60} alt="SBA 504 Loans" className="rounded-lg" />,
      title: "SBA 504 Loans Nationwide",
      description: "Get approved for commercial real estate financing anywhere in the USA in as little as 24 hours"
    },
    {
      icon: <Image src="/images/sba7aIcon.jpg" width={60} height={60} alt="SBA 7a Loans" className="rounded-lg" />,
      title: "SBA 7(a) Loans USA", 
      description: "Competitive rates starting at 6.5% APR for small businesses across America"
    },
    {
      icon: <Image src="/images/icon-improvements.png" width={60} height={60} alt="Tenant Improvements" className="rounded-lg" />,
      title: "Commercial Property Financing",
      description: "Tenant improvements and commercial renovation loans for properties nationwide"
    },
    {
      icon: <Image src="/images/placeholder-support.jpg" width={60} height={60} alt="Expert Support" className="rounded-lg" />,
      title: "National Lending Experts",
      description: "Experienced loan specialists serving businesses in all 50 states with personalized solutions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Manufacturing, Texas",
      quote: "3A Lending helped us secure $500K for equipment expansion. Their nationwide reach and digital process made everything seamless.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      company: "Tech Innovations LLC, California",
      quote: "Fast approval and competitive rates. Their online application process works perfectly for busy entrepreneurs.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Chen's Restaurant Group, New York", 
      quote: "Professional service across state lines. They understand the unique needs of businesses nationwide.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>SBA Loans Nationwide | Commercial Business Lending | 3A Lending LLC</title>
        <meta name="description" content="Expert SBA loans and commercial lending nationwide. Get approved in 24 hours for SBA 504, 7(a) loans, equipment financing, and business lines of credit anywhere in the USA. Competitive rates starting at 6.5% APR." />
        <meta name="keywords" content="SBA loans nationwide, commercial lending USA, business loans America, SBA 504 loans, SBA 7a loans, equipment financing, commercial real estate loans, small business financing, national business lending, online SBA loans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="SBA Loans Nationwide | 3A Lending LLC" />
        <meta property="og:description" content="Fast SBA loan approvals nationwide. Expert commercial lending with rates from 6.5% APR. Get pre-qualified in 24 hours from anywhere in the USA." />
        <meta property="og:url" content="https://www.3alending.com" />
        <meta property="og:image" content="https://www.3alending.com/images/3A_Logo.jpg" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content="SBA Loans Nationwide | 3A Lending LLC" />
        <meta name="twitter:description" content="Fast SBA loan approvals nationwide. Expert commercial lending with rates from 6.5% APR." />
        <meta name="twitter:image" content="https://www.3alending.com/images/3A_Logo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.3alending.com" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-3 sm:py-4 md:py-4 relative min-h-[64px] sm:min-h-[72px]">
              {/* Logo - Positioned absolutely on the left */}
              <div className="absolute left-0 flex items-center space-x-2 sm:space-x-3">
                <Image src="/images/3A_Logo.jpg" width={48} height={48} alt="3A Lending LLC Logo" className="rounded-lg sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px]" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">3A Lending</div>
              </div>
              
              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('home')}
                    className={`px-3 py-2 rounded-lg transition-all ${
                      activeTab === 'home' 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                    }`}
                  >
                    Home
                  </button>
                  <a href="/about" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">About</a>
                  <a href="/services" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">Services</a>
                  <a href="/contact" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">Contact</a>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-3 py-2 rounded-lg transition-all ${
                      activeTab === 'ai' 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                    }`}
                  >
                    AI Assistant
                  </button>
                </div>
              </div>

              {/* Apply Now Button - Positioned absolutely on the right */}
              <a href="/apply" className="absolute right-0 hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all">
                Apply Now
              </a>

              {/* Mobile Navigation - Keep at right on mobile */}
              <div className="absolute right-0 flex items-center space-x-2 md:hidden">
                <a href="/apply" className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold">
                  Apply
                </a>
                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'home' && (
            <>
              {/* Hero Section */}
              <div className="relative text-center py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white rounded-xl">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 rounded-xl">
                  <Image 
                    src="/images/bigbuilding.jpg" 
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Modern commercial building" 
                    className="rounded-xl"
                  />
                </div>
                <div className="relative z-10 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Making Small Business 
                  <span className="block text-blue-600">
                    Dreams A Reality Nationwide
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                  Empowering businesses across America with strategic SBA loans and commercial financing solutions. 
                  From startup capital to expansion funding, we streamline the lending process with nationwide expertise and personalized service 
                  tailored to businesses in all 50 states.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                  <a href="/apply" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center">
                    Get Pre-Qualified
                    <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                  <a href="/services" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
                    Learn More
                  </a>
                </div>
                </div>
              </div>

              {/* Features */}
              <div className="py-12 sm:py-16 md:py-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">Why Businesses Across America Choose 3A Lending</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="py-8 sm:py-12 md:py-16 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center px-4">
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">$50M+</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Funded Nationwide</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Businesses Helped Nationwide</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">24hrs</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Average Approval Time</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">94%</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Approval Rate</div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="py-12 sm:py-16 md:py-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">What Business Owners Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">"{testimonial.quote}"</p>
                      <div className="border-t border-gray-200 pt-3 sm:pt-4">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-blue-600 text-sm sm:text-base">{testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'ai' && (
            <div className="py-8">
              <AIAssistant />
            </div>
          )}

        </div>

        {/* Live Chat Widget */}
        <LiveChat />

        {/* Task Creator Button */}
        <button
          onClick={() => setIsTaskCreatorOpen(true)}
          className="fixed bottom-6 left-6 w-16 h-16 bg-green-600 rounded-full shadow-lg hover:shadow-xl hover:bg-green-700 transition-all flex items-center justify-center group z-40"
          title="Create Task in Command Center"
        >
          <ClipboardList className="w-8 h-8 text-white" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Create Task
          </span>
        </button>

        {/* Task Creator Modal */}
        <TaskCreator 
          isOpen={isTaskCreatorOpen}
          onClose={() => setIsTaskCreatorOpen(false)}
        />
      </div>
    </>
  );
}