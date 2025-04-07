import React from 'react';

// Size variants
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Status indicator types
export type AvatarStatus = 'none' | 'online' | 'offline' | 'verified';

// Avatar types
export type AvatarType = 'image' | 'icon' | 'initials';

export interface AvatarProps {
  /**
   * The size of the avatar
   * @default 'md'
   */
  size?: AvatarSize;
  
  /**
   * The type of avatar to display
   * @default 'image'
   */
  type?: AvatarType;
  
  /**
   * The status indicator to show
   * @default 'none'
   */
  status?: AvatarStatus;
  
  /**
   * The image URL to display when type is 'image'
   */
  src?: string;
  
  /**
   * The initials to display when type is 'initials'
   */
  initials?: string;
  
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

// Size mappings
const sizeClasses: Record<AvatarSize, string> = {
  'xs': 'w-6 h-6 text-xs',
  'sm': 'w-8 h-8 text-sm',
  'md': 'w-10 h-10 text-base',
  'lg': 'w-12 h-12 text-lg',
  'xl': 'w-14 h-14 text-xl',
  '2xl': 'w-16 h-16 text-2xl'
};

// Status indicator position based on size
const statusPositionClasses: Record<AvatarSize, string> = {
  'xs': '-bottom-0.5 -right-0.5 w-2.5 h-2.5',
  'sm': '-bottom-0.5 -right-0.5 w-3 h-3',
  'md': '-bottom-0.5 -right-0.5 w-3.5 h-3.5',
  'lg': '-bottom-1 -right-1 w-4 h-4',
  'xl': '-bottom-1 -right-1 w-4 h-4',
  '2xl': '-bottom-1 -right-1 w-4.5 h-4.5'
};

// Verified badge position based on size
const verifiedPositionClasses: Record<AvatarSize, string> = {
  'xs': '-bottom-1 -right-1 w-3.5 h-3.5',
  'sm': '-bottom-1 -right-1 w-4 h-4',
  'md': '-bottom-1 -right-1 w-4.5 h-4.5',
  'lg': '-bottom-1.5 -right-1.5 w-5 h-5',
  'xl': '-bottom-1.5 -right-1.5 w-5.5 h-5.5',
  '2xl': '-bottom-1.5 -right-1.5 w-6 h-6'
};

// Background colors for icon and initials avatars
const backgroundColors: Record<AvatarType, string> = {
  'image': 'bg-gray-200',
  'icon': 'bg-[#FFECE5]',
  'initials': 'bg-[#FFECE5]'
};

/**
 * Avatar component that displays an image, icon, or initials with various sizes and status indicators
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  type = 'image',
  status = 'none',
  src,
  initials,
  alt = 'Avatar',
  className = '',
  style,
}) => {
  // Determine content based on type
  const renderContent = () => {
    switch (type) {
      case 'image':
        return (
          <img 
            src={src || 'https://via.placeholder.com/150'} 
            alt={alt} 
            className="w-full h-full object-cover" 
          />
        );
      
      case 'icon':
        return (
          <div className="w-full h-full flex items-center justify-center text-gray-700">
            <svg className="w-1/2 h-1/2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      
      case 'initials':
        return (
          <div className="w-full h-full flex items-center justify-center font-semibold text-gray-900">
            {initials || 'UN'}
          </div>
        );
      
      default:
        return null;
    }
  };

  // Render status indicators
  const renderStatus = () => {
    if (status === 'none') return null;

    if (status === 'verified') {
      return (
        <div className={`absolute ${verifiedPositionClasses[size]}`}>
          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" fill="#1671D9" stroke="white" strokeWidth="1"/>
            <path d="M11 6L7 10L5 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      );
    }

    return (
      <div className={`absolute ${statusPositionClasses[size]}`}>
        <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="5" 
            cy="5" 
            r="4" 
            fill={status === 'online' ? '#04802E' : '#D0D5DD'} 
            stroke="white" 
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className={`relative ${className}`} style={style}>
      <div 
        className={`
          ${sizeClasses[size]} 
          ${backgroundColors[type]} 
          rounded-full overflow-hidden
          flex items-center justify-center
          border-2 border-white
        `}
      >
        {renderContent()}
      </div>
      {renderStatus()}
    </div>
  );
};

export default Avatar; 