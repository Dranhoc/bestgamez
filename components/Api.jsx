

const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";

function Api(){
  fetch(`https://api.rawg.io/api/games?${myKey}`)
  .then(response => response.json())
  .then(data => {
  
    for (const key in data) {
    
        console.log(key)
    }
  })
  .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));

}



export default Api;