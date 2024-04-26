

const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";

function Api(){

  const [data,setData] = useState([]);
  const myKey = "key=13a14486a9a544b2b8adbff1d336d9ad";
  const games = () =>{
    useEffect( () => {
      axios.get(`https://api.rawg.io/api/games?${myKey}`)
        .then((response) => console.log(response.data));

    },[])
  }
}





export default Api;