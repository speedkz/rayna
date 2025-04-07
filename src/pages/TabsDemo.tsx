import React from 'react';
import Tabs from '@components/Tabs';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const TabsDemo: React.FC = () => {
  const tabData = [
    {
      label: 'Home',
      content: <div>Welcome to the Home tab!</div>,
      icon: <FaHome />,
      badge: 3,
    },
    {
      label: 'Profile',
      content: <div>This is the Profile tab content.</div>,
      icon: <FaUser />,
    },
    {
      label: 'Settings',
      content: <div>Adjust your preferences in the Settings tab.</div>,
      icon: <FaCog />,
      badge: 'New',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Tabs Component Demo</h1>
      <h2 className="text-2xl font-inter text-gray-700 mb-4">Line Style</h2>
      <Tabs tabs={tabData} style="line" />
      <h2 className="text-2xl font-inter text-gray-700 mt-8 mb-4">Pill Style</h2>
      <Tabs tabs={tabData} style="pill" />
    </div>
  );
};

export default TabsDemo; 