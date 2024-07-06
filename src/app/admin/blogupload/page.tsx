'use client';
import React, { useState } from 'react';
import Sidebar from '../ui/sidebar';

interface Blog {
  id: number;
  title: string;
  highlight: string;
  details: string;
  imageUrl: string;
  tags: string[];
  lastUpdate: string;
}

const initialBlogs: Blog[] = [
  {
    id: 1,
    title: 'Sample Blog',
    highlight: 'This is a sample highlight',
    details: '<p>Details with <strong>HTML</strong> tags</p>',
    imageUrl: 'https://via.placeholder.com/150',
    tags: ['sample', 'blog'],
    lastUpdate: new Date().toLocaleString(),
  },
];

const BlogUploadPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Blog>>({});

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
    setFormData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const tags = value.split(',').map(tag => tag.trim());
    setFormData(prevState => ({ ...prevState, tags }));
  };

  const handleFormSubmit = () => {
    const newBlog: Blog = {
      ...formData,
      id: blogs.length + 1,
      lastUpdate: new Date().toLocaleString(),
    } as Blog;
    setBlogs([...blogs, newBlog]);
    setIsFormOpen(false);
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleView = (id: number) => {
    // Navigate to blog details page
    window.location.href = `/blog/${id}`;
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ml-64 text-[#37474f]">
        <h1 className="text-3xl font-array font-bold mb-4">Blog Upload Page</h1>
        <button
          onClick={handleFormToggle}
          className="bg-[#4e73df] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          {isFormOpen ? 'Cancel' : 'Add Blog'}
        </button>
        {isFormOpen && (
          <div className="bg-gray-900  text-[#D3D3D3] rounded-lg shadow-sm shadow-gray-400  p-6 mb-4">
            <h2 className="text-lg font-bold mb-4">Add New Blog</h2>
            <div className="mb-4">
              <label className="block text-white mb-2">Title</label>
              <input
                type="text"
                name="title"
                placeholder='Enter blog title'
                value={formData.title || ''}
                onChange={handleInputChange}
                className="w-full bg-black border-gray-300 px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Highlight</label>
              <input
                type="text"
                name="highlight"
                placeholder='Enter blog highlight'
                value={formData.highlight || ''}
                onChange={handleInputChange}
                className="w-full bg-black border-gray-300 px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block  text-white mb-2">Details</label>
              <textarea
                name="details"
                placeholder='Enter blog details'
                value={formData.details || ''}
                onChange={handleInputChange}
                className="w-full bg-black border-gray-300 px-4 py-2 border rounded-lg"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Image Link</label>
              <input
                type="text"
                name="imageUrl"
                placeholder='Enter image URL'
                value={formData.imageUrl || ''}
                onChange={handleInputChange}
                className="w-full bg-black border-gray-300 px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                placeholder='Enter tags'
                value={(formData.tags || []).join(', ')}
                onChange={handleTagsChange}
                className="w-full bg-black border-gray-300 px-4 py-2 border rounded-lg"
              />
            </div>
            <button
              onClick={handleFormSubmit}
              className="bg-[#4e73df] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        )}
        <h2 className="text-xl font-bold mb-4">Blog List</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id} className="bg-gray-900 text-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-lg  font-bold">{blog.title}</h3>
              <p className="">Last Update: {blog.lastUpdate}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleView(blog.id)}
                  className="bg-[#4e73df] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogUploadPage;
