import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      Page not found. Go <Link to='/search'>back</Link>
    </div>
  );
};

export default NotFoundPage;
