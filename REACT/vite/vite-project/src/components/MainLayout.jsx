import React from 'react';
import { Link,Outlet } from 'react-router-dom'; // Import Link from react-router-dom
import './MainLayout.css'; // Ensure your CSS file is properly linked

const MainLayout = () => {
  return (
    <div>
      <h2>Welcome to MainLayout</h2>
      <nav>
        <ul className="aa">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  
  );
};

export default MainLayout;
