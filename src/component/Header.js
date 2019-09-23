import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <Navbar bg="light" className="mb-2">
            <Navbar.Brand href="#home">
                <img
                    src="/alien.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Alien logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/" activeClassName="is-active">Back to index</NavLink>
            </Nav>
            <NavLink to="/posts" activeClassName="is-active">
                <Button variant="primary">New Post</Button>
            </NavLink>
            <Button variant="danger">Delete</Button>
        </Navbar>
    </header>
);

export default Header