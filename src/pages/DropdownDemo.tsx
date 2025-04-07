import React from 'react';
import { FiHome, FiSearch, FiBell, FiSettings, FiUser, FiLogOut, FiTrash2, FiMenu } from 'react-icons/fi';
import Dropdown, { DropdownSection } from '../components/Dropdown';

const commonSections: DropdownSection[] = [
  {
    items: [
      { id: 'home', label: 'Home', icon: <FiHome />, shortcut: '⌘H' },
      { id: 'search', label: 'Search', icon: <FiSearch />, shortcut: '⌘S' },
      { id: 'notifications', label: 'Notifications', icon: <FiBell />, shortcut: '⌘N' },
    ],
  },
  {
    items: [
      { id: 'account', label: 'Account Settings', icon: <FiSettings />, shortcut: '⌘A' },
      { id: 'admin', label: 'Admin Settings', icon: <FiUser />, shortcut: '⌘M', disabled: true },
    ],
  },
  {
    items: [
      { id: 'signout', label: 'Sign out', icon: <FiLogOut />, shortcut: '⌘L' },
      { id: 'delete', label: 'Delete account', icon: <FiTrash2 />, shortcut: '⌘D' },
    ],
  },
];

const DropdownDemo = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Dropdown Demo</h1>

      <div className="space-y-12">
        {/* Default Dropdown */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Default Dropdown</h2>
          <p className="text-gray-600 mb-4">
            A dropdown with a label and icon. Supports hover, active, and disabled states.
          </p>
          <div className="flex items-center gap-4">
            <Dropdown
              label="Menu"
              icon={<FiMenu />}
              sections={commonSections}
            />
            <Dropdown
              label="Disabled"
              icon={<FiMenu />}
              sections={commonSections}
              disabled
            />
          </div>
        </div>

        {/* Avatar Dropdown */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Avatar Dropdown</h2>
          <p className="text-gray-600 mb-4">
            A dropdown triggered by an avatar image. Perfect for user menus.
          </p>
          <div className="flex items-center gap-4">
            <Dropdown
              type="avatar"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              sections={commonSections}
            />
            <Dropdown
              type="avatar"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              sections={commonSections}
              disabled
            />
          </div>
        </div>

        {/* Icon-only Dropdown */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Icon-only Dropdown</h2>
          <p className="text-gray-600 mb-4">
            A minimal dropdown triggered by a single icon.
          </p>
          <div className="flex items-center gap-4">
            <Dropdown
              type="icon-only"
              icon={<FiMenu className="w-5 h-5" />}
              sections={commonSections}
            />
            <Dropdown
              type="icon-only"
              icon={<FiMenu className="w-5 h-5" />}
              sections={commonSections}
              disabled
            />
          </div>
        </div>

        {/* Custom Positioning */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Custom Positioning</h2>
          <p className="text-gray-600 mb-4">
            Dropdowns can be positioned relative to their trigger button.
          </p>
          <div className="flex items-center gap-4">
            <Dropdown
              label="Left-aligned"
              icon={<FiMenu />}
              sections={commonSections}
              menuClassName="left-0"
            />
            <Dropdown
              label="Center-aligned"
              icon={<FiMenu />}
              sections={commonSections}
              menuClassName="-translate-x-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDemo; 