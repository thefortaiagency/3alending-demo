import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Clock, DollarSign, Building, ClipboardList } from 'lucide-react';
import LiveChat from '../../components/LiveChat';
import TaskCreator from '../../components/TaskCreator';

export default function SBA504Loans() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);

  const benefits = [
    "Low down payment - as little as 10%",
    "Fixed interest rates for predictable payments",
    "Long-term financing up to 25 years",
    "Finance up to $5.5 million",
    "No prepayment penalties",
    "Build business equity instead of renting"
  ];

  const eligibleUses = [
    "Purchase commercial real estate",
    "Buy land and construct new facilities",
    "Renovate or expand existing buildings",
    "Purchase heavy machinery and equipment",
    "Refinance debt on owner-occupied property",
    "Energy-efficient improvements"
  ];

  const requirements = [
    "Business must operate for profit",
    "Meet SBA size standards",
    "Business net worth under $15 million",
    "Average net income under $5 million (after taxes)",
    "Owner-occupied property (51% minimum)",
    "Good credit history"
  ];

  return (
    <>
      <Head>
        <title>SBA 504 Loans | Commercial Real Estate Financing | 3A Lending</title>
        <meta name="description" content="SBA 504 loans for commercial real estate nationwide. Low down payments, fixed rates, and long terms up to 25 years. Finance up to $5.5 million with just 10% down." />
        <meta name="keywords" content="SBA 504 loans, commercial real estate financing, CDC loans, small business real estate loans, SBA property loans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                <a href="/contact" className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-lg transition-all">Contact</a>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                SBA 504 Loans for <span className="text-blue-600">Commercial Real Estate</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Purchase, build, or renovate your commercial property with long-term, fixed-rate financing. 
                Get up to $5.5 million with as little as 10% down.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center">
                  Apply for 504 Loan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Low Down Payment</h3>
                <p className="text-gray-600">As little as 10% down for owner-occupied commercial real estate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Long Terms</h3>
                <p className="text-gray-600">10, 20, or 25-year terms with fixed interest rates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Equity</h3>
                <p className="text-gray-600">Own your building and build long-term business wealth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits of SBA 504 Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Key Advantages</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Eligible Uses</h3>
                <div className="space-y-3">
                  {eligibleUses.map((use, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Qualification Requirements</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">To qualify for an SBA 504 loan, you must:</h3>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Structure */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How SBA 504 Loans Work</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <h3 className="text-lg font-semibold mb-2">Bank Loan</h3>
                  <p className="text-gray-600">Traditional lender provides 50% of project cost</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <h3 className="text-lg font-semibold mb-2">SBA Debenture</h3>
                  <p className="text-gray-600">SBA provides up to 40% with fixed rates</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
                  <h3 className="text-lg font-semibold mb-2">Your Down Payment</h3>
                  <p className="text-gray-600">You contribute as little as 10%</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                This unique structure allows you to preserve working capital while securing long-term, affordable financing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Own Your Commercial Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our SBA 504 loan experts guide you through the process. Get pre-qualified in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Start Application
              </button>
              <a href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all">
                Contact an Expert
              </a>
            </div>
          </div>
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