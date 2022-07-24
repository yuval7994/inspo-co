import React, { useState } from "react"

import Auth from "../../utils/auth"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../../utils/mutations.js"


// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import "../../App.css";

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
      console.log('hi')
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <>

<Form onSubmit = {handleFormSubmit} className="login-form">
      <Form.Text className='login-form-title'>log in to view your faves ♡</Form.Text>

        <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="text" 
            required 
            isInvalid
            placeholder="email"
            name = "email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="password" 
            required 
            isInvalid
            placeholder="password"
            name = 'password'
            onChange={handleChange}
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
