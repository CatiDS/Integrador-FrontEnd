
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FormLabel } from 'react-bootstrap';

const DeleteReservation = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nombres = props.resData.apellido + ", " + props.resData.nombre

    const mostrar = () => console.log("todo ok, implementar el delete a db");
    // const [tables, setTables]= useState([]);
    // useEffect(
    //     ()=>{
    //         fetch('URL').then(response=>response.json()).then(data=>setTables(data));
    //     },
    //     [funcion de disparo]
    // )


    return (
        <>

            <Button className="p-0 mx-2 btn btn-outline-light bg-transparent" type="button" onClick={handleShow}>

                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#900" className="bi bi-x-square icon" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
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
                    <Modal.Title className='fw-bolder fs-3 text-dark text-nowrap mx-5'> Eliminar Reserva </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <FormLabel className='fw-bolder fs-5 text-danger text-nowrap mb-4'>Atencion, está por eliminar una reserva!</FormLabel>
                        <FloatingLabel
                            controlId="floatingNames"
                            label="Nombre"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Nombre" value={nombres} readOnly />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInputDate"
                            label="Fecha de carga"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Fecha de carga" value={props.resData.fecha_carga} readOnly />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingReservationDate"
                            label="Fecha Reservada"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Fecha Reservada" value={props.resData.fecha_res} readOnly />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPhone"
                            label="Teléfono"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Teléfono" value={props.resData.nro_tel} readOnly />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPeople"
                            label="Personas"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Personas" value={props.resData.cant_personas} readOnly />
                        </FloatingLabel>


                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="dark" onClick={mostrar}>Eliminar</Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default DeleteReservation