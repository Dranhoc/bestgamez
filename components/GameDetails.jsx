import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";

function GameDetails(){

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";

  const location = useLocation();
  const dataString = new URLSearchParams(location.search).get("data");
  const gameData = dataString ? JSON.parse(atob(dataString)) : {};
 

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games/${id}?${myKey}`)
      .then((res) => {
        const data = res.data;
        setDetailData({
          gameId: data.id,
          gameName: data.name,
          gameDescription: data.description_raw.split('Español')[0].trim(),
        });
      })
  }, [id]);
  
  return(
    <>
      <h1>{detailData.gameName}, ID : {detailData.gameId}</h1>
    <section className="gameDetails">
      <img src={gameData.backgroundImage} alt={detailData.gameName} />
      <p>{detailData.gameDescription}</p>
      <div className="platforms">
        {gameData.platforms.map((platform, index) => (
            <img key={index} src={`./assets/ico/${platform}.svg`} alt={platform} />
                
          ))}
      </div>
      <p>Game Name: {gameData.gameName}</p>
      <p>Metacritic: {gameData.metacritic}</p>
    </section>
      
    </>
  );
}

export default GameDetails;