import React from "react";
import UserSearchPhotos from '../../userSearchPhotos';
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
                    <UserSearchPhotos />
                </div>
            </div>
        </>
    )
};
  
  export default LoggedIn;