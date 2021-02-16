import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      Page not found. Goto <Link to="/dashboard">Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
