"use client";

// pages/admin/users.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../ui/sidebar';
import { BiColorFill } from 'react-icons/bi';


const UserManagement = () => {
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [users, setUsers] = useState([
      { id: 1, userName: 'akshar', email: 'akshar@example.com', roles: 'Admin', number: '1234567890' },
      { id: 2, userName: 'jay rai', email: 'jay@example.com', roles: 'admin', number: '0987654321' },
    ]);
    const [newUser, setNewUser] = useState({ id: '', userName: '', email: '', roles: '', number: '' });
  
    // const router = useRouter();
  
    const handleAddUser = () => {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setShowAddUserForm(false);
      setNewUser({ id: '', userName: '', email: '', roles: '', number: '' });
    };
  
    const handleDeleteUser = (id: number) => {
      setUsers(users.filter(user => user.id !== id));
    };
  
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const { name, value } = e.target;
    //   setNewUser({ ...newUser, [name]: value });
    // };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
      };

    return (
      <div className="flex  ">
        <Sidebar />
        <div className="ml-64 w-full p-6">
          <h2 className="text-3xl font-array text-[#37474f] font-bold mb-4">User Management</h2>
          <button
            className="mb-4 bg-[#4e73df] hover:bg-blue-700 text-[#D3D3D3]  font-bold py-2 px-4 rounded"
            onClick={() => setShowAddUserForm(!showAddUserForm)}
          >
            {showAddUserForm ? 'Cancel' : 'Add User'}
          </button>
  
          {showAddUserForm && (
            <div className="mb-4 p-4 bg-gray-900 rounded-lg shadow-sm shadow-gray-400 ">
              <h3 className="text-xl text-[#f8f9fa] font-semibold mb-4">Add User</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-[#D3D3D3]  text-sm font-bold mb-2" htmlFor="userName">
                    User Name
                  </label>
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder='User Name'
                    value={newUser.userName}
                    onChange={handleInputChange}
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-[#D3D3D3]  leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#D3D3D3]  text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-[#D3D3D3]  leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                <label className="block text-[#D3D3D3]  text-sm font-bold mb-2" htmlFor="roles">
                  Roles
                </label>
                <select
                  id="roles"
                  name="roles"
                  value={newUser.roles}
                  onChange={handleInputChange}
                  className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option className="bg-transparent text-white" value="Admin">Admin</option>
                  <option className="bg-transparent text-white" value="Manager">Manager</option>
                  <option className="bg-transparent text-white" value="Viewer">Viewer</option>
                  <option className="bg-transparent text-white" value="Updater">Updater</option>
                </select>
              </div>
                <div className="mb-4">
                  <label className="block text-[#D3D3D3]  text-sm font-bold mb-2" htmlFor="number">
                    Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    placeholder='Number'
                    value={newUser.number}
                    onChange={handleInputChange}
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-[#D3D3D3]  leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleAddUser}
                    className="bg-[#4e73df] hover:bg-blue-700 text-[#D3D3D3]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add User
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddUserForm(false)}
                    className="bg-red-500 hover:bg-red-700 text-[#D3D3D3]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
  
          <div className="bg-gray-900 rounded-lg shadow-sm shadow-gray-400 p-4">
            <h3 className="text-xl font-semibold mb-4">Users List</h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Roles</th>
                  <th className="px-4 py-2">Number</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="border px-4 py-2">{user.id}</td>
                    <td className="border px-4 py-2">{user.userName}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.roles}</td>
                    <td className="border px-4 py-2">{user.number}</td>
                    <td className="px-4 py-2"> 
                      <button className="bg-[#4e73df] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                        Update
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserManagement;
