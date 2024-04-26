import axios from 'axios'
import React, {useEffect,useState} from 'react';
import Api from './Api.jsx';
import Card from './Card.jsx'


function MainContent(){


  return (<li>
    <Card />
  </li>
  )
}



export default MainContent;