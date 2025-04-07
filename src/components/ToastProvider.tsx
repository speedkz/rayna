import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Toast, { ToastType } from './Toast';
import '../styles/animations.css';

interface ToastContextType {
  showToast: (props: ShowToastProps) => void;
}

interface ShowToastProps {
  type?: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastItem extends ShowToastProps {
  id: string;
  isExiting?: boolean;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const animationEndTimeouts = useRef<{ [key: string]: number }>({});

  const showToast = useCallback(({ type = 'information', title, message, duration = 5000 }: ShowToastProps) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message, duration }]);

    if (duration > 0) {
      // Set up auto-dismiss
      const dismissTimeout = window.setTimeout(() => {
        removeToast(id);
      }, duration);

      animationEndTimeouts.current[`dismiss-${id}`] = dismissTimeout;
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    // Clear dismiss timeout if it exists
    if (animationEndTimeouts.current[`dismiss-${id}`]) {
      window.clearTimeout(animationEndTimeouts.current[`dismiss-${id}`]);
      delete animationEndTimeouts.current[`dismiss-${id}`];
    }

    // Start exit animation
    setToasts((prev) => 
      prev.map((toast) => 
        toast.id === id ? { ...toast, isExiting: true } : toast
      )
    );

    // Remove toast after animation completes
    const exitTimeout = window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 400); // Match the new animation duration

    animationEndTimeouts.current[`exit-${id}`] = exitTimeout;
  }, []);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      Object.values(animationEndTimeouts.current).forEach(window.clearTimeout);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div 
          className="fixed top-4 right-4 z-50 flex flex-col items-end gap-3"
          style={{ 
            maxHeight: '100vh',
            maxWidth: '100vw',
            overflow: 'hidden'
          }}
        >
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`
                transform-gpu
                ${toast.isExiting ? 'animate-slide-out' : 'animate-slide-in'}
              `}
              style={{
                willChange: 'transform, opacity'
              }}
            >
              <Toast
                type={toast.type}
                title={toast.title}
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider; 