import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import LinkListLogo from '@/assets/logo.png';
import ProfileMenu from "./ProfileMenu";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
 const isLoggedIn = !!localStorage.getItem("access_token");
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md border-b'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          

          {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={LinkListLogo}
            alt="LinkList Logo"
            className="h-8 sm:h-10 md:h-14 w-auto object-contain"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700">
            LinkList
          </span>
        </Link>

        {/* Location (desktop only) */}
        <button className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition">
          <span>📍</span>
          <span className="truncate max-w-[140px]">
            Ranchi, Jharkhand
          </span>
          <span className="text-xs">▾</span>
        </button>

        {/* Trust Badges (large screens only) */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border">
            ✔ Verified
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border">
            ✔ Secure
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border">
            ✔ Trusted
          </span>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">

  {!isLoggedIn ? (

<>

<Button
  variant="ghost"
  onClick={() => navigate("/login")}
  className="text-gray-700 hover:text-blue-600 font-medium"
>
  Login
</Button>

<Button
  variant="outline"
  onClick={() => navigate("/signup")}
  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
>
  Sign Up
</Button>

</>

) : (

<ProfileMenu />

)}

<Button
  onClick={() => navigate('/post-job')}
  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-md hover:shadow-lg"
>
  Post Job
</Button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>

      {/* Mobile Menu */ }
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-white border-t shadow-md"
      >
        <div className="px-4 py-5 space-y-3">

          {/* Login /Signup/Post */}
        {!isLoggedIn ? (

<>

<Button
  variant="ghost"
  onClick={() => navigate('/login')}
  className="w-full h-12"
>
  Login
</Button>

<Button
  variant="outline"
  onClick={() => navigate('/signup')}
  className="w-full h-12"
>
  Sign Up
</Button>

</>

) : (

<Link to="/account">

<Button
  className="w-full h-12"
>
  My Account
</Button>

</Link>

)}

          {/* Post Job (Primary CTA) */}
          <Button
            onClick={() => navigate('/post-job')}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            Post Job
          </Button>

        </div>
      </motion.div>
    )}
  </AnimatePresence>
    </nav >
  );
};

export default Navbar;