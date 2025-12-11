import React from 'react';
import { Link } from 'react-router-dom';

export default function PremiumAbout() {
  const features = [
    {
      icon: '🌱',
      title: 'Farm Fresh Quality',
      description: 'Hand-picked fresh produce from trusted local farmers and suppliers, ensuring the highest quality for your family.',
      color: 'text-green-600'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Delivery',
      description: '30-minute delivery guarantee to get fresh groceries to your door quickly and efficiently.',
      color: 'text-blue-600'
    },
    {
      icon: '💰',
      title: 'Best Prices Guaranteed',
      description: 'Competitive pricing with exclusive deals, seasonal offers, and unbeatable value for premium products.',
      color: 'text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 py-16 px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">About GrociFy</h1>
        <p className="text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto">
          Revolutionizing grocery shopping with farm-fresh produce, lightning-fast delivery, and unbeatable prices.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-12 mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About GrociFy</h2>
          <p className="text-2xl font-semibold text-emerald-600 mb-6">Fresh Food. Fair Prices. Fast Delivery.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Mission Statement */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            At GrociFy, we believe everyone deserves access to fresh, quality groceries without the hassle. 
            We're on a mission to transform grocery shopping into a delightful experience that saves you time, 
            money, and ensures you get the freshest produce delivered right to your doorstep.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            From farm to your table in just 30 minutes – that's our promise to you and your family. 
            We work directly with local farmers and trusted suppliers to bring you the best quality 
            products at competitive prices.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose GrociFy?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-50 border border-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] text-center"
              >
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">GrociFy by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">25 Min</div>
              <div className="text-gray-600 font-medium">Average Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Full-width Image Section */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop" 
            alt="Fresh groceries and vegetables" 
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2024, GrociFy started with a simple idea: make fresh, quality groceries 
                accessible to everyone, everywhere. Our founders, passionate about healthy living and 
                convenience, saw the need for a reliable grocery delivery service that doesn't compromise on quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve thousands of families across the city, partnering with over 100 local 
                farmers and suppliers to bring you the freshest produce, dairy, meat, and pantry essentials.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted grocery delivery platform, making fresh food accessible 
                to every household while supporting local communities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-grocify-green via-grocify-teal to-grocify-blue rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-grocify-purple/20 to-grocify-pink/20 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 animate-bounce">Ready to Experience GrociFy?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who trust GrociFy for their daily grocery needs.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-gradient-to-r from-grocify-orange to-grocify-yellow hover:from-grocify-yellow hover:to-grocify-orange text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-grocify-orange/50 animate-pulse hover:animate-bounce"
            >
              🛒 Start Shopping Now
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <Link 
          to="/" 
          className="inline-block bg-gradient-to-r from-grocify-purple/30 to-grocify-pink/30 backdrop-blur-sm text-white hover:from-grocify-purple/50 hover:to-grocify-pink/50 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}