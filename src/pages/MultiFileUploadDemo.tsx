import React from 'react';
import MultiFileUpload from '@components/MultiFileUpload';

const MultiFileUploadDemo: React.FC = () => {
  const handleFilesChange = (files: File[]) => {
    console.log('Files changed:', files);
  };

  const handleFileDelete = (fileId: string) => {
    console.log('File deleted:', fileId);
  };

  const handleFileDownload = (fileId: string) => {
    console.log('File download:', fileId);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Multi-File Upload Component</h1>

      <div className="space-y-12">
        {/* Interactive Example */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Example</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Try uploading multiple files. Files larger than 5MB will trigger an error state.
            </p>
            <MultiFileUpload
              onFilesChange={handleFilesChange}
              onFileDelete={handleFileDelete}
              onFileDownload={handleFileDownload}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MultiFileUploadDemo; 