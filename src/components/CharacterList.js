// src/components/CharacterList.js
import React from "react";
import { characters } from "../data/characters";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css"; // CSS cho danh sách

const CharacterList = () => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
