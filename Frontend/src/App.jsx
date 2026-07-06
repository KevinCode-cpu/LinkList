import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostJobPage from './pages/PostJobPage';
import HomeAndDailyLifePage from './pages/HomeAndDailyLifePage';
import EventAndOccasionPage from './pages/EventAndOccasionPage';
import TransportAndLogisticsPage from './pages/TransportAndLogisticsPage';
import ConstructionAndLabourPage from './pages/ConstructionAndLabourPage';
import RentalAndResourcesPage from './pages/RentalAndResourcesPage';
import CommercialAndBusinessPage from './pages/CommercialAndBusinessPage';
import RuralAndSemiUrbanPage from './pages/RuralAndSemiUrbanPage';
import PersonalAndCarePage from './pages/PersonalAndCarePage';
import ProtectedRoute from './components/protectedRoute';
import UtilityAndGovernmentPage from './pages/UtilityAndGovernmentPage';
import { Toaster } from './components/ui/toaster';
import ProfilePage from './pages/ProfilePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import CategoryProvidersPage from "./pages/CategoryProvidersPage";
import ProviderDetailPage from "./pages/ProviderDetailPage";
import ProviderDashboardPage from "./pages/ProviderDashboardPage";
import MyRequestsPage from "./pages/MyRequestsPage";
import SavedProvidersPage from "./pages/SavedProviders";
import CustomerDashboard from "./pages/CustomerDashboard";
import AccountPage from "./pages/AccountPage";                             

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
path="/account"
element={<AccountPage />}
/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

<Route
    path="/provider-dashboard"
    element={<ProviderDashboardPage />}
/>
          <Route
            path="/post-job"
            element={<PostJobPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Category Routes */}
          <Route
  path="/provider/:id"
  element={
    <ProtectedRoute>
      <ProviderDetailPage />
    </ProtectedRoute>
  }
/>
          
          <Route

  path="/my-requests"

  element={

    <ProtectedRoute>

      <MyRequestsPage />

    </ProtectedRoute>

  }

/>

         
<Route
  path="/saved-providers"
  element={
    <SavedProvidersPage />
  }
/>


          <Route path="/home-daily-life" element={<HomeAndDailyLifePage />} />
          <Route path="/event-occasion" element={<EventAndOccasionPage />} />
          <Route path="/transport-logistics" element={<TransportAndLogisticsPage />} />
          <Route path="/construction-labour" element={<ConstructionAndLabourPage />} />
          <Route path="/rental-resources" element={<RentalAndResourcesPage />} />
          <Route path="/commercial-business" element={<CommercialAndBusinessPage />} />
          <Route path="/rural-semi-urban" element={<RuralAndSemiUrbanPage />} />
          <Route path="/personal-care" element={<PersonalAndCarePage />} />
          <Route path="/utility-government" element={<UtilityAndGovernmentPage />} />
         <Route
  path="/category/:category"
  element={
    <ProtectedRoute>
      <CategoryProvidersPage />
    </ProtectedRoute>
  }
/>
          <Route
            path="/service/:id"
            element={<ServiceDetailsPage />}
          />
         

<Route
  path="/customer-dashboard"
  element={
    <ProtectedRoute>
      <CustomerDashboard />
    </ProtectedRoute>
  }
/>
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;