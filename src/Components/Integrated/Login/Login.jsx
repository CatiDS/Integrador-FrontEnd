import "./Login.css"
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ButtonToolbar } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Login() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [incomplete, setIncomplete] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeEmail = (e) => setEmail(e.target.value);
    const changePass = (e) => setPass(e.target.value);

    const handleCancel = () => {
        setEmail("");
        setPass("");

        handleClose();
    }


    const handleLogin = (e) => {

        e.preventDefault();
        e.stopPropagation();
        setValidated(true);

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            setIncomplete(true);
            setTimeout(() => {
                setIncomplete(false);
            }, 1500);

            console.log(
                    `correo: ${email},
                    contraseña: ${pass},

                    todo ok, implementar el POST a db`);
            console.log("todo ok para ingresar")
        }
    };


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
                                <Form.Control required type="email" placeholder="tucorreo@email.com" value={email} onChange={changeEmail}/>
                                <Form.Control.Feedback type="invalid">Ingresá un correo válido</Form.Control.Feedback>
                            </FloatingLabel>


                            <FloatingLabel controlId="floatingPasswordL" label="Contraseña">
                                <Form.Control required type="password"  placeholder="Contraseña" value={pass} onChange={changePass}/>
                                <Form.Control.Feedback type="valid">Listos para ingresar</Form.Control.Feedback>
                            </FloatingLabel>

                            <Form.Switch reverse label="Recordar" className="user-select-none mt-3 " id="checkbox-id" />

                            {/* <Button variant="dark" type="submit" >Ingresar</Button> */}

                            {/* </Form> */}
                        </>
                        {incomplete && <FormLabel className="text-danger">Completa todos los campos</FormLabel>}

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
