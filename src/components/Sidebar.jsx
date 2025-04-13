import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">🎬 Reelify</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          {/* Add more navigation as needed */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;