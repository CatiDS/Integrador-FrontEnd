
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FcPlanner } from "react-icons/fc";
import dayjs, { Dayjs } from 'dayjs';
import "dayjs/locale/es"
import { jwtDecode } from 'jwt-decode';
import { FormLabel } from 'react-bootstrap';
dayjs.locale("es");




const NewReservation = () => {

    //////Ccalcular lugres antes de reservar
    // la primera mesa tiene 4 lugares  y  por cada mesa agregada se suman 2 lugares

    // CREAR RESERVA:      post
    // http://localhost:8080/reserva/      
    // recibo del front el body                             

    // {
    //     "fecha_res": "",
    //     "usuario_res": "",
    //     "nombre": "",
    //     "apellido": "",
    //     "nro_tel": ,
    //     "cant_personas":
    // }


    const token = sessionStorage.getItem("token");
    const decoded = jwtDecode(token);

    // localStorage.setItem("logged", true);
    // navigate("/");
    // handleClose();
    // localStorage.setItem("loggedRol", decoded.rol);


    const idSesion = decoded.id                                 // id de sesion storage
    const nameSesion = decoded.nombre                           // nombre de sesion storage
    const surnameSesion = decoded.apellido                      // apellido de sesion storage
    const phoneSesion = localStorage.getItem("loggedPhone");    // telefono de sesion storage

    const today = dayjs().format("DD/MM/YYYY")
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(true);
    const [name, setName] = useState(nameSesion);
    const [lastName, setSurname] = useState(surnameSesion);
    const [phone, setPhone] = useState(phoneSesion);
    const [people, setPeople] = useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [chargeDate, setChargeDate] = useState(today);
    const [validate, setValidated] = useState(false);
    const [incomplete, setIncomplete] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mesagge, setMessage] = useState("");


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

    const throwMessage = (newMessage,mode) => {
        setMessage(newMessage)
        mode=="bad"?setIncomplete(true):setSuccess(true);
        setTimeout(() => {
            setIncomplete(false);
            setSuccess(false);
        }, 1500);
    }

    const verify = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dayjs(reservationDate+"10:00").diff(dayjs(), 'hour')>10 ? handleSubmit(e) : throwMessage("Las reservas se registran con un dia de antelación","bad");        ;
    }

    const handleSubmit = (e) => {

        setValidated(true);
        const form = e.currentTarget;
        if (form.checkValidity() === true) makeFetch();
        else throwMessage("No se pudo registrar la reserva","bad");
    }

    const makeFetch = async () => {

        const URL = "http://localhost:8080/reserva/";
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
            },

            body: JSON.stringify(
                {
                    fecha_res: reservationDate,
                    usuario_res: idSesion,
                    nombre: name,
                    apellido: lastName,
                    nro_tel: phone,
                    cant_personas: people,

                })
        }
        console.log(params)

        try {
            const res = await fetch(URL, params);
            const body = await res.json();
            // console.log(body);
            if (res.status == 201) {
                // navigate("/");
                handleCancel();
                throwMessage("Reserva agendada!. Te esperamos!","good");

            }
            else {
                res.status == 590 && throwMessage("No se pudo registrar la reeserva","bad");
            }
        } catch (error) {
console.log (error)
        }
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
                <Form noValidate validated={validate} onSubmit={verify}>

                    <Modal.Body>
                        <>
                            <Modal.Title className='fw-normal fs-0 bg-dark text-white text-center text-nowrap p-1 mb-3'> {chargeDate} </Modal.Title>

                            <Form.Check label="Reservar a mi nombre" className="user-select-none mt-3 " id="checkbox-id" checked={check} onChange={changeCheck} />

                            <FloatingLabel
                                controlId="floatingName"
                                label="Nombre"
                                className="mb-2 "

                            >
                                <Form.Control required type="text" placeholder="Nombre" value={name} onChange={changeNombre} disabled={check} minLength={2} maxLength={50}/>
                                <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingSurname"
                                label="Apellido"
                                className="mb-2 "
                            >
                                <Form.Control required type="text" placeholder="Apellido" value={lastName} onChange={changeApellido} disabled={check} minLength={2} maxLength={50}/>
                                <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingpPhone"
                                label="Teléfono"
                                className="mb-2 "
                            >
                                <Form.Control required type="tel" placeholder="Teléfono" value={phone} onChange={changePhone} disabled={check} pattern="[0-9]{10}" />
                                <Form.Control.Feedback type="invalid">Ingresá un Teléfono válido - Sin 0 ni 15</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingReserved"
                                label="Fecha Reservada"
                                className="mb-2 "
                            >
                                {/* picker de fecha -- Ya veremos*/}
                                {/* <DayPicker/> */}
                                <Form.Control required type="date"  placeholder="Fecha a Reservar" value={reservationDate} onChange={changeReservationDate} />
                                <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Personas"
                                className="mb-3 "
                            >
                                <Form.Control required type="number" placeholder="Personas" value={people} min={1} onChange={changePeople} />
                                <Form.Control.Feedback type="invalid">Campo requerido</Form.Control.Feedback>
                            </FloatingLabel>
                        </>
                        {incomplete && <FormLabel className="text-danger">{mesagge}</FormLabel>}
                        {success && <FormLabel className="text-success">{mesagge}</FormLabel>}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button variant="success" type="submit">Guardar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>


    )
}

export default NewReservation