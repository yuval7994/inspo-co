import React from "react";
import SearchPhotos from '../../searchPhotos';
import Nav from '../../components/Nav/index';


const Home = () => {
    return (
    <div className="App">
      <div>
        <Nav />
      </div>

      <div className="container">
        <SearchPhotos />
      </div>
    </div>
    )
  };
  
  export default Home;
  