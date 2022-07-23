import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Login from '../src/pages/Login'
import Signup from '../src/pages/SignUp'

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
        <BrowserRouter>
          {/* <Link to='/login'>Login</Link> */}
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />

                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)
