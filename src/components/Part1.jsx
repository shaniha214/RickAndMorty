import React from "react";
export default function Part1({ characterData }) {
  return (
    <table className="leastPopularCharcterTable">
      <tr>
        <th>Character name</th>
        <th>Origin name</th>
        <th>Origin dimension</th>
        <th>Popularity</th>
      </tr>
      <tbody>
        <tr>
          <td>{characterData.characterName}</td>
          <td>{characterData.originName}</td>
          <td>{characterData.originDimension}</td>
          <td>{characterData.popularity}</td>
        </tr>
      </tbody>
    </table>
  );
}
