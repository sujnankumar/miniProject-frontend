import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform border border-l-0 border-t-0 border-b-0 border-r-1 border-gray-600 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-blue-700">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col p-4">
        <Link to="/restaurant/dashboard" className="hover:bg-gray-700 px-3 py-3 rounded-md text-gray-300 font-bold active">
            Dashboard
        </Link>
        <a href="#" className="hover:bg-gray-700 px-3 py-3 rounded-md text-gray-300 font-bold">
          Orders
        </a>
        <a href="#" className="hover:bg-gray-700 px-3 py-3 rounded-md text-gray-300 font-bold">
          Menu Management
        </a>
        <a href="#" className="hover:bg-gray-700 px-3 py-3 rounded-md text-gray-300 font-bold">
          Reservations
        </a>
        <a href="#" className="hover:bg-gray-700 px-3 py-3 rounded-md text-gray-300 font-bold">
          Inventory
        </a>
        <a href="#" className="hover:bg-gray-700 px-3 py-3 rounded-md text-gray-300 font-bold">
          Report
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;