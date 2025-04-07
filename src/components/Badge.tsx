import React from 'react';

// Badge color variants
export type BadgeColor = 'orange' | 'blue' | 'success' | 'warning' | 'error' | 'neutral' | 'disabled';

// Badge type variants
export type BadgeType = 'filled' | 'accent' | 'outline';

// Badge size variants
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /**
   * The text content of the badge
   */
  label: string;
  
  /**
   * The color variant of the badge
   * @default 'blue'
   */
  color?: BadgeColor;
  
  /**
   * The type of badge to display
   * @default 'filled'
   */
  type?: BadgeType;
  
  /**
   * The size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Badge component for displaying status labels
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'blue',
  type = 'filled',
  size = 'md',
  className = '',
}) => {
  // Size class mappings
  const sizeClasses: Record<BadgeSize, string> = {
    'sm': 'text-xs py-0 px-2',
    'md': 'text-sm py-[2px] px-3',
    'lg': 'text-sm py-1 px-3',
  };

  // Background color mappings for filled type
  const filledBgColors: Record<BadgeColor, string> = {
    'orange': 'bg-[#F56630] text-white',
    'blue': 'bg-[#1671D9] text-white',
    'success': 'bg-[#0F973D] text-white',
    'warning': 'bg-[#F3A218] text-black',
    'error': 'bg-[#D42620] text-white',
    'neutral': 'bg-[#101928] text-white',
    'disabled': 'bg-[#98A2B3] text-[#F9FAFB]',
  };

  // Background color mappings for accent type
  const accentBgColors: Record<BadgeColor, string> = {
    'orange': 'bg-[#FFECE5] text-[#AD3307]',
    'blue': 'bg-[#E3EFFC] text-[#04326B]',
    'success': 'bg-[#E7F6EC] text-[#036B26]',
    'warning': 'bg-[#FEF6E7] text-[#865503]',
    'error': 'bg-[#FBEAE9] text-[#9E0A05]',
    'neutral': 'bg-[#F0F2F5] text-[#344054]',
    'disabled': 'bg-[#D0D5DD] text-[#344054]',
  };

  // Border color mappings for outline type
  const outlineBorderColors: Record<BadgeColor, string> = {
    'orange': 'border border-[#AD3307] text-[#AD3307]',
    'blue': 'border border-[#04326B] text-[#04326B]',
    'success': 'border border-[#036B26] text-[#036B26]',
    'warning': 'border border-[#865503] text-[#865503]',
    'error': 'border border-[#9E0A05] text-[#9E0A05]',
    'neutral': 'border border-[#344054] text-[#344054]',
    'disabled': 'border border-[#98A2B3] text-[#98A2B3]',
  };

  // Get the appropriate color classes based on type and color
  const getColorClasses = () => {
    switch (type) {
      case 'filled':
        return filledBgColors[color];
      case 'accent':
        return accentBgColors[color];
      case 'outline':
        return outlineBorderColors[color];
      default:
        return filledBgColors[color];
    }
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full
        font-medium
        ${sizeClasses[size]}
        ${getColorClasses()}
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default Badge; 