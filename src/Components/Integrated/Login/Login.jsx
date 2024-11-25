import "./Login.css"
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { ButtonToolbar, FormLabel } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { jwtDecode } from "jwt-decode";


function Login(props) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [incomplete, setIncomplete] = useState(false);

    const [mesagge, setMessage] = useState("");

    const changeEmail = (e) => setEmail(e.target.value);
    const changePass = (e) => setPass(e.target.value);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleCancel = () => {
        setEmail("");
        setPass("");

        handleClose();
    }

    const throwMessage = (newMessage) => {
        setMessage(newMessage)
        setIncomplete(true);
        setTimeout(() => {
            setIncomplete(false);
        }, 1500);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);

        const form = e.currentTarget;
        if (form.checkValidity() === true) {
            makeFetch();
        }
        else {
            throwMessage("Completa todos los campos")
        }
    };


    const makeFetch = async () => {
        const URL = "http://localhost:8080/usuario/login";
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(
                {
                    mail: email,
                    pass: pass
                })
        }

        try {                                           //asegura que no existan los items que vamos a crear
            sessionStorage.removeItem("token");
            localStorage.removeItem("loggedName");
            localStorage.removeItem("loggedLastName");
            localStorage.removeItem("loggedRol");
            localStorage.removeItem("loggedId");
            localStorage.setItem("logged", false);

            const res = await fetch(URL, params);       //fetch y respuesta
            const body = await res.json();
            // console.log (body)
            if (res.status == 200) {                 // seteamos los valores de nombre,apellido, rol, logueado y token

                sessionStorage.setItem("token", body.token);
                localStorage.setItem("logged", true);
                navigate("/");
                handleClose();
                const decoded = jwtDecode(body.token);
                localStorage.setItem("loggedId", decoded.id);
                localStorage.setItem("loggedName", decoded.nombre);
                localStorage.setItem("loggedLastName", decoded.apellido);
                localStorage.setItem("loggedRol", decoded.rol);
                props.in(true);                // cambia el estado de logg para disparar el useEffect

            }
            else {
                throwMessage(body.message)
            }
        } catch (error) {

        }

    }

    return (

        <>
            <ButtonToolbar className="p-1 my-1 mx-2 btn btn-outline-light" type="button" onClick={handleShow}>Ingresar</ButtonToolbar>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='cristal'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-dark text-nowrap ' >Ingresa a tu cuenta</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleLogin}>
                    <Modal.Body>
                        <>
                            <FloatingLabel controlId="floatingInputL" label="tucorreo@email.com" className="mb-3 ">
                                <Form.Control required type="email" placeholder="tucorreo@email.com" value={email} onChange={changeEmail} />
                                <Form.Control.Feedback type="invalid">Ingresá un correo válido</Form.Control.Feedback>
                            </FloatingLabel>


                            <FloatingLabel controlId="floatingPasswordL" label="Contraseña">
                                <Form.Control required type="password" placeholder="Contraseña" value={pass} onChange={changePass} />
                                <Form.Control.Feedback type="valid">Listos para ingresar</Form.Control.Feedback>
                            </FloatingLabel>

                            {/* <Form.Switch reverse label="Recordar" className="user-select-none mt-3 " id="checkbox-id" onChange={checkRemember}/> */}
                        </>
                        {incomplete && <FormLabel className="text-danger">{mesagge}</FormLabel>}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button variant="dark" type="submit" >Ingresar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    )
}

export default Login
