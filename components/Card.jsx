import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ gameId, gameName, backgroundImage, metacritic, suggestionsCount, releaseDate, genres, platforms, screenshots }) {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
  const dataString = btoa(JSON.stringify({
      gameId,
      gameName,
      backgroundImage,
      metacritic,
      suggestionsCount,
      releaseDate,
      genres,
      platforms,
      screenshots
    }));
    navigate(`/game/${gameId}?data=${dataString}`);
  };


  return (
  
  <div className='fullCard__container'>
  <div className="fullCard">
      <div className="fullCard__image">
        <img src= { backgroundImage } alt={ gameName + ' picture' } />
      </div>
      <div className="fullCard__platforms-metascore">
        <div className="platforms">
        {platforms.map((platform, index) => (
          <img key={index} src={`/assets/ico/${platform}.svg`} alt={platform} />
              
        ))}
        </div>
        <div className="metascore">
          <p>{ metacritic }</p>
        </div>
      </div>
      <div className="fullCard__Title">
        <h2>{ gameName }</h2>
      </div>
      <div className="fullCard__likes-viewMore">
        <div className="fullCard__likes">
          <img id='likes' src="/assets/ico/heart-like.svg" alt="like" />
          <p className="likesCounter">{ suggestionsCount }</p>
        </div>
        <a href="#" className="viewMore" onClick={handleViewMoreClick}>View more</a>
      </div>
      <article className="fullCard__article">
        <div className="article__releaseDate">
          <h4>Release date :</h4>
          <p>{ releaseDate }</p>
          
        </div>
        <hr />
        <div className="article__genres">
          <h4>Genres :</h4>
          <div className="article__genres--genres">
            <p>{ genres }</p>
          </div>
        </div>
          <hr />
          <div className="article__chart">
          <h4>Game ID :</h4>
          <div className="article__genres--chart">
            <p>{ gameId }</p>
          </div>
        </div>
      </article>
  </div>
  </div>
  

  )
}

export default Card;