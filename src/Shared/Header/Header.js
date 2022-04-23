import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CustomLink from '../../Home/CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Stack<span className='text-danger'>-Master</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;