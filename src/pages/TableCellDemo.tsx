import React, { useState } from 'react';
import TableCell from '../components/TableCell';

const TableCellDemo: React.FC = () => {
  const [radioValue, setRadioValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Table Cell Demo</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Basic Examples */}
          <div className="border-b border-[#E4E7EC]">
            <div className="p-6">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Basic Examples</h2>
              <div className="space-y-4 divide-y divide-[#E4E7EC]">
                {/* Text Only */}
                <div>
                  <TableCell 
                    label="Text Only"
                    description="Simple text cell without any controls or media"
                  />
                </div>

                {/* With Icon */}
                <div>
                  <TableCell 
                    label="With Icon"
                    description="Cell with an icon"
                    mediaType="icon"
                    mediaUrl="/images/icon-3d.svg"
                  />
                </div>

                {/* With Avatar */}
                <div>
                  <TableCell 
                    label="With Avatar"
                    description="Cell with an avatar"
                    mediaType="avatar"
                    mediaUrl="https://i.pravatar.cc/300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Control Types */}
          <div className="border-b border-[#E4E7EC]">
            <div className="p-6">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Control Types</h2>
              <div className="space-y-4 divide-y divide-[#E4E7EC]">
                {/* Radio Button */}
                <div>
                  <TableCell 
                    label="Radio Button"
                    description="Cell with radio button control"
                    controlType="radio"
                    isChecked={radioValue}
                    onChange={setRadioValue}
                    mediaType="icon"
                    mediaUrl="/images/icon-3d.svg"
                  />
                </div>

                {/* Checkbox */}
                <div>
                  <TableCell 
                    label="Checkbox"
                    description="Cell with checkbox control"
                    controlType="checkbox"
                    isChecked={checkboxValue}
                    onChange={setCheckboxValue}
                    mediaType="avatar"
                    mediaUrl="https://i.pravatar.cc/300"
                  />
                </div>

                {/* Toggle */}
                <div>
                  <TableCell 
                    label="Toggle"
                    description="Cell with toggle control"
                    controlType="toggle"
                    isChecked={toggleValue}
                    onChange={setToggleValue}
                    mediaType="icon"
                    mediaUrl="/images/icon-3d.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* States */}
          <div>
            <div className="p-6">
              <h2 className="text-sm font-medium text-gray-900 mb-4">States</h2>
              <div className="space-y-4 divide-y divide-[#E4E7EC]">
                {/* Default State */}
                <div>
                  <TableCell 
                    label="Default State"
                    description="Normal cell appearance"
                    controlType="radio"
                    mediaType="icon"
                    mediaUrl="/images/icon-3d.svg"
                  />
                </div>

                {/* Selected State */}
                <div>
                  <TableCell 
                    label="Selected State"
                    description="Cell in selected state"
                    controlType="radio"
                    isSelected={true}
                    isChecked={true}
                    mediaType="icon"
                    mediaUrl="/images/icon-3d.svg"
                  />
                </div>

                {/* With Long Text */}
                <div className="max-w-[300px]">
                  <TableCell 
                    label="Cell with Very Long Text That Should Truncate"
                    description="This is a very long description that should also truncate when it reaches the end of the container width to prevent text overflow and maintain clean layout"
                    controlType="checkbox"
                    mediaType="avatar"
                    mediaUrl="https://i.pravatar.cc/300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCellDemo; 