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
import SidebarDemo from '@pages/SidebarDemo';
import TableHeaderDemo from '@pages/TableHeaderDemo';
import TableCellDemo from '@pages/TableCellDemo';
import TableDemo from '@pages/TableDemo';
import ToastProvider from '@components/ToastProvider';

const DEMOS = [
  { path: '/', name: 'Buttons', component: ButtonDemo },
  { path: '/avatars', name: 'Avatars', component: AvatarDemo },
  { path: '/avatar-groups', name: 'Avatar Groups', component: AvatarGroupDemo },
  { path: '/badges', name: 'Badges', component: BadgeDemo },
  { path: '/chips', name: 'Chips', component: ChipDemo },
  { path: '/inputs', name: 'Inputs', component: InputDemo },
  { path: '/spinners', name: 'Spinners', component: SpinnerDemo },
  { path: '/tabs', name: 'Tabs', component: TabsDemo },
  { path: '/breadcrumbs', name: 'Breadcrumbs', component: BreadcrumbDemo },
  { path: '/toasts', name: 'Toasts', component: ToastDemo },
  { path: '/small-file-upload', name: 'Small File Upload', component: FileUploadDemo },
  { path: '/big-file-upload', name: 'Big File Upload', component: BigFileUploadDemo },
  { path: '/multi-file-upload', name: 'Multi-File Upload', component: MultiFileUploadDemo },
  { path: '/date-picker', name: 'Date Picker', component: DatePickerDemo },
  { path: '/dropdowns', name: 'Dropdowns', component: DropdownDemo },
  { path: '/headers', name: 'Headers', component: HeaderDemo },
  { path: '/sidebars', name: 'Sidebars', component: SidebarDemo },
  { path: '/table-headers', name: 'Table Headers', component: TableHeaderDemo },
  { path: '/table-cells', name: 'Table Cells', component: TableCellDemo },
  { path: '/tables', name: 'Tables', component: TableDemo },
];

const App: React.FC = () => {
  return (
    <ToastProvider>
      <Router>
        <div className="h-screen flex flex-col">
          <nav className="bg-gray-50 py-4 px-6 border-b border-gray-200 flex-none">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-[#EB5017] font-inter font-semibold text-xl">
                  Rayna UI Design System
                </span>
                <div className="flex items-center gap-1 overflow-x-auto">
                  {DEMOS.map(({ path, name }) => (
                    <Link
                      key={path}
                      to={path}
                      className="px-4 py-2 text-sm text-gray-800 font-inter font-medium hover:text-[#EB5017] hover:bg-[#FFECE5] rounded-md transition-colors duration-200 whitespace-nowrap"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className="flex-1 flex overflow-hidden">
            <Routes>
              {DEMOS.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </ToastProvider>
  );
};

export default App;
