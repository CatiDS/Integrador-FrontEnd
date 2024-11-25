
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const EditReservation = (props) => {

    const [show, setShow] = useState(false);
    
    const [name, setName] = useState(props.resData.nombre);
    const [surname, setSurname] = useState(props.resData.apellido);
    const [chargeDate, setChargeDate] = useState(props.resData.fecha_carga);
    const [reservationDate, setReservationDate] = useState(props.resData.fecha_res);
    const [phone, setPhone] = useState(props.resData.nro_tel);
    const [people, setPeople] = useState(props.resData.cant_personas);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeNombre = (e) => setName(e.target.value);
    const changeApellido = (e) => setSurname(e.target.value);
    const changeChargeDate = (e) => setChargeDate(e.target.value);
    const changeReservationDate = (e) => setReservationDate(e.target.value);
    const changePhone = (e) => setPhone(e.target.value);
    const changePeople = (e) => setPeople(e.target.value);

    const handleCancel =()=>{
        setName(props.resData.nombre);
        setSurname(props.resData.apellido);
        setChargeDate(props.resData.fecha_carga);
        setReservationDate(props.resData.fecha_res);
        setPhone(props.resData.nro_tel);
        setPeople(props.resData.cant_pers);
    
        handleClose();
    }

    const mostrar = ()=> console.log(
            `nombre: ${name},
            apellido: ${surname},
            fechaCarga: ${chargeDate},
            reserva: ${reservationDate},
            telefono: ${phone},
            personas: ${people},
        
         todo ok, implementar el cambio put a db`);
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
                    <Modal.Title className='fw-bolder fs-3 text-dark text-nowrap mx-5'> Editando Reserva </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>

                        <FloatingLabel
                            controlId="floatingName"
                            label="Nombre"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Nombre" defaultValue={name} onChange={changeNombre}/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Apellido"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Apellido" defaultValue={surname} onChange={changeApellido} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Fecha de Carga"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Fecha de carga" defaultValue={chargeDate} onChange={changeChargeDate} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Fecha Reservada"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Fecha Reservada" defaultValue={reservationDate} onChange={changeReservationDate} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingCategory"
                            label="Teléfono"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Teléfono" defaultValue={phone} onChange={changePhone}/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Personas"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Personas" defaultValue={people} onChange={changePeople}/>
                        </FloatingLabel>

                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button variant="dark" onClick={mostrar}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditReservation