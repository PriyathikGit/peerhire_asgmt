import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProfileSection from './pages/ProfileSection';
import DarkModeToggle from './components/DarkMode';
import RatingSystem from './components/RatingSystem';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { Menu } from 'lucide-react';

function Home() {
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [hamIcon, setHamIcon] = useState(false); // Show ham icon on mobile
  const [sideBar, setSideBar] = useState(false); // Sidebar visibility

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem('freelancerRatings')) || [];
    if (savedRatings.length > 0) {
      const sum = savedRatings.reduce((a, b) => a + b, 0);
      setAverageRating(sum / savedRatings.length);
      setTotalRatings(savedRatings.length);
    }
  }, []);

  
  const handleRating = useCallback((newRating) => {
    const savedRatings = JSON.parse(localStorage.getItem('freelancerRatings')) || [];
    const updatedRatings = [...savedRatings, newRating];
    localStorage.setItem('freelancerRatings', JSON.stringify(updatedRatings));
    const sum = updatedRatings.reduce((a, b) => a + b, 0);
    setAverageRating(sum / updatedRatings.length);
    setTotalRatings(updatedRatings.length);
    setRating(newRating);
  }, []);

  useEffect(() => {
    // Show ham icon on mobile devices
    const handleResize = () => {
      if (window.innerWidth <= 786) {
        setHamIcon(true);
      } else {
        setHamIcon(false);
        setSideBar(false); // Close sidebar when switching to desktop
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenSidebar = () => {
    setSideBar(!sideBar); // Toggle sidebar visibility
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative">
      <Router>
        {/* Show ham icon on mobile */}
        {hamIcon && !sideBar && (
          <Menu
            onClick={handleOpenSidebar}
            color="white"
            className="left-4 top-4 absolute z-50 cursor-pointer"
          />
        )}
        {/* Sidebar */}
        <Sidebar
          setSideBar={setSideBar}
          hamIcon={hamIcon}
          sidebar={sideBar}
        />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/profile"
            element={
              <Profile
                averageRating={averageRating}
                totalRatings={totalRatings}
                handleRating={handleRating}
              />
            }
          />
          <Route path="*" element={<Navigate to="/profile" />} />
        </Routes>
      </Router>
      <DarkModeToggle />
    </div>
  );
}

export const Profile = ({ averageRating, totalRatings, handleRating }) => {
  return (
    <div className=" mx-auto px-4 py-8 md:w-[80%] md:pl-24">
      <ProfileSection />
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Rate This Freelancer</h2>
        <RatingSystem
          averageRating={averageRating}
          totalRatings={totalRatings}
          onRate={handleRating}
        />
      </div>
    </div>
  )
}

export default Home;