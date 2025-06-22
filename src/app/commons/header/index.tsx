"use client";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header">
        <div className="logo-wrapper">
          <img className="logo-image" src="/online-shop.png" alt="Logo" />
          <span className="store-name">Fake Store</span>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <div className="header-icons">
          <span>🔍</span>
          <span>❤️</span>
          <span>🛍️</span>
          <span>👤</span>
          <span>ENG ▼</span>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
            <ul>
              <li>🔍 Search</li>
              <li>❤️ Wishlist</li>
              <li>🛍️ Cart</li>
              <li>👤 Profile</li>
              <li>🌐 Language</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
