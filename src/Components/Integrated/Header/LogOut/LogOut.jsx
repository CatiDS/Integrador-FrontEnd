import React from 'react'
import { useNavigate } from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";

function LogOut(props) {

    const navigate = useNavigate();

    const handleOut = (e) => {          //Borra los items que correspondan a la sesion del usuario
        e.preventDefault();
        e.stopPropagation();
        sessionStorage.removeItem("token");
        localStorage.removeItem("loggedName");
        localStorage.removeItem("loggedLastName");
        localStorage.removeItem("loggedRol");
        localStorage.setItem("logged", false);
        navigate("/");
        props.out(false);               // cambia el estado de logg para disparar el useEffect

    };

    return (
        <>
            <ButtonToolbar className="p-1 my-1 mx-2 btn btn-outline-light" type="button" onClick={handleOut}>Salir</ButtonToolbar>
        </>

    )

}
export default LogOut
