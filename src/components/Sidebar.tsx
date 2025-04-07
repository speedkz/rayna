import React from 'react';

interface SidebarProps {
  className?: string;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const topNavItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: '/images/icons/home-icon.svg' },
  { name: 'Consult a Doctor', href: '/consult', icon: '/images/icons/message-icon.svg' },
  { name: 'Appointments', href: '/appointments', icon: '/images/icons/calendar-icon.svg' },
  { name: 'Medical History', href: '/history', icon: '/images/icons/file-icon.svg' },
  { name: 'My Hospitals', href: '/hospitals', icon: '/images/icons/health-plus-icon.svg' },
];

const bottomNavItems: NavItem[] = [
  { name: 'Settings', href: '/settings', icon: '/images/icons/settings-icon.svg' },
  { name: 'Help Center', href: '/help', icon: '/images/icons/headset-icon.svg' },
  { name: 'Refer family & friends', href: '/refer', icon: '/images/icons/gift-icon.svg' },
];

const Sidebar: React.FC<SidebarProps> = ({ className = '', currentPath = '', onNavigate }) => {
  const isActive = (href: string) => currentPath === href;

  const handleClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
  };

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => (
    <a
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        handleClick(item.href);
      }}
      className={`flex items-center px-4 py-3 rounded-md gap-3 transition-colors ${
        isActive(item.href)
          ? 'bg-[#FFECE5] text-[#F56630] font-medium'
          : 'text-[#667185] hover:bg-gray-50'
      }`}
    >
      <img src={item.icon} alt={item.name} className="w-5 h-5" />
      <span className="text-sm">{item.name}</span>
    </a>
  );

  return (
    <aside className={`w-[272px] bg-white border-r border-[#E4E7EC] flex flex-col h-screen ${className}`}>
      {/* Logo Section */}
      <div className="px-6 py-2">
        <a href="/" className="block">
          <img src="/logo.svg" alt="Rayna Logo" className="h-8" />
        </a>
      </div>

      {/* Top Navigation */}
      <div className="px-2 mt-3 flex-1">
        <nav className="space-y-1">
          {topNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>

        <div className="h-px bg-[#F0F2F5] my-4 mx-2" />

        {/* Bottom Navigation */}
        <nav className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="border-t border-[#F0F2F5] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-[1.5px] border-white overflow-hidden">
                <img
                  src="/images/avatar.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#04802E] border-2 border-white rounded-full" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#101928]">David Fayemi</p>
              <p className="text-sm text-[#475367]">David@rayna.ui</p>
            </div>
          </div>
          <button
            onClick={() => handleClick('/logout')}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <img
              src="/images/icons/sign-out-icon.svg"
              alt="Sign Out"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 