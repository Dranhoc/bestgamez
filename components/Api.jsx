import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx"

function Api() {
  const [gameData, setGameData] = useState([]);

  const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";
  let param1 = "";
  let param2 = "";
  let param3 = "";

  // pour tester les param
  param1 = "&page=2"

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games?${myKey}${param1}${param2}${param3}`)
      .then((res) => {
        const newData = [];
        res.data.results.forEach(data => {
          newData.push({
            gameName: data.name,
            metacritic: data.metacritic,
            backgroundImage: data.background_image,
            suggestionsCount: data.suggestions_count,
            releaseDate: data.released,
            rating:data.rating*4 + "/20",
            genres: data.genres.map(genre => genre.name + " "),
            platforms: data.parent_platforms.map(platform => platform.platform.name)
          });
          setGameData(newData);
         
          
        });
      });
    }, []);
 

  return (
    
    <section className="main__container">
      {gameData.map((data, index) => (
        <Card
          key={index}
          gameName={data.gameName}
          metacritic={data.metacritic === null ? "NA" : data.metacritic}
          backgroundImage={data.backgroundImage}
          suggestionsCount={data.suggestionsCount}
          releaseDate={data.releaseDate}
          genres={data.genres}
          rating={data.rating}
          platforms={data.platforms} 
        />
      ))}
    </section>
  );
}

export default Api;
