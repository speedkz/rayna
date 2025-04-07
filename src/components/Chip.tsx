import React from 'react';

// Chip types
export type ChipType = 'input' | 'filter';

// Chip states
export type ChipState = 'default' | 'focused' | 'disabled';

export interface ChipProps {
  /**
   * The text content of the chip
   */
  label: string;
  
  /**
   * The type of chip
   * @default 'input'
   */
  type?: ChipType;
  
  /**
   * The state of the chip
   * @default 'default'
   */
  state?: ChipState;
  
  /**
   * Whether to show a leading icon
   * @default false
   */
  hasLeadingIcon?: boolean;
  
  /**
   * URL for custom leading icon (optional)
   */
  leadingIconSrc?: string;
  
  /**
   * Alt text for the leading icon
   */
  leadingIconAlt?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Handler for when the chip is clicked or selected
   */
  onClick?: () => void;
  
  /**
   * Handler for when the chip's remove/close button is clicked
   */
  onDelete?: () => void;
}

/**
 * Chip component for displaying compact elements that represent input, attributes, or actions
 */
export const Chip: React.FC<ChipProps> = ({
  label,
  type = 'input',
  state = 'default',
  hasLeadingIcon = false,
  leadingIconSrc,
  leadingIconAlt = 'icon',
  className = '',
  onClick,
  onDelete,
}) => {
  // Border and background styles based on state
  const getBorderAndBgStyles = () => {
    switch (state) {
      case 'focused':
        return 'bg-[#FBF1F1] border border-[#CC400C]';
      case 'disabled':
        return 'bg-white border border-[#D0D5DD] cursor-not-allowed';
      case 'default':
      default:
        return 'bg-white border border-[#D0D5DD] hover:border-[#98A2B3]';
    }
  };
  
  // Text color styles based on state
  const getTextColorStyles = () => {
    switch (state) {
      case 'focused':
        return 'text-[#475367]';
      case 'disabled':
        return 'text-[#98A2B3]';
      case 'default':
      default:
        return 'text-[#667185]';
    }
  };

  // Icon color styles based on state
  const getIconColorStyles = () => {
    switch (state) {
      case 'focused':
        return 'text-[#475367]';
      case 'disabled':
        return 'text-[#98A2B3]';
      case 'default':
      default:
        return 'text-[#475367]';
    }
  };

  // Determine if we should show the close/remove button
  const showCloseButton = state === 'focused' && type === 'input';
  
  // Determine if we should show the dropdown icon
  const showDropdownIcon = type === 'filter';

  return (
    <div
      className={`
        inline-flex items-center gap-2
        rounded-lg
        ${getBorderAndBgStyles()}
        py-[6px] px-3
        ${state === 'disabled' ? '' : 'cursor-pointer'}
        ${className}
      `}
      onClick={state !== 'disabled' ? onClick : undefined}
    >
      {/* Leading Icon (if enabled) */}
      {hasLeadingIcon && (
        <span className={`flex items-center ${getIconColorStyles()}`}>
          {leadingIconSrc ? (
            <img 
              src={leadingIconSrc} 
              alt={leadingIconAlt}
              className="w-4 h-4" 
            />
          ) : (
            <img 
              src="@icons/home-alt.svg" 
              alt="Home"
              className="w-4 h-4" 
            />
          )}
        </span>
      )}
      
      {/* Chip Label */}
      <span className={`font-medium text-sm ${getTextColorStyles()}`}>
        {label}
      </span>
      
      {/* Trailing Icon (Close or Dropdown based on type and state) */}
      {showCloseButton && (
        <span 
          className={`flex items-center ${getIconColorStyles()}`}
          onClick={(e) => {
            e.stopPropagation();
            if (onDelete) {
              onDelete();
            }
          }}
        >
          <img 
            src="@icons/multiply.svg" 
            alt="Remove"
            className="w-4 h-4" 
          />
        </span>
      )}
      
      {showDropdownIcon && (
        <span className={`flex items-center ${getIconColorStyles()}`}>
          <img 
            src="@icons/chevron-down.svg" 
            alt="Dropdown"
            className="w-4 h-4" 
          />
        </span>
      )}
    </div>
  );
};

export default Chip; 