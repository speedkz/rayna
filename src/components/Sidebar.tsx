import React from 'react';
import { FiSearch, FiHash, FiLogOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface MenuItem {
  title: string;
  icon?: React.ReactNode;
  badge?: number;
  isActive?: boolean;
}

interface SidebarSection {
  title?: string;
  items: MenuItem[];
}

interface SidebarProps {
  logo?: string;
  collapsedLogo?: string;
  sections: SidebarSection[];
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onSignOut?: () => void;
  className?: string;
  isCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  theme?: 'light' | 'dark';
}

export const Sidebar: React.FC<SidebarProps> = ({
  logo = '/images/logo.svg',
  collapsedLogo = '/images/logo-icon.svg',
  sections,
  user,
  onSignOut,
  className = '',
  isCollapsed = false,
  onCollapsedChange,
  theme = 'light',
}) => {
  const handleToggleCollapse = () => {
    if (onCollapsedChange) {
      onCollapsedChange(!isCollapsed);
    }
  };

  const isDark = theme === 'dark';

  return (
    <aside 
      className={`flex flex-col h-full transition-all duration-300 ${
        isCollapsed ? 'w-[82px]' : 'w-[272px]'
      } ${isDark ? 'bg-[#101928]' : 'bg-white'} ${className}`}
    >
      {/* Top Section */}
      <div className="flex flex-col flex-1 min-h-0">
        {/* Logo */}
        <div className={`flex items-center flex-none ${isCollapsed ? 'px-6 py-2' : 'px-6 py-4'}`}>
          <img 
            src={isCollapsed ? collapsedLogo : logo} 
            alt="Logo" 
            className={`transition-all duration-300 ${
              isCollapsed ? 'w-[34px]' : 'w-[129px]'
            } h-[32px] object-contain ${isDark ? 'brightness-0 invert' : ''}`}
          />
          <button
            onClick={handleToggleCollapse}
            className={`ml-auto p-1 rounded-md ${
              isDark 
                ? 'text-gray-400 hover:text-white hover:bg-[#1D2739]' 
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
          </button>
        </div>

        {/* Search - Only show in expanded mode */}
        {!isCollapsed && (
          <div className="px-4 mb-4 flex-none">
            <div className="relative w-full">
              <div className={`flex items-center w-full rounded-md border px-3 py-2 ${
                isDark 
                  ? 'bg-[#1D2739] border-transparent' 
                  : 'bg-white border-[#D0D5DD]'
              }`}>
                <FiSearch className={`h-5 w-5 ${
                  isDark ? 'text-[#F9FAFB]' : 'text-[#667185]'
                }`} />
                <input
                  type="text"
                  placeholder="Search"
                  className={`ml-2 w-full border-none bg-transparent text-sm outline-none ${
                    isDark 
                      ? 'text-[#F9FAFB] placeholder:text-[#F9FAFB]' 
                      : 'text-[#98A2B3] placeholder:text-[#98A2B3]'
                  }`}
                />
              </div>
            </div>
          </div>
        )}

        {/* Menu Sections - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {sections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className={`mb-4 ${isCollapsed ? 'px-2' : 'px-2'}`}
            >
              {!isCollapsed && section.title && (
                <h3 className={`px-4 py-2 text-sm font-medium ${
                  isDark ? 'text-[#98A2B3]' : 'text-[#98A2B3]'
                }`}>
                  {section.title}
                </h3>
              )}
              <div className="flex flex-col gap-1">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`flex items-center justify-center rounded-md transition-colors ${
                      isCollapsed ? 'px-4 py-3' : 'px-4 py-3'
                    } ${
                      item.isActive
                        ? isDark 
                          ? 'bg-[#1D2739] text-white' 
                          : 'bg-[#FFECE5] text-[#101928]'
                        : isDark
                          ? 'text-[#F9FAFB] hover:bg-[#1D2739]'
                          : 'hover:bg-gray-50 text-[#344054]'
                    }`}
                  >
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between w-full'}`}>
                      <div className="flex items-center gap-3">
                        <div className={isDark ? 'text-white' : ''}>
                          {item.icon || <FiHash className="h-5 w-5" />}
                        </div>
                        {!isCollapsed && (
                          <span className="text-sm font-normal">{item.title}</span>
                        )}
                      </div>
                      {!isCollapsed && item.badge && (
                        <span className={`rounded-2xl px-2 py-0.5 text-xs font-medium ${
                          isDark
                            ? 'bg-[#F0F2F5] text-[#344054]'
                            : item.isActive 
                              ? 'bg-[#FCD2C2]' 
                              : 'bg-[#F0F2F5]'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - User Profile */}
      {user && (
        <div className={`border-t flex-none ${
          isDark ? 'border-[#1D2739]' : 'border-[#F0F2F5]'
        } ${isCollapsed ? 'p-2' : 'p-6'}`}>
          <div className={`flex ${isCollapsed ? 'justify-center' : 'items-center justify-between'}`}>
            {isCollapsed ? (
              <div className="relative">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full border-1.5 border-white"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-[#FFE7CC] border-1.5 border-white flex items-center justify-center text-[#101928] font-medium">
                    {user.name.charAt(0)}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#04802E] border border-white" />
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-10 w-10 rounded-full border-1.5 border-white"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-[#FFE7CC] border-1.5 border-white flex items-center justify-center text-[#101928] font-medium">
                        {user.name.charAt(0)}
                      </div>
                    )}
                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#04802E] border border-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-sm font-semibold ${
                      isDark ? 'text-white' : 'text-[#101928]'
                    }`}>
                      {user.name}
                    </span>
                    <span className={`text-sm ${
                      isDark ? 'text-[#E3EFFC]' : 'text-[#475367]'
                    }`}>
                      {user.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onSignOut}
                  className={`${
                    isDark 
                      ? 'text-white hover:text-white/80' 
                      : 'text-[#101928] hover:text-[#101928]/80'
                  }`}
                >
                  <FiLogOut className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar; 