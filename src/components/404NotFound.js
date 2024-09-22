// src/components/404NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './404NotFound.css'; // Optional for custom styles

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
