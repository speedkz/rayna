import React, { useRef, useState, DragEvent } from 'react';
import { FiUploadCloud, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

interface BigFileUploadProps {
  onChange?: (file: File | null) => void;
  onDelete?: () => void;
  accept?: string;
  maxSize?: number; // in bytes
  className?: string;
  variant?: 'default' | 'uploading' | 'success' | 'error';
  fileName?: string;
  fileSize?: number;
  progress?: number;
  errorMessage?: string;
  maxDimensions?: { width: number; height: number };
}

const BigFileUpload: React.FC<BigFileUploadProps> = ({
  onChange,
  onDelete,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB default
  className = '',
  variant = 'default',
  fileName,
  progress = 0,
  errorMessage = 'Failed to upload',
  maxDimensions = { width: 800, height: 400 },
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files?.length > 0 && onChange) {
      onChange(files[0]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && onChange) {
      onChange(selectedFile);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'error':
        return 'border-[#E26E6A] bg-[#FEFBFB]';
      case 'success':
        return 'border-[#5FC381] bg-[#FBFEFC]';
      case 'uploading':
        return 'border-[#FA9874] bg-[#FFFBFA]';
      default:
        return 'border-[#D0D5DD] bg-white';
    }
  };

  const renderContent = () => {
    switch (variant) {
      case 'error':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 bg-[#FBEAE9] rounded-full flex items-center justify-center">
              <FiAlertTriangle className="w-6 h-6 text-[#D42620]" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-[#1D2739]">Failed to Upload</span>
              <span className="text-xs text-[#98A2B3]">{errorMessage}</span>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 text-sm font-semibold text-[#F56630] hover:text-[#EB5017] transition-colors"
            >
              Try Again
            </button>
          </div>
        );

      case 'success':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 bg-[#E7F6EC] rounded-full flex items-center justify-center">
              <FiCheckCircle className="w-6 h-6 text-[#0F973D]" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-[#1D2739]">Upload Complete</span>
              <span className="text-xs text-[#98A2B3]">{fileName}</span>
            </div>
            <button
              onClick={onDelete}
              className="px-4 py-2 text-sm font-semibold text-[#98A2B3] hover:text-[#1D2739] transition-colors"
            >
              Clear Upload
            </button>
          </div>
        );

      case 'uploading':
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20">
              <div className="relative w-full h-full">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#FCD2C2"
                    strokeWidth="8"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#F56630"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 36 * progress / 100} ${2 * Math.PI * 36}`}
                    className="transition-all duration-300"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-semibold">{progress}%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-[#1D2739]">Uploading Document...</span>
              <span className="text-xs text-[#98A2B3]">{fileName}</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-12 h-12 bg-[#F0F2F5] rounded-full flex items-center justify-center">
              <FiUploadCloud className="w-6 h-6 text-[#475367]" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm font-semibold text-[#EB5017] hover:text-[#F56630] transition-colors"
                >
                  Click to upload
                </button>
                <span className="text-sm text-[#475367]">or drag and drop</span>
              </div>
              <span className="text-xs text-[#98A2B3]">
                SVG, PNG, JPG or GIF (max. {maxDimensions.width}x{maxDimensions.height}px)
              </span>
            </div>
            <div className="w-full flex items-center gap-2 my-2">
              <div className="flex-1 h-px bg-[#F0F2F5]" />
              <span className="text-xs font-semibold text-[#98A2B3]">OR</span>
              <div className="flex-1 h-px bg-[#F0F2F5]" />
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-[#EB5017] hover:bg-[#F56630] text-white text-sm font-semibold rounded-md transition-colors"
            >
              Browse Files
            </button>
          </div>
        );
    }
  };

  return (
    <div
      className={`
        w-[400px] min-h-[264px] p-6 rounded-2xl border-2 border-dashed
        ${getVariantStyles()}
        ${isDragging ? 'border-[#EB5017]' : ''}
        transition-colors
        ${className}
      `}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept={accept}
        ref={fileInputRef}
      />
      <div className="flex items-center justify-center h-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default BigFileUpload; 