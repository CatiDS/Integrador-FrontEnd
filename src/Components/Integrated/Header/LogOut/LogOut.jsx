// import "./LogOut.css"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";

function LogOut() {

    const navigate = useNavigate();
    var hiddens = false;

    const handleOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // hiddens= false;
        sessionStorage.removeItem("token");
        localStorage.removeItem("loggedName");
        localStorage.removeItem("loggedLastName");
        localStorage.removeItem("loggedRol");
        localStorage.setItem("logged", false);
        navigate("/");
    };

    return (
        <>
            <ButtonToolbar hidden={hiddens} className="p-1 my-1 mx-2 btn btn-outline-light" type="button" onClick={handleOut}>Salir</ButtonToolbar>
        </>

    )

}
export default LogOut
