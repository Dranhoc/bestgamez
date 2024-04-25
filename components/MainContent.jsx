import { useState } from 'react';

function MainContent(){

  return (<main>
    <div className="fullCard">
      <div className="fullCard__video">
        <img src="./assets/img/fakevid.jpg" alt="fakevid" />
      </div>
      <div className="fullCard__platforms">
        <img src="./assets/ico/PC.svg" alt="PC" />
        <img src="./assets/ico/playstation.svg" alt="PS" />
        <img src="./assets/ico/xbox.svg" alt="xbox" />
      </div>
      <div className="fullCard__Title">
        <h2>Hollow Knight</h2>
      </div>
      <div className="fullCard__likes">
        <img src="./assets/ico/heart-like.svg" alt="like" />
        <p className="likesCounter">232</p>
      </div>
      <article className="fullCard__article">
        <div className="releaseDate">
          <h4>Release date :</h4>
          <p>30 Nov 2024</p>
        </div>
        <hr />
        <div className="genres">
          <h4>Genres</h4>
          <p>Action</p>
          <p>RPG</p>
        </div>
      </article>
    </div>
  </main>
  )
}



export default MainContent;