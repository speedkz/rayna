import React, { useEffect } from 'react';
import { FiCheckCircle, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi';

export type ToastType = 'information' | 'success' | 'warning' | 'error';

interface ToastProps {
  type?: ToastType;
  title: string;
  message?: string;
  onClose?: () => void;
  duration?: number;
  className?: string;
}

const getToastStyles = (type: ToastType) => {
  switch (type) {
    case 'information':
      return {
        border: '#0D5EBA',
        icon: {
          bg: '#E3EFFC',
          border: '#C6DDF7',
          color: '#1671D9'
        }
      };
    case 'success':
      return {
        border: '#04802E',
        icon: {
          bg: '#E7F6EC',
          border: '#B5E3C4',
          color: '#04802E'
        }
      };
    case 'warning':
      return {
        border: '#DD900D',
        icon: {
          bg: '#FEF6E7',
          border: '#FBE2B7',
          color: '#DD900D'
        }
      };
    case 'error':
      return {
        border: '#CB1A14',
        icon: {
          bg: '#FBEAE9',
          border: '#F2BCBA',
          color: '#CB1A14'
        }
      };
  }
};

const getToastIcon = (type: ToastType) => {
  switch (type) {
    case 'information':
      return FiInfo;
    case 'success':
      return FiCheckCircle;
    case 'warning':
      return FiAlertTriangle;
    case 'error':
      return FiX;
  }
};

const Toast: React.FC<ToastProps> = ({
  type = 'information',
  title,
  message,
  onClose,
  duration = 5000,
  className = ''
}) => {
  const styles = getToastStyles(type);
  const Icon = getToastIcon(type);

  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div 
      className={`flex w-[390px] rounded-[4px] bg-white shadow-lg ${className}`}
      role="alert"
    >
      <div 
        className="w-[6px] rounded-l-[4px]" 
        style={{ backgroundColor: styles.border }}
      />
      <div className="flex flex-1 items-start gap-3 border border-l-0 border-[#E4E7EC] rounded-r-[4px] p-3">
        <div 
          className={`flex h-8 w-8 items-center justify-center rounded-lg`}
          style={{ 
            backgroundColor: styles.icon.bg,
            borderColor: styles.icon.border,
            borderWidth: 1
          }}
        >
          <Icon 
            size={16} 
            style={{ color: styles.icon.color }}
          />
        </div>
        <div className="flex flex-1 flex-col gap-0.5">
          <h6 className="text-[14px] font-semibold text-[#101928] leading-[1.45]">
            {title}
          </h6>
          {message && (
            <p className="text-[14px] text-[#475367] leading-[1.43]">
              {message}
            </p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center text-[#000000] hover:text-[#475367] transition-colors duration-200"
            aria-label="Close toast"
          >
            <FiX size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast; 