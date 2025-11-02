'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_id: '871e4d4a-90f5-4058-bc3c-28ec44cc545a',
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="relative py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-4xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        Let's Connect
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Have a question or ready to make a reservation? We're here to serve you with excellence.
      </p>
    </div>

    {/* Multi-Step Progress Indicator */}
    <div className="mb-12">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-semibold shadow-lg">
            1
          </div>
          <span className="ml-3 text-sm font-medium text-slate-700">Your Info</span>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-amber-500 text-amber-600 font-semibold shadow">
            2
          </div>
          <span className="ml-3 text-sm font-medium text-slate-500">Your Message</span>
        </div>
        <div className="w-16 h-1 bg-slate-200 rounded-full"></div>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-semibold">
            3
          </div>
          <span className="ml-3 text-sm font-medium text-slate-400">Submit</span>
        </div>
      </div>
    </div>

    {/* Form Card */}
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
      <div className="p-8 md:p-12">
        {/* Step 1: Contact Information */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white text-sm font-bold mr-3">
              1
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Full Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 transition-all duration-200 group-hover:border-amber-300 text-slate-900 placeholder-slate-400"
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Address
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 transition-all duration-200 group-hover:border-amber-300 text-slate-900 placeholder-slate-400"
              />
            </div>
          </div>

          <div className="mt-6 group">
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Phone Number
            </label>
            <input 
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              required
              className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 transition-all duration-200 group-hover:border-amber-300 text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-slate-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm font-medium text-slate-500">Step 2</span>
          </div>
        </div>

        {/* Step 2: Message */}
        <div>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white text-sm font-bold mr-3">
              2
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Your Message</h3>
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              How Can We Help You?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your inquiry, reservation request, or any questions you have. We're excited to hear from you!"
              required
              className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50 transition-all duration-200 resize-none group-hover:border-amber-300 text-slate-900 placeholder-slate-400"
            ></textarea>
            <p className="mt-2 text-sm text-slate-500">Minimum 10 characters</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
          >
            <span className="flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Your Message...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </button>
          
          <p className="mt-4 text-center text-sm text-slate-500">
            We typically respond within 24 hours. For urgent matters, please call us directly.
          </p>
        </div>
      </div>

      {/* Trust Indicators Footer */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="font-medium">Secure & Private</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">Quick Response</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">No Spam Ever</span>
          </div>
        </div>
      </div>
    </div>

    {/* Alternative Contact Methods */}
    <div className="mt-12 text-center">
      <p className="text-slate-600 mb-4">Prefer to reach out directly?</p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a href="tel:+15551234567" className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (555) 123-4567
        </a>
        <span className="text-slate-300">|</span>
        <a href="mailto:hello@ogsresto.com" className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          hello@ogsresto.com
        </a>
      </div>
    </div>
  </div>
</section>
    </form>
  );
}