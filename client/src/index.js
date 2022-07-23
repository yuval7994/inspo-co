import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// import App from "./App"
import Login from '../src/pages/Login'
import Signup from '../src/pages/SignUp'
import Home from '../src/pages/Home'
import Layout from '../src/pages/Layout/Layout.js'
import LoggedIn from '../src/pages/LoggedIn/LoggedIn.js'
// import MyLoves from '../src/pages/Likes'
import NoMatch from '../src/pages/NoMatch'

// *** MyLoves import and route commented out for functionality sake. when content 
// *** is in the index.js for the loves, uncomment and it should work given 
// *** that the function and export default had not been changed

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="loggedin" element={<LoggedIn />} />
                    <Route path="logout" element={<Home />} />
                    {/* <Route path="myloves" element={<MyLoves />} /> */}
                    <Route path="nomatch" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
)
