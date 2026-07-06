import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { postJob } from "../api/jobs";
import { sendOtp } from "../api/otp";


const categories = [
  'Construction & Labour',
  'Electrician',
  'Plumbing',
  'Home Cleaning',
  'Beauty & Salon',
  'Tent & Lighting',
  'Goods for Rent',
  'Driver for Trip',
  'Electronics Repair',
  'Others'
];

const PostJobPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
  // existing
  title: '',
  category: '',
  description: '',

  // detailed location
  locality: '',
  landmark: '',
  subDistrict: '',
  district: '',
  state: '',
  pinCode: '',

  // availability
  availability: [], // ['Mon','Tue']

  // identity verification
  idType: '',
  idNumber: '',
  idDocument: null,
  otp: '',
  isOtpVerified: false,

  // profile
  headshot: null,
  experienceYears: '',
  experienceCertificate: null,
  languages: [],

  // pricing
  paymentType: '', // 'hourly' | 'fixed'
  hourlyRate: '',
  minimumBooking: '',
  fixedPrice: '',

  // consent
  backgroundConsent: false,
});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
const [preview, setPreview] = useState(null);

<Input
  type="file"
  onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
/>

{preview && <img src={preview} className="w-20 h-20 rounded-lg mt-2" />}


  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxArray = (field, value) => {
  setFormData(prev => ({
    ...prev,
    [field]: prev[field].includes(value)
      ? prev[field].filter(v => v !== value)
      : [...prev[field], value]
  }));
};

const handleFileChange = (field, file) => {
  setFormData(prev => ({ ...prev, [field]: file }));
};


  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Job title is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.budget || formData.budget <= 0) newErrors.budget = 'Valid budget is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handlePostJob = async (e) => {
  e.preventDefault();

  const jobData = {
    title: formData.title,
    description: formData.description,
    category: formData.category,
    budget: formData.budget,
    locality: formData.locality,
    district: formData.district,
    state: formData.state,
    pin_code: formData.pinCode
  };

 try {

    const user_id = localStorage.getItem("user_id");

    const res = await postJob(formData, user_id);

    alert("Job posted successfully");

    navigate("/");

  } catch (error) {

    alert("Error posting job");

  }
};

const handleSendOtp = async () => {

  const res = await sendOtp(phone);

  alert("OTP sent: " + res.otp);

};

  const isFormValid = formData.title && formData.category && formData.location && formData.budget && formData.description;

  return (
    <>
      <Helmet>
        <title>Post a Job - LinkList</title>
        <meta name="description" content="Post your job requirements and connect with verified service providers across India" />
      </Helmet>
      
      {/* Removed Navbar and Footer from here as they are in MainLayout */}
      {/* Reduced top padding from pt-24 to pt-8 since MainLayout adds pt-16/pt-20 */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Post a Job</h1>
            <p className="text-gray-600">Share your requirements and get responses from verified professionals</p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handlePostJob} className="space-y-6">
              {/* Job Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Job Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Need electrician for home wiring"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className={errors.title ? 'border-red-500' : ''}
                />
                {errors.title && (
                  <p className="text-sm text-red-500">{errors.title}</p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">
                  Service Category <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                  <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-red-500">{errors.category}</p>
                )}
              </div>

             {/* Detailed Location */}
<div className="space-y-4">
  <h3 className="font-semibold text-gray-900">Detailed Location</h3>
<div>
  <Label>Locality <span className="text-red-500">*</span></Label>
  <Input placeholder="Locality" onChange={e => handleChange('locality', e.target.value)} />
  </div>
  <div>
  <Label>Landmark</Label>
  <Input placeholder="Landmark" onChange={e => handleChange('landmark', e.target.value)} />
</div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <Label>Sub-District / Tehsil <span className="text-red-500">*</span></Label>
      <Input placeholder="Sub-District / Tehsil" onChange={e => handleChange('subDistrict', e.target.value)} />
    </div>
    <div>
      <Label>District <span className="text-red-500">*</span> </Label>
      <Input placeholder="District" onChange={e => handleChange('district', e.target.value)} />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <Label>State <span className="text-red-500">*</span> </Label>
      <Input placeholder="State" onChange={e => handleChange('state', e.target.value)} />
    </div>
    <div>
      <Label>Pin Code <span className="text-red-500">*</span> </Label>
      <Input type="number" placeholder="Pin Code" onChange={e => handleChange('pinCode', e.target.value)} />
    </div>
  </div>
</div>

     {/* Availability */}
<div className="space-y-2">
  <Label>Availability
    <span className="text-red-500">*</span>
  </Label>
  <div className="flex flex-wrap gap-3">
    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => (
      <label key={day} className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.availability.includes(day)}
          onChange={() => handleCheckboxArray('availability', day)}
        />
        {day}
      </label>
    ))}
  </div>
</div>

{/* Identity Verification */}
<div className="space-y-4">
  <h3 className="font-semibold" col= "red">Identity Verification
    <span className="text-red-500">*</span>
  </h3>

  <Select onValueChange={v => handleChange('idType', v)}>
    <SelectTrigger>
      <SelectValue placeholder="Select ID Type" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="aadhaar">Aadhaar</SelectItem>
      <SelectItem value="pan">PAN</SelectItem>
      <SelectItem value="voter">Voter ID</SelectItem>
      <SelectItem value="passport">Passport</SelectItem>
    </SelectContent>
  </Select>

  <Input placeholder="ID Number" onChange={e => handleChange('idNumber', e.target.value)} />

  <Input type="file" accept=".jpg,.png,.pdf"
    onChange={e => handleFileChange('idDocument', e.target.files[0])} />

  <Button 
  type="button" 
  variant="default" 
  class="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 h-8 min-w-[80px]"
>   
Send OTP 
</Button>
<p className="text-[11px] lowercase tracking-wider text-red-600">
  Verification code will be sent to +91-XXXXX XXXXX
</p>
  <Input placeholder="Enter OTP" onChange={e => handleChange('otp', e.target.value)} />
</div>

{/* Profile picture */}
<div className="space-y-4">
  <Label>upload your picture
    <span className="text-red-500">*</span>
  </Label>
 <Input type="file" accept="image/*"
    onChange={e => handleFileChange('headshot', e.target.files[0])} />
  </div>

{/* Experience */}
<div className="space-y-4">
  <Label className="font-semibold">Experience (if any)</Label>
 
  <Input type="number" placeholder="Years of Experience"
    onChange={e => handleChange('experienceYears', e.target.value)} />
<Label>Certificate</Label>
  <Input type="file" accept=".pdf,.jpg,.png"
    onChange={e => handleFileChange('experienceCertificate', e.target.files[0])} />
</div>


              {/* Pricing Model */}
<div className="space-y-4">
  <Label>How do you want to be paid?
    <span className="text-red-500">*</span>
  </Label>

  <div className="flex gap-6">
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="payment"
        value="hourly"
        onChange={() => handleChange('paymentType', 'hourly')}
      />
      Hourly Rate
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="payment"
        value="fixed"
        onChange={() => handleChange('paymentType', 'fixed')}
      />
      Fixed Amount
    </label>
  </div>

  {formData.paymentType === 'hourly' && (
    <>
      <Input placeholder="Rate per hour (₹)"
        onChange={e => handleChange('hourlyRate', e.target.value)} />

      <Select onValueChange={v => handleChange('minimumBooking', v)}>
        <SelectTrigger>
          <SelectValue placeholder="Minimum Booking" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 Hour</SelectItem>
          <SelectItem value="2">2 Hours</SelectItem>
          <SelectItem value="half">Half Day</SelectItem>
        </SelectContent>
      </Select>
    </>
  )}

  {formData.paymentType === 'fixed' && (
    <Input placeholder="Base Package Price (₹)"
      onChange={e => handleChange('fixedPrice', e.target.value)} />
  )}
</div>


{/* Languages Spoken */}
<div className="space-y-2">
  <Label>Languages Spoken
    <span className="text-red-500">*</span>
  </Label>
  <div className="flex flex-wrap gap-3">
    {['Hindi','English','Bengali','Tamil','Telugu','Other'].map(lang => (
      <label key={lang} className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.languages.includes(lang)}
          onChange={() => handleCheckboxArray('languages', lang)}
        />
        {lang}
      </label>
    ))}
  </div>
</div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Job Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your service in detail..."
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className={errors.description ? 'border-red-500' : ''}
                  rows={5}
                />
                {errors.description && (
                  <p className="text-sm text-red-500">{errors.description}</p>
                )}
              </div>

               {/* Background Verification Consent */}
    <label className="flex items-start gap-2 text-sm">
  <input
    type="checkbox"
    checked={formData.backgroundConsent}
    onChange={e => handleChange('backgroundConsent', e.target.checked)}
  />
  I consent to background verification if required.
</label>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full sm:flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post Job
                </Button>
              </div>

 
         
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-blue-50 rounded-xl p-6"
          >
            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="font-semibold"> Verification: </span> Your job details have been sent to our team for a quick quality check.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="font-semibold">Review: </span> Once verified, a dedicated executive will contact you to finalize the details.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="font-semibold">Launch: </span> After a brief chat, your job will be live and visible to the best professionals in your area.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PostJobPage;