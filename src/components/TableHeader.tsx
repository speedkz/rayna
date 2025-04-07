import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import clsx from 'clsx';

export interface TableHeaderProps {
  label?: string;
  showCheckbox?: boolean;
  showSeparator?: boolean;
  showSortIcon?: boolean;
  isSelected?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
  onCheckboxChange?: (checked: boolean) => void;
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  showCheckbox = false,
  showSeparator = true,
  showSortIcon = false,
  isSelected = false,
  sortDirection = null,
  onSort,
  onCheckboxChange,
  className = '',
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange?.(e.target.checked);
  };

  return (
    <div 
      className={clsx(
        'relative flex items-center h-[44px]',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={clsx(
          'flex items-center gap-3 px-6 py-3 flex-1',
          isSelected ? 'bg-[#FFECE5]' : isHovered ? 'bg-[#F9FAFB]' : 'bg-white'
        )}
      >
        {showCheckbox && (
          <div className="flex-none">
            <label className="relative flex items-center">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={handleCheckboxChange}
                className={clsx(
                  'h-4 w-4 rounded border-[1.5px] transition-colors',
                  isSelected 
                    ? 'border-[#F56630] bg-[#F56630] checked:hover:bg-[#F56630]/90' 
                    : 'border-[#D0D5DD] bg-white hover:border-[#F56630]/50'
                )}
              />
            </label>
          </div>
        )}
        
        <button
          onClick={onSort}
          className={clsx(
            'flex items-center gap-1 text-sm font-medium',
            onSort ? 'cursor-pointer' : 'cursor-default'
          )}
        >
          <span className="text-[#344054]">{label}</span>
          {showSortIcon && (
            <div className="text-[#667185]">
              {sortDirection === 'asc' ? (
                <FiChevronUp size={16} />
              ) : sortDirection === 'desc' ? (
                <FiChevronDown size={16} />
              ) : (
                <FiChevronDown size={16} className="opacity-0 group-hover:opacity-100" />
              )}
            </div>
          )}
        </button>
      </div>

      {showSeparator && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E4E7EC]" />
      )}
    </div>
  );
};

export default TableHeader; 