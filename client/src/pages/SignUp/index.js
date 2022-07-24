import React, { useState } from "react"
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Form, Button } from 'react-bootstrap'
import "../../App.css";

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '', username: ''});
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log('hi')
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
    <Form onSubmit={handleFormSubmit} className="sign-up-form">
      <Form.Text className='signup-form-title'>sign up to save your favorite pics ♡</Form.Text>

      <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="email" 
            required 
            isInvalid 
            placeholder="email"
            name = "email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="text" 
            required 
            isInvalid
            placeholder="username"
            name = "username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group hasValidation>
          <Form.Control className="form-input" 
            type="password" 
            required 
            isInvalid
            placeholder="password"
            name = "password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button class="btn" variant="outline-secondary" id="button-addon2" type="submit">
          sign up
        </Button>
    </Form>

    </>
  );
}
export default Signup;
