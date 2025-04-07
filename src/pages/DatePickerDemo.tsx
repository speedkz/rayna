import React, { useState } from 'react';
import DatePicker from '../components/DatePicker';

const DatePickerDemo = () => {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);
  const [date3, setDate3] = useState<Date | null>(null);

  const today = new Date();
  const oneMonthFromNow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Date Picker Demo</h1>

      <div className="space-y-12">
        {/* Basic Date Picker */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Basic Date Picker</h2>
          <p className="text-gray-600 mb-4">A simple date picker with no restrictions.</p>
          <div className="flex items-center gap-4">
            <DatePicker
              selectedDate={date1}
              onChange={setDate1}
            />
            <span className="text-gray-500">
              Selected: {date1 ? date1.toLocaleDateString() : 'None'}
            </span>
          </div>
        </div>

        {/* Date Picker with Min/Max Dates */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Date Picker with Min/Max Dates</h2>
          <p className="text-gray-600 mb-4">
            Only allows selecting dates between today and one month from now.
          </p>
          <div className="flex items-center gap-4">
            <DatePicker
              selectedDate={date2}
              onChange={setDate2}
              minDate={today}
              maxDate={oneMonthFromNow}
            />
            <span className="text-gray-500">
              Selected: {date2 ? date2.toLocaleDateString() : 'None'}
            </span>
          </div>
        </div>

        {/* Date Picker with Last Day Option */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Date Picker with Last Day Option</h2>
          <p className="text-gray-600 mb-4">
            Includes an option to select the last day of the selected month.
          </p>
          <div className="flex items-center gap-4">
            <DatePicker
              selectedDate={date3}
              onChange={setDate3}
              showLastDayOption
            />
            <span className="text-gray-500">
              Selected: {date3 ? date3.toLocaleDateString() : 'None'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerDemo; 