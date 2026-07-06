import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, Mail, Lock, Briefcase, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff } from 'lucide-react';
import { loginUser } from "../api/auth";
import { sendOtp, verifyOtp } from "../api/otp";

import {

signInWithPopup

}

from "firebase/auth";

import {

auth,

googleProvider

}

from "../firebase";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // New state to toggle between 'email' and 'mobile'
  const [loginMethod, setLoginMethod] = useState('email');
  const [otpSent, setOtpSent] = useState(false);

  const [isLoading, setIsLoading] = useState(false);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mobile: '',
    otp: ''
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
    if (loginMethod === 'email') {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.password) newErrors.password = 'Password is required';
    } else {
      if (formData.mobile.length !== 10) {
        newErrors.mobile = 'Enter a valid 10-digit mobile number';
      }
     if (otpSent && !formData.otp) {
  newErrors.otp = 'OTP is required';
}

    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {

  const data = {
    email: formData.email,
    password: formData.password
  };

  try {

    const res = await loginUser(data);

localStorage.setItem(
"access_token",
res.access_token
);

localStorage.setItem(
"user_id",
res.user_id
);

localStorage.setItem(
"user_role",
res.role
);

localStorage.setItem(
"user_name",
res.name
);

alert("Login successful");

if(res.role==="provider"){

navigate("/provider-dashboard");

}

else{

navigate("/account");

}

  } catch (error) {

    alert("Invalid credentials");

  }

};

const handleOtpLogin = async () => {

  try {

    const res = await verifyOtp(
      formData.mobile,
      formData.otp
    );

    localStorage.setItem(
"access_token",
res.access_token
);

localStorage.setItem(
"user_id",
res.user_id
);

localStorage.setItem(
"user_role",
res.role
);

localStorage.setItem(
"user_name",
res.name
);

alert("Login successful");

if(res.role==="provider"){

navigate(
"/provider/dashboard"
);

}

else{

navigate(
"/customer/dashboard"
);
}

  } catch (err) {

    alert("Invalid OTP");

  }
};

const handleGoogleLogin = async () => {

    try {

        const result = await signInWithPopup(

            auth,

            googleProvider

        );
       localStorage.setItem(
    "user_photo",
    result.user.photoURL || ""
);

localStorage.setItem(
    "user_name",
    result.user.displayName || ""
);
        const idToken = await result.user.getIdToken();

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

            "user_name",

            data.name

        );

        localStorage.setItem(

            "user_id",

            data.user_id

        );

        localStorage.setItem(

            "role",

            data.role

        );

        navigate("/account");

    }

    catch (err) {

        console.error(err);

    }

};
  return (
    <>
      <Helmet>
        <title>Login - LinkList</title>
      </Helmet>

      <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              LinkList
            </span>
          </Link>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              
              {/* Login Method Toggle */}
              <div className="flex p-1 bg-gray-100 rounded-lg mt-4">
                <button
                  onClick={() => setLoginMethod('email')}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${loginMethod === 'email' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Email
                </button>
                <button
                  onClick={() => setLoginMethod('mobile')}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${loginMethod === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Mobile & OTP
                </button>
              </div>
            </div>

            <form
              onSubmit={(e) => {

                e.preventDefault();

                if (loginMethod === 'email') {
                  handleLogin();
                } else {
                  handleOtpLogin();
                }
              }}
              className="space-y-5">
              <AnimatePresence mode="wait">
                {loginMethod === 'email' ? (
                  <motion.div
                    key="email-fields"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Password Field */}
<div className="space-y-2">
  <Label htmlFor="password">
    Password <span className="text-red-500">*</span>
  </Label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    
    <Input
      id="password"
      // Toggle type between 'password' and 'text'
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      value={formData.password}
      onChange={(e) => handleChange('password', e.target.value)}
      className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
    />

    {/* Toggle Button */}
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
    >
      {showPassword ? (
        <EyeOff className="w-5 h-5" />
      ) : (
        <Eye className="w-5 h-5" />
      )}
    </button>
  </div>
  {errors.password && (
    <p className="text-sm text-red-500">{errors.password}</p>
  )}
</div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile-fields"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    {/* Mobile Number Field */}
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number <span className="text-red-500">*</span></Label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center border-r pr-2 border-gray-300">
                            <span className="text-sm font-medium text-gray-500">+91</span>
                          </div>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="enter here"
                            value={formData.mobile}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '');
                              if (val.length <= 10) handleChange('mobile', val);
                            }}
                            className={`pl-14 ${errors.mobile ? 'border-red-500' : ''}`}
                          />
                        </div>
                        <Button 
                          type="button" 
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 h-10"
                         onClick={async () => {
                           try {
                             await sendOtp(formData.mobile);
                             setOtpSent(true);
                             toast({
                               title: "OTP Sent",
                               description: "Check backend terminal for OTP"
                             });
                           } catch (err) {
                             toast({
                               title: "Error",
                               description: "Failed to send OTP"
                             });
                           }
                         }}
                          >
                          Send OTP
                        </Button>
                      </div>
                      {errors.mobile && <p className="text-xs text-red-500">{errors.mobile}</p>}
                    </div>

                    {/* OTP Field */}
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="otp"
                          type="text"
                          maxLength={6}
                          placeholder="6-digit code"
                          value={formData.otp}
                          onChange={(e) => handleChange('otp', e.target.value.replace(/\D/g, ''))}
                          className={`pl-10 ${errors.otp ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.otp && <p className="text-xs text-red-500">{errors.otp}</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

             {loginMethod === 'email' && (
           <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Forgot password?
          </a>
          </div>
             )}


              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-11">
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </Button>
              <button

onClick={handleGoogleLogin}
type="button"
className="
w-full
mt-4
bg-white
border
border-gray-300
hover:bg-gray-50
rounded-xl
py-3
font-semibold
flex
items-center
justify-center
gap-3
transition
"

>

<img

src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"

className="w-6 h-6"

alt="Google"

/>

Continue with Google

</button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">or</span></div>
            </div>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Sign up</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;