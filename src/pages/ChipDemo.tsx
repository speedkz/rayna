import React, { useState } from 'react';
import Chip, { ChipType, ChipState } from '../components/Chip';

const ChipDemo: React.FC = () => {
  const [chips, setChips] = useState<string[]>([
    'React', 'TypeScript', 'TailwindCSS', 'Figma', 'Design System'
  ]);
  
  const handleDelete = (chipToDelete: string) => {
    setChips(chips.filter(chip => chip !== chipToDelete));
  };

  // Define all variations
  const types: ChipType[] = ['input', 'filter'];
  const states: ChipState[] = ['default', 'focused', 'disabled'];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Chip Component</h1>
      <p className="text-gray-600 mb-8">
        Chips are compact elements that represent an input, attribute, or action.
      </p>

      {/* Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Chip Types</h2>
        <div className="flex flex-wrap gap-6 items-center p-6 border border-gray-200 rounded-md">
          {types.map((type) => (
            <div key={type} className="flex flex-col items-center gap-2">
              <Chip label={type} type={type} />
              <span className="text-sm text-gray-500 capitalize">{type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Chip States</h2>
        <div className="flex flex-wrap gap-6 items-center p-6 border border-gray-200 rounded-md">
          {states.map((state) => (
            <div key={state} className="flex flex-col items-center gap-2">
              <Chip label={state} state={state} />
              <span className="text-sm text-gray-500 capitalize">{state}</span>
            </div>
          ))}
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">With Icons</h2>
        <div className="flex flex-wrap gap-6 items-center p-6 border border-gray-200 rounded-md">
          <div className="flex flex-col items-center gap-2">
            <Chip label="With Icon" hasLeadingIcon={true} />
            <span className="text-sm text-gray-500">Leading Icon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Chip label="Filter" type="filter" />
            <span className="text-sm text-gray-500">Dropdown Icon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Chip label="With Both" type="filter" hasLeadingIcon={true} />
            <span className="text-sm text-gray-500">Both Icons</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Chip 
              label="Custom Icon" 
              hasLeadingIcon={true}
              leadingIconSrc="@icons/multiply.svg"
              leadingIconAlt="Custom"
            />
            <span className="text-sm text-gray-500">Custom Icon</span>
          </div>
        </div>
      </section>

      {/* All Combinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">All Variations</h2>
        
        {types.map((type) => (
          <div key={type} className="mb-8">
            <h3 className="text-lg font-inter font-semibold text-gray-700 capitalize mb-4">{type} Chips</h3>
            
            <div className="space-y-8">
              {/* Without Icons */}
              <div className="space-y-2">
                <h4 className="text-md font-medium">Without Icons</h4>
                <div className="flex flex-wrap gap-4 p-6 border border-gray-200 rounded-md">
                  {states.map((state) => (
                    <div key={`${type}-${state}-noicon`} className="flex flex-col items-center gap-2">
                      <Chip 
                        label={state} 
                        type={type} 
                        state={state} 
                      />
                      <span className="text-sm text-gray-500 capitalize">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* With Icons */}
              <div className="space-y-2">
                <h4 className="text-md font-medium">With Leading Icon</h4>
                <div className="flex flex-wrap gap-4 p-6 border border-gray-200 rounded-md">
                  {states.map((state) => (
                    <div key={`${type}-${state}-icon`} className="flex flex-col items-center gap-2">
                      <Chip 
                        label={state} 
                        type={type} 
                        state={state} 
                        hasLeadingIcon={true}
                      />
                      <span className="text-sm text-gray-500 capitalize">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Interactive Examples</h2>
        
        {/* Tag Input Example */}
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Tags Input</h3>
          <div className="p-6 border border-gray-200 rounded-md">
            <div className="mb-2 text-sm text-gray-600">
              Click on a chip to focus it. Click the X to remove it.
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {chips.map((chip, index) => (
                <Chip 
                  key={index}
                  label={chip}
                  type="input"
                  state={index === 0 ? 'focused' : 'default'}
                  onDelete={() => handleDelete(chip)}
                  onClick={() => console.log(`Selected: ${chip}`)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Filter Selection Example */}
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Filter Selection</h3>
          <div className="p-6 border border-gray-200 rounded-md">
            <div className="mb-2 text-sm text-gray-600">
              Dropdown chips used for filter selection.
            </div>
            <div className="flex flex-wrap gap-3">
              <Chip 
                label="Category" 
                type="filter" 
                onClick={() => console.log('Category filter clicked')}
              />
              <Chip 
                label="Status" 
                type="filter"
                state="focused"
                onClick={() => console.log('Status filter clicked')}
              />
              <Chip 
                label="Price Range" 
                type="filter" 
                onClick={() => console.log('Price filter clicked')}
              />
              <Chip 
                label="Date" 
                type="filter"
                hasLeadingIcon={true}
                onClick={() => console.log('Date filter clicked')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChipDemo; 