import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  // Tạo lớp CSS động dựa trên tên hoặc đặc điểm của nhân vật
  const characterClass = `character-card character-${character.name.toLowerCase()}`;

  return (
    <div className={characterClass}>
      <Link to={`/character/${character.id}`}>
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <h3 className="character-name">{character.name}</h3>
        <p className="character-element">{character.element}</p>
        <p className="character-title">{character.title}</p>
      </Link>
    </div>
  );
};

export default CharacterCard;
