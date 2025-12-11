import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/api';
import homeImg from "../assets/home.png";


export default function ModernGroceryHome({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const featuredProducts = products.slice(0, 6);

  const categories = [
    { name: 'Vegetables & Fruits', icon: '🥬', color: 'bg-green-50' },
    { name: 'Beverages', icon: '☕', color: 'bg-amber-50' },
    { name: 'Meats & Seafood', icon: '🥩', color: 'bg-red-50' },
    { name: 'Frozen Foods', icon: '❄️', color: 'bg-blue-50' },
    { name: 'Breakfast', icon: '🥞', color: 'bg-orange-50' },
    { name: 'Pet Food', icon: '🐕', color: 'bg-purple-50' },
    { name: 'Milk & Dairies', icon: '🥛', color: 'bg-pink-50' },
    { name: 'Bakery', icon: '🍞', color: 'bg-yellow-50' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-emerald-600 to-green-500 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-white tracking-tight">
                🛒 GrociFy
              </Link>
              {user && (
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                  👋 Welcome, {user.firstName || user.email}!
                </div>
              )}
              <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-white hover:text-green-100 font-medium transition-colors">Home</Link>
                <Link to="/products" className="text-white hover:text-green-100 font-medium transition-colors">Shop</Link>
                <Link to="/about" className="text-white hover:text-grocify-yellow font-medium transition-all duration-300 transform hover:scale-110 hover:drop-shadow-lg">About</Link>
                <Link to="/contact" className="text-white hover:text-green-100 font-medium transition-colors">Contact</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-sm font-medium">📞 +8870-256-678</span>
              {user ? (
                <button 
                  onClick={() => {
                    localStorage.removeItem('user');
                    window.location.reload();
                  }}
                  className="bg-gradient-to-r from-grocify-pink to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse"
                >
                  🚪 Logout
                </button>
              ) : (
                <Link to="/login" className="bg-gradient-to-r from-grocify-purple to-grocify-blue hover:from-grocify-blue hover:to-grocify-teal text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-grocify-purple/30">
                  👤 Login
                </Link>
              )}
              <Link to="/cart" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 drop-shadow">
                🛍️ Cart ({cart.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Hero Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-green-700">Exclusive Offer - 25% OFF</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-none">
                  FRESH FOOD,<br/>
                  FAIR PRICES,<br/>
                  <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent"> FAST DELIVERY</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
                  Fresh veggies full of vitamins for your health. Quality produce delivered right to your doorstep in just 30 minutes.
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50K+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">30min</div>
                  <div className="text-sm text-gray-600 font-medium">Delivery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">99.8%</div>
                  <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products" 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl hover:scale-105 inline-flex items-center justify-center gap-3 group"
                >
                  SHOP NOW 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
                  🎥 Watch Demo
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Main Hero Image - Circular Frame */}
                <div className="relative z-20">
                  <div className="w-96 h-96 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-green-500 p-2 drop-shadow-2xl">
                    <img 
                      src={homeImg}

                      alt="Happy woman with fresh groceries" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Floating Product Cards */}
                <div className="absolute -top-6 -left-6 z-30">
                  <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float">
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=50&h=50&fit=crop" alt="Kiwi" className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Kiwi - 4 pcs</div>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-xs">⭐</span>
                          <span className="text-xs text-gray-600">4.9 (524 reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 z-30">
                  <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=50&h=50&fit=crop" alt="Avocado" className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Avocado</div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400 text-xs">⭐</span>
                          <span className="text-xs text-gray-600">4.5</span>
                          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">-15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 z-30">
                  <div className="bg-green-500 text-white rounded-2xl p-3 shadow-xl animate-bounce">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span className="font-semibold text-sm">Delivery Done!</span>
                    </div>
                  </div>
                </div>
                
                {/* Background Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full z-10 opacity-20"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 z-30">
                  <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=60&h=60&fit=crop" alt="Orange" className="w-16 h-16 rounded-full object-cover animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find everything you need in our organized sections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Top Save Today</h2>
              <p className="text-xl text-gray-600">Limited-time offers you can't miss</p>
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
              ⏰ Expires in: 05:12:07:58
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    {product.offer}
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-2 right-2 bg-emerald-500 hover:bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-yellow-500 mb-1">⭐⭐⭐⭐⭐</div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-emerald-600">₹{product.price}</span>
                      <span className="text-xs text-gray-400 line-through">₹{Math.round(product.price * 1.3)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛒 GrociFy</h3>
              <p className="text-gray-600 mb-4">Fresh groceries delivered to your doorstep in 30 minutes.</p>
              <div className="flex gap-4">
                <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">f</span>
                <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">t</span>
                <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">i</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-emerald-600 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
                <li><Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Vegetables & Fruits</li>
                <li>Dairy Products</li>
                <li>Meat & Seafood</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-600">
                <li>📞 +8870-256-678</li>
                <li>📧 support@grocify.com</li>
                <li>📍 Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 GrociFy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}