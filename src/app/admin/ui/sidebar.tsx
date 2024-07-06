"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

type UserStatus = 'online' | 'offline' | 'poor';

const Sidebar = () => {
  const [userId, setUserId] = useState('12345'); // Replace with actual user ID fetching logic
  const [roles, setRoles] = useState('Admin'); // Replace with actual roles fetching logic
  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState<UserStatus>('online'); // Replace with actual status fetching logic

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: UserStatus) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-red-500';
      case 'poor':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="w-64 h-screen bg-black text-[#D3D3D3] fixed top-0 left-0 flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-array font-bold">Admin Panel</h1>
      </div>
      <div className="flex items-center text-[#D3D3D3] justify-center p-4">
        <div className="text-center">
          <p className="text-sm mb-1">User ID: {userId}</p>
          <p className="text-sm mb-1">Roles: {roles}</p>
          <p className="text-sm mb-1">Time: {currentTime.toLocaleTimeString()}</p>
          <p className="text-sm flex items-center justify-center">
            Status: <span className={`ml-2 h-3 w-3 rounded-full ${getStatusColor(status)}`}></span>
          </p>
        </div>
      </div>
      <nav className="flex-1 px-2 py-4  space-y-2">
        <Link href="/admin/dashboard"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <hr
          className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
         >
        </hr>
        
        <Link href="/admin/users"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Users
        </Link>
        
        <hr
          className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
         >
        </hr>
        
        <Link href="/admin/productupload"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
         Add Products
        </Link>
        
        <hr
          className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
         >
        </hr>
        
        <Link href="/admin/blogupload"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Add Blogs
        </Link>
        
        <hr
          className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
         >
        </hr>
        
        <Link href="/admin/settings"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Settings
        </Link>
        
        <hr
          className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
         >
        </hr>
        
        {/* <Link href="/admin/user-info"
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          User Info
        </Link> */}
        
        {/* <hr
          className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
         >
        </hr> */}
        
      </nav>
    </div>
  );
};

export default Sidebar;
