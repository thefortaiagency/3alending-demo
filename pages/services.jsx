import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, Clock, DollarSign, Users, FileText, ArrowRight, ClipboardList } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import TaskCreator from '../components/TaskCreator';
import AIAssistant from '../components/AIAssistant';

export default function Services() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');
  const services = [
    {
      title: "SBA 504 Loans Nationwide",
      slug: "sba-504-loans",
      image: "/images/sbaloan.jpg",
      description: "Perfect for commercial real estate purchases and major equipment financing with low down payments anywhere in the USA.",
      features: ["Up to $5.5M for businesses nationwide", "10-25 year terms", "Fixed rates available", "90% financing available"],
      rate: "Starting at 6.5% APR",
      term: "10-25 years"
    },
    {
      title: "SBA 7(a) Loans USA",
      slug: "sba-7a-loans",
      image: "/images/sba7aIcon.jpg", 
      description: "Versatile financing for businesses nationwide needing working capital, equipment, and acquisition funding.",
      features: ["Up to $5M for businesses nationwide", "Flexible use of funds", "Digital application process", "24-hour pre-approval"],
      rate: "Starting at 7.0% APR",
      term: "Up to 25 years"
    },
    {
      title: "Equipment Financing Nationwide",
      slug: "equipment-financing",
      image: "/images/icon-improvements.png",
      description: "Secure financing for essential business equipment with fast approvals for businesses across America.",
      features: ["100% financing available", "Same-day approval possible", "Quick decision making", "Preserve working capital"],
      rate: "Starting at 8.5% APR", 
      term: "2-7 years"
    },
    {
      title: "Business Lines of Credit",
      slug: "business-lines-of-credit",
      image: "/images/placeholder-support.jpg",
      description: "Flexible working capital solutions for small businesses nationwide.",
      features: ["$25K - $500K for businesses", "Only pay on what you use", "National support team", "24/7 online access"],
      rate: "Starting at 9.0% APR",
      term: "12 months renewable"
    },
    {
      title: "Commercial Real Estate Loans",
      slug: "commercial-real-estate-loans",
      image: "/images/bigbuilding.jpg",
      description: "Financing for purchasing, refinancing, or improving commercial properties throughout the United States.",
      features: ["Up to $5M for properties nationwide", "Investment properties", "Owner-occupied buildings", "Market expertise across USA"],
      rate: "Starting at 6.8% APR",
      term: "15-25 years"
    },
    {
      title: "Business Acquisition Loans",
      slug: "business-acquisition-loans",
      image: "/images/placeholder-support.jpg",
      description: "Acquire existing businesses or franchise opportunities anywhere in America with specialized financing.",
      features: ["Up to 90% financing nationwide", "SBA and conventional options", "National market knowledge", "Fast closings across USA"],
      rate: "Starting at 7.5% APR",
      term: "5-25 years"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your business needs and financing requirements to determine the best loan program.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      step: "2", 
      title: "Application & Documentation",
      description: "Submit your application with our guidance on required documentation to streamline the process.",
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      step: "3",
      title: "Underwriting & Approval",
      description: "Our team works with lenders to get your application approved quickly and efficiently.",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      step: "4",
      title: "Funding",
      description: "Once approved, we coordinate the closing process and funding of your loan.",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <>
      <Head>
        <title>SBA Loans & Commercial Financing Services Nationwide | 3A Lending</title>
        <meta name="description" content="Complete commercial lending services nationwide: SBA 504 loans, SBA 7(a) loans, equipment financing, business lines of credit, and commercial real estate loans. Fast approvals across the USA with rates from 6.5% APR." />
        <meta name="keywords" content="SBA 504 loans USA, SBA 7a loans nationwide, equipment financing America, business line of credit online, commercial real estate loans national" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Commercial Lending Services Nationwide | 3A Lending" />
        <meta property="og:description" content="Full range of SBA loans and commercial financing across America. Get pre-qualified in 24 hours from anywhere." />
        <meta property="og:url" content="https://www.3alending.com/services" />
        <meta property="og:image" content="https://www.3alending.com/images/sbaloan.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.3alending.com/services" />
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
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    activeTab === 'services' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  Services
                </button>
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
          {activeTab === 'services' && (
            <>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Commercial Lending <span className="text-blue-600">Services</span> Nationwide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SBA loans and commercial financing solutions tailored to businesses across America. 
              From startup capital to expansion funding, we're your trusted national lending experts.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image 
                      src={service.image} 
                      width={64} 
                      height={64} 
                      alt={service.title}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <span>{service.rate}</span>
                        <span>•</span>
                        <span>{service.term}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a href={`/services/${service.slug}`} className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all text-center">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose 3A Lending?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Approval Process</h3>
                    <p className="text-gray-600">Get pre-qualified in 24 hours with our streamlined digital application process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Rates</h3>
                    <p className="text-gray-600">Access to multiple lenders ensures businesses nationwide get the best rates available.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Guidance</h3>
                    <p className="text-gray-600">Our expert team guides businesses across America through every step of the lending process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Terms</h3>
                    <p className="text-gray-600">Customized loan structures designed for diverse business cash flow patterns nationwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/bigbuilding.jpg" 
                width={600} 
                height={400} 
                alt="Commercial building financed by 3A Lending" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started with America's Premier Digital Commercial Lenders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our national lending experts today to discuss your financing needs and get pre-qualified in minutes from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Apply Now
              </button>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all">
                Schedule Consultation
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