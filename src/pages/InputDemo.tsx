import React, { useState } from 'react';
import Input, { InputSize, InputState } from '@components/Input';
import { SearchIcon, CalendarIcon, EyeIcon, ChevronDownIcon, SuccessIcon, ErrorIcon } from '@assets/icons';

const InputDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const sizes: InputSize[] = ['sm', 'lg'];
  const states: InputState[] = [
    'default', 
    'hover', 
    'active', 
    'typing', 
    'filled', 
    'success', 
    'error', 
    'read only'
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Input Component Demo</h1>

      {/* Interactive Inputs */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Interactive Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Default Input</h3>
            <Input 
              label="Name"
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText={inputValue ? "Looks good!" : "Please enter your name"}
            />
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Input with Icons</h3>
            <Input 
              label="Search"
              placeholder="Search for anything..."
              leftIcon={<SearchIcon className="w-5 h-5" />}
            />
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Success State</h3>
            <Input 
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              success={emailValue.includes('@')}
              helperText={emailValue.includes('@') ? "Valid email!" : "Enter a valid email"}
              rightIcon={emailValue.includes('@') ? <SuccessIcon className="w-5 h-5 text-[#04802E]" /> : null}
            />
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Error State</h3>
            <Input 
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              error={passwordValue.length > 0 && passwordValue.length < 6}
              rightIcon={<EyeIcon className="w-5 h-5" />}
              helperText={passwordValue.length > 0 && passwordValue.length < 6 ? 
                "Password must be at least 6 characters" : "Enter a strong password"}
            />
          </div>
        </div>
      </section>

      {/* Input Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Input Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sizes.map((size) => (
            <div key={size} className="p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Size: {size}</h3>
              <Input 
                size={size} 
                label={`${size} input`}
                placeholder={`${size} placeholder`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Input States */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Input States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {states.map((state) => (
            <div key={state} className="p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">State: {state}</h3>
              <Input 
                state={state}
                label="Label"
                placeholder="Placeholder"
                value={state === 'filled' || state === 'typing' ? "Input value" : ""}
                readOnly={state === 'read only'}
                success={state === 'success'}
                error={state === 'error'}
                disabled={state === 'default'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Input Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Input with Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Left Icon</h3>
            <Input 
              label="Search"
              placeholder="Search..."
              leftIcon={<SearchIcon className="w-5 h-5" />}
            />
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Right Icon</h3>
            <Input 
              label="Password"
              type="password"
              placeholder="Enter password"
              rightIcon={<EyeIcon className="w-5 h-5" />}
            />
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Both Icons</h3>
            <Input 
              label="Date"
              placeholder="Select date"
              leftIcon={<CalendarIcon className="w-5 h-5" />}
              rightIcon={<ChevronDownIcon className="w-5 h-5" />}
            />
          </div>

          <div className="p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Success and Error Icons</h3>
            <div className="space-y-4">
              <Input 
                label="Success Input"
                value="Correct value"
                success
              />
              <Input 
                label="Error Input"
                value="Wrong value"
                error
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InputDemo; 