// src/pages/About.js
import React from "react";
import "./About.css"; // Đảm bảo bạn đã tạo file About.css nếu chưa có

const About = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>
        This is a character build management app for Genshin Impact. You can
        explore different characters, their builds, talents, and more!
      </p>

      {/* Phần thông tin liên hệ */}
      <div className="contact-info">
        <h3>Thông tin liên hệ</h3>
        <p>
          Email: <a href="mailto:your-email@gmail.com">haole96711@gmail.com</a>
        </p>
        <div className="social-icons">
          {/* Các logo mạng xã hội */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png"
              alt="Twitter"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
