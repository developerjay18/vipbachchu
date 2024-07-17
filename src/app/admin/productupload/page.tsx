"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../ui/sidebar';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

const ProductUploadPage = () => {
  const [formData, setFormData] = useState({
    tag: '',
    categoryId: 'id', // Default to 'id'
    name: '',
    imageUrl: '',
    salePrice: 0,
    regularPrice: 0,
    percentOff: 0,
    details: '',
    affiliateUrl: '',
    storeName: '',
    storeImageUrl: '',
    storeUrl: '',
  });

  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...formData, lastUpdate: new Date().toLocaleDateString() }]);
    setFormData({
      tag: '',
      categoryId: 'id', // Reset to default
      name: '',
      imageUrl: '',
      salePrice: 0,
      regularPrice: 0,
      percentOff: 0,
      details: '',
      affiliateUrl: '',
      storeName: '',
      storeImageUrl: '',
      storeUrl: '',
    });
    setShowForm(false); // Close the form after adding product
  };

  const handleCancel = () => {
    setShowForm(false); // Close the form
    setFormData({
      tag: '',
      categoryId: 'id', // Reset to default
      name: '',
      imageUrl: '',
      salePrice: 0,
      regularPrice: 0,
      percentOff: 0,
      details: '',
      affiliateUrl: '',
      storeName: '',
      storeImageUrl: '',
      storeUrl: '',
    });
  };

  const handleDeleteProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleUpdateProduct = (index: number) => {
    // Add update logic here
  };

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-6">
        <h2 className="text-3xl font-array text-[#37474f] font-bold mb-4">Product Upload</h2>
        {!showForm ? (
          <div className="flex justify-end mb-4">
            <button
              className="bg-[#4e73df] hover:bg-blue-700 text-white py-2 px-4 rounded"
              onClick={() => setShowForm(true)}
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm shadow-gray-400 mb-4">
            <form className="grid bg-gray-900 grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text"
                name="tag" 
                value={formData.tag} 
                onChange={handleChange} 
                placeholder="Tag" 
                className="p-2 bg-black text-white border border-gray-300 rounded" 
               />
              <select 
                name="categoryId" 
                value={formData.categoryId} 
                onChange={handleChange}
                className="p-2 bg-black text-white border border-gray-300 rounded"
              >
                <option value="id">ID Name </option>
                <option value="id">ID Name </option>
                
              </select>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                className="p-2 bg-black  text-white border border-gray-300 rounded" 
              />
              <input 
                type="text" 
                name="imageUrl" 
                value={formData.imageUrl} 
                onChange={handleChange} 
                placeholder="Image URL" 
                className="p-2 bg-black text-white border border-gray-300 rounded" 
              />
              <input 
                type="text"
               name="salePrice" 
               value={formData.salePrice} 
               onChange={handleChange} 
               placeholder ="Sale Price" 
               className="p-2 bg-black text-white border border-gray-300 rounded" 
               />
              <input 
                type="text" 
                name="regularPrice" 
                value={formData.regularPrice} 
                onChange={handleChange} 
                placeholder="Regular Price" 
                className="p-2 bg-black text-white border border-gray-300 rounded" 
              />
              <input 
                type="text" 
                name="percentOff" 
                value={formData.percentOff} 
                onChange={handleChange} 
                placeholder="Percent Off" 
                className="p-2 bg-black text-white border border-gray-300 rounded"
               />
              <textarea 
                name="details" 
                value={formData.details} 
                onChange={handleChange} 
                placeholder="Details" 
                className="p-2 bg-black text-white border border-gray-300 rounded"
              >
              </textarea>
              <input 
                type="text" 
                name="affiliateUrl" 
                value={formData.affiliateUrl} 
                onChange={handleChange} 
                placeholder="Affiliate URL" 
                className="p-2 bg-black text-white border border-gray-300 rounded" 
              />
              <input 
                type="text" 
                name="storeName" 
                value={formData.storeName} 
                onChange={handleChange} 
                placeholder="Store Name" 
                className="p-2 bg-black text-white border border-gray-300 rounded" />
              <input 
                type="text" 
                name="storeImageUrl" 
                value={formData.storeImageUrl} 
                onChange={handleChange} 
                placeholder="Store Image URL" 
                className="p-2 bg-black text-white border border-gray-300 rounded" />
              <input
               type="text" 
               name="storeUrl" 
               value={formData.storeUrl} 
               onChange={handleChange} 
               placeholder="Store URL" 
               className="p-2 bg-black text-white border border-gray-300 rounded" />
            </form>
            <div className="flex justify-between">
              <button
                className="bg-[#4e73df] hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div className='bg-gray-900 rounded-lg shadow-sm shadow-gray-400 p-4'>
          <h3 className="text-2xl  font-semibold mb-4">Product List</h3>
          <table className="min-w-full table-auto border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4">Product Name</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Tag</th>
                  <th className="py-2 px-4">Last Update</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
                  <tbody>
                    {paginatedProducts.map((product, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border ">{product.name}</td>
                        <td className="py-2 px-4 border ">{product.salePrice}</td>
                        <td className="py-2 px-4 border ">{product.tag}</td>
                        <td className="py-2 px-4 border ">{product.lastUpdate}</td>
                        <td className="py-2 px-4  ">
                          <button
                            className="bg-red-500 text-white py-1 px-2 rounded mr-2"
                            onClick={() => handleUpdateProduct(index)}
                          >
                            Update
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                            onClick={() => handleDeleteProduct(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>

          <div className="flex justify-between mt-4">
            <button
              className="bg-[#4e73df] hover:bg-blue-700 text-white py-1 px-2 rounded"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="bg-[#4e73df] hover:bg-blue-700 text-white py-1 px-2 rounded"
              onClick={() => setCurrentPage((prev) => (prev * itemsPerPage < products.length ? prev + 1 : prev))}
              disabled={currentPage * itemsPerPage >= products.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUploadPage;
