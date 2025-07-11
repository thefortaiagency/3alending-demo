import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Building, DollarSign, Clock, ClipboardList } from 'lucide-react';
import LiveChat from '../../components/LiveChat';
import TaskCreator from '../../components/TaskCreator';

export default function CommercialRealEstateLoans() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);

  const propertyTypes = [
    "Office buildings",
    "Retail centers",
    "Industrial warehouses",
    "Medical facilities",
    "Hotels and hospitality",
    "Multi-family properties",
    "Mixed-use developments",
    "Self-storage facilities"
  ];

  const loanFeatures = [
    "Competitive fixed and variable rates",
    "Terms up to 25 years",
    "Up to 80% loan-to-value",
    "Non-recourse options available",
    "Interest-only periods available",
    "Flexible prepayment options"
  ];

  const loanPrograms = [
    {
      name: "Traditional Commercial Mortgage",
      ltv: "Up to 75% LTV",
      term: "5-25 years",
      best: "Stabilized properties"
    },
    {
      name: "Bridge Loans",
      ltv: "Up to 80% LTV",
      term: "6-36 months",
      best: "Value-add opportunities"
    },
    {
      name: "Construction Loans",
      ltv: "Up to 70% LTC",
      term: "12-24 months",
      best: "Ground-up development"
    }
  ];

  return (
    <>
      <Head>
        <title>Commercial Real Estate Loans | Property Financing | 3A Lending</title>
        <meta name="description" content="Commercial real estate loans up to $5 million. Finance office buildings, retail, industrial, and investment properties. Competitive rates and flexible terms." />
        <meta name="keywords" content="commercial real estate loans, property financing, commercial mortgage, investment property loans, CRE lending" />
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
                Commercial Real Estate <span className="text-blue-600">Financing Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Purchase, refinance, or renovate commercial properties with competitive rates 
                and flexible terms tailored to your investment strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center">
                  Get Property Financing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
                  Discuss Your Project
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
                <h3 className="text-xl font-semibold mb-2">Up to $5 Million</h3>
                <p className="text-gray-600">Financing for properties of all sizes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All Property Types</h3>
                <p className="text-gray-600">Office, retail, industrial, and more</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Closings</h3>
                <p className="text-gray-600">Close in as little as 30 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Programs */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Commercial Real Estate Loan Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {loanPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-blue-600 font-medium">{program.ltv}</p>
                    <p className="text-gray-600">Terms: {program.term}</p>
                    <p className="text-gray-600">Best for: {program.best}</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Types & Features */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Finance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Property Types</h3>
                <div className="space-y-3">
                  {propertyTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Loan Features</h3>
                <div className="space-y-3">
                  {loanFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Streamlined Process</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Initial Consultation</h3>
                    <p className="text-gray-600">Discuss your property and financing needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Property Analysis</h3>
                    <p className="text-gray-600">We evaluate the property and market conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Term Sheet</h3>
                    <p className="text-gray-600">Receive competitive loan terms and conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Due Diligence</h3>
                    <p className="text-gray-600">Complete underwriting and documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold mb-1">Closing</h3>
                    <p className="text-gray-600">Fund your loan and close the deal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Finance Your Commercial Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get competitive rates and expert guidance for your next real estate investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Apply Now
              </button>
              <a href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all">
                Schedule Consultation
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