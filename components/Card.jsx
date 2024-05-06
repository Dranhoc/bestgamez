

function Card({ gameName, backgroundImage, metacritic, suggestionsCount, releaseDate, genres, rating} ){
 
  return (
  <div className='fullCard__container'>
  <div className="fullCard">
      <div className="fullCard__image">
        <img src= { backgroundImage } alt={ gameName + ' picture' } />
      </div>
      <div className="fullCard__platforms-metascore">
        <div className="platforms">
          <img src="./assets/ico/PC.svg" alt="PC" />
          <img src="./assets/ico/playstation.svg" alt="PS" />
          <img src="./assets/ico/xbox.svg" alt="xbox" />
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
          <img id='likes' src="./assets/ico/heart-like.svg" alt="like" />
          <p className="likesCounter">{ suggestionsCount }</p>
        </div>
        <a href="#" className="viewMore">View more</a>
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
          <h4>BG Rating :</h4>
          <div className="article__genres--chart">
            <p>{ rating }</p>
          </div>
        </div>
      </article>
  </div>
  </div>

  )
}

export default Card;