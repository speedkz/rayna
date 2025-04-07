import React, { useState } from 'react';
import FileUpload from '@components/FileUpload';

const FileUploadDemo: React.FC = () => {
  const [uploadState, setUploadState] = useState<{
    variant: 'default' | 'progress' | 'complete' | 'error';
    fileName?: string;
    fileSize?: number;
    progress?: number;
    errorMessage?: string;
  }>({
    variant: 'default'
  });

  const handleFileChange = async (file: File | null) => {
    if (file) {
      // Check file size
      if (file.size > 5 * 1024 * 1024) {
        setUploadState({
          variant: 'error',
          fileName: file.name,
          fileSize: file.size,
          errorMessage: 'File size exceeds 5MB limit'
        });
        return;
      }

      // Start upload progress simulation
      setUploadState({
        variant: 'progress',
        fileName: file.name,
        fileSize: file.size,
        progress: 0
      });

      // Simulate upload progress
      for (let i = 0; i <= 100; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setUploadState(prev => ({
          ...prev,
          progress: i
        }));
      }

      // Complete upload
      setUploadState({
        variant: 'complete',
        fileName: file.name,
        fileSize: file.size
      });
    }
  };

  const handleDownload = () => {
    console.log('Downloading file...');
  };

  const handleDelete = () => {
    setUploadState({ variant: 'default' });
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Small File Upload Component</h1>

      <div className="space-y-12">
        {/* Interactive Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Example</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Try uploading a PDF file. Files larger than 5MB will trigger an error state.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <FileUpload
                {...uploadState}
                onChange={handleFileChange}
                onDownload={handleDownload}
                onDelete={handleDelete}
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
                <FileUpload variant="default" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Progress</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FileUpload
                  variant="progress"
                  fileName="document.pdf"
                  fileSize={2.5 * 1024 * 1024}
                  progress={65}
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Complete</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FileUpload
                  variant="complete"
                  fileName="document.pdf"
                  fileSize={2.5 * 1024 * 1024}
                  onDownload={() => console.log('Download clicked')}
                  onDelete={() => console.log('Delete clicked')}
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Error</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FileUpload
                  variant="error"
                  fileName="large-document.pdf"
                  fileSize={13 * 1024 * 1024}
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

export default FileUploadDemo; 