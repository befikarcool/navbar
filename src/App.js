import React ,{useState} from "react";
import Nav from './component/Nav';
import Banner from './component/Banner';
import Cat from './component/Cat'
import Article from './component/Article';
import './scss/main.scss'
function App() {

  


  return (
    <>
    <Nav/>
    <Cat/>
    <Article/>
    <Banner/>
    </>
  );
}

export default App;
