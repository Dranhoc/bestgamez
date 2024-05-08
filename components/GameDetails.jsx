import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GameDetails(){

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const myKey = import.meta.env.VITE_API_KEY;


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
      <div className="detail__card">
        <div className="screenshots">
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight>
          {gameData.screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} alt={detailData.gameName + " screenshot"} />      
              ))}
          </Carousel>
        </div>
        <div className="gameDescription">
          <p>{detailData.gameDescription}</p>
          <div className="platforms__metascore">
            <div className="platforms">
                {gameData.platforms.map((platform, index) => (
                    <img key={index} src={`../assets/ico/${platform}.svg`} alt={platform} />    
                  ))}
            </div>
            <div className="metascore">
              <p>{gameData.metacritic}</p>
            </div>
          </div>
        </div>
      </div>
        
      
      
    </section>
      
    </>
  );
}

export default GameDetails;