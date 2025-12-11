import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting GrociFy! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Get in Touch with GrociFy</h1>
          <p className="text-xl opacity-90">We're here to help with all your grocery needs</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
                >
                  📧 Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-full">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 8870-256-678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-full">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-600">support@grocify.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-full">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Address</h3>
                      <p className="text-gray-600">123 Fresh Street, Grocery District<br />Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Support Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">What's the delivery time?</h4>
                    <p className="text-gray-600 text-sm">We deliver within 30 minutes in most areas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Is there a minimum order?</h4>
                    <p className="text-gray-600 text-sm">Minimum order value is ₹199 for free delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Do you accept returns?</h4>
                    <p className="text-gray-600 text-sm">Yes, we have a 100% satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}