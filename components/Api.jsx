import axios from "axios";
import React, {useEffect,useState} from 'react';
import Card from "./Card.jsx"

function Api(){
 
const [gameName,setGameName] = useState ()
   const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";
     useEffect(() => {
   axios.get(`https://api.rawg.io/api/games?${myKey}&page=1`)
   .then((res) => console.log(res.data.results[0]));
 
     },[]);
 

  return (<>
  <h1></h1>
  <Card />
  </>
  );
  };

export default Api;