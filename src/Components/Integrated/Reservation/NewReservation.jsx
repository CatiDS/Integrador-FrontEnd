
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FcPlanner } from "react-icons/fc";


const NewReservation = () => {

    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [chargeDate, setChargeDate] = useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [phone, setPhone] = useState("");
    const [people, setPeople] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeNombre = (e) => setName(e.target.value);
    const changeApellido = (e) => setSurname(e.target.value);
    const changeChargeDate = (e) => setChargeDate(e.target.value);
    const changeReservationDate = (e) => setReservationDate(e.target.value);
    const changePhone = (e) => setPhone(e.target.value);
    const changePeople = (e) => setPeople(e.target.value);

    const handleCancel = () => {
        setName("");
        setSurname("");
        setChargeDate("");
        setReservationDate("");
        setPhone("");
        setPeople("");

        handleClose();
    }

    const mostrar = () => console.log(
        `nombre: ${name},
            apellido: ${surname},
            fechaCarga: ${chargeDate},
            reserva: ${reservationDate},
            telefono: ${phone},
            personas: ${people},
        
         todo ok, implementar el POST a db`);
    // const [tables, setTables]= useState([]);
    // useEffect(
    //     ()=>{
    //         fetch('URL').then(response=>response.json()).then(data=>setTables(data));
    //     },
    //     [funcion de disparo]
    // )


    return (
        <>
            <Button className="px-3 py-2 me-5 btn btn-outline-light bg-success" type="button" onClick={handleShow}>
                Nueva Reserva
                <FcPlanner className="ms-2" />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='cristal px-0'
            >

                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-dark text-nowrap mx-5'> Nueva Reserva </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                            {/* <Form.Switch reverse label="Recordar" className="user-select-none mt-3 " id="checkbox-id" /> */}
                            {/* <Form.Check reverse label="Recordar" className="user-select-none mt-3 " id="checkbox-id" /> */}

                        <FloatingLabel
                            controlId="floatingName"
                            label="Nombre"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Nombre" value={name} onChange={changeNombre} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Apellido"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Apellido" value={surname} onChange={changeApellido} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Fecha de Carga"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Fecha de Carga" value={chargeDate} onChange={changeChargeDate} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Fecha Reservada"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Fecha Reservada" value={reservationDate} onChange={changeReservationDate} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingCategory"
                            label="Teléfono"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Teléfono" value={phone} onChange={changePhone} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Personas"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Personas" value={people} onChange={changePeople} />
                        </FloatingLabel>
                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={mostrar}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default NewReservation