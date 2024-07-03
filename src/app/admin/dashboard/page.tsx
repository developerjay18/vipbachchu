"use client";
import { ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../ui/sidebar';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-6">{children}</div>
    </div>
  );
};

const AdminPage = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');
  const [activeUsers, setActiveUsers] = useState<string[]>([]);

  useEffect(() => {
    // Fetch data from your API or database here
    // Example data
    setTotalProducts(120);
    setTotalCategories(15);
    setTotalBlogs(30);
    setLastUpdate('2024-07-01');
    setActiveUsers(['User1', 'User2', 'User3']);
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-3xl font-array text-[#37474f] font-bold mb-4">Welcome to the Admin Dashboard</h2>
      <div className="grid grid-cols-1 text-[#D3D3D3] md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-transparent rounded-lg shadow-lg border border-[##A9A9A9]">
          <h3 className="text-xl font-semibold mb-2">Total Products</h3>
          <p className="text-2xl">
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.3,
              })}
              animateToNumber={totalProducts}
              fontStyle={{ fontSize: 40 }}
            />
          </p>
        </div>
        <div className="p-4 bg-transparent rounded-lg shadow-lg border border-[##A9A9A9]">
          <h3 className="text-xl font-semibold mb-2">Total Categories</h3>
          <p className="text-2xl">
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.3,
              })}
              animateToNumber={totalCategories}
              fontStyle={{ fontSize: 40 }}
            />
          </p>
        </div>
        <div className="p-4 bg-transparent rounded-lg shadow-lg border border-[##A9A9A9]">
          <h3 className="text-xl font-semibold mb-2">Total Blogs</h3>
          <p className="text-2xl">
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.3,
              })}
              animateToNumber={totalBlogs}
              fontStyle={{ fontSize: 40 }}
            />
          </p>
        </div>
      </div>
      <div className="p-4 bg-transparent rounded-lg border border-[##A9A9A9] text-[#D3D3D3] shadow-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Last Update</h3>
        <p className="text-lg">{lastUpdate}</p>
      </div>
      <div className="p-4 bg-transparent text-[#D3D3D3] border border-[##A9A9A9] rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Active Users</h3>
        <ul>
          {activeUsers.map((user, index) => (
            <li key={index} className="text-lg">{user}</li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
