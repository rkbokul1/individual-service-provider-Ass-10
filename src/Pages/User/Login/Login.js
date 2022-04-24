import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialMediaLogin from '../../../Components/SocialMediaLogin';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let errorMessage;
    if(error){
        errorMessage = error.message;
    }
    if(user){
        navigate('/');
    }

    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <h1 className='text-center'> Please <span className='text-danger'>Login</span></h1>

            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={(e) =>setEmail(e.target.value) } type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <p className='text-danger mt-2'>{errorMessage}</p>

                    <Button variant="danger" type="submit">
                        Log in
                    </Button>
                </Form>

                <p>New to Stack-Master? <Link className='text-decoration-none text-danger' to='/signup'>Create an Account</Link></p>
                <SocialMediaLogin/>
            </div>
        </div>
    );
};

export default Login;