import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx"

function Api({platform, genres, ordering}) {
  const [gameData, setGameData] = useState([]);

  const myKey = import.meta.env.VITE_API_KEY

  // const platform = "&platforms=186";
  // const genres = "&genres=indie";
  // const ordering = "&ordering=-metacritic";


   useEffect(() => {
    axios.get(`https://api.rawg.io/api/games?${myKey}${platform}${genres}${ordering}`)
      .then((res) => {
        const newData = [];
        res.data.results.forEach(data => {
              newData.push({
              gameId: data.id,
              gameName: data.name,
              metacritic: data.metacritic,
              backgroundImage: data.background_image,
              suggestionsCount: data.suggestions_count,
              releaseDate: data.released,
              genres: data.genres.map(genre => genre.name + " "),
              platforms: data.parent_platforms.map(platform => platform.platform.name),
              screenshots: data.short_screenshots.map(screenshot => screenshot.image)
              });
            
          });
        setGameData(newData);
        });
    }, [platform, genres, ordering]);

  return (
    
    <section className="main__container">
      {gameData.map((data, index) => (
        
        <Card
          key={index}
          gameId={data.gameId}
          gameName={data.gameName}
          metacritic={data.metacritic === null ? "NA" : data.metacritic}
          backgroundImage={data.backgroundImage}
          suggestionsCount={data.suggestionsCount}
          releaseDate={data.releaseDate}
          genres={data.genres}
          rating={data.rating}
          platforms={data.platforms} 
          screenshots={data.screenshots}
        />
      ))}
    </section>

  );
}

export default Api;
