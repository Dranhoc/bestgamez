import { useState } from 'react'
const myKey = "13a14486a9a544b2b8adbff1d336d9ad";

function loadAPI(){
  fetch("https://api.rawg.io/api/games")
  .then(response => response.json())
  .then(data => {
  
    for (const key in data) {
    
        // const option = document.createElement('option');
        // option.value = data;
        // option.text = data[key];
        console.log(data)

        // selectElement.appendChild(option);
    }
  })
  .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));

}
function App() {

  return <div><h1>SALUT AURELIANE COMMENT CA VA ?</h1></div>

}
export default App
