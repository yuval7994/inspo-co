import React, { useState } from "react";
import "../../App.css";
import { Link } from 'react-router-dom';

function UserNav() {

    return (
        <>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to ='/logout' className="login-title">log out</Link>
                    </li>
                    <li>
                        <Link to ='/myloves' className="signup-title">my loves</Link>
                    </li>
                </ul> 
            </nav>
        </>
    )

}
export default UserNav;