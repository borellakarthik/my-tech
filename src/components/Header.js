

import React, { useContext } from 'react';
import './HeaderStyle.css';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="My Tech Paradise" />
        <h1>My Tech Paradise</h1>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="header__profile">
        <img src="/profile.jpg" alt="Profile" className="header__profile-img" />
        <div className="header__profile-name">Tanya Sharma</div>
      </div>
      <div className="header__toggle">
      <button onClick={toggleTheme} className="header__theme-toggle">
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    </header>
  );
}
export default Header;