import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from 'react-avatar';
import Login from "../Login/Login.jsx"
import Register from "../Register/Register.jsx"
import LogOut from "./LogOut/LogOut.jsx";


function Header() {

    const [name, setName] = useState("");
    const [logg, setLogg] = useState(localStorage.getItem("logged"));
    const [lName, setLName] = useState(localStorage.getItem("loggedName"));
    const [lLName, setLLName] = useState(localStorage.getItem("loggedLastName"));


    useEffect(() => {
        setLName(localStorage.getItem("loggedName"));
        setLLName(localStorage.getItem("loggedLastName")); 
        setLogg(localStorage.getItem("logged"));             //Setea el estado de logg para visualización
        setName(lLName + " " + lName);                      //Setea el nombre para el avatar
    },
        [logg]);


    return (
        <Navbar collapseOnSelect sticky="top" expand='sm' bg="dark" className="shadow mb-5" data-bs-theme="dark">
            <Container fluid>
                {logg == "true" &&
                    <Avatar name={name} size="45" round={true} className="avatar ms-0 me-3" />
                }
                <Navbar.Brand href="/" className="mx-1 navbar-brand">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav w-100"> {/* className="me-auto" ver */}
                        {logg == "true" &&
                            <Nav.Link href="/panel" className="me-2">Panel</Nav.Link>
                        }
                        <Nav.Link href="/about" className="me-2 ">Nosotros</Nav.Link>
                        <Nav.Link href="/contact" className="me-auto">Contactanos</Nav.Link>


                        {logg == "false" &&
                            <Login in={setLogg} className="loginButton" />
                        }
                        {/* onClick={handleCancel} */}
                        {logg == "false" &&
                            <Register className="registerButton" />
                        }
                        {logg == "true" &&
                            <LogOut out={setLogg} className="logOutButton" />
                        }



                        {/* {                        hiddens?setLogg(localStorage.getItem("logged")):<Register see={hiddens} acto={setacto} className="registerButton" />} */}

                        {/* 
                        <Register see={hiddens} acto={setacto} className="registerButton" />
                        <Login see={hiddens} actoIN={setacto} className="loginButton" />
                        <LogOut see={hiddens} acto={setacto} className="logOutButton" />
                         */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
}

export default Header;