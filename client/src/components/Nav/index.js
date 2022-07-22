import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav () {
    function shownav(){
    if (Auth.loggedIn()) {
        return (
            <header className="flex-row px-1">
                <h1>
                <Link to="/">
                <span role="img" aria-label="shopping bag">🛍️</span>
                Get Inspo
                </Link>
                </h1>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to = "/likes" >
                            My Loves
                            </Link>
                        </li>
                        <li className="mx-1">
                            <a href = "/" onClick={()=>{Auth.logout}}> Logout</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
    else {
        return (
            <header>
                <h1>
                <Link to="/">
                <span role="img" aria-label="shopping bag">🛍️</span>
                Get Inspo
                </Link>

                </h1>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to = "/login"> Login</Link>
                        </li>
                        <li className=" mx-1">
                            <Link to = "/signup"> SignUp</Link>
                        </li>

                    </ul>
                </nav>
            </header>
        )
}
}
        return (shownav())
}

export default Nav;