import React, { useState } from 'react';
import TableHeader from '../components/TableHeader';

const TableHeaderDemo: React.FC = () => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleSort = () => {
    setSortDirection(current => {
      if (current === null) return 'asc';
      if (current === 'asc') return 'desc';
      return null;
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Table Header Demo</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 divide-x divide-[#E4E7EC]">
            {/* Basic Header */}
            <div className="space-y-4 p-6">
              <h2 className="text-sm font-medium text-gray-900">Basic Header</h2>
              <TableHeader 
                label="Column Name" 
              />
            </div>

            {/* With Checkbox */}
            <div className="space-y-4 p-6">
              <h2 className="text-sm font-medium text-gray-900">With Checkbox</h2>
              <TableHeader 
                label="Column Name"
                showCheckbox
                isSelected={isSelected}
                onCheckboxChange={setIsSelected}
              />
            </div>

            {/* With Sort */}
            <div className="space-y-4 p-6">
              <h2 className="text-sm font-medium text-gray-900">With Sort</h2>
              <TableHeader 
                label="Column Name"
                showSortIcon
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </div>

            {/* All Features */}
            <div className="space-y-4 p-6">
              <h2 className="text-sm font-medium text-gray-900">All Features</h2>
              <TableHeader 
                label="Column Name"
                showCheckbox
                showSortIcon
                isSelected={isSelected}
                sortDirection={sortDirection}
                onCheckboxChange={setIsSelected}
                onSort={handleSort}
              />
            </div>
          </div>

          <div className="p-6 border-t border-[#E4E7EC]">
            <h2 className="text-sm font-medium text-gray-900 mb-4">States</h2>
            <div className="space-y-8">
              {/* Default State */}
              <div>
                <h3 className="text-xs font-medium text-gray-500 mb-2">Default</h3>
                <TableHeader 
                  label="Column Name"
                  showCheckbox
                  showSortIcon
                />
              </div>

              {/* Hover State */}
              <div>
                <h3 className="text-xs font-medium text-gray-500 mb-2">Hover (Mouse over to see)</h3>
                <TableHeader 
                  label="Column Name"
                  showCheckbox
                  showSortIcon
                />
              </div>

              {/* Selected State */}
              <div>
                <h3 className="text-xs font-medium text-gray-500 mb-2">Selected</h3>
                <TableHeader 
                  label="Column Name"
                  showCheckbox
                  showSortIcon
                  isSelected={true}
                />
              </div>

              {/* Without Separator */}
              <div>
                <h3 className="text-xs font-medium text-gray-500 mb-2">Without Separator</h3>
                <TableHeader 
                  label="Column Name"
                  showCheckbox
                  showSortIcon
                  showSeparator={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeaderDemo; 