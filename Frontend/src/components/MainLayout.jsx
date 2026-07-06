import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="flex-grow pt-14 sm:pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;