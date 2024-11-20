
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FcPlanner } from "react-icons/fc";
import dayjs from 'dayjs';
import "dayjs/locale/es"
dayjs.locale("es");




const NewReservation = () => {

//////Ccalcular lugres antes de reservar
// la primera mesa tiene 4 lugares  y  por cada mesa agregada se suman 2 lugares



    const idSesion = "ID" //pedir id de sesion storage
    const nameSesion = "mau" //pedir nombre de sesion storage
    const surnameSesion = "cas" //pedir apellido de sesion storage
    const phoneSesion = 234 //pedir telefono de sesion storage

    const today =dayjs().format("DD/MM/YYYY")
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(true);
    const [name, setName] = useState(nameSesion);
    const [surname, setSurname] = useState(surnameSesion);
    const [phone, setPhone] = useState(phoneSesion);
    const [people, setPeople] = useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [chargeDate, setChargeDate] = useState(today);
    const [validated, setValidated] = useState(false);
    const [incomplete, setIncomplete] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeNombre = (e) => setName(e.target.value);
    const changeApellido = (e) => setSurname(e.target.value);
    const changeReservationDate = (e) => setReservationDate(e.target.value);
    const changePhone = (e) => setPhone(e.target.value);
    const changePeople = (e) => setPeople(e.target.value);

    const changeCheck = () => {
        setCheck(!check);
        if (check) {
            setName("");
            setSurname("");
            setPhone("");
        }
        else {
            setName(nameSesion);
            setSurname(surnameSesion);
            setPhone(phoneSesion);
        }
    }

    const handleCancel = () => {
        setName("");
        setSurname("");
        setChargeDate("");
        setReservationDate("");
        setPhone("");
        setPeople("");

        handleClose();
    }

    const verify = (e) => {
        
        if (dayjs(reservationDate).isValid()){
            let newDay=dayjs(reservationDate).format("DD/MM/YYYY");
        setReservationDate(newDay);
        reservationDate==today?console.log("hoy no"):console.log("continuamoss");
        handleSubmit(e);
    }
    else console.log("fecha no valida");
    }

    const handleSubmit=(e) =>{    

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
                    `
                    id: ${idSesion},
                    nombre: ${name},
                        apellido: ${surname},
                        fechaCarga: ${chargeDate},
                        reserva: ${reservationDate},
                        telefono: ${phone},
                        personas: ${people},
                    
                     todo ok, implementar el POST a db`);
            
                console.log("todo ok para ingresar")
        };
        }
    // const [reservation, setReservation]= useState([]);
    // useEffect(
    //     ()=>{
    //         fetch('URL').then(response=>response.json()).then(data=>setReservation(data));
    //     },
    //     [funcion de disparo]
    // )


    // const today = dayjs().format("DD/MM/YYYY");
    // // const [startDate, setStartDate] = useState(today);

    // const  handleChangeDate = (date, event) => {
    //     setStartDate(date);
    //     console.log(dayjs(date).format("DD/MM/YYYY"));
    // };

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Modal.Body>
                    <>
                        <Modal.Title className='fw-normal fs-0 bg-dark text-white text-center text-nowrap p-1 mb-3'> {chargeDate} </Modal.Title>

                        <Form.Check label="Reservar a mi nombre" className="user-select-none mt-3 " id="checkbox-id" checked={check} onChange={changeCheck} />

                        <FloatingLabel
                            controlId="floatingName"
                            label="Nombre"
                            className="mb-2 "
                            
                        >
                            <Form.Control required type="text" placeholder="Nombre" value={name} onChange={changeNombre} disabled={check} />
                            <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                            </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingSurname"
                            label="Apellido"
                            className="mb-2 "
                        >
                            <Form.Control required type="text" placeholder="Apellido" value={surname} onChange={changeApellido} disabled={check} />
                            <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingpPhone"
                            label="Teléfono"
                            className="mb-2 "
                        >
                            <Form.Control required type="text" placeholder="Teléfono" value={phone} onChange={changePhone} disabled={check} />
                            <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingReserved"
                            label="Fecha Reservada"
                            className="mb-2 "
                        >
                            {/* picker de fecha -- Ya veremos*/}
                            {/* <DayPicker/> */}
                            <Form.Control required type="text" placeholder="Fecha a Reservar" value={reservationDate} onChange={changeReservationDate} />
                            <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Personas"
                            className="mb-3 "
                        >
                            <Form.Control required type="text" placeholder="Personas" value={people} onChange={changePeople} />
                            <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                        </FloatingLabel>
                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={verify}>Guardar</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </>


    )
}

export default NewReservation