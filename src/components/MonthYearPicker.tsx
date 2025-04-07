import React from 'react';
import { format, setMonth, setYear } from 'date-fns';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface MonthYearPickerProps {
  currentDate: Date;
  onChange: (date: Date) => void;
  onClose: () => void;
}

const MONTHS = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const YEARS = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 2 + i);

export const MonthYearPicker: React.FC<MonthYearPickerProps> = ({
  currentDate,
  onChange,
  onClose,
}) => {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = setMonth(currentDate, monthIndex);
    onChange(newDate);
  };

  const handleYearSelect = (year: number) => {
    const newDate = setYear(currentDate, year);
    onChange(newDate);
  };

  return (
    <div className="space-y-8">
      {/* Month Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#666666]">Month</span>
          <div className="flex gap-1.5">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {MONTHS.map((month, index) => {
            const isSelected = index === currentMonth;
            return (
              <button
                key={month}
                onClick={() => handleMonthSelect(index)}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium
                  ${isSelected 
                    ? 'bg-[#FBF1F1] text-[#475367] border border-[#CC400C]' 
                    : 'bg-[#F3F5F8] text-[#667185] border border-[#D0D5DD] hover:bg-gray-100'
                  }
                `}
              >
                {month}
              </button>
            );
          })}
        </div>
      </div>

      {/* Year Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#666666]">Year</span>
          <div className="flex gap-1.5">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {YEARS.map(year => {
            const isSelected = year === currentYear;
            return (
              <button
                key={year}
                onClick={() => handleYearSelect(year)}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium
                  ${isSelected 
                    ? 'bg-[#FBF1F1] text-[#475367] border border-[#CC400C]' 
                    : 'bg-[#F3F5F8] text-[#667185] border border-[#D0D5DD] hover:bg-gray-100'
                  }
                `}
              >
                {year}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={onClose}
          className="flex-1 py-2 text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-2 text-sm text-white bg-[#EB5017] rounded-lg hover:bg-[#CC400C]"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default MonthYearPicker; 