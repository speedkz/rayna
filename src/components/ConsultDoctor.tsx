import React from 'react';
import ConsultationTable from './ConsultationTable';
import Sidebar from './Sidebar';

interface Doctor {
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
}

interface Consultation {
  title: string;
  message: string;
  date: string;
  time: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Alison Ogaga",
    role: "General Practioner",
    avatar: "/images/doctor1.jpg",
    isOnline: true,
  },
  {
    name: "Dr. Jennifer Johnson",
    role: "Primary Care Physician",
    avatar: "/images/doctor2.jpg",
    isOnline: true,
  },
  {
    name: "Dr. Samuel Smith",
    role: "Mental Health Professional",
    avatar: "/images/doctor3.jpg",
    isOnline: true,
  },
  {
    name: "Dr. Lily Chen",
    role: "Dermatologist",
    avatar: "/images/doctor4.jpg",
    isOnline: true,
  },
];

const consultations: Consultation[] = [
  {
    title: "I'm feeling uneasy",
    message: "Good morning. I'm sorry to hear that you're not feeling well. Can you tell me more about your symptoms? How long have you been feeling this way?",
    date: "1 Jul, 2023",
    time: "1:00 PM",
  },
  {
    title: "I have a rash",
    message: "Let's run some tests to understand better what might be causing these symptoms.",
    date: "1 Jul, 2023",
    time: "10:00 AM",
  },
  {
    title: "I'm suffering from anxiety",
    message: "Good afternoon. It's important that we address this. Anxiety can significantly impact your quality of life. Let's explore some strategies and perhaps treatments that can help you manage your anxiety effectively.",
    date: "1 Jul, 2023",
    time: "4:00 PM",
  },
  {
    title: "I have a rash",
    message: "Hello, let's take a look at that rash. I'll also ask you some questions about your symptoms and any potential allergens or irritants you might have been exposed to.",
    date: "30 Jun, 2023",
    time: "8:00 AM",
  },
];

const ConsultDoctor: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
    <Sidebar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white py-3 px-4 lg:px-9">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-10">
              <button className="lg:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="relative w-full lg:w-[629px]">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full px-12 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#EB5017]"
                />
                <img
                  src="/images/search-icon.svg"
                  alt="Search"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-gray-100 rounded-full">
                <img src="/images/bell-icon.svg" alt="Notifications" className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <img src="/images/avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 lg:p-9">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#000000] mb-1">Consult a Doctor</h1>
            <p className="text-[#667185]">Check and filter all your medical appointments here</p>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#EB5017] text-white rounded-lg mb-6">
            <img src="/images/plus-circle-icon.svg" alt="Add" className="w-5 h-5" />
            <span>New Consultation</span>
          </button>

          <div className="flex flex-wrap gap-3 mb-6">
            <button className="flex items-center gap-2 px-4 py-3 bg-[#FFECE5] text-[#101928] rounded-md">
              <img src="/images/chat-icon.svg" alt="Chat" className="w-5 h-5" />
              <span>Ongoing Consultations</span>
              <span className="px-2 py-0.5 bg-[#F56630] text-white text-xs rounded-full">0</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-[#344054] rounded-md">
              <img src="/images/clock-icon.svg" alt="Clock" className="w-5 h-5" />
              <span>Closed Consultations</span>
              <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">0</span>
            </button>
          </div>

          {/* Table */}
          <ConsultationTable doctors={doctors} consultations={consultations} />
        </div>
      </main>
    </div>
  );
};

export default ConsultDoctor; 