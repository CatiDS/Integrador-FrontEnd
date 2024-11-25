import "./Register.css"
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { FaRegEye } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { ButtonToolbar, FormLabel } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();

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
    // const [eyePass, seteyePass] = useState("password");
    
    // const [verPass2, setverPass2] = useState("password");
    // const [eyePass2, seteyePass2] = useState("password");

    const [mesagge, setMessage] = useState("");

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleCancel = () => {
        setName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setPass("");
        setPass2("");

        handleClose();
    }

    const throwMessage = (newMessage) => {              //Lanzador de mensajes
        setMessage(newMessage)
        setIncomplete(true);
        setTimeout(() => {
            setIncomplete(false);
        }, 2000);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setValidate(true);

        const form = e.currentTarget;
        if (form.checkValidity() === true) {

            //si se cumplen todas las validaciones, verifica que las contrseñas sean iguales y entonces llama a la funcion para hacer el fetch
            pass === pass2 ? makeFetch() : throwMessage("Las contraseñas no coinciden");
        }
        else {
            throwMessage("Completa todos los campos");
        }
    };


    const makeFetch = async () => {

        const URL = "http://localhost:8080/usuario/";
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(
                {
                    apellido: lastName,
                    nombre: name,
                    mail: email,
                    pass: pass,
                    nro_tel: phone
                })
        }

        try {
            const res = await fetch(URL, params);
            const body = await res.json();
            console.log(body);
            if (res.status == 201) {
                navigate("/");
                handleCancel();
            }
            else {
                res.status == 590 && throwMessage("El Email ya se encuentra registrado.");

            }
        } catch (error) {

        }
    }

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
                <Form noValidate validated={validate} onSubmit={handleRegister}>
                    <Modal.Body>
                        <>
                            <FloatingLabel controlId="lastNameR" label="Apellido" className="mb-3 ">
                                <Form.Control required type="text" value={lastName} onChange={changeLastName} minLength={2} maxLength={50} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingNameR" label="Nombre" className="mb-3 ">
                                <Form.Control required type="text" value={name} onChange={changeName} minLength={2} maxLength={50} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInputR" label="Teléfono" className="mb-3 ">
                                <Form.Control required type="tel" value={phone} onChange={changePhone} pattern="[0-9]{10}" />
                                <Form.Control.Feedback type="invalid">Ingresá un Teléfono válido - Sin 0 ni 15</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmailR" label="tucorreo@email.com" className="mb-3 ">
                                <Form.Control required type="email" value={email} onChange={changeEmail} />
                                <Form.Control.Feedback type="invalid">Ingresá un correo válido</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassR" label="Contraseña" className="mb-3 ">
                                <Form.Control required type="password" value={pass} onChange={changePass} minLength={6} maxLength={16} /> {/* type={verPass} */}
                                {/* <FaRegEye fill=" rgb(120, 3, 100)" id='verPass1' className='verPass'/> */}
                                <Form.Control.Feedback type="invalid">[6-16] Caracteres</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPasswordR" label="Confirmar contraseña">
                                <Form.Control required type="password" value={pass2} onChange={changePass2} /> {/* type={verPass2} */}
                                {/* <FaRegEye fill=" rgb(120, 3, 100)" id='verPass2' className='verPass' /> */}
                                <Form.Control.Feedback type="invalid">Repetí la contraseña anterior </Form.Control.Feedback>
                            </FloatingLabel>

                        </>
                        {incomplete && <FormLabel className="text-danger">{mesagge}</FormLabel>}

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

export default Register
