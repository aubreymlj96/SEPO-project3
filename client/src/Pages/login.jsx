import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error, data}] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value, 
        });
    };

    const handleFormSub = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: {...formState},
            });
            auth.login(data.login.token);
        } catch(err) {
            console.error(err, 'Something went wrong when trying to login!')
        }
        setFormState({
            email: '',
            password: '',
          });
    };

    return (
      <main className="d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6">
              <div className="card shadow-sm">
                  <div className="card-body">
                      {data ? (
                          <p className="text-success">
                              You're logged in! You may now head{' '}
                              <Link to="/" className="text-decoration-none">back to the homepage.</Link>
                          </p>
                      ) : (
                        
                          <form onSubmit={handleFormSub}>
                            <h1>Log In:</h1>
                              <div className="mb-3">
                                  <input
                                      className="form-control"
                                      placeholder="Email"
                                      name="email"
                                      type="email"
                                      value={formState.email}
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                              <div className="mb-3">
                                  <input
                                      className="form-control"
                                      placeholder="Password"
                                      name="password"
                                      type="password"
                                      value={formState.password}
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                              <button
                                  className="btn btn-primary btn-block"
                                  style={{ cursor: 'pointer' }}
                                  type="submit"
                              >
                                  Submit
                              </button>
                              <p className="mt-3 text-center">
                                  Don't have an account? <Link to="/Sign up" className="text-decoration-none">Sign up here</Link>
                              </p>
                          </form>
                      )}

                      {error && (
                          <div className="my-3 p-3 bg-danger text-white">
                              {error.message}
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </main>
  );
};

export default Login;