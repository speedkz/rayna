import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from 'date-fns';
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Popover, Transition } from '@headlessui/react';
import MonthYearPicker from './MonthYearPicker';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  showLastDayOption?: boolean;
}

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  showLastDayOption = false,
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [isMonthYearPickerOpen, setIsMonthYearPickerOpen] = useState(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(selectedDate);

  const handlePreviousMonth = () => {
    setCurrentMonth(prevMonth => subMonths(prevMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth => addMonths(prevMonth, 1));
  };

  const handleDateSelect = (date: Date) => {
    setTempSelectedDate(date);
  };

  const handleLastDaySelect = () => {
    const lastDay = endOfMonth(currentMonth);
    setTempSelectedDate(lastDay);
  };

  const handleMonthYearChange = (date: Date) => {
    setCurrentMonth(date);
  };

  const handleCancel = () => {
    setTempSelectedDate(selectedDate);
  };

  const handleDone = () => {
    if (tempSelectedDate) {
      onChange(tempSelectedDate);
    }
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            {selectedDate ? format(selectedDate, 'MMM dd, yyyy') : 'Select date'}
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </Popover.Button>

          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg p-4 w-[300px]">
              {isMonthYearPickerOpen ? (
                <MonthYearPicker
                  currentDate={currentMonth}
                  onChange={handleMonthYearChange}
                  onClose={() => setIsMonthYearPickerOpen(false)}
                />
              ) : (
                <div className="space-y-4">
                  {/* Header with month/year and navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setIsMonthYearPickerOpen(true)}
                      className="flex items-center gap-2 font-semibold text-base"
                    >
                      {format(currentMonth, 'MMMM yyyy')}
                      <FiChevronDown />
                    </button>
                    <div className="flex gap-1.5">
                      <button
                        onClick={handlePreviousMonth}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <FiChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <FiChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Weekday headers */}
                  <div className="grid grid-cols-7 gap-0">
                    {WEEKDAYS.map(day => (
                      <div
                        key={day}
                        className="h-10 flex items-center justify-center text-xs font-semibold"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((day, dayIdx) => {
                      const isSelected = tempSelectedDate && isSameDay(day, tempSelectedDate);
                      const isDisabled = (minDate && day < minDate) || (maxDate && day > maxDate);
                      const isDayToday = isToday(day);

                      return (
                        <button
                          key={day.toString()}
                          onClick={() => !isDisabled && handleDateSelect(day)}
                          disabled={isDisabled}
                          className={`
                            w-9 h-9 rounded-lg flex items-center justify-center text-sm
                            ${isSelected ? 'bg-[#FBF1F1] text-[#475367] border border-[#CC400C]' : ''}
                            ${!isSelected && !isDisabled ? 'hover:bg-gray-100' : ''}
                            ${isDisabled ? 'text-gray-300 cursor-not-allowed' : ''}
                            ${isDayToday ? 'font-semibold' : ''}
                            ${!isSelected && !isDisabled ? 'border border-[#F0F2F5]' : ''}
                          `}
                        >
                          {format(day, 'd')}
                        </button>
                      );
                    })}
                  </div>

                  {/* Last day option */}
                  {showLastDayOption && (
                    <button
                      onClick={handleLastDaySelect}
                      className="w-full mt-2 py-2 text-sm text-center border rounded-lg hover:bg-gray-50"
                    >
                      Last Day
                    </button>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={handleCancel}
                      className="flex-1 py-2 text-sm text-gray-500 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDone}
                      className="flex-1 py-2 text-sm text-white bg-[#EB5017] rounded-lg hover:bg-[#CC400C]"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DatePicker; 