// src/components/Sidebar.js

import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2>My Projects</h2>
        <div className="sidebar__actions">
          <button className="sidebar__action-btn">Add Activity</button>
          <button className="sidebar__action-btn">Upload CV</button>
        </div>
        <input
          type="text"
          className="sidebar__search"
          placeholder="Search project..."
        />
      </div>
      
      <div className="sidebar__projects">
        <h3>Type 1 Items</h3>
        <div className="sidebar__project">
          <p>ABC-XYZ-000123</p>
          <h4>Project Name 1 Goes Here</h4>
          <p>Total Hours: 340 Hours</p>
          <p className="sidebar__project-status approved">Approved</p>
        </div>
        <div className="sidebar__project">
          <p>ABC-XYZ-000124</p>
          <h4>Project Name 2</h4>
          <p>Total Hours: 168 Hours</p>
          <p className="sidebar__project-status in-progress">In Progress</p>
        </div>
        {/* Add more project items as necessary */}
      </div>
      
      <div className="sidebar__footer">
        <button className="sidebar__footer-btn">Type 2 Items</button>
      </div>
    </aside>
  );
}

export default Sidebar;
