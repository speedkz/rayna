import React from 'react';
import Badge, { BadgeColor, BadgeType, BadgeSize } from '../components/Badge';

const BadgeDemo: React.FC = () => {
  // Define all variations
  const colors: BadgeColor[] = ['blue', 'orange', 'success', 'warning', 'error', 'neutral', 'disabled'];
  const types: BadgeType[] = ['filled', 'accent', 'outline'];
  const sizes: BadgeSize[] = ['sm', 'md', 'lg'];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Badge Component</h1>
      <p className="text-gray-600 mb-8">
        Badges are used to highlight item's status for quick recognition.
      </p>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Sizes</h2>
        <div className="flex flex-wrap gap-6 items-center p-6 border border-gray-200 rounded-md">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Badge label={`Size ${size}`} size={size} />
              <span className="text-sm text-gray-500">{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Types</h2>
        <div className="flex flex-wrap gap-6 items-center p-6 border border-gray-200 rounded-md">
          {types.map((type) => (
            <div key={type} className="flex flex-col items-center gap-2">
              <Badge label={type} type={type} />
              <span className="text-sm text-gray-500">{type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Colors</h2>
        <div className="flex flex-wrap gap-6 items-center p-6 border border-gray-200 rounded-md">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <Badge label={color} color={color} />
              <span className="text-sm text-gray-500">{color}</span>
            </div>
          ))}
        </div>
      </section>

      {/* All Variations */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">All Variations</h2>
        
        {types.map((type) => (
          <div key={type} className="mb-8">
            <h3 className="text-lg font-inter font-semibold text-gray-700 capitalize mb-4">{type}</h3>
            <div className="space-y-6">
              {sizes.map((size) => (
                <div key={size} className="space-y-2">
                  <h4 className="text-md font-medium">Size: {size}</h4>
                  <div className="flex flex-wrap gap-4 p-6 border border-gray-200 rounded-md">
                    {colors.map((color) => (
                      <Badge
                        key={`${type}-${size}-${color}`}
                        label={color}
                        type={type}
                        size={size}
                        color={color}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Usage Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Usage Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Status Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md">
              <span>Order Status:</span>
              <Badge label="Completed" color="success" />
            </div>
            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md">
              <span>Payment Status:</span>
              <Badge label="Failed" color="error" />
            </div>
            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md">
              <span>Shipment:</span>
              <Badge label="In Transit" color="warning" />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Feature Labels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md">
              <span>Premium Feature</span>
              <Badge label="PRO" color="blue" />
            </div>
            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md">
              <span>New Feature</span>
              <Badge label="NEW" color="orange" type="accent" />
            </div>
            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md">
              <span>Coming Soon</span>
              <Badge label="BETA" color="neutral" type="outline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BadgeDemo; 