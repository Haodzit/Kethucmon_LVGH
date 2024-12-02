import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../data/characters";
import "./CharacterPage.css";

const CharacterPage = () => {
  const { id } = useParams();
  const character = characters.find((c) => c.id.toString() === id);

  if (!character) return <h2>Không tìm thấy nhân vật</h2>;

  return (
    <div
      className="character-page"
      style={{ backgroundImage: `url(${character.backgroundImage})` }} // Áp dụng hình nền
    >
      <div className="character-header">
        <img
          src={character.image}
          alt={character.name}
          className="character-img"
        />
        <div className="character-info">
          <h1>{character.name}</h1>
          <p>
            <strong>Nguyên tố:</strong> {character.element}
          </p>
          <p>
            <strong>Vũ khí:</strong> {character.weapon}
          </p>
          <p>
            <strong>Build:</strong> {character.build}
          </p>
        </div>
      </div>

      <div className="character-details">
        <h2>Thông tin chi tiết</h2>
        <p>
          <strong>Sinh nhật:</strong> {character.birthday}
        </p>
        <p>
          <strong>Cung mệnh:</strong> {character.constellation}
        </p>
        <p>
          <strong>Danh hiệu:</strong> {character.title}
        </p>
        <p>
          <strong>Vision:</strong> {character.vision}
        </p>
        <p>
          <strong>Khu vực:</strong> {character.region}
        </p>
        <p>
          <strong>Lồng tiếng:</strong>
        </p>
        <ul>
          <li>
            <strong>Tiếng Trung:</strong> {character.CV?.chinese}
          </li>
          <li>
            <strong>Tiếng Nhật:</strong> {character.CV?.japanese}
          </li>
          <li>
            <strong>Tiếng Anh:</strong> {character.CV?.english}
          </li>
          <li>
            <strong>Tiếng Hàn:</strong> {character.CV?.korean}
          </li>
        </ul>
        <p>
          <strong>Món ăn đặc biệt:</strong> {character.specialDish}
        </p>
        <p>
          <strong>Phiên bản phát hành:</strong> {character.version}
        </p>
      </div>

      <div className="character-talents">
        <h2>Tài năng</h2>
        <p>{character.talents}</p>
        {/* Nhúng video YouTube cho phần tài năng */}
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={character.talentsVideo}
            title="Talents Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="character-skills">
        <h2>Kỹ năng</h2>
        <p>{character.skills}</p>
        {/* Nhúng video YouTube cho phần kỹ năng */}
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={character.skillsVideo}
            title="Skills Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
