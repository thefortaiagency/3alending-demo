import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Briefcase, DollarSign, Users, ClipboardList } from 'lucide-react';
import LiveChat from '../../components/LiveChat';
import TaskCreator from '../../components/TaskCreator';

export default function BusinessAcquisitionLoans() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);

  const benefits = [
    "Finance up to 90% of purchase price",
    "Include working capital in loan",
    "Seller financing options",
    "Asset-based valuations",
    "Due diligence support",
    "Competitive fixed rates",
    "Terms up to 10 years",
    "No prepayment penalties"
  ];

  const acquisitionTypes = [
    "Existing business purchase",
    "Franchise acquisitions",
    "Partner buyouts",
    "Competitor acquisitions",
    "Strategic expansions",
    "Management buyouts",
    "Asset purchases",
    "Stock purchases"
  ];

  const process = [
    { step: "Identify Target", desc: "Find the right business opportunity" },
    { step: "Valuation", desc: "Professional business valuation and analysis" },
    { step: "Financing", desc: "Structure the optimal loan package" },
    { step: "Due Diligence", desc: "Complete thorough investigation" },
    { step: "Close Deal", desc: "Finalize purchase and funding" }
  ];

  return (
    <>
      <Head>
        <title>Business Acquisition Loans | Buy a Business Financing | 3A Lending</title>
        <meta name="description" content="Finance business acquisitions with up to 90% financing. SBA and conventional loans for buying existing businesses, franchises, and partner buyouts." />
        <meta name="keywords" content="business acquisition loans, buy a business financing, franchise loans, partner buyout loans, M&A financing" />
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
                Business Acquisition <span className="text-blue-600">Financing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Turn opportunity into ownership. Finance up to 90% of your business acquisition 
                with competitive rates and expert guidance through the entire process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center">
                  Finance Your Acquisition
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
                  Discuss Your Deal
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
                <h3 className="text-xl font-semibold mb-2">Up to 90% Financing</h3>
                <p className="text-gray-600">Minimal down payment required</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All Business Types</h3>
                <p className="text-gray-600">Service, retail, manufacturing, and more</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">Guidance through the entire acquisition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acquisition Process */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The Acquisition Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {process.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold mb-2">{item.step}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Types */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Acquisition Financing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
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
                <h3 className="text-xl font-semibold mb-6">What We Finance</h3>
                <div className="space-y-3">
                  {acquisitionTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financing Options */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Financing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">SBA Acquisition Loans</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Lower down payment (10%)</li>
                  <li>• Longer repayment terms</li>
                  <li>• Include working capital</li>
                  <li>• Goodwill financing</li>
                  <li>• Seller note allowed</li>
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Learn More
                </button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Conventional Acquisition Loans</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Faster closing times</li>
                  <li>• Flexible structures</li>
                  <li>• Higher loan amounts</li>
                  <li>• Less paperwork</li>
                  <li>• Creative financing options</li>
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Making Business Ownership Possible</h2>
            <p className="text-lg text-gray-700 mb-8">
              We've helped hundreds of entrepreneurs acquire their dream businesses. From small 
              service companies to large manufacturing operations, our acquisition financing 
              expertise helps you navigate the complexities of buying a business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                <p className="text-gray-600">In Acquisitions Funded</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600">Businesses Acquired</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Buy Your Next Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our acquisition financing experts help you structure the perfect deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Start Your Application
              </button>
              <a href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all">
                Discuss Your Acquisition
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