import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Responsive Websites',
      excerpt: 'Learn how to create websites that work seamlessly across all devices...',
      date: 'Feb 24, 2024',
      readTime: '5 min read',
      image: '/blog1.jpg',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Modern JavaScript Features',
      excerpt: 'Exploring the latest JavaScript features that make coding more efficient...',
      date: 'Feb 20, 2024',
      readTime: '4 min read',
      image: '/blog2.jpg',
      category: 'JavaScript'
    },
    {
      id: 3,
      title: 'React Best Practices',
      excerpt: 'Tips and tricks for writing clean and efficient React code...',
      date: 'Feb 15, 2024',
      readTime: '6 min read',
      image: '/blog3.jpg',
      category: 'React'
    }
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>My Blog</h1>
        <p>Thoughts, learnings, and insights about web development</p>
      </header>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-card-content">
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;