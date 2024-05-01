import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx"

function Api() {
  const [gameData, setGameData] = useState([]);

  const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games?${myKey}&page=2`)
      .then((res) => {
        const newData = [];
        res.data.results.forEach(data => {
          newData.push({
            gameName: data.name,
            metacritic: data.metacritic,
            backgroundImage: data.background_image,
            suggestionsCount: data.suggestions_count
          });
        });
        setGameData(newData);
      });
  }, []);

  return (
    <>
      {gameData.map((data, index) => (
        <Card
          key={index}
          gameName={data.gameName}
          metacritic={data.metacritic}
          backgroundImage={data.backgroundImage}
          suggestionsCount={data.suggestionsCount}
        />
      ))}
    </>
  );
}

export default Api;
