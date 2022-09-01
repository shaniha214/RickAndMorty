import logo from "./logo.svg";
import "./App.css";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import React, { useState, useEffect } from "react";
const baseUrl = "https://rickandmortyapi.com/api/character";
const c137Characters = baseUrl + "/?origin=Earth%20C-137";
const charactersForBarChart = [
  "Rick Sanchez",
  "Summer Smith",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
];
function App() {
  const [mostUnpopularCharacter, setMostUnpopularCharacter] = useState({
    characterName: "",
    originName: "",
    originDimension: "",
    popularity: "",
  });
  const [barChartData, setBarChartData] = useState([
    { name: "", episodes: "" },
  ]);

  useEffect(() => {
    fetch(c137Characters)
      .then((res) => res.json())
      .then((resJson) => {
        const characters = resJson.results;
        let leastPopular = characters[0];
        let minimumEpisodeCount = leastPopular.episode.length;

        characters.forEach((character) => {
          let currCharEpisodeCount = character.episode.length;
          if (
            character.episode.length < minimumEpisodeCount &&
            character.origin.name == "Earth (C-137)"
          ) {
            minimumEpisodeCount = currCharEpisodeCount;
            leastPopular = character;
          }
        });
        setMostUnpopularCharacter({
          characterName: leastPopular.name,
          originName: leastPopular.origin.name,
          originDimension: leastPopular.location.name,
          popularity: leastPopular.episode.length,
        });
      });
  }, []);

  useEffect(() => {
    const result = [{ name: "", episodes: "" }];
    const promiseArray = [];
    charactersForBarChart.forEach((name) => {
      var promise = fetch(encodeURI(baseUrl + "/?name=" + name))
        .then((res) => res.json())
        .then((resJson) => {
          return {
            name: name,
            episodes: resJson.results[0].episode.length.toString(),
          };
        });
      promiseArray.push(promise);
    });
    Promise.all(promiseArray).then((result) => {
      console.log("res" + result);
      setBarChartData(result);
    });
  }, []);

  return (
    <div className="App">
      <Part1 characterData={mostUnpopularCharacter} />
      <Part2 barChartData={barChartData} />
    </div>
  );
}

export default App;
