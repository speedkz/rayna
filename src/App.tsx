import React from 'react';
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
import MultiFileUploadDemo from '@pages/MultiFileUploadDemo';
import BreadcrumbDemo from '@pages/BreadcrumbDemo';
import ToastDemo from '@pages/ToastDemo';
import DatePickerDemo from '@pages/DatePickerDemo';
import DropdownDemo from '@pages/DropdownDemo';
import HeaderDemo from '@pages/HeaderDemo';
import ToastProvider from '@components/ToastProvider';

const App: React.FC = () => {
  return (
    <ToastProvider>
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
              to="/breadcrumbs" 
              className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
            >
              Breadcrumbs
            </Link>
            <Link 
              to="/toasts" 
              className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
            >
              Toasts
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
            <Link 
              to="/multi-file-upload" 
              className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
            >
              Multi-File Upload
            </Link>
            <Link 
              to="/date-picker" 
              className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
            >
              Date Picker
            </Link>
            <Link 
              to="/dropdowns" 
              className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
            >
              Dropdowns
            </Link>
            <Link 
              to="/headers" 
              className="text-gray-800 font-inter font-semibold hover:text-[#EB5017] transition-colors duration-200"
            >
              Headers
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
          <Route path="/breadcrumbs" element={<BreadcrumbDemo />} />
          <Route path="/toasts" element={<ToastDemo />} />
          <Route path="/small-file-upload" element={<FileUploadDemo />} />
          <Route path="/big-file-upload" element={<BigFileUploadDemo />} />
          <Route path="/multi-file-upload" element={<MultiFileUploadDemo />} />
          <Route path="/date-picker" element={<DatePickerDemo />} />
          <Route path="/dropdowns" element={<DropdownDemo />} />
          <Route path="/headers" element={<HeaderDemo />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
};

export default App;
