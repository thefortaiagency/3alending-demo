import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ClipboardList } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import TaskCreator from '../components/TaskCreator';
import AIAssistant from '../components/AIAssistant';

export default function Contact() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  return (
    <>
      <Head>
        <title>Contact 3A Lending | National SBA Loan Experts</title>
        <meta name="description" content="Contact 3A Lending for SBA loans and commercial financing nationwide. Digital application process serving all 50 states. Get pre-qualified in 24 hours from anywhere." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                <a href="/about" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">About</a>
                <a href="/services" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">Services</a>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'contact' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  Contact
                </button>
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
          {activeTab === 'contact' && (
            <>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">3A Lending</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to secure financing for your business? Our national team is here to help 
              with SBA loans, equipment financing, and commercial lending solutions from anywhere in America.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">1-260-123-4567</p>
                    <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@3alending.com" className="text-blue-600 hover:text-blue-700">
                      info@3alending.com
                    </a>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Digital Headquarters</p>
                    <p className="text-sm text-gray-500">Serving businesses nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-sm text-gray-500">24/7 online applications</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Service Area</h3>
                <p className="text-gray-600 mb-3">
                  We proudly serve businesses throughout the United States:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• All 50 States</div>
                  <div>• Major Metro Areas</div>
                  <div>• Rural Communities</div>
                  <div>• Online Applications</div>
                  <div>• Digital Processing</div>
                  <div>• Remote Closings</div>
                  <div>• Virtual Consultations</div>
                  <div>• Nationwide Network</div>
                  <div>• Fast Approvals</div>
                  <div>• Local & National</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Type Interest
                    </label>
                    <select
                      id="loanType"
                      name="loanType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a loan type</option>
                      <option value="sba-504">SBA 504 Loan</option>
                      <option value="sba-7a">SBA 7(a) Loan</option>
                      <option value="equipment">Equipment Financing</option>
                      <option value="line-of-credit">Business Line of Credit</option>
                      <option value="commercial-real-estate">Commercial Real Estate</option>
                      <option value="business-acquisition">Business Acquisition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your financing needs..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses across America that have secured financing through 3A Lending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                View Services
              </a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Apply Online
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