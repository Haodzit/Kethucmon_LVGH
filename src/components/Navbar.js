// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin người dùng đã đăng nhập

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa thông tin người dùng khi đăng xuất
    window.location.reload(); // Tải lại trang sau khi đăng xuất
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-text">
            Character List
          </Link>
        </div>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/08/Genshin-Impact-Logo.png"
          alt="Genshin Impact Banner"
          className="navbar-banner"
        />
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/characters">Character List</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          {user ? (
            <>
              <li className="navbar-item">
                <div className="navbar-user-info">
                  <img
                    src={
                      user.avatar ||
                      "https://avatarfiles.alphacoders.com/297/thumb-1920-297897.png"
                    } // Hiển thị ảnh đại diện, nếu không có, dùng ảnh mặc định
                    alt="User Avatar"
                    className="user-avatar"
                  />
                  <span>Xin chào, {user.username}</span>
                </div>
              </li>
              <li className="navbar-item">
                <button onClick={handleLogout} className="logout-btn">
                  Đăng xuất
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
