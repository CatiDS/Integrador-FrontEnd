import "./Register.css"
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ButtonToolbar, FormLabel } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaRegEye } from "react-icons/fa";

function Login() {
    const [show, setShow] = useState(false);
    const [validate, setValidate] = useState(false);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [incomplete, setIncomplete] = useState(false);
    // const [verPass, setverPass] = useState("password");
    // const [verPass2, setverPass2] = useState("password");
    // const [eyePass, seteyePass] = useState("password");
    // const [eyePass2, seteyePass2] = useState("password");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeName = (e) => setName(e.target.value);
    const changeLastName = (e) => setLastName(e.target.value);
    const changePhone = (e) => setPhone(e.target.value);
    const changeEmail = (e) => setEmail(e.target.value);
    const changePass = (e) => setPass(e.target.value);
    const changePass2 = (e) => setPass2(e.target.value);

    // visiblePass(e)
    // {
    //     e.target.value!=""?setverPass("text"):setverPass("password");

    // }
    const handleCancel = () => {
        setName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setPass("");
        setPass2("");

        handleClose();
    }

    const handleLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setValidate(true);

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setIncomplete(true);
            setTimeout(() => {
                setIncomplete(false);
            }, 1500);
        }
        else {

            console.log(
                `nombre: ${name},
                    apellido: ${lastName},
                    telefono: ${phone},
                    correo: ${email},
                    contraseña: ${pass},
                
                 todo ok, implementar el POST a db`);
            console.log("todo ok para ingresar")
        }
    };

    return (

        <>
            <ButtonToolbar className="registerButton p-1 my-1 mx-2 btn btn-outline-light align-self-end" type="button" onClick={handleShow}>Regístrate</ButtonToolbar>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='cristal px-0'

            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-dark text-nowrap' >Bienvenid@ a la familia</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validate} onSubmit={handleLogin}>
                    <Modal.Body>
                        <>
                            <FloatingLabel controlId="floatingNameR" label="Nombre" className="mb-3 ">
                                <Form.Control required type="text" value={name} onChange={changeName} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>


                            <FloatingLabel controlId="surnameR" label="Apellido" className="mb-3 ">
                                <Form.Control required type="text" value={lastName} onChange={changeLastName} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInputR" label="Teléfono" className="mb-3 ">
                                <Form.Control required type="text" value={phone} onChange={changePhone} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmailR" label="tucorreo@email.com" className="mb-3 ">
                                <Form.Control required type="email" value={email} onChange={changeEmail} />
                                <Form.Control.Feedback type="invalid">Ingresá un correo válido</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassR" label="Contraseña" className="mb-3 ">
                                <Form.Control required type="password" value={pass} onChange={changePass} /> {/* type={verPass} */}
                                <FaRegEye fill=" rgb(120, 3, 100)" id='verPass1' className='verPass'/>
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPasswordR" label="Confirmar contraseña">
                                <Form.Control required type="password" value={pass2} onChange={changePass2} /> {/* type={verPass2} */}
                                <FaRegEye fill=" rgb(120, 3, 100)" id='verPass2' className='verPass' />
                                <Form.Control.Feedback type="invalid">Repetí la contraseña anterior </Form.Control.Feedback>
                            </FloatingLabel>
                            
                        </>
                        {incomplete && <FormLabel className="text-danger">Completa todos los campos</FormLabel>}
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type="submit" variant="dark">Registrarme</Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    )
}

export default Login
