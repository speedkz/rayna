import React, { useRef } from 'react';
import { FiUploadCloud, FiDownload, FiTrash2, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

interface FileUploadProps {
  onChange?: (file: File | null) => void;
  onDownload?: () => void;
  onDelete?: () => void;
  accept?: string;
  maxSize?: number; // in bytes
  className?: string;
  variant?: 'default' | 'progress' | 'complete' | 'error';
  fileName?: string;
  fileSize?: number;
  progress?: number;
  errorMessage?: string;
  maxDimensions?: { width: number; height: number };
}

const FileUpload: React.FC<FileUploadProps> = ({
  onChange,
  onDownload,
  onDelete,
  accept = 'application/pdf',
  maxSize = 5 * 1024 * 1024, // 5MB default
  className = '',
  variant = 'default',
  fileName,
  fileSize,
  progress = 0,
  errorMessage,
  maxDimensions,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }) + ' | ' + date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).toLowerCase();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && onChange) {
      onChange(selectedFile);
    }
  };

  const renderStateIcon = () => {
    switch (variant) {
      case 'default':
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <FiUploadCloud className="w-5 h-5 text-gray-600" />
          </div>
        );
      case 'progress':
        return (
          <div className="relative w-10 h-10">
            <svg className="w-10 h-10 transform -rotate-90">
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#F0F2F5"
                strokeWidth="4"
              />
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#F56630"
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 18 * progress / 100} ${2 * Math.PI * 18}`}
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
              {progress}%
            </div>
          </div>
        );
      case 'complete':
        return (
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <FiCheckCircle className="w-5 h-5 text-green-600" />
          </div>
        );
      case 'error':
        return (
          <div className="w-10 h-10 bg-[#FBEAE9] rounded-full flex items-center justify-center">
            <FiAlertTriangle className="w-5 h-5 text-[#D42620]" />
          </div>
        );
    }
  };

  return (
    <div 
      className={`w-[450px] p-4 rounded-lg border ${
        variant === 'error' ? 'border-red-200' : 'border-gray-200'
      } ${className}`}
    >
      <div className="flex items-center gap-4">
        {renderStateIcon()}
        
        <div className="flex-1">
          {variant === 'default' ? (
            <>
              <h3 className="text-base font-semibold text-gray-900">Upload your document</h3>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <span>PDF format</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>Max. 5MB</span>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-base font-semibold text-gray-900">{fileName}</h3>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <span>{formatDate(new Date())}</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>{fileSize ? formatFileSize(fileSize) : ''}</span>
              </div>
              {variant === 'error' && errorMessage && (
                <p className="mt-1 text-sm font-medium text-[#D42620]">{errorMessage}</p>
              )}
            </>
          )}
        </div>

        {variant === 'default' && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-[#EB5017] hover:bg-[#F56630] text-white text-sm font-semibold rounded-lg shadow transition-colors"
          >
            Upload
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept={accept}
              ref={fileInputRef}
            />
          </button>
        )}

        {variant === 'error' && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 text-[#EB5017] hover:text-[#F56630] text-sm font-semibold rounded-lg transition-colors"
          >
            Try Again
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept={accept}
              ref={fileInputRef}
            />
          </button>
        )}

        {variant === 'complete' && (
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="p-2 text-gray-600 hover:text-gray-800 rounded transition-colors"
              title="Download"
            >
              <FiDownload className="w-5 h-5" />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-gray-600 hover:text-gray-800 rounded transition-colors"
              title="Delete"
            >
              <FiTrash2 className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload; 