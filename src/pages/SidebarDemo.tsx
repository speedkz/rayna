import React, { useState } from 'react';
import { FiHome, FiUsers, FiSettings, FiMail, FiCalendar, FiHelpCircle } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

const SidebarDemo: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const sections = [
    {
      title: 'Menu',
      items: [
        { title: 'Dashboard', icon: <FiHome className="h-5 w-5" />, isActive: true },
        { title: 'Users', icon: <FiUsers className="h-5 w-5" />, badge: 12 },
        { title: 'Settings', icon: <FiSettings className="h-5 w-5" /> },
      ],
    },
    {
      title: 'Tasks',
      items: [
        { title: 'Inbox', icon: <FiMail className="h-5 w-5" />, badge: 3 },
        { title: 'Calendar', icon: <FiCalendar className="h-5 w-5" /> },
        { title: 'Help', icon: <FiHelpCircle className="h-5 w-5" /> },
      ],
    },
  ];

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/300',
  };

  const handleSignOut = () => {
    console.log('Sign out clicked');
  };

  return (
    <div className="flex w-full h-full">
      <Sidebar
        logo="/images/logo.svg"
        collapsedLogo="/images/logo-icon.svg"
        sections={sections}
        user={user}
        onSignOut={handleSignOut}
        isCollapsed={isCollapsed}
        onCollapsedChange={setIsCollapsed}
        theme={isDarkTheme ? 'dark' : 'light'}
      />
      <main className={`flex-1 p-8 ${isDarkTheme ? 'bg-[#0B111F] text-white' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Sidebar Demo
            </h1>
            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className={`px-4 py-2 rounded-md ${
                isDarkTheme 
                  ? 'bg-[#1D2739] text-white hover:bg-[#2D3749]' 
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              } border border-gray-200`}
            >
              Toggle Theme
            </button>
          </div>
          <div className={`p-6 rounded-lg ${
            isDarkTheme ? 'bg-[#101928]' : 'bg-white'
          } shadow-sm`}>
            <h2 className={`text-lg font-medium mb-4 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>
              Current State
            </h2>
            <div className={`space-y-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>• The sidebar is currently {isCollapsed ? 'collapsed' : 'expanded'}</p>
              <p>• Theme is currently in {isDarkTheme ? 'dark' : 'light'} mode</p>
              <p>• Click the chevron icon in the top-right corner of the sidebar to toggle collapse</p>
              <p>• Click the button above to toggle between light and dark themes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SidebarDemo; 