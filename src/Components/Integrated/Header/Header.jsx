import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from 'react-avatar';
import Login from "../Login/Login.jsx"
import Register from "../Register/Register.jsx"
import LogOut from "./LogOut/LogOut.jsx";


function Header() {

    var name = " ";
        const logg = localStorage.getItem("logged");
    
        if (logg) {
            const lName=localStorage.getItem("loggedName");
            const lLName = localStorage.getItem("loggedLastName");
            name = (lLName+" " + lName);
        }


    return (
        <Navbar collapseOnSelect sticky="top" expand='sm' bg="dark" className="shadow mb-5" data-bs-theme="dark">
            <Container fluid>
                <Avatar name={name} size="45" round={true} className="avatar mx-1" />
                <Navbar.Brand href="/" className="mx-1 navbar-brand">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav w-100"> {/* className="me-auto" ver */}
                        <Nav.Link href="/about" className="me-2 ">Nosotros</Nav.Link>
                        <Nav.Link href="/contact" className="me-auto">Contactanos</Nav.Link>

                        <Register className="registerButton" />
                        <Login className="loginButton" />
                        <LogOut className="loginButton" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
}

export default Header;