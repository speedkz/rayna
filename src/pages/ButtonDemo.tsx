import React from 'react';
import Button, { ButtonSize, IconStyle, ButtonVariant, ButtonState } from '@components/Button';

// Import icons
import { ButtonIcon, DestructiveIcon } from '@assets/icons';

const ButtonDemo: React.FC = () => {
  const sizes: ButtonSize[] = ['sm', 'lg'];
  const iconStyles: IconStyle[] = ['none', 'leading', 'trailing', 'icon-only'];
  const variants: ButtonVariant[] = [
    'primary', 
    'secondary', 
    'grey-solid', 
    'grey-outlined', 
    'destructive-solid', 
    'destructive-outlined',
    'text-primary',
    'text-secondary',
    'text-destructive'
  ];
  const states: ButtonState[] = ['default', 'hover', 'focused', 'disabled'];

  // Custom SVG icon for demonstration
  const CustomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Button Component Demo</h1>

      {/* Button Variants */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">All Button Variants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700">{variant}</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant={variant} label={variant} />
                <Button variant={variant} iconStyle="leading" label={variant} />
                <Button variant={variant} iconStyle="trailing" label={variant} />
                <Button variant={variant} iconStyle="icon-only" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Button Sizes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700">Size: {size}</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size={size} label={`Size ${size}`} />
                <Button size={size} variant="secondary" label={`Size ${size}`} />
                <Button size={size} variant="destructive-solid" label={`Size ${size}`} />
                <Button size={size} variant="text-primary" label={`Size ${size}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* State Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Button States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {states.map((state) => (
            <div key={state} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700">State: {state}</h3>
              <div className="flex flex-wrap gap-4">
                <Button state={state} label={`${state}`} />
                <Button state={state} variant="secondary" label={`${state}`} />
                <Button state={state} variant="destructive-solid" label={`${state}`} />
                <Button state={state} variant="text-primary" label={`${state}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Icon Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Icon Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {iconStyles.map((iconStyle) => (
            <div key={iconStyle} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700">Icon Style: {iconStyle}</h3>
              <div className="flex flex-wrap gap-4">
                <Button iconStyle={iconStyle} label={`${iconStyle}`} />
                <Button iconStyle={iconStyle} variant="secondary" label={`${iconStyle}`} />
                <Button iconStyle={iconStyle} variant="destructive-outlined" label={`${iconStyle}`} />
                <Button iconStyle={iconStyle} variant="text-destructive" label={`${iconStyle}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Custom Icons</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Custom Icon Paths</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                icon={<ButtonIcon className="w-5 h-5" />}
                iconStyle="leading" 
                label="Custom Icon Path" 
              />
              <Button 
                variant="secondary" 
                icon={<DestructiveIcon className="w-5 h-5" />}
                iconStyle="trailing" 
                label="Different Icon" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">React Component Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                icon={<CustomIcon />} 
                iconStyle="leading" 
                label="SVG Component" 
              />
              <Button 
                variant="destructive-solid" 
                icon={<CustomIcon />} 
                iconStyle="trailing" 
                label="Colored SVG" 
              />
              <Button 
                variant="grey-solid" 
                icon={<CustomIcon />} 
                iconStyle="icon-only" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Mixed Variants with Custom Icons</h3>
            <div className="flex flex-wrap gap-4">
              {variants.slice(0, 4).map((variant) => (
                <Button 
                  key={`custom-icon-${variant}`}
                  variant={variant} 
                  icon={<CustomIcon />}
                  iconStyle="leading"
                  label={variant} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Interactive Examples</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Click Events</h3>
            <div className="flex flex-wrap gap-4">
              {variants.slice(0, 4).map((variant) => (
                <Button 
                  key={variant}
                  variant={variant} 
                  label={variant} 
                  onClick={() => alert(`Clicked ${variant} button!`)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo; 