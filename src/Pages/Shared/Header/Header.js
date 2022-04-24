import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';
import CustomLink from '../../Home/CustomLink/CustomLink';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar className='sticky-top' sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Stack<span className='text-danger'>-Master</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={logOut} as={Link} to="/">Signout{
                                        user && <p>{user.email.slice(0, 5)}</p>
                                    }
                                    </Nav.Link>
                                    :
                                    <div className=' d-lg-flex '>
                                        <Nav.Link as={CustomLink} to="/signup">Signup</Nav.Link>
                                        <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                                    </div>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;