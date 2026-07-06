import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { categories } from '@/data/categoriesData';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">LinkList</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering India's workforce by connecting skilled service providers with customers. Trusted, verified, and always reliable.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-100">Services</h3>
            <ul className="space-y-3">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link to={category.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-2 inline-block">
                  View All Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-100">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/post-job" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Post a Job
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Join as Professional
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Adityapur Industrial Area,
Jamshedpur,<br />Jharkhand – 831013,
India
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  +91 9341643469
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  support@LinkList.in
                </span>
              </li>
            </ul>

            <div className="mt-8 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
              <p className="text-xs text-gray-400 mb-1">Mobile App

Launching Soon on
Google Play & App Store</p>
              <div className="flex space-x-2 mt-2">
                 <div className="flex gap-3 mt-3">

<div className="px-4 py-2 rounded-lg bg-gray-700 text-sm">

Google Play

</div>

<div className="px-4 py-2 rounded-lg bg-gray-700 text-sm">

App Store

</div>

</div>
              </div>
            </div>
          </div>
        </div>
     
     {/* Marketplace Statistics */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-800">

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-400">
      1000+
    </h3>
    <p className="text-gray-400 text-sm mt-2">
      Verified Providers
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-400">
      50+
    </h3>
    <p className="text-gray-400 text-sm mt-2">
      Service Categories
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-400">
      24×7
    </h3>
    <p className="text-gray-400 text-sm mt-2">
      Customer Support
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-400">
      100%
    </h3>
    <p className="text-gray-400 text-sm mt-2">
      Trusted Marketplace
    </p>
  </div>

</div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p className="text-gray-500">
           © 2026 LinkList Marketplace. All Rights Reserved.
Made with ❤️ in India 🇮🇳
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;