import React, { useState, useRef } from 'react';
import { format } from 'date-fns';
import { FiX, FiDownload, FiTrash2, FiCheckCircle } from 'react-icons/fi';

interface FileItem {
  id: string;
  file: File;
  status: 'uploading' | 'complete' | 'error';
  progress: number;
  errorMessage?: string;
  uploadedAt: Date;
}

interface MultiFileUploadProps {
  maxFileSize?: number; // in bytes
  onFilesChange?: (files: File[]) => void;
  onFileDelete?: (fileId: string) => void;
  onFileDownload?: (fileId: string) => void;
}

const MultiFileUpload: React.FC<MultiFileUploadProps> = ({
  maxFileSize = 5 * 1024 * 1024, // 5MB default
  onFilesChange,
  onFileDelete,
  onFileDownload,
}) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: FileItem[] = Array.from(selectedFiles).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: 'uploading',
      progress: 0,
      uploadedAt: new Date()
    }));

    setFiles(prev => [...prev, ...newFiles]);

    // Simulate file upload for each file
    newFiles.forEach(async (fileItem) => {
      if (fileItem.file.size > maxFileSize) {
        setFiles(prev => prev.map(f => 
          f.id === fileItem.id 
            ? { ...f, status: 'error', errorMessage: 'File size exceeds 5MB limit' }
            : f
        ));
        return;
      }

      // Simulate upload progress
      for (let i = 0; i <= 100; i += 5) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFiles(prev => prev.map(f =>
          f.id === fileItem.id ? { ...f, progress: i } : f
        ));
      }

      // Complete upload
      setFiles(prev => prev.map(f =>
        f.id === fileItem.id ? { ...f, status: 'complete' } : f
      ));
    });

    if (onFilesChange) {
      onFilesChange(Array.from(selectedFiles));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleDelete = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    if (onFileDelete) {
      onFileDelete(fileId);
    }
  };

  const handleDownload = (fileId: string) => {
    if (onFileDownload) {
      onFileDownload(fileId);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-lg font-semibold text-gray-900">Upload Documents</h2>
        <button 
          onClick={() => setFiles([])}
          className="text-gray-400 hover:text-gray-600"
        >
          <FiX size={24} />
        </button>
      </div>

      {/* Upload Area */}
      <div
        className={`
          border-2 border-dashed rounded-2xl p-6 mb-7 text-center
          ${isDragging ? 'border-[#FA9874] bg-[#FFFBFA]' : 'border-gray-200 hover:border-[#FA9874] hover:bg-[#FFFBFA]'}
          transition-colors duration-200 cursor-pointer
        `}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files)}
        />
        <div className="flex flex-col items-center gap-5">
          <div className="w-10 h-10 bg-[#CC400C] rounded flex items-center justify-center text-white">
            PDF
          </div>
          <div className="text-center">
            <p className="text-gray-600 font-medium mb-1">
              Drop your files here or <span className="text-[#F56630]">browse</span>
            </p>
            <p className="text-sm text-gray-500">
              Maximum file size: 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Files List */}
      {files.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 font-semibold">Uploaded Files</span>
            <div className="bg-[#F56630] text-white text-xs font-semibold px-2 py-1 rounded-full">
              {files.length}
            </div>
          </div>

          <div className="space-y-6">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between pb-6 border-b border-gray-100"
              >
                <div className="flex items-center gap-4 flex-1">
                  {file.status === 'complete' ? (
                    <div className="w-8 h-8 rounded-full bg-[#E7F6EC] flex items-center justify-center">
                      <FiCheckCircle className="text-[#0F973D]" size={16} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-[#CC400C] rounded flex items-center justify-center text-white text-xs">
                      PDF
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">
                      {file.file.name}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <span>
                        {format(file.uploadedAt, "dd MMM, yyyy | HH:mm'pm'")}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      <span>{formatFileSize(file.file.size)}</span>
                    </div>
                  </div>
                </div>

                {file.status === 'uploading' && (
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-sm font-semibold">{file.progress}%</div>
                      <div className="w-[313px] h-2 bg-[#FCD2C2] rounded-2xl overflow-hidden">
                        <div 
                          className="h-full bg-[#F56630] rounded-2xl transition-all duration-300"
                          style={{ width: `${file.progress}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-900 font-semibold">
                        Uploading Document...
                      </div>
                      <div className="text-xs text-gray-500">
                        {file.file.name}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FiX size={20} />
                    </button>
                  </div>
                )}

                {file.status === 'complete' && (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDownload(file.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiDownload size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="text-[#D42620] hover:text-red-700"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                )}

                {file.status === 'error' && (
                  <div className="text-red-600 text-sm">
                    {file.errorMessage}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiFileUpload; 