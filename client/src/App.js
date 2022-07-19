import React, { useEffect, useState } from 'react';

import "./App.css"

import Main from './components/Main';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [section, setSection] = useState("main")

  // const [githubData, setGithubData] = useState([]);
  // const [githubUser, setGithubUser] = useState('pictures');

  // const fetchData = () => {
  //   return fetch(`https://api.artic.edu/api/v1/artworks`)
  //   .then((response) => response.json())
  //   .then((data) => setGithubData(data));
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])


  return (
    
    <>
      <Header section={section} setSection={setSection} />
      <Nav/>
        <div className="App">
          {section === "main" && < Main />}

          {/* <input type="text" placeholder="Search for Art!" onChange={(e) => setGithubUser(e.target.value)} className="input_search" />
          <button onClick={fetchData} className="search_button">Search</button>

          <img src={`api/v1/artworks`} height="100" width="100" /> */}

        </div>
      <Footer />
    </>

    
  )
}

export default App;
