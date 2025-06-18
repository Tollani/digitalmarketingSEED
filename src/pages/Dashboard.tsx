
import React, { useState, useEffect } from 'react';
import DashboardNewClient from './DashboardNewClient';
import DashboardReturningUser from './DashboardReturningUser';

const Dashboard = () => {
  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    // Simulate user status check - in a real app this would come from auth context or API
    // For demo purposes, we'll randomly assign user status or use localStorage
    const userStatus = localStorage.getItem('userType');
    if (userStatus === 'returning') {
      setIsReturningUser(true);
    } else if (userStatus === 'new') {
      setIsReturningUser(false);
    } else {
      // Default to new user for demo, but in practice this would be determined by authentication
      setIsReturningUser(false);
      localStorage.setItem('userType', 'new');
    }
  }, []);

  // For demo purposes, add a way to toggle between user types
  const toggleUserType = () => {
    const newUserType = !isReturningUser;
    setIsReturningUser(newUserType);
    localStorage.setItem('userType', newUserType ? 'returning' : 'new');
  };

  // Add a hidden button for demo purposes (remove in production)
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 't') {
      toggleUserType();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isReturningUser]);

  return isReturningUser ? <DashboardReturningUser /> : <DashboardNewClient />;
};

export default Dashboard;
