import React from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock data - replace with your actual blog posts data
  const blogPosts = {
    'post-1': {
      title: 'Getting Started with React',
      content: 'Full blog post content here...',
      date: 'Feb 24, 2024',
      image: '/blog1.jpg',
      tags: ['React', 'Web Development']
    }
    // Add more blog posts
  };

  const post = blogPosts[slug];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <div className="blog-post-meta">
        <span>{post.date}</span>
        <div className="blog-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      {post.image && (
        <div className="blog-post-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}
      <div className="blog-post-content">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;