import React, { useState } from "react"

// import Auth from "../../utils/auth"
// import { useMutation } from "@apollo/client"
// import { LOGIN } from "../../utils/mutations"

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };

//   return (
//         <div className="card">
//           <div className="card-header">
//             <div className="card-body">
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name = "email"
//                   type = "email"
//                   id = "email"
//                   value = {formState.email}
//                   onChange={handleChange}
//                   />
//                   <input
//                 className="form-input"
//                 placeholder="******"
//                 name="password"
//                 type="password"
//                 id="password"
//                 value={formState.password}
//                 onChange={handleChange}/>
//               <button className="btn d-block w-100" type="submit">
//                 Submit
//               </button>
//               {error && <div>Login failed</div>}
//               </form>
//             </div>
//           </div>
//         </div>
    
//   );
// };

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import LoggedIn from '../LoggedIn/LoggedIn'
import "../../App.css";

function Login() {
  return (
    <>

    <Form className="login-form">
      <Form.Text className='login-form-title'>log in to view your faves ♡</Form.Text>

        <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="text" 
            required 
            isInvalid
            placeholder="username"
          />
        </Form.Group>

        <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="password" 
            required 
            isInvalid
            placeholder="password"
          />
        </Form.Group>

        <Button class="btn" variant="outline-secondary" id="button-addon2" type="submit" href='/loggedin'>
          log in
        </Button>

    </Form>
    </>
  );
}
export default Login;
