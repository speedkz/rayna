import React from 'react';
import Avatar, { AvatarProps, AvatarSize } from './Avatar';

export interface AvatarGroupProps {
  /**
   * Array of avatar data to display
   */
  avatars: Array<Omit<AvatarProps, 'size' | 'className'>>;
  
  /**
   * Maximum number of avatars to display before showing a counter
   * @default 5
   */
  maxVisible?: number;
  
  /**
   * Size of the avatars
   * @default 'md'
   */
  size?: AvatarSize;
  
  /**
   * Custom class name for the container
   */
  className?: string;
  
  /**
   * Spacing between the avatars (-8px is default)
   * @default "-8px"
   */
  spacing?: string;
}

/**
 * Avatar Group component for displaying multiple avatars in a stacked formation
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars = [],
  maxVisible = 5,
  size = 'md',
  className = '',
  spacing = '-8px',
}) => {
  // Determine how many avatars to display and if we need to show a counter
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = Math.max(0, avatars.length - maxVisible);
  
  // Get the border width based on the size to ensure consistent appearance
  const getBorderWidth = () => {
    switch (size) {
      case 'xs':
        return 'border-1';
      case 'sm':
        return 'border-1.5';
      case 'md':
        return 'border-2';
      case 'lg':
        return 'border-2';
      case 'xl':
        return 'border-3';
      case '2xl':
        return 'border-3';
      default:
        return 'border-2';
    }
  };

  // Calculate the negative margin for stacking based on size
  const getSpacing = () => {
    if (spacing) return spacing;
    
    switch (size) {
      case 'xs':
        return '-4px';
      case 'sm':
        return '-6px';
      case 'md':
        return '-8px';
      case 'lg':
        return '-11px';
      case 'xl':
        return '-12px';
      case '2xl':
        return '-16px';
      default:
        return '-8px';
    }
  };

  // Determine z-index to ensure proper stacking (last avatars on top)
  const getZIndex = (index: number) => {
    return visibleAvatars.length - index;
  };

  return (
    <div className={`flex items-center ${className}`}>
      {visibleAvatars.map((avatar, index) => (
        <Avatar 
          key={index} 
          {...avatar} 
          size={size}
          className={`${getBorderWidth()} border-white rounded-full shadow-sm`}
          style={{ 
            marginRight: getSpacing(),
            zIndex: getZIndex(index),
            position: 'relative',
          }}
        />
      ))}
      
      {/* Show counter avatar if there are more avatars than the max visible */}
      {remainingCount > 0 && (
        <Avatar 
          type="initials"
          initials={`+${remainingCount}`}
          size={size}
          className={`${getBorderWidth()} border-white shadow-sm`}
        />
      )}
    </div>
  );
};

export default AvatarGroup; 