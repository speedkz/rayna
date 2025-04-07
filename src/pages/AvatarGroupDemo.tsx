import React from 'react';
import Avatar from '@components/Avatar';
import AvatarGroup from '@components/AvatarGroup';
import { AvatarSize } from '@components/Avatar';

const AvatarGroupDemo: React.FC = () => {
  const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  
  // Sample avatar data for demos
  const avatarData = [
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      status: 'online' as const
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      status: 'none' as const
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      status: 'offline' as const
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      status: 'none' as const
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      status: 'verified' as const
    },
    { 
      type: 'initials' as const, 
      initials: 'SJ'
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    },
    { 
      type: 'icon' as const
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    },
    { 
      type: 'initials' as const, 
      initials: 'TK'
    },
    { 
      type: 'image' as const, 
      src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Avatar Group Component Demo</h1>

      {/* Avatar Group Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Avatar Group Sizes</h2>
        <div className="grid grid-cols-1 gap-8">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700">Size: {size}</h3>
              <div className="flex items-center">
                <AvatarGroup
                  avatars={avatarData.slice(0, 7)}
                  size={size}
                  maxVisible={5}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Avatar Group Variations */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Avatar Group Variations</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Different Max Visible */}
          <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Different Max Visible</h3>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-3">Max Visible: 3</p>
                <AvatarGroup
                  avatars={avatarData.slice(0, 8)}
                  maxVisible={3}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3">Max Visible: 5</p>
                <AvatarGroup
                  avatars={avatarData.slice(0, 8)}
                  maxVisible={5}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3">Max Visible: 8</p>
                <AvatarGroup
                  avatars={avatarData.slice(0, 8)}
                  maxVisible={8}
                />
              </div>
            </div>
          </div>

          {/* Mixed Avatar Types */}
          <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Mixed Avatar Types</h3>
            <div className="flex items-center">
              <AvatarGroup
                avatars={[
                  { type: 'image', src: avatarData[0].src },
                  { type: 'icon' },
                  { type: 'initials', initials: 'JD' },
                  { type: 'image', src: avatarData[2].src },
                  { type: 'image', src: avatarData[3].src, status: 'online' },
                  { type: 'initials', initials: 'SR' },
                  { type: 'image', src: avatarData[4].src },
                ]}
                maxVisible={5}
              />
            </div>
          </div>

          {/* Custom Spacing */}
          <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Custom Spacing</h3>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-3">Tight Spacing (-16px)</p>
                <AvatarGroup
                  avatars={avatarData.slice(0, 5)}
                  spacing="-16px"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3">Default Spacing (-8px)</p>
                <AvatarGroup
                  avatars={avatarData.slice(0, 5)}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3">Loose Spacing (-4px)</p>
                <AvatarGroup
                  avatars={avatarData.slice(0, 5)}
                  spacing="-4px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Application Examples</h2>

        {/* Team Card */}
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Team Card</h3>
          <div className="max-w-md p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Design Team</h4>
              <p className="text-gray-500">Working on the new dashboard</p>
            </div>
            <div className="flex justify-between items-center">
              <AvatarGroup
                avatars={avatarData.slice(0, 12)}
                maxVisible={5}
                size="sm"
              />
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium">
                View Team
              </button>
            </div>
          </div>
        </div>

        {/* Project Contributors */}
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Project Contributors</h3>
          <div className="max-w-2xl p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Design System Documentation</h4>
                <p className="text-gray-500">Last updated 2 days ago</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <AvatarGroup
                  avatars={avatarData.slice(0, 12)}
                  maxVisible={3}
                  size="xs"
                />
                <span className="text-sm text-gray-500">12 contributors</span>
              </div>
              <div className="flex gap-2">
                <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md text-sm font-medium">
                  Share
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  View Doc
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvatarGroupDemo; 