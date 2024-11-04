// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/register'];

  return (
    <div className="App">
      {/* Conditionally render the Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
