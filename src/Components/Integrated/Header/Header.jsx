import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from 'react-avatar';
import Login from "../Login/Login.jsx"
import Register from "../Register/Register.jsx"
import LogOut from "./LogOut/LogOut.jsx";


function Header() {

    const[hiddens, setHiddens] =useState("");    
    const[name, setName] =useState("");    
    const[logg,setLogg]=useState(localStorage.getItem("logged"));
    const[acto, setacto] =useState(true);    


    useEffect(() => {
        // const logg = localStorage.getItem("logged");
        // console.log(logg)

        if (logg=="true") {
            const lName=localStorage.getItem("loggedName");
            const lLName = localStorage.getItem("loggedLastName");
            setName (lLName+" " + lName);
        
            setHiddens(true);
            // setLogg(localStorage.getItem("logged"));
            acto?setHiddens(true):setHiddens(false);
            // setacto(false);
        console.log(acto)

        }
        else {
            setHiddens(false);
            // acto?setHiddens(false):setHiddens(true);
            // setacto(true);
            // console.log(acto)

        }

       },
        [acto]);


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

                        {/* {                        hiddens?setLogg(localStorage.getItem("logged")):<Register see={hiddens} acto={setacto} className="registerButton" />} */}
                        <Register see={hiddens} acto={setacto} className="registerButton" />
                        <Login see={hiddens} actoIN={setacto} className="loginButton" />
                        <LogOut see={hiddens} acto={setacto} className="logOutButton" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
}

export default Header;