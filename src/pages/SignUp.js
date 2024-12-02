// src/pages/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const users = JSON.parse(localStorage.getItem("users")) || [];

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(""); // Thêm trường ảnh đại diện
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setError("Tên đăng nhập đã tồn tại.");
      return;
    }

    const newUser = { username, password, email, avatar }; // Lưu ảnh đại diện
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-input">
          <label>Tên đăng nhập</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="signup-input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="signup-input">
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="signup-input">
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="signup-input">
          <label>Ảnh đại diện (URL)</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="https://avatarfiles.alphacoders.com/297/thumb-1920-297897.png"
            className="input-field"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="signup-button">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default SignUp;
