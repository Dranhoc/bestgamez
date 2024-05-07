import Api from './Api.jsx';
import Header from './Header.jsx';
import Filters from './Filters.jsx';
import { BrowserRouter as Router } from "react-router-dom"





function App() {

  return <>
  <Router>
    <Header />
    <h1>New and Trending</h1>
    <Filters/>
    
  </Router>
 
  </>
  
};
export default App;
