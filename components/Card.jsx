

function Card({ gameName, backgroundImage, metacritic, suggestionsCount, releaseDate, genres, rating, platforms} ){
 
  return (
  <div className='fullCard__container'>
  <div className="fullCard">
      <div className="fullCard__image">
        <img src= { backgroundImage } alt={ gameName + ' picture' } />
      </div>
      <div className="fullCard__platforms-metascore">
        <div className="platforms">
        {platforms.map((platform, index) => (
          <img key={index} src={`./assets/ico/${platform}.svg`} alt={platform} />
              
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