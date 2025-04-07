import React from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerVariant = 'primary' | 'secondary' | 'grey' | 'destructive';

interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  progress?: number; // 0-100
  thickness?: number;
  className?: string;
}

// Get size based on provided size prop
const getSizeClasses = (size: SpinnerSize): string => {
  switch (size) {
    case 'sm':
      return 'w-5 h-5';
    case 'md':
      return 'w-8 h-8';
    case 'lg':
      return 'w-12 h-12';
    default:
      return 'w-8 h-8';
  }
};

// Get color based on variant
const getVariantColor = (variant: SpinnerVariant): string => {
  switch (variant) {
    case 'primary':
      return 'text-[#F56630]'; // Primary color from the design
    case 'secondary':
      return 'text-gray-400';
    case 'grey':
      return 'text-gray-600';
    case 'destructive':
      return 'text-[#CB1A14]'; // Destructive red
    default:
      return 'text-[#F56630]';
  }
};

// Calculate the stroke dasharray and stroke dashoffset based on progress
const calculateCircleStyles = (progress: number, size: SpinnerSize) => {
  // These values are for the circle circumference calculation
  const sizeMap = {
    sm: 20,
    md: 32,
    lg: 48,
  };
  
  const circleSize = sizeMap[size];
  const radius = circleSize / 2 - 2; // Subtract stroke width
  const circumference = 2 * Math.PI * radius;
  
  // Calculate dashoffset based on progress (circumference - progress * circumference / 100)
  const dashoffset = circumference - (progress / 100) * circumference;
  
  return {
    radius,
    circumference,
    dashoffset,
  };
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  progress = 75, // Default to 75% if not specified
  thickness = 2,
  className = '',
}) => {
  // Determine if this is an indeterminate spinner (loading) or determinate (progress)
  const isIndeterminate = progress < 0 || progress === undefined;
  
  // Calculate circle styles for determinate spinner
  const { radius, circumference, dashoffset } = calculateCircleStyles(
    Math.min(Math.max(progress, 0), 100), // Clamp progress between 0-100
    size
  );
  
  const sizeClass = getSizeClasses(size);
  const variantClass = getVariantColor(variant);
  
  // For indeterminate spinner, we use animation
  if (isIndeterminate) {
    return (
      <div className={`inline-block ${sizeClass} ${className}`}>
        <svg
          className={`animate-spin ${variantClass}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={thickness}
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }
  
  // For determinate spinner (progress indicator)
  const viewBoxSize = size === 'sm' ? 20 : size === 'md' ? 32 : 48;
  const center = viewBoxSize / 2;
  
  return (
    <div className={`inline-block ${sizeClass} ${className}`}>
      <svg
        className={variantClass}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#F0F2F5"
          strokeWidth={thickness}
          className="opacity-25"
        />
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#F56630"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
          transform={`rotate(-90 ${center} ${center})`}
        />
        {/* Progress text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontFamily="Inter"
          fontWeight="600"
          fontSize={viewBoxSize / 5}
          fill="#000000"
        >
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
};

export default Spinner; 