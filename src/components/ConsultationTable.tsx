import React from 'react';

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

interface ConsultationTableProps {
  doctors: Doctor[];
  consultations: Consultation[];
}

const ConsultationTable: React.FC<ConsultationTableProps> = ({ doctors, consultations }) => {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-12 gap-4 bg-white border border-[#E4E7EC] rounded-lg p-6 min-w-[1096px]">
        {/* Doctors List */}
        <div className="col-span-3 border-r border-[#E4E7EC]">
          <h3 className="text-sm font-medium text-[#344054] mb-4 px-6">Name</h3>
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <div key={index} className="flex items-start gap-3 px-6 py-5 border-b border-[#F0F2F5] last:border-b-0">
                <div className="relative">
                  <img src={doctor.avatar} alt={doctor.name} className="w-10 h-10 rounded-full object-cover" />
                  {doctor.isOnline && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#04802E] border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-[#101928]">{doctor.name}</h4>
                  <p className="text-sm text-[#475367]">{doctor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="col-span-7">
          <h3 className="text-sm font-medium text-[#344054] mb-4 px-6">Conversation</h3>
          <div className="space-y-0">
            {consultations.map((consultation, index) => (
              <div key={index} className="px-6 py-5 border-b border-[#F0F2F5] last:border-b-0">
                <h4 className="font-medium text-[#344054] mb-1">{consultation.title}</h4>
                <p className="text-sm text-[#667185]">{consultation.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <div className="col-span-2">
          <h3 className="text-sm font-medium text-[#344054] mb-4 px-6">Date and time</h3>
          <div className="space-y-0">
            {consultations.map((consultation, index) => (
              <div key={index} className="px-6 py-5 border-b border-[#F0F2F5] last:border-b-0">
                <p className="font-medium text-[#101928]">{consultation.date}</p>
                <p className="text-sm text-[#667185]">{consultation.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationTable; 