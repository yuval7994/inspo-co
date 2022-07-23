// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// export function Nav () {
//     function shownav() {
//     if (Auth.loggedIn()) {
//         return (
//             <header className="flex-row px-1">
//                 <h1>
//                 <Link to="/">
//                 <span role="img" aria-label="shopping bag">🛍️</span>
//                 Get Inspo
//                 </Link>
//                 </h1>
//                 <nav>
//                     <ul className="flex-row">
//                         <li className="mx-1">
//                             <Link to = "/likes" >
//                             My Loves
//                             </Link>
//                         </li>
//                         <li className="mx-1">
//                             {/* <a href = "/" onClick={()=>{Auth.logout}}> Logout</a> */}
//                         </li>
//                     </ul>
//                 </nav>
//             </header>
//         )
//     }
//     else {
//         return (
//             <header>
//                 <h1>
//                 <Link to="/">
//                 <span role="img" aria-label="shopping bag">🛍️</span>
//                 Get Inspo
//                 </Link>

//                 </h1>
//                 <nav>
//                     <ul className="flex-row">
//                         <li className="mx-1">
//                             <Link to = "/login"> Login</Link>
//                         </li>
//                         <li className=" mx-1">
//                             <Link to = "/signup"> SignUp</Link>
//                         </li>

//                     </ul>
//                 </nav>
//             </header>
//         )
// }
// }
//     return (shownav())
// }

// export default Nav;

import React, { useState } from "react";
import "../../App.css";
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <>
            <nav className="nav-bar">
                <ul>
                    <li><Link to ='/login' className="login-title">log in</Link></li>
                    <li><Link to ='/signup' className="signup-title">sign up</Link></li>
                </ul> 
            </nav>
        </>
    )

}
export default Nav;


// For modals, paste this at the top of the code

    // import Button from "react-bootstrap/Button";
    // import Modal from "react-bootstrap/Modal";

    // import InputGroup from "react-bootstrap/InputGroup";
    // import Form from "react-bootstrap/Form";

// For modals, comment out the interior of the function nav and paste this code, uncommented, back in

    // // login variables
    //   const [show, setShow] = useState(false);
    //   const handleQuit = () => setShow(false);
    //         // this says handle show is 
    //         // not read but if commented 
    //         // it out it breaks the app
    //   const handleShow = () => setShow(true);

    // // sign up variables
    //   const [showSignUp, setSignUpShow] = useState(false);
    //   const handleSignUpQuit = () => setSignUpShow(false);
    //   const handleSignUpShow = () => setSignUpShow(true);

    //   return (
    //     <>
    //     {/* navigation */}
    //       <nav className="nav-bar">
    //         <ul>
    //           <button onClick={() => handleShow(true)}>login</button>
    //           <button onClick={() => handleSignUpShow(true)}>sign up</button>
    //         </ul>
    //       </nav>

    //     {/* login modal */}
    //       <Modal show={show} onHide={handleQuit} className="log-in">
    //         <Modal.Header>
    //           <Modal.Title>login</Modal.Title>
    //         </Modal.Header>

    //         <Modal.Body>
    //         <InputGroup className="mb-2">
    //             <Form.Control
    //             type="text"
    //             placeholder="your email"
    //             name="email"
    //             required
    //             />
    //           </InputGroup>
    //           <InputGroup className="mb-2">
    //             <Form.Control
    //             type="text"
    //             placeholder="your username"
    //             name="username"
    //             required
    //             />
    //           </InputGroup>
    //           <InputGroup className="mb-2">
    //             <Form.Control 
    //             type="text"
    //             placeholder="your password"
    //             name="password"
    //             required 
    //             />
    //           </InputGroup>
    //         </Modal.Body>

    //         <Modal.Footer>
    //           <Button onClick={handleQuit}>
    //             quit
    //           </Button>
    //           <Button onClick={handleQuit}>
    //             log in!
    //           </Button>
    //         </Modal.Footer>
    //       </Modal>

    //       {/* signup modal */}
    //       <Modal show={showSignUp} onHide={handleSignUpQuit} className="sign-up">
    //         <Modal.Header>
    //           <Modal.Title>sign up</Modal.Title>
    //         </Modal.Header>

    //         <Modal.Body>
    //           <InputGroup className="mb-2">
    //             <Form.Control 
    //             type="text"
    //             placeholder="your username"
    //             name="username"
    //             required 
    //             />
    //           </InputGroup>
    //           <InputGroup className="mb-2">
    //             <Form.Control 
    //             type="text"
    //             placeholder="your password"
    //             name="password"
    //             required
    //             />
    //           </InputGroup>
    //         </Modal.Body>

    //         <Modal.Footer>
    //           <Button onClick={handleSignUpQuit}>
    //             quit
    //           </Button>
    //           <Button onClick={handleSignUpQuit}>
    //             sign up!
    //           </Button>
    //         </Modal.Footer>
    //       </Modal>

    //     </>
    //   );
    // }