import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from 'react-avatar';
import Login from "../Login/Login.jsx"
import Register from "../Register/Register.jsx"

function Header() {

    const nombre = "nombre prueba"
    return (


        <Navbar collapseOnSelect sticky="top" expand='sm' bg="dark" className="shadow mb-5" data-bs-theme="dark">
            <Container fluid>
                <Avatar name={nombre} size="45" round={true} className="avatar mx-1" />
                <Navbar.Brand href="/" className="mx-1 navbar-brand">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav w-100"> {/* className="me-auto" ver */}
                        <Nav.Link href="/about" className="me-2 ">Nosotros</Nav.Link>
                        <Nav.Link href="/contact" className="me-auto">Contactanos</Nav.Link>

                        <Register className="registerButton"/>
                        <Login className="loginButton"/>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



        // <Navbar sticky="top" className="bg-dark shadow mb-5" data-bs-theme="dark">
        //     <Container fluid>
        //         <Nav.Link className="navbar-brand" href="/" >Home</Nav.Link>
        //         <Nav.Link href="/about" className="me-2 navbar-nav">Nosotros</Nav.Link>
        //         <Nav.Link href="/contact" className="me-auto navbar-nav">Contactanos</Nav.Link>

        //         <Register/>
        //         <Login />

        //         <Avatar name="a ver" size="45" round={true} className="avatar mx-1" />

        //     </Container>
        // </Navbar>

    );
}

export default Header;