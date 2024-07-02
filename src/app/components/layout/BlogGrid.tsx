'use client';
import React from 'react';
import BlogCard from './BlogCard';

interface Blog {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface BlogGridProps {
  blogs: Blog[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-4 gap-4">
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
