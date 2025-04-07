import React from 'react';
import clsx from 'clsx';

export type ControlType = 'radio' | 'checkbox' | 'toggle';
export type MediaType = 'icon' | 'avatar';

export interface TableCellProps {
  label: string;
  description?: string;
  controlType?: ControlType;
  mediaType?: MediaType;
  mediaUrl?: string;
  isSelected?: boolean;
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  label,
  description,
  controlType,
  mediaType,
  mediaUrl,
  isSelected = false,
  isChecked = false,
  onChange,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <div 
      className={clsx(
        'relative flex items-center h-[44px]',
        className
      )}
    >
      <div 
        className={clsx(
          'flex items-center gap-3 px-6 flex-1',
          isSelected && 'bg-[#FFECE5]'
        )}
      >
        {/* Control */}
        {controlType && (
          <div className="flex-none">
            {controlType === 'radio' && (
              <label className="relative flex items-center">
                <input
                  type="radio"
                  checked={isChecked}
                  onChange={handleChange}
                  className={clsx(
                    'h-4 w-4 rounded-full border-[1.25px] transition-colors',
                    isChecked 
                      ? 'border-[#F56630] bg-[#F56630]' 
                      : 'border-[#D0D5DD] bg-white'
                  )}
                />
                {isChecked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                )}
              </label>
            )}
            
            {controlType === 'checkbox' && (
              <label className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className={clsx(
                    'h-4 w-4 rounded border-[1.25px] transition-colors',
                    isChecked 
                      ? 'border-[#F56630] bg-[#F56630]' 
                      : 'border-[#D0D5DD] bg-white'
                  )}
                />
              </label>
            )}

            {controlType === 'toggle' && (
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className={clsx(
                  'relative w-9 h-5 rounded-full transition-colors',
                  isChecked ? 'bg-[#F56630]' : 'bg-[#E4E7EC]'
                )}>
                  <div className={clsx(
                    'absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform',
                    isChecked ? 'translate-x-4' : 'translate-x-0'
                  )} />
                </div>
              </label>
            )}
          </div>
        )}

        {/* Media */}
        {mediaType && mediaUrl && (
          <div className="flex-none">
            {mediaType === 'icon' ? (
              <div className="w-8 h-8 rounded-lg border border-[#E4E7EC] flex items-center justify-center">
                <img src={mediaUrl} alt="" className="w-4 h-4" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full border border-white overflow-hidden">
                <img src={mediaUrl} alt="" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium text-[#101928] truncate">
            {label}
          </span>
          {description && (
            <span className="text-sm text-[#475367] truncate">
              {description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableCell; 