import React from 'react';
import Avatar, { AvatarSize, AvatarStatus, AvatarType } from '@components/Avatar';

const AvatarDemo: React.FC = () => {
  const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const statuses: AvatarStatus[] = ['none', 'online', 'offline', 'verified'];
  const types: AvatarType[] = ['image', 'icon', 'initials'];

  // Sample images for demo
  const sampleImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80';
  const sampleImage2 = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80';
  const sampleImage3 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80';

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-inter text-gray-800 mb-8">Avatar Component Demo</h1>

      {/* Avatar Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Avatar Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type) => (
            <div key={type} className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700 capitalize">{type}</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Avatar 
                  type={type} 
                  src={sampleImage} 
                  initials="JD" 
                  size="md" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Avatar Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Avatar Sizes</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Image Avatars</h3>
            <div className="flex flex-wrap gap-6 items-end">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar type="image" src={sampleImage} size={size} />
                  <span className="text-sm text-gray-500">{size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Icon Avatars</h3>
            <div className="flex flex-wrap gap-6 items-end">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar type="icon" size={size} />
                  <span className="text-sm text-gray-500">{size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
            <h3 className="text-lg font-inter font-semibold text-gray-700">Initials Avatars</h3>
            <div className="flex flex-wrap gap-6 items-end">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <Avatar type="initials" initials="JD" size={size} />
                  <span className="text-sm text-gray-500">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Status Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statuses.map((status) => (
            <div key={status} className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md">
              <h3 className="text-lg font-inter font-semibold text-gray-700 capitalize">{status === 'none' ? 'No Status' : status}</h3>
              <div className="flex gap-4">
                <Avatar type="image" src={sampleImage} status={status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-inter text-gray-700 mb-6">Application Examples</h2>
        
        {/* User Card */}
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">User Card</h3>
          <div className="max-w-md p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <Avatar type="image" src={sampleImage} size="lg" status="online" />
              <div>
                <h4 className="text-lg font-semibold">Jane Doe</h4>
                <p className="text-gray-500">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comment Thread */}
        <div className="mb-8">
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Comment Thread</h3>
          <div className="max-w-2xl space-y-4">
            <div className="flex gap-3">
              <Avatar type="image" src={sampleImage} size="sm" status="online" />
              <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                <div className="font-medium">Jane Doe</div>
                <p className="text-gray-600">This is a great design system! I love the attention to detail.</p>
                <div className="text-xs text-gray-400 mt-1">2 hours ago</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Avatar type="image" src={sampleImage2} size="sm" status="offline" />
              <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                <div className="font-medium">John Smith</div>
                <p className="text-gray-600">I agree! The components are very well thought out.</p>
                <div className="text-xs text-gray-400 mt-1">1 hour ago</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Avatar type="initials" initials="AS" size="sm" status="verified" />
              <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                <div className="font-medium">Alice Smith</div>
                <p className="text-gray-600">Thanks for the feedback! We're constantly improving.</p>
                <div className="text-xs text-gray-400 mt-1">30 min ago</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Avatar Group */}
        <div>
          <h3 className="text-lg font-inter font-semibold text-gray-700 mb-4">Avatar Group</h3>
          <div className="flex -space-x-2">
            <Avatar type="image" src={sampleImage} size="md" className="border-2 border-white" />
            <Avatar type="image" src={sampleImage2} size="md" className="border-2 border-white" />
            <Avatar type="image" src={sampleImage3} size="md" className="border-2 border-white" />
            <Avatar type="initials" initials="+5" size="md" className="border-2 border-white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvatarDemo; 