import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style= {{backgroundColor: "#efefef", width: "300px"}}>
      <Link to="/dashboard">
        <div style={{padding: "1rem", borderBottom: "2px solid #999"}}>Dashboard</div>
      </Link>
      <Link to="/product">
        <div style={{padding: "1rem", borderBottom: "2px solid #999"}}>Product</div>
      </Link>
    </div>
  );
};

export default Sidebar;