import { useState } from 'react';

function MainContent(){

  return (<main>
    <div className="fullCard">
      <div className="fullCard__video">
        <img src="./assets/img/fakevid.jpg" alt="fakevid" />
      </div>
      <div className="fullCard__platforms-metascore">
        <div className="platforms">
          <img src="./assets/ico/PC.svg" alt="PC" />
          <img src="./assets/ico/playstation.svg" alt="PS" />
          <img src="./assets/ico/xbox.svg" alt="xbox" />
        </div>
        <div className="metascore">
          <p>92</p>
        </div>
      </div>
      <div className="fullCard__Title">
        <h2>Hollow Knight</h2>
      </div>
      <div className="fullCard__likes">
        <img id='likes' src="./assets/ico/heart-like.svg" alt="like" />
        <p className="likesCounter">232</p>
      </div>
      <article className="fullCard__article">
        <div className="article__releaseDate">
          <h4>Release date :</h4>
          <p>30 Nov 2024</p>
        </div>
        <hr />
        <div className="article__genres">
          <h4>Genres :</h4>
          <div className="article__genres--genres">
            <p>Action</p>
            <p>RPG</p>
          </div>
        </div>
          <hr />
          <div className="article__chart">
          <h4>Chart :</h4>
          <div className="article__genres--chart">
            <p>#1 Top 2023</p>
          </div>
        </div>
      </article>
    </div>
  </main>
  )
}



export default MainContent;