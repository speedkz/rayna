import React, { useState } from 'react';
import BigFileUpload from '@components/BigFileUpload';

const BigFileUploadDemo: React.FC = () => {
  const [bigUploadState, setBigUploadState] = useState<{
    variant: 'default' | 'uploading' | 'success' | 'error';
    fileName?: string;
    progress?: number;
    errorMessage?: string;
  }>({
    variant: 'default'
  });

  const handleBigFileChange = async (file: File | null) => {
    if (file) {
      // Check file size
      if (file.size > 5 * 1024 * 1024) {
        setBigUploadState({
          variant: 'error',
          fileName: file.name,
          errorMessage: 'File size exceeds 5MB limit'
        });
        return;
      }

      // Check file type
      const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setBigUploadState({
          variant: 'error',
          fileName: file.name,
          errorMessage: 'Invalid file type. Please upload SVG, PNG, JPG or GIF'
        });
        return;
      }

      // Start upload progress simulation
      setBigUploadState({
        variant: 'uploading',
        fileName: file.name,
        progress: 0
      });

      // Simulate upload progress
      for (let i = 0; i <= 100; i += 5) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setBigUploadState(prev => ({
          ...prev,
          progress: i
        }));
      }

      // Complete upload
      setBigUploadState({
        variant: 'success',
        fileName: file.name
      });
    }
  };

  const handleBigDelete = () => {
    setBigUploadState({ variant: 'default' });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Big File Upload Component</h1>

      <div className="space-y-12">
        {/* Interactive Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Example</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Try uploading an image file (SVG, PNG, JPG, GIF). Files larger than 5MB will trigger an error state.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BigFileUpload
                {...bigUploadState}
                onChange={handleBigFileChange}
                onDelete={handleBigDelete}
                maxDimensions={{ width: 800, height: 400 }}
              />
            </div>
          </div>
        </section>

        {/* All States Preview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">All States</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Default</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BigFileUpload variant="default" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Uploading</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BigFileUpload
                  variant="uploading"
                  fileName="image.png"
                  progress={65}
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Success</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BigFileUpload
                  variant="success"
                  fileName="image.png"
                  onDelete={() => console.log('Delete clicked')}
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Error</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BigFileUpload
                  variant="error"
                  fileName="large-image.png"
                  errorMessage="File size exceeds 5MB limit"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BigFileUploadDemo; 