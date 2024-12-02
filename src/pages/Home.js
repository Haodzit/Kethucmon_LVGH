import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const images = [
    "https://assetsio.gnwcdn.com/Genshin-Impact-4.0-release-date%2C-4.0-Banner-and-event-details-cover.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    "https://upload-os-bbs.hoyolab.com/upload/2023/09/16/8009863/78ec386a915a26d968f868ac7d798059_2434636851080229845.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
    "https://assetsio.gnwcdn.com/Genshin-Impact-4.2-release-date%2C-4.2-Banner-and-event-details-cover.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
  ];

  // Hàm để điều hướng đến trang danh sách nhân vật
  const goToCharacterList = () => {
    navigate("/characters"); // Điều hướng đến /characters
  };

  return (
    <div className="home-container">
      <h2>Chào mừng đến với Trang Chủ</h2>
      <div className="image-slider">
        {images.concat(images).map((src, index) => (
          <div key={index} className="image-slide">
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>

      {/* Nút nhấn để điều hướng đến trang danh sách nhân vật */}
      <button className="next-page-btn" onClick={goToCharacterList}>
        Xem Danh Sách Nhân Vật
      </button>
    </div>
  );
};

export default Home;
