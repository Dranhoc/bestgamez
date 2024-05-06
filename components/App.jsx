// import React, {useEffect} from 'react';
import Api from './Api.jsx';
import Header from './Header.jsx';
import Filters from './Filters.jsx';
// import MainContent from './MainContent.jsx';
// import Card from './Card.jsx'




function App() {

  return <>
    <Header />
    <h1>New and Trending</h1>
    <Filters/>
    <Api/>
 
  </>
  
};
export default App;
