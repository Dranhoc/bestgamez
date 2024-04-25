import { useState } from 'react';
import Api from './Api.jsx';
import MainContent from 'MainContent.jsx';
import Header from 'Header.jsx';

Api()

function App() {

  return <>
    <Header />
    <MainContent />
  </>

}
export default App
