import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string | number;
}

interface TabsProps {
  tabs: Tab[];
  initialActiveIndex?: number;
  style?: 'line' | 'pill';
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  initialActiveIndex = 0, 
  style = 'line',
  className = '' 
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <div className={`tabs-container ${className}`}>
      <div 
        className={`tabs-header flex items-center ${
          style === 'line' 
            ? 'border-b border-[#E5E7EB] gap-8' 
            : 'gap-2'
        }`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`
              tab-item flex items-center gap-2 transition-all duration-200 relative
              ${style === 'line'
                ? 'px-1 py-3 font-inter text-sm hover:text-[#F56630]'
                : 'px-4 py-2 font-inter text-sm rounded-full hover:bg-opacity-90'
              }
              ${activeIndex === index
                ? style === 'line'
                  ? 'text-[#F56630] font-medium before:absolute before:bottom-[-1px] before:left-0 before:w-full before:h-[2px] before:bg-[#F56630]'
                  : 'text-white bg-[#F56630] font-medium'
                : style === 'line'
                  ? 'text-[#6B7280]'
                  : 'text-[#6B7280] bg-[#F3F4F6]'
              }
            `}
            onClick={() => setActiveIndex(index)}
          >
            {tab.icon && (
              <span className={`tab-icon text-lg ${
                activeIndex === index 
                  ? style === 'line' 
                    ? 'text-[#F56630]' 
                    : 'text-white'
                  : 'text-[#6B7280]'
              }`}>
                {tab.icon}
              </span>
            )}
            {tab.label}
            {tab.badge && (
              <span className={`
                tab-badge px-2 py-0.5 text-xs rounded-full font-medium
                ${activeIndex === index && style === 'pill' 
                  ? 'bg-white text-[#F56630]' 
                  : 'bg-[#EF4444] text-white'
                }
              `}>
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="tabs-content py-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`
              tab-panel transition-all duration-300 transform
              ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}
            `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;