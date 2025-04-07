import React, { InputHTMLAttributes, useState, ReactNode, forwardRef } from 'react';
import { SuccessIcon, ErrorIcon } from '@assets/icons';

export type InputSize = 'sm' | 'lg';
export type InputState = 'default' | 'hover' | 'active' | 'typing' | 'filled' | 'success' | 'error' | 'read only';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  state?: InputState;
  label?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  readOnly?: boolean;
  success?: boolean;
  error?: boolean;
}

const getBaseInputClasses = () => 
  'flex items-center w-full bg-white rounded-md border font-inter transition-colors duration-200 outline-none';

const getSizeClasses = (size: InputSize) => {
  return size === 'lg' 
    ? 'p-4' 
    : 'py-2 px-3';
};

const getStateClasses = (state: InputState, disabled: boolean) => {
  if (disabled) {
    return 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed';
  }

  switch (state) {
    case 'hover':
      return 'border-[#FCB59A] hover:border-[#FCB59A]';
    case 'active':
    case 'typing':
      return 'border-[#FA9874] focus:border-[#FA9874]';
    case 'success':
      return 'border-[#5FC381]';
    case 'error':
      return 'border-[#E26E6A]';
    case 'read only':
      return 'bg-[#F0F2F5] border-gray-300 cursor-default';
    default:
      return 'border-gray-300 hover:border-[#FCB59A] focus:border-[#FA9874]';
  }
};

const getHelperTextClasses = (state: InputState) => {
  switch (state) {
    case 'success':
      return 'text-[#04802E]';
    case 'error':
      return 'text-[#CB1A14]';
    default:
      return 'text-gray-500';
  }
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'sm',
  state = 'default',
  label,
  helperText = 'Helper text',
  leftIcon,
  rightIcon,
  readOnly = false,
  success = false,
  error = false,
  disabled,
  placeholder = 'Placeholder',
  className = '',
  onChange,
  value,
  ...props
}, ref) => {
  const [inputState, setInputState] = useState<InputState>(state);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  // Determine the component state
  React.useEffect(() => {
    if (readOnly) {
      setInputState('read only');
    } else if (error) {
      setInputState('error');
    } else if (success) {
      setInputState('success');
    } else if (disabled) {
      setInputState('default');
    } else if (value) {
      setInputState(isFocused ? 'typing' : 'filled');
    } else if (isFocused) {
      setInputState('active');
    } else if (isHovered) {
      setInputState('hover');
    } else {
      setInputState(state);
    }
  }, [state, disabled, readOnly, success, error, value, isHovered, isFocused]);

  // Get appropriate helper text
  const getHelperText = () => {
    if (error) return 'Error text';
    if (success) return 'Success text';
    return helperText;
  };

  const helperTextClasses = getHelperTextClasses(inputState);
  
  // Right icon based on state
  const getRightIcon = () => {
    if (error) {
      return <ErrorIcon className="w-5 h-5 text-[#CB1A14]" />;
    }
    if (success) {
      return <SuccessIcon className="w-5 h-5 text-[#04802E]" />;
    }
    return rightIcon;
  };

  return (
    <div className="flex flex-col w-full gap-1">
      {label && (
        <label className="text-gray-900 text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <div 
        className={`
          ${getBaseInputClasses()} 
          ${getSizeClasses(size)} 
          ${getStateClasses(inputState, !!disabled)}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {leftIcon && (
          <div className="flex items-center mr-2 text-gray-500">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full bg-transparent border-none outline-none text-gray-900 placeholder-gray-400
            disabled:bg-transparent disabled:text-gray-400 
            ${className}
          `}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {(getRightIcon() || rightIcon) && (
          <div className="flex items-center ml-2 text-gray-500">
            {getRightIcon() || rightIcon}
          </div>
        )}
      </div>
      {helperText && (
        <span className={`text-xs mt-1 ${helperTextClasses}`}>
          {getHelperText()}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 