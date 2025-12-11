import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    pincode: ''
  });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      const userData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        address: formData.address,
        pincode: formData.pincode
      };
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center p-8 relative">
      <div className="bg-white rounded-3xl p-12 shadow-2xl w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="absolute top-6 left-6 text-gray-500 hover:text-emerald-600 font-semibold text-sm transition-colors">← Back to Home</Link>
          <h1 className="text-3xl font-extrabold text-emerald-600 mb-4">🛒 GrociFy</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <p className="text-gray-600">
            {isLogin ? 'Sign in to your GrociFy account' : 'Join the GrociFy family'}
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700 text-sm">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-gray-700 text-sm">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              required
            />
          </div>

          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-semibold text-gray-700 text-sm">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    required={!isLogin}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-semibold text-gray-700 text-sm">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    required={!isLogin}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  required={!isLogin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Your address"
                  rows="2"
                  required={!isLogin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Pincode"
                  required={!isLogin}
                />
              </div>
            </>
          )}

          {isLogin && (
            <div className="flex justify-between items-center -mt-2">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-emerald-600 text-sm font-semibold hover:underline">Forgot Password?</Link>
            </div>
          )}

          <button type="submit" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 mt-2">
            {isLogin ? '🔐 Sign In' : '🎉 Create Account'}
          </button>

          <div className="social-login">
            <p>Or continue with</p>
            <div className="social-buttons">
              <button type="button" className="social-btn google">
                🔍 Google
              </button>
              <button type="button" className="social-btn facebook">
                📘 Facebook
              </button>
            </div>
          </div>

          <div className="toggle-form">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </form>
      </div>

      <div className="login-features">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <div>
            <h4>Fast Delivery</h4>
            <p>Get fresh groceries delivered in 30 minutes</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🥬</span>
          <div>
            <h4>Fresh Products</h4>
            <p>100% organic and fresh vegetables & fruits</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💰</span>
          <div>
            <h4>Best Prices</h4>
            <p>Competitive prices with exclusive offers</p>
          </div>
        </div>
      </div>
    </div>
  );
}