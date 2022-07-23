import React from "react";
import SearchPhotos from '../../searchPhotos.js';
import Home from '../Home'
import UserNav from "../../components/Nav/usernav.js";


function LoggedIn() {
    return (
        <>
            <div className="App">
                <div>
                    <UserNav />
                </div>

                <div className="container">
                    <SearchPhotos />
                </div>
            </div>
        </>
    )
};
  
  export default LoggedIn;