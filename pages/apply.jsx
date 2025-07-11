import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft, User, Building, DollarSign, FileText, Check, ClipboardList } from 'lucide-react';
import LiveChat from '../components/LiveChat';
import TaskCreator from '../components/TaskCreator';

export default function Apply() {
  const [isTaskCreatorOpen, setIsTaskCreatorOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    
    // Step 2 - Business Details
    businessName: '',
    businessType: '',
    yearsInBusiness: '',
    numberOfEmployees: '',
    businessAddress: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Step 3 - Loan Information
    loanType: '',
    loanAmount: '',
    loanPurpose: '',
    urgency: '',
    
    // Step 4 - Financial Information
    annualRevenue: '',
    creditScore: '',
    existingDebt: '',
    collateral: '',
    
    // Step 5 - Additional Info
    howDidYouHear: '',
    additionalNotes: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: 'Basic Information', icon: User },
    { number: 2, title: 'Business Details', icon: Building },
    { number: 3, title: 'Loan Information', icon: DollarSign },
    { number: 4, title: 'Financial Information', icon: FileText },
    { number: 5, title: 'Review & Submit', icon: Check }
  ];

  const loanTypes = [
    'SBA 504 Loan',
    'SBA 7(a) Loan',
    'Equipment Financing',
    'Business Line of Credit',
    'Commercial Real Estate Loan',
    'Business Acquisition Loan'
  ];

  const businessTypes = [
    'Retail',
    'Restaurant/Food Service',
    'Manufacturing',
    'Professional Services',
    'Healthcare',
    'Construction',
    'Technology',
    'Other'
  ];

  const creditScoreRanges = [
    'Excellent (750+)',
    'Good (700-749)',
    'Fair (650-699)',
    'Poor (Below 650)',
    'Not Sure'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        break;
      case 2:
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.businessType) newErrors.businessType = 'Business type is required';
        if (!formData.yearsInBusiness) newErrors.yearsInBusiness = 'Years in business is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
        break;
      case 3:
        if (!formData.loanType) newErrors.loanType = 'Loan type is required';
        if (!formData.loanAmount) newErrors.loanAmount = 'Loan amount is required';
        if (!formData.loanPurpose) newErrors.loanPurpose = 'Loan purpose is required';
        break;
      case 4:
        if (!formData.annualRevenue) newErrors.annualRevenue = 'Annual revenue is required';
        if (!formData.creditScore) newErrors.creditScore = 'Credit score is required';
        break;
      case 5:
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(5)) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Application submitted successfully! We will contact you within 24 hours.');
      // You could redirect to a thank you page or reset the form
    }
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Email</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Phone</span>
                </label>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Business Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.businessName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.businessType ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years in Business *
                </label>
                <input
                  type="number"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleInputChange}
                  min="0"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.yearsInBusiness ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.yearsInBusiness && <p className="text-red-500 text-sm mt-1">{errors.yearsInBusiness}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Address
              </label>
              <input
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  maxLength="2"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Loan Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Type *
              </label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.loanType ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select loan type</option>
                {loanTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.loanType && <p className="text-red-500 text-sm mt-1">{errors.loanType}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount Needed *
              </label>
              <input
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="$50,000"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Purpose *
              </label>
              <textarea
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleInputChange}
                rows={4}
                placeholder="Please describe how you plan to use the loan funds..."
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.loanPurpose ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.loanPurpose && <p className="text-red-500 text-sm mt-1">{errors.loanPurpose}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How Soon Do You Need Funding?
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select timeframe</option>
                <option value="immediately">Immediately</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">Within 1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="not urgent">Not urgent</option>
              </select>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Financial Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Business Revenue *
              </label>
              <input
                type="text"
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleInputChange}
                placeholder="$250,000"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.annualRevenue ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.annualRevenue && <p className="text-red-500 text-sm mt-1">{errors.annualRevenue}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Credit Score Range *
              </label>
              <select
                name="creditScore"
                value={formData.creditScore}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.creditScore ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select credit score range</option>
                {creditScoreRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.creditScore && <p className="text-red-500 text-sm mt-1">{errors.creditScore}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Existing Business Debt
              </label>
              <input
                type="text"
                name="existingDebt"
                value={formData.existingDebt}
                onChange={handleInputChange}
                placeholder="$0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Collateral (if any)
              </label>
              <textarea
                name="collateral"
                value={formData.collateral}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe any assets available as collateral..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-lg mb-3">Application Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Name:</p>
                  <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Business:</p>
                  <p className="font-medium">{formData.businessName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Loan Type:</p>
                  <p className="font-medium">{formData.loanType}</p>
                </div>
                <div>
                  <p className="text-gray-600">Loan Amount:</p>
                  <p className="font-medium">{formData.loanAmount}</p>
                </div>
                <div>
                  <p className="text-gray-600">Annual Revenue:</p>
                  <p className="font-medium">{formData.annualRevenue}</p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="Google">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes or Questions
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={3}
                placeholder="Any additional information you'd like to share..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="border-t pt-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to the terms and conditions and authorize 3A Lending to contact me regarding my loan application. 
                  I understand that my information will be kept confidential and secure.
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Head>
        <title>Apply for Business Financing | 3A Lending</title>
        <meta name="description" content="Apply for business loans online. Quick and easy application process with decisions in 24-48 hours. SBA loans, equipment financing, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
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
            </div>
          </div>
        </nav>

        {/* Progress Bar */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentStep >= step.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="ml-3 hidden sm:block">
                      <p className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 sm:w-24 h-0.5 mx-2 ${
                        currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="flex items-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>
                )}
                
                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold"
                  >
                    Submit Application
                    <Check className="w-5 h-5 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help with your application? Call us at{' '}
              <a href="tel:1-260-123-4567" className="text-blue-600 font-semibold">1-260-123-4567</a>
            </p>
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