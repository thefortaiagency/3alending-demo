import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Users, Award, TrendingUp, CheckCircle, ClipboardList } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import TaskCreator from '../components/TaskCreator';
import AIAssistant from '../components/AIAssistant';

export default function About() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We believe in transparent, honest business practices that put our clients' needs first."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Partnership",
      description: "We work alongside our clients as trusted partners in their business growth journey."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We deliver exceptional service and expertise to help businesses achieve their goals."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We leverage technology and modern solutions to streamline the lending process."
    }
  ];


  return (
    <>
      <Head>
        <title>About 3A Lending | National Commercial Lending Experts</title>
        <meta name="description" content="Meet the lending experts at 3A Lending. Serving businesses nationwide with SBA loans, commercial financing, and personalized digital service. 94% approval rate across all 50 states." />
        <meta name="keywords" content="commercial lenders USA, SBA loan experts nationwide, business financing America, national lending team, online commercial loans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="About 3A Lending | National Commercial Lenders" />
        <meta property="og:description" content="National lending experts serving businesses across America with fast approvals and competitive rates." />
        <meta property="og:url" content="https://www.3alending.com/about" />
        <meta property="og:image" content="https://www.3alending.com/images/bigbuilding.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.3alending.com/about" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <Image src="/images/3A_Logo.jpg" width={50} height={50} alt="3A Lending LLC Logo" className="rounded-lg" />
                <div className="text-2xl font-bold text-gray-900">3A Lending</div>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">Home</a>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'about' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  About
                </button>
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
              <a href="/apply" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all">
                Apply Now
              </a>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeTab === 'about' && (
            <>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">3A Lending</span> - America's Premier Digital Commercial Lenders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving businesses nationwide with expert SBA loans and commercial financing solutions. 
              Your trusted lending partner committed to America's business community.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-50 rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At 3A Lending, we believe every American business deserves access to the capital needed to grow and thrive. 
                Our mission is to provide fast, reliable, and transparent commercial financing solutions that empower 
                entrepreneurs and established businesses across all 50 states to achieve their goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                  <div className="text-gray-600">Loans Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Businesses Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                  <div className="text-gray-600">Approval Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a simple belief that American small businesses are the backbone of our national economy, 
                3A Lending was created to bridge the gap between traditional banking and the modern needs of entrepreneurs across the United States.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced lending professionals understands the challenges businesses face when 
                seeking capital. We've streamlined our processes to provide faster approvals, competitive rates, 
                and personalized service that puts our clients first.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped over 500 businesses across the United States achieve their 
                growth objectives through our comprehensive SBA loans and commercial financing solutions delivered digitally.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="/images/bigbuilding.jpg" 
                width={600} 
                height={400} 
                alt="3A Lending office building" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expert Team</h2>
            <div className="bg-blue-50 rounded-2xl p-12 max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Over 50 Years of Combined Experience</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our dedicated team of lending professionals brings together over five decades of expertise in commercial finance, 
                SBA lending, and business development. We're committed to providing expert advice and personalized solutions 
                that help businesses across America achieve their financial goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Dedicated to Your Success</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Expert</div>
                  <div className="text-gray-600">Financial Guidance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With America's Leading Digital Commercial Lenders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how 3A Lending can help your business achieve its financial goals, no matter where you're located.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Get Pre-Qualified
              </button>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all">
                Contact Us
              </button>
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