import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const location = useLocation();

  return (
    <nav className={`flex items-center ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = location.pathname === item.path;
        const isDisabled = false; // You can add logic for disabled state

        return (
          <React.Fragment key={item.path}>
            <Link
              to={item.path}
              className={`
                inline-flex items-center gap-1 px-2 py-1.5 rounded
                ${isActive 
                  ? 'text-[#EB5017]' 
                  : isDisabled
                    ? 'text-[#98A2B3] cursor-not-allowed'
                    : 'text-[#667185] hover:text-[#F77A4A]'
                }
                transition-colors duration-200
              `}
            >
              {item.icon && (
                <span className={`
                  ${isActive 
                    ? 'text-[#EB5017]' 
                    : isDisabled
                      ? 'text-[#98A2B3]'
                      : 'text-[#667185] group-hover:text-[#F77A4A]'
                  }
                `}>
                  {item.icon}
                </span>
              )}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
            {!isLast && (
              <span className="text-[#98A2B3] mx-2 select-none">/</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb; 