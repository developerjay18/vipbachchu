import React from 'react';
import { useRouter } from 'next/router';

interface BlogPostProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
}

const BlogDetailsPage: React.FC<BlogPostProps> = ({
  title,
  description,
  imageUrl,
  date,
  author,
}) => {
  const router = useRouter();
  const { id } = router.query;

  // You'll need to fetch blog data based on the ID from your database here.
  // For example:
  // const blogPost = await fetchBlogPostById(id); 

  // Assuming you have the blog post data, you can render it:
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex items-center mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-600">{date}</p>
          <p className="text-gray-600">By {author}</p>
        </div>
      </div>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default BlogDetailsPage;