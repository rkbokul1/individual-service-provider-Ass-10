import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='container mt-5 pt-3'>
            <h1 className='text-center'>Sign <span className='text-danger'>Up</span></h1>
            <div className='w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="tect" placeholder="Your Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='w-50 mx-auto d-block mb-4' variant="danger" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;