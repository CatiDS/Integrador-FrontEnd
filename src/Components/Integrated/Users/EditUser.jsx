
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditUser = (props) => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [validate, setValidate] = useState(false);

    const id = props.users.id_usuario;
    const [lastname, setLastName] = useState(props.users.apellido);
    const [name, setName] = useState(props.users.nombre);
    const [email, setEmail] = useState(props.users.mail);
    const [nrotel, setNTel] = useState(props.users.nro_tel);
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [rol, setRol] = useState(props.users.rol);
    const [disables, setDisabled] = useState(true);
    const [passChange, setPassChange] = useState(true);
    const [passOrig, setPassOrig] = useState(true);
    const [check, setCheck] = useState(false);


    const [incomplete, setIncomplete] = useState(false);
    const [mesagge, setMessage] = useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeName = (e) => setName(e.target.value);
    const changeLastName = (e) => setLastName(e.target.value);
    const changeEmail = (e) => setEmail(e.target.value);
    const changeNTel = (e) => setNTel(e.target.value);
    const changePass = (e) => setPass(e.target.value);

    const changePass2 = (e) => setPass2(e.target.value);
    const changePassOrig = (e) => setPassOrig(e.target.value);
    const changeRol = (e) => {
        setRol(e.target.value);

    }
    const handleCancel = () => {
        setName(props.users.nombre);
        setLastName(props.users.apellido);
        setEmail(props.users.mail);
        setNTel(props.users.nro_tel);
        setRol(props.users.rol);

        handleClose();
    }

    const throwMessage = (newMessage) => {
        setMessage(newMessage)
        setIncomplete(true);
        setTimeout(() => {
            setIncomplete(false);
        }, 1500);
    }

    const changeCheck = () => {
        setCheck(!check);
        setPassChange(!passChange);

    }

    useEffect(() => {
        if (rol === "administrador") {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
    },
        []
    )
    const handleSaveData = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setValidate(true);

        const form = e.currentTarget;
        if (form.checkValidity() === true) {
            passChange ?
                pass === pass2 ? makeFetchUser() : throwMessage("Las contraseñas no coinciden")
                : makeFetchUser();
        }
        else {
            throwMessage("Completa todos los campos")
        }
    }


    const makeFetchUser = async () => {

        const URL = `http://localhost:8080/usuario/${id}`;
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    apellido: lastname,
                    nombre: name,
                    mail: email,
                    pass: passOrig,
                    nro_tel: nrotel
                }
            ) 

        }

        try {
            console.log(URL, params)

            const res = await fetch(URL, params);
            const body = await res.json();
            if (res.status == 200) {
                navigate("/panel");
                handleClose();
            }
            else {
                throwMessage(body.message)
                console.log(body.message)

            }

        } catch (error) {
            console.log(error.message)
        }
    }

    const makeFetchAdmin = async () => {
        //         MODIFICAR ROL: put
        // recibo del front id_usuario, nuevo rol ingresado.  (req.params.id_usuario, req.body)
        const URL = `http://localhost:8080/usuario/rol/${id}`;
        const params = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rol: rol })
        }

        try {
            const res = await fetch(URL, params);
            const body = await res.json();
            if (res.status == 200) {
                navigate("/panel");
                handleClose();
            }
            else {
                throwMessage(body.message)
                console.log(body.message)
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <Button className="p-0 mx-2 btn btn-outline-light bg-transparent" type="button" onClick={handleShow}>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#606" className="bi bi-pencil-square icon" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>

            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='cristal px-0'

            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-nowrap text-dark'> Editar Información </Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validate} onSubmit={handleSaveData}>
                    <Modal.Body>
                        <>

                            <FloatingLabel
                                controlId="floatingLastName" label="Apellido" className="mb-3 " >
                                <Form.Control required type="text" placeholder="Apellido" defaultValue={props.users.apellido} onChange={changeLastName} disabled={disables} minLength={2} maxLength={50} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3 " >
                                <Form.Control required type="text" placeholder="Nombre" defaultValue={props.users.nombre} onChange={changeName} disabled={disables} minLength={2} maxLength={50} />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPhone" label="Teléfono" className="mb-3 " >
                                <Form.Control required type="tel" pattern="[0-9]{10}" placeholder="Teléfono" defaultValue={props.users.nro_tel} onChange={changeNTel} disabled={disables} />
                                <Form.Control.Feedback type="invalid">Ingresá un Teléfono válido - Sin 0 ni 15</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3 " >
                                <Form.Control required type="email" placeholder="Email" defaultValue={props.users.mail} onChange={changeEmail} disabled={disables} />
                                <Form.Control.Feedback type="invalid">Ingresá un correo válido</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Rol" className="mb-3 " hidden={!disables} >
                                <Form.Select required type="text" aria-label="Cambiar rol de usuario" placeholder="Rol" defaultValue={props.users.rol} onChange={changeRol}
                                    hidden={!disables}
                                    disabled={!disables}
                                >
                                    <option value="cliente">Cliente</option>
                                    <option value="mozo">Mozo</option>
                                    <option value="cajero">Cajero</option>
                                    <option value="administrador">Administrador</option>
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingNowPass" label="Contraseña actual" hidden={disables} className="mb-3 " >
                                <Form.Control required type="password" placeholder="Contraseña actual" defaultValue={""} onChange={changePassOrig}
                                    hidden={disables}
                                    disabled={disables}
                                />
                            </FloatingLabel>

                            <Form.Check label="Cambiar contraseña" className="user-select-none mt-3 " id="checkbox-id" hidden={disables} checked={check} onChange={changeCheck} />

                            <FloatingLabel
                                controlId="floatingPass" label="Nueva Contraseña" hidden={passChange} className="mb-3 " >
                                <Form.Control required={false} type="password" placeholder="Nueva Contraseña" defaultValue={""} onChange={changePass}
                                    minLength={6} maxLength={16}
                                    hidden={passChange}
                                    disabled={disables}
                                />
                                <Form.Control.Feedback type="invalid">[6-10] Caracteres</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPass2" label="Confirmar Contraseña" hidden={passChange} className="mb-3 " >
                                <Form.Control required={false} type="password" placeholder="Confirmar Contraseña" defaultValue={""} onChange={changePass2}
                                    hidden={passChange}
                                    disabled={disables}
                                />
                                <Form.Control.Feedback type="invalid">Repetí la contraseña anterior </Form.Control.Feedback>
                            </FloatingLabel>

                        </>
                        {incomplete && <FormLabel className="text-danger">{mesagge}</FormLabel>}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type='submit' variant="dark">Guardar</Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </>


    )
}

export default EditUser