import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations'
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, {error}] = useMutation(ADD_USER);

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
console.log(userFormData);
    try {
      const { data } = await addUser ({ variables: { ...userFormData }})
   
console.log(data);

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      console.log(err)
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="d-flex justify-content-center mt-5"> {/* Add margin-top here */}
        <div className="col-12 col-md-6">
            <div className="card shadow-sm">
                <div className="card-body">
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                            Something went wrong with your signup!
                        </Alert>

                        <Form.Group className="mb-3">
                            <h1>Sign Up:</h1>
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={handleInputChange}
                                value={userFormData.username}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                                value={userFormData.email}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInputChange}
                                value={userFormData.password}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                            type="submit"
                            variant="primary"
                            className="btn-block"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
);
};


export default SignupForm;
