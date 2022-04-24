import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialMediaLogin from '../../../Components/SocialMediaLogin';

const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let errorMessage;
    let loadingMessge;

    if (error) {
        errorMessage = error.message;
    }
    if (loading) {
        loadingMessge = <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    if (user) {
        navigate('/')
    }

    const handleCreateUser = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(email, password)
        console.log(email, password)

    }


    return (
        <div>
            <h1 className='text-center'>Sign <span className='text-danger'>Up</span></h1>

            <div className='w-50 mx-auto'>
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="tect" placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={(e) => SetEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <div className='text-center mb-2'>{loadingMessge}</div>
                    <p className='text-danger'>{errorMessage}</p>

                    <Button className='w-50 mx-auto d-block mb-2' variant="danger" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p>Already have an account? <Link className='text-decoration-none text-danger' to='/login'>Login here</Link></p>
                <SocialMediaLogin />
            </div>
        </div>
    );
};

export default Register;