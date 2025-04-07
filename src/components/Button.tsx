import React, { ReactNode } from 'react';

// Import icons
import { ButtonIcon, SecondaryIcon, GreyIcon, DestructiveIcon } from '@assets/icons';

export type ButtonSize = 'sm' | 'lg';
export type IconStyle = 'none' | 'leading' | 'trailing' | 'icon-only';
export type ButtonState = 'default' | 'hover' | 'focused' | 'disabled';
export type ButtonVariant = 'primary' | 'secondary' | 'grey-solid' | 'grey-outlined' | 'destructive-solid' | 'destructive-outlined' | 'text-primary' | 'text-secondary' | 'text-destructive';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: ButtonSize;
  state?: ButtonState;
  iconStyle?: IconStyle;
  variant?: ButtonVariant;
  label?: string;
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  icon?: string | ReactNode;
}

const getBaseClasses = () => 
  'flex justify-center items-center gap-2 rounded-lg font-inter font-semibold transition-colors duration-200';

const getSizeClasses = (size: ButtonSize, iconStyle: IconStyle, isTextVariant: boolean) => {
  if (isTextVariant) {
    return size === 'lg' ? 'text-base' : 'text-sm';
  }

  if (iconStyle === 'icon-only') {
    return size === 'lg' ? 'p-4 text-base' : 'p-2 text-sm';
  }
  return size === 'lg' ? 'px-6 py-4 text-base' : 'px-4 py-2 text-sm';
};

const getVariantAndStateClasses = (variant: ButtonVariant, state: ButtonState, disabled: boolean) => {
  if (disabled) {
    if (variant.startsWith('text-')) {
      return 'text-[#D0D5DD] cursor-not-allowed';
    }
    return variant.includes('outlined') 
      ? 'bg-white border-2 border-[#F0F2F5] text-[#98A2B3] cursor-not-allowed'
      : 'bg-[#D0D5DD] text-white cursor-not-allowed';
  }

  // Text button variants
  if (variant === 'text-primary') {
    switch (state) {
      case 'hover':
        return 'text-[#CC400C] hover:text-[#CC400C]';
      case 'focused':
        return 'text-[#AD3307] focus:text-[#AD3307]';
      default: // default state
        return 'text-[#EB5017] hover:text-[#CC400C] focus:text-[#AD3307]';
    }
  } 
  else if (variant === 'text-secondary') {
    switch (state) {
      case 'hover':
        return 'text-[#98A2B3] hover:text-[#98A2B3]';
      case 'focused':
        return 'text-[#344054] focus:text-[#344054]';
      default: // default state
        return 'text-[#667185] hover:text-[#98A2B3] focus:text-[#344054]';
    }
  }
  else if (variant === 'text-destructive') {
    switch (state) {
      case 'hover':
        return 'text-[#E26E6A] hover:text-[#E26E6A]';
      case 'focused':
        return 'text-[#9E0A05] focus:text-[#9E0A05]';
      default: // default state
        return 'text-[#D42620] hover:text-[#E26E6A] focus:text-[#9E0A05]';
    }
  }
  // Primary variant
  else if (variant === 'primary') {
    switch (state) {
      case 'hover':
        return 'bg-[#CC400C] text-white hover:bg-[#CC400C]';
      case 'focused':
        return 'bg-[#AD3307] text-white focus:bg-[#AD3307]';
      default: // default state
        return 'bg-[#EB5017] text-white hover:bg-[#CC400C] focus:bg-[#AD3307]';
    }
  }
  // Secondary variant
  else if (variant === 'secondary') {
    switch (state) {
      case 'hover':
        return 'bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB] hover:border-[#D0D5DD]';
      case 'focused':
        return 'bg-[#F9FAFB] border-2 border-[#D0D5DD] text-[#101828] focus:bg-[#F9FAFB] focus:border-[#D0D5DD]';
      default: // default state
        return 'bg-white border-[1.5px] border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB] hover:border-[#D0D5DD] focus:bg-[#F9FAFB] focus:border-[#D0D5DD]';
    }
  }
  // Grey-solid variant
  else if (variant === 'grey-solid') {
    switch (state) {
      case 'hover':
        return 'bg-[#F0F2F5] text-[#475467] hover:bg-[#F0F2F5]';
      case 'focused':
        return 'bg-[#E4E7EC] text-[#344054] focus:bg-[#E4E7EC]';
      default: // default state
        return 'bg-[#F9FAFB] text-[#475467] hover:bg-[#F0F2F5] focus:bg-[#E4E7EC]';
    }
  }
  // Grey-outlined variant
  else if (variant === 'grey-outlined') {
    switch (state) {
      case 'hover':
        return 'bg-[#F9FAFB] border-[1.5px] border-[#D0D5DD] text-[#475467] hover:bg-[#F9FAFB] hover:border-[#D0D5DD]';
      case 'focused':
        return 'bg-[#F9FAFB] border-2 border-[#D0D5DD] text-[#344054] focus:bg-[#F9FAFB] focus:border-[#D0D5DD]';
      default: // default state
        return 'bg-white border-[1.5px] border-[#E4E7EC] text-[#475467] hover:bg-[#F9FAFB] hover:border-[#D0D5DD] focus:bg-[#F9FAFB] focus:border-[#D0D5DD]';
    }
  }
  // Destructive-solid variant
  else if (variant === 'destructive-solid') {
    switch (state) {
      case 'hover':
        return 'bg-[#DD524D] text-white hover:bg-[#DD524D]';
      case 'focused':
        return 'bg-[#9E0A05] text-white focus:bg-[#9E0A05]';
      default: // default state
        return 'bg-[#CB1A14] text-white hover:bg-[#DD524D] focus:bg-[#9E0A05]';
    }
  }
  // Destructive-outlined variant
  else {
    switch (state) {
      case 'hover':
        return 'bg-[#FBEAE9] border-[1.5px] border-[#BA110B] text-[#BA110B] hover:bg-[#FBEAE9] hover:border-[#BA110B]';
      case 'focused':
        return 'bg-[#FBEAE9] border-2 border-[#9E0A05] text-[#9E0A05] focus:bg-[#FBEAE9] focus:border-[#9E0A05]';
      default: // default state
        return 'bg-white border-[1.5px] border-[#D42620] text-[#D42620] hover:bg-[#FBEAE9] hover:border-[#BA110B] focus:bg-[#FBEAE9] focus:border-[#9E0A05]';
    }
  }
};

const getIconComponent = (variant: ButtonVariant) => {
  if (variant === 'primary' || variant === 'text-primary') {
    return ButtonIcon;
  } else if (variant === 'secondary' || variant === 'text-secondary') {
    return SecondaryIcon;
  } else if (variant === 'grey-solid' || variant === 'grey-outlined') {
    return GreyIcon;
  } else if (variant === 'destructive-solid' || variant === 'destructive-outlined' || variant === 'text-destructive') {
    return DestructiveIcon;
  }
  return ButtonIcon; // Default fallback
};

// Calculate icon color based on variant and state
const getIconColor = (variant: ButtonVariant, state: ButtonState, disabled: boolean) => {
  if (disabled) {
    if (variant.startsWith('text-')) {
      return 'text-[#D0D5DD]';
    }
    return variant.includes('outlined') ? 'text-[#98A2B3]' : 'text-white';
  }
  
  // Text variants
  if (variant === 'text-primary') {
    switch (state) {
      case 'hover': return 'text-[#CC400C]';
      case 'focused': return 'text-[#AD3307]';
      default: return 'text-[#EB5017]';
    }
  } 
  else if (variant === 'text-secondary') {
    switch (state) {
      case 'hover': return 'text-[#98A2B3]';
      case 'focused': return 'text-[#344054]';
      default: return 'text-[#667185]';
    }
  }
  else if (variant === 'text-destructive') {
    switch (state) {
      case 'hover': return 'text-[#E26E6A]';
      case 'focused': return 'text-[#9E0A05]';
      default: return 'text-[#D42620]';
    }
  }
  
  // Regular variants
  if (variant === 'primary') {
    return 'text-white';
  } 
  else if (variant === 'secondary') {
    switch (state) {
      case 'hover': return 'text-[#344054]';
      case 'focused': return 'text-[#101828]';
      default: return 'text-[#344054]';
    }
  }
  else if (variant === 'grey-solid') {
    switch (state) {
      case 'hover': return 'text-[#475467]';
      case 'focused': return 'text-[#344054]';
      default: return 'text-[#475467]';
    }
  }
  else if (variant === 'grey-outlined') {
    switch (state) {
      case 'hover': return 'text-[#475467]';
      case 'focused': return 'text-[#344054]';
      default: return 'text-[#475467]';
    }
  }
  else if (variant === 'destructive-solid') {
    return 'text-white';
  }
  else if (variant === 'destructive-outlined') {
    switch (state) {
      case 'hover': return 'text-[#BA110B]';
      case 'focused': return 'text-[#9E0A05]';
      default: return 'text-[#D42620]';
    }
  }
  
  return 'text-white'; // Default fallback
};

export const Button: React.FC<ButtonProps> = ({
  size = 'sm',
  state = 'default',
  iconStyle = 'none',
  variant = 'primary',
  label = 'Label',
  buttonType = 'button',
  disabled,
  className = '',
  icon,
  ...props
}) => {
  const isTextVariant = variant.startsWith('text-');
  
  const classes = [
    getBaseClasses(),
    getSizeClasses(size, iconStyle, isTextVariant),
    getVariantAndStateClasses(variant, state, !!disabled),
    className
  ].join(' ');

  const DefaultIconComponent = getIconComponent(variant);
  const iconColorClass = getIconColor(variant, state, !!disabled);

  // Render the icon based on the type (string path or ReactNode)
  const renderIcon = () => {
    if (!icon && !DefaultIconComponent) return null;
    
    if (typeof icon === 'string') {
      // If a string path is provided but we now use React components,
      // we'll fallback to the default icon for that variant
      return <DefaultIconComponent className={`w-5 h-5 ${iconColorClass}`} />;
    } else if (icon) {
      // If icon is a React element
      return React.isValidElement(icon as React.ReactElement) 
        ? React.cloneElement(icon as React.ReactElement, { 
            className: `w-5 h-5 ${iconColorClass} ${(icon as React.ReactElement).props.className || ''}` 
          })
        : icon;
    } else {
      // Use default icon component
      return <DefaultIconComponent className={`w-5 h-5 ${iconColorClass}`} />;
    }
  };

  return (
    <button
      className={classes}
      disabled={disabled}
      type={buttonType}
      {...props}
    >
      {(iconStyle === 'leading' || iconStyle === 'icon-only') && renderIcon()}
      {iconStyle !== 'icon-only' && label}
      {iconStyle === 'trailing' && renderIcon()}
    </button>
  );
};

export default Button; 