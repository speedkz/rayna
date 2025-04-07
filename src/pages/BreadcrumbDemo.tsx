import React from 'react';
import Breadcrumb from '@components/Breadcrumb';
import { FiHome, FiHeart, FiSettings, FiUser } from 'react-icons/fi';

const BreadcrumbDemo: React.FC = () => {
  const demoItems = [
    { label: 'Home', path: '/', icon: <FiHome size={16} /> },
    { label: 'Settings', path: '/settings', icon: <FiSettings size={16} /> },
    { label: 'Profile', path: '/settings/profile', icon: <FiUser size={16} /> },
  ];

  const demoItems2 = [
    { label: 'Dashboard', path: '/dashboard', icon: <FiHome size={16} /> },
    { label: 'Favorites', path: '/favorites', icon: <FiHeart size={16} /> },
    { label: 'Item List', path: '/favorites/items', icon: <FiHeart size={16} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Breadcrumb Component</h1>

      <div className="space-y-12">
        {/* Interactive Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Example</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Click on the breadcrumb items to navigate. The active item will be highlighted.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Breadcrumb items={demoItems} />
            </div>
          </div>
        </section>

        {/* All States */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">All States</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Default</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Breadcrumb items={demoItems2} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">With Icons</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Breadcrumb items={demoItems} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Without Icons</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Breadcrumb 
                  items={demoItems.map(({ label, path }) => ({ label, path }))} 
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Long Path</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Breadcrumb 
                  items={[
                    { label: 'Home', path: '/', icon: <FiHome size={16} /> },
                    { label: 'Settings', path: '/settings', icon: <FiSettings size={16} /> },
                    { label: 'User Profile', path: '/settings/profile', icon: <FiUser size={16} /> },
                    { label: 'Edit Details', path: '/settings/profile/edit', icon: <FiUser size={16} /> },
                    { label: 'Personal Information', path: '/settings/profile/edit/personal', icon: <FiUser size={16} /> },
                  ]} 
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BreadcrumbDemo; 