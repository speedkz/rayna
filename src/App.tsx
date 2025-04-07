import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonDemo from '@pages/ButtonDemo';
import AvatarDemo from '@pages/AvatarDemo';
import AvatarGroupDemo from '@pages/AvatarGroupDemo';
import BadgeDemo from '@pages/BadgeDemo';
import ChipDemo from '@pages/ChipDemo';
import InputDemo from '@pages/InputDemo';
import SpinnerDemo from '@pages/SpinnerDemo';
import TabsDemo from '@pages/TabsDemo';
import FileUploadDemo from '@pages/FileUploadDemo';
import BigFileUploadDemo from '@pages/BigFileUploadDemo';
import FileUpload from './components/FileUpload';
import BigFileUpload from './components/BigFileUpload';

const App: React.FC = () => {
  const [uploadState, setUploadState] = useState<{
    variant: 'default' | 'progress' | 'complete' | 'error';
    fileName?: string;
    fileSize?: number;
    progress?: number;
    errorMessage?: string;
  }>({
    variant: 'default'
  });

  const [bigUploadState, setBigUploadState] = useState<{
    variant: 'default' | 'uploading' | 'success' | 'error';
    fileName?: string;
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

  const handleDownload = () => {
    console.log('Downloading file...');
  };

  const handleDelete = () => {
    setUploadState({ variant: 'default' });
  };

  const handleBigDelete = () => {
    setBigUploadState({ variant: 'default' });
  };

  return (
    <Router>
      <nav className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Button Components
          </Link>
          <Link 
            to="/avatars" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Avatar Components
          </Link>
          <Link 
            to="/avatar-groups" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Avatar Groups
          </Link>
          <Link 
            to="/badges" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Badges
          </Link>
          <Link 
            to="/chips" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Chips
          </Link>
          <Link 
            to="/inputs" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Inputs
          </Link>
          <Link 
            to="/spinners" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Spinners
          </Link>
          <Link 
            to="/tabs" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Tabs
          </Link>
          <Link 
            to="/small-file-upload" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Small File Upload
          </Link>
          <Link 
            to="/big-file-upload" 
            className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
          >
            Big File Upload
          </Link>
          <span className="text-gray-400">|</span>
          <span className="text-[#EB5017] font-inter font-semibold">
            Rayna UI Design System
          </span>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ButtonDemo />} />
        <Route path="/avatars" element={<AvatarDemo />} />
        <Route path="/avatar-groups" element={<AvatarGroupDemo />} />
        <Route path="/badges" element={<BadgeDemo />} />
        <Route path="/chips" element={<ChipDemo />} />
        <Route path="/inputs" element={<InputDemo />} />
        <Route path="/spinners" element={<SpinnerDemo />} />
        <Route path="/tabs" element={<TabsDemo />} />
        <Route path="/small-file-upload" element={<FileUploadDemo />} />
        <Route path="/big-file-upload" element={<BigFileUploadDemo />} />
      </Routes>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {/* Small Upload Component Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Small Upload Component</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FileUpload
                  {...uploadState}
                  onChange={handleFileChange}
                  onDownload={handleDownload}
                  onDelete={handleDelete}
                />
              </div>
            </section>

            {/* Big Upload Component Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Big Upload Component</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BigFileUpload
                  {...bigUploadState}
                  onChange={handleBigFileChange}
                  onDelete={handleBigDelete}
                  maxDimensions={{ width: 800, height: 400 }}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
