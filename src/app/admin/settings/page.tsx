'use client';
import React, { useState } from 'react';
import Sidebar from '../ui/sidebar';

interface AdminSettings {
  email: string;
  password: string;
  profile: {
    name: string;
    bio: string;
  };
}

const initialSettings: AdminSettings = {
  email: 'admin@example.com',
  password: '',
  profile: {
    name: 'Admin',
    bio: 'This is the admin profile bio.',
  },
};

const AdminSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<AdminSettings>(initialSettings);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prevState => {
      const newSettings = { ...prevState };
      if (name.includes('profile')) {
        const profileField = name.split('.')[1];
        newSettings.profile[profileField] = value;
      } else {
        newSettings[name] = value;
      }
      return newSettings;
    });
  };

  const handleFormSubmit = () => {
    // Submit the updated settings to the backend or handle accordingly
    alert('Settings updated successfully!');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex text-[#D3D3D3] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-3xl font-bold text-[#37474f] font-array mb-4">Admin Settings</h1>
        <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-lg font-bold mb-4">Update Email</h2>
          <div className="mb-4">
            <label className="block bg-gray-900 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter new email address'
              value={settings.email}
              onChange={handleInputChange}
              className="w-full bg-gray-900 px-4 py-2 border rounded-lg"
            />
          </div>
          <h2 className="text-lg font-bold mb-4">Update Password</h2>
          <div className="mb-4">
            <label className="block bg-gray-900 mb-2">Password</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder='Enter new password'
              value={settings.password}
              onChange={handleInputChange}
              className="w-full bg-gray-900 px-4 py-2 border rounded-lg"
            />
            <button
              onClick={togglePasswordVisibility}
              className="mt-2 text-blue-500 hover:text-blue-700"
            >
              {isPasswordVisible ? 'Hide' : 'Show'} Password
            </button>
          </div>
          <h2 className="text-lg font-bold mb-4">Update Profile</h2>
          <div className="mb-4">
            <label className="block bg-gray-900 mb-2">Name</label>
            <input
              type="text"
              name="profile.name"
              placeholder='Enter profile name'
              value={settings.profile.name}
              onChange={handleInputChange}
              className="w-full px-4 bg-gray-900 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block bg-gray-900 mb-2">Bio</label>
            <textarea
              name="profile.bio"
              placeholder='Enter profile bio'
              value={settings.profile.bio}
              onChange={handleInputChange}
              className="w-full bg-gray-900 px-4 py-2 border rounded-lg"
              rows={4}
            />
          </div>
          <button
            onClick={handleFormSubmit}
            className="bg-[#4e73df] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
