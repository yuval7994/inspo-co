import React, { useState } from "react"

import Auth from "../../utils/auth"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../../utils/mutations"

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
        <div className="card">
          <div className="card-header">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name = "email"
                  type = "email"
                  id = "email"
                  value = {formState.email}
                  onChange={handleChange}
                  />
                  <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}/>
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
              {error && <div>Login failed</div>}
              </form>
            </div>
          </div>
        </div>
    
  );
};

export default Login;
