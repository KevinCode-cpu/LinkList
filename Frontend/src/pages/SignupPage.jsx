import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { registerUser } from "../api/auth";
import { sendOtp } from "../api/otp";
import { signInWithPopup } from "firebase/auth";

import {
    auth,
    googleProvider
} from "../firebase";

const SignupPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSignup = async (e) => {
  e.preventDefault();

  const data = {
    full_name: formData.full_name,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    role: "customer"
  };

  try {
    await registerUser(data);

    alert("Signup successful");

    navigate("/login");

  } catch (error) {
    alert("Signup failed");
  }
};

const handleSendOtp = async () => {

  const res = await sendOtp(formData.phone);

  alert("OTP sent: " + res.otp);

};
const handleGoogleSignup = async () => {

    try {

        const result = await signInWithPopup(
            auth,
            googleProvider
        );

        const idToken =
            await result.user.getIdToken();

        const response = await fetch(
            "http://127.0.0.1:8000/auth/google",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_token: idToken
                })
            }
        );

        const data = await response.json();

        localStorage.setItem(
            "access_token",
            data.access_token
        );

        localStorage.setItem(
            "user_id",
            data.user_id
        );

        localStorage.setItem(
            "user_name",
            data.name
        );

        localStorage.setItem(
            "role",
            data.role
        );

        localStorage.setItem(
            "user_photo",
            result.user.photoURL || ""
        );

        localStorage.setItem(
            "user_email",
            result.user.email || ""
        );

        navigate("/account");

    }

    catch (err) {

        console.error(err);

        alert("Google Sign Up failed.");

    }

};
  return (
    <>
      <Helmet>
        <title>Sign Up - LinkList</title>
        <meta name="description" content="Create your LinkList account to access services and post jobs" />
      </Helmet>

      <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              LinkList
            </span>
          </Link>

          {/* Signup Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600">Join thousands of service providers and customers</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number with OTP */}
<div className="space-y-2">
  <Label htmlFor="mobile">
    Mobile Number <span className="text-red-500">*</span>
  </Label>
  <div className="flex gap-2">
    <div className="relative flex-1">
      {/* Fixed +91 Prefix */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center border-r pr-2 border-gray-300">
        <span className="text-sm font-medium text-gray-500">+91</span>
      </div>
      <Input
        id="mobile"
        type="tel"
        placeholder="enter here"
        value={formData.mobile}
        // Constraint: Only positive integers and max 10 digits
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, ''); // Remove non-digits
          if (val.length <= 10) handleChange('mobile', val);
        }}
        className={`pl-14 ${errors.mobile ? 'border-red-500' : ''}`}
      />
    </div>
    
    {/* Minimal Colored Send OTP Button */}
    <Button 
      type="button" 
      variant="default" 
      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 h-10"
      onClick={() => /* Add OTP Logic here */ console.log("OTP Sent")}
    >
      Send OTP
    </Button>
  </div>
  {errors.mobile && (
    <p className="text-sm text-red-500">{errors.mobile}</p>
  )}
</div>

{/* OTP Input (Conditionally visible or standard) */}
<div className="space-y-2">
  <Label htmlFor="otp">
    Enter OTP <span className="text-red-500">*</span>
  </Label>
  <Input
    id="otp"
    type="text"
    placeholder="Enter 6-digit code"
    maxLength={6}
    value={formData.otp}
    onChange={(e) => handleChange('otp', e.target.value.replace(/\D/g, ''))}
    className={`${errors.otp ? 'border-red-500' : ''}`}
  />
  {errors.otp && (
    <p className="text-sm text-red-500">{errors.otp}</p>
  )}
</div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className={`pl-10 ${errors.password ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    className={`pl-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-11"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Sign Up
              </Button>
            </form>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center mt-4">
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
            </p>

            {/* Divider */}

              <Button
    type="button"
    onClick={handleGoogleSignup}
    variant="outline"
    className="
    w-full
    h-11
    flex
    items-center
    justify-center
    gap-3
    border-gray-300
    hover:bg-gray-50
    "
>

<img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="w-5 h-5"
/>

Continue with Google

</Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Login
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignupPage;