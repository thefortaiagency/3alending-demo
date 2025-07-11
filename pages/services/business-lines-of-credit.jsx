import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ArrowRight, CreditCard, DollarSign, RefreshCw, ClipboardList } from 'lucide-react';
import LiveChat from '../../components/LiveChat';
import TaskCreator from '../../components/TaskCreator';

export default function BusinessLinesOfCredit() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);

  const benefits = [
    "Only pay interest on what you use",
    "Revolving credit - reuse as you repay",
    "No collateral required for many lines",
    "Quick access to funds",
    "Build business credit history",
    "Flexible repayment options",
    "24/7 online account access",
    "No prepayment penalties"
  ];

  const uses = [
    "Managing cash flow gaps",
    "Purchasing inventory",
    "Covering payroll",
    "Emergency expenses",
    "Seasonal fluctuations",
    "Marketing campaigns",
    "Equipment repairs",
    "Taking advantage of opportunities"
  ];

  const creditOptions = [
    {
      name: "Starter Line",
      amount: "$25,000 - $100,000",
      best: "New businesses",
      rate: "From 12% APR"
    },
    {
      name: "Growth Line",
      amount: "$100,000 - $250,000",
      best: "Established businesses",
      rate: "From 10% APR"
    },
    {
      name: "Premium Line",
      amount: "$250,000 - $500,000",
      best: "High-revenue businesses",
      rate: "From 8% APR"
    }
  ];

  return (
    <>
      <Head>
        <title>Business Lines of Credit | Flexible Working Capital | 3A Lending</title>
        <meta name="description" content="Business lines of credit from $25K to $500K. Access funds when you need them, pay interest only on what you use. Quick approval and flexible terms." />
        <meta name="keywords" content="business line of credit, working capital, revolving credit, business credit line, flexible financing" />
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
                Business Lines of Credit for <span className="text-blue-600">Flexible Funding</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Access working capital when you need it. Draw funds, repay, and reuse your credit line 
                to manage cash flow and seize opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center">
                  Get Your Credit Line
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
                  Learn More
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
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$25K - $500K</h3>
                <p className="text-gray-600">Credit lines to fit your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Revolving Credit</h3>
                <p className="text-gray-600">Reuse funds as you repay your balance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pay As You Go</h3>
                <p className="text-gray-600">Interest only on the funds you use</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Options */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Credit Line Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creditOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3">{option.amount}</p>
                  <p className="text-gray-600 mb-3">Best for: {option.best}</p>
                  <p className="text-sm text-gray-500">{option.rate}</p>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits & Uses */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose a Business Line of Credit?</h2>
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
                <h3 className="text-xl font-semibold mb-6">Common Uses</h3>
                <div className="space-y-3">
                  {uses.map((use, index) => (
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

        {/* How It Works */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How a Line of Credit Works</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Get Approved</h3>
                    <p className="text-gray-600">Apply once and get approved for your maximum credit limit</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Draw Funds</h3>
                    <p className="text-gray-600">Access money as needed up to your credit limit</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Pay Interest</h3>
                    <p className="text-gray-600">Only pay interest on the amount you've borrowed</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Repay & Reuse</h3>
                    <p className="text-gray-600">As you repay, your available credit replenishes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Line of Credit vs. Term Loan</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Line of Credit</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Draw funds as needed</li>
                    <li>✓ Pay interest only on what you use</li>
                    <li>✓ Reusable credit</li>
                    <li>✓ Flexible repayment</li>
                    <li>✓ Perfect for ongoing needs</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Term Loan</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Lump sum upfront</li>
                    <li>✓ Fixed monthly payments</li>
                    <li>✓ One-time use</li>
                    <li>✓ Set repayment schedule</li>
                    <li>✓ Best for specific purchases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get the Flexibility Your Business Needs
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Apply for a business line of credit today and have funds ready when opportunities arise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Apply Now
              </button>
              <a href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all">
                Talk to an Expert
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