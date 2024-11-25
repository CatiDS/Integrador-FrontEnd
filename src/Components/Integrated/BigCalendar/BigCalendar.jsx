import React, { useEffect } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./BigCalendar.css"
import dayjs from 'dayjs'
import "dayjs/locale/es"
import { Button, Col, Container, FormLabel, Row } from 'react-bootstrap'
dayjs.locale("es");
import { useState } from 'react';
import ReservationData from './Reservationdata'
import NewReservation from '../Reservation/NewReservation'
import FindBy from '../Users/FindBy'
import { useNavigate } from 'react-router-dom'
import FindRes from './FindRes'

// MOSTAR TODAS LAS RESERVAS:  get
// http://localhost:8080/reserva/   

// BUSCAR POR ID DE USUARIO:   get
// http://localhost:8080/reserva/buscar/:id_usuario 
// recibo del front id_usuario (req.params.id_usuario)


const BigCalendar = () => {
    const rol = localStorage.getItem("loggedRol");
    const rutaAdmin = "http://localhost:8080/reserva/";
    const rutaUser = `http://localhost:8080/reserva/buscar/${localStorage.getItem("loggedId")}`;

    const [URL, setUrl] = useState(`${rol == "administrador" ? rutaAdmin : rutaUser}`);

    const [mesagge, setMessage] = useState("");
    const [incorrect, setIncorrect] = useState(false);

    const [modalShow, setModalShow] = useState(false);
    const [datas, setDatas] = useState({});
    const localizerDay = dayjsLocalizer(dayjs);

    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    let dataFetch= [];

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
    }



    useEffect(() => {

        const makeFetch = async () => {
            try {
                // console.log(URL, params)
                const res = await fetch(URL, params);
                const data = await res.json();
                // console.log((res.status))
                // console.log((res))
                if (res.status == 200) {
                    dataFetch= data;
                    formatInfo();
                } else {

                    if (res.status == 401) {
                        navigate("/");
                        throwMessage(body.message);
                    } else {
                        throwMessage(body.message);
                    }
                }
            } catch (error) {
                console.log(error);

                throwMessage("No se encontraron datos... intente otra consulta.")
            }
        }
        makeFetch();
    },
        [URL]);

    const formatInfo = () => {
        let dateI;
        let dateE;
        let titles;
        const reservation = [];
        dataFetch.map((item) => {
            dateI = dayjs(item.fecha_res).set('hour', 10).set('minute', 30).set('second', 0);
            dateE = dayjs(item.fecha_res).set('hour', 12).set('minute', 30).set('second', 0);
            titles = item.apellido + " - " + item.cant_personas + " Lugares";
            reservation.push(
                {
                    start: dayjs(dateI).toDate(),
                    end: dayjs(dateE).toDate(),
                    title: titles,
                    data: {
                        id_reserva: item.id_reserva,
                        fecha_carga: dayjs(item.fecha_carga).format("DD/MM/YYYY"),
                        fecha_res: dayjs(item.fecha_res).format("DD/MM/YYYY"),
                        nombre: item.nombre,
                        apellido: item.apellido,
                        nro_tel: item.nro_tel,
                        cant_personas: item.cant_personas
                    }

                }
            )
        });

        // console.log(reservation);
        setReservations(reservation);
    }



    const reservationse = [
        {
            start: dayjs('2024-11-09T10:30:00').toDate(),
            end: dayjs('2024-11-09T12:30:00').toDate(),

            title: "Flia Caserez  - 2 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-07",
                fecha_res: "2024-11-09",
                nombre: "Mauro",
                apellido: "Caserez",
                nro_tel: 345678,
                cant_personas: 4
            }
        },
        {
            start: dayjs('2024-11-13T10:30:00').toDate(),
            end: dayjs('2024-11-13T12:30:00').toDate(),
            title: "Flia Ortiz - 6 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-07",
                fecha_res: "2024-11-09",
                nombre: "Mauro",
                apellido: "Caserez",
                nro_tel: 345678,
                cant_personas: 4
            }

        },
        {
            start: dayjs('2024-11-12T10:30:00').toDate(),
            end: dayjs('2024-11-12T12:30:00').toDate(),
            title: "Flia Do Santos - 6 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-07",
                fecha_res: "2024-11-09",
                nombre: "Mauro",
                apellido: "Caserez",
                nro_tel: 345678,
                cant_personas: 4
            }

        },
        {
            start: dayjs('2024-11-12T10:30:00').toDate(),
            end: dayjs('2024-11-12T12:30:00').toDate(),
            title: "Flia Do-Santos - 3 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-07",
                fecha_res: "2024-11-09",
                nombre: "Mauro",
                apellido: "Caserez",
                nro_tel: 345678,
                cant_personas: 4
            }

        },
        {
            start: dayjs('2024-11-11T10:30:00').toDate(),
            end: dayjs('2024-11-11T12:30:00').toDate(),
            title: "Flia DoSantos - 6 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-07",
                fecha_res: "2024-11-09",
                nombre: "Mauro",
                apellido: "Caserez",
                nro_tel: 345678,
                cant_personas: 4
            }

        },
        {
            start: dayjs('2024-11-11T10:30:00').toDate(),
            end: dayjs('2024-11-11T12:30:00').toDate(),
            title: "Flia Do Santos - 6 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-07",
                fecha_res: "2024-11-09",
                nombre: "Mauro",
                apellido: "Caserez",
                nro_tel: 345678,
                cant_personas: 4
            }

        },
        {
            start: dayjs('2024-11-11T10:30:00').toDate(),
            end: dayjs('2024-11-11T12:30:00').toDate(),
            title: "Do Sants - 4 Lugares",
            data: {
                id_reserva: 1,
                fecha_hoy: "2024-11-10",
                fecha_res: "2024-11-11",
                nombre: "Luca",
                apellido: "Do Sants",
                nro_tel: 345678,
                cant_personas: 4
            }

        },

    ]



    const verInfo = (e) => {
        console.log(e.data)
        setDatas(e.data);
        setModalShow(true);
    }

    const throwMessage = (newMessage) => {
        setMessage(newMessage)
        setIncorrect(true);
        setTimeout(() => {
            setIncorrect(false);
        }, 3000);
    }



    return (
        <>
            {rol == "administrador" &&
                <Container fluid className="mx-auto p-2">
                    <Row className="mx-0">
                        <Col className="col-md-12">
                            <FindRes datos={setUrl} />
                            
                        </Col>
                    </Row>
                    {incorrect && <FormLabel className="text-danger fs-3" >{mesagge}</FormLabel>}
                </Container>
            }


            {/* <NewReservation/> */}

            {/* <div>BigCalendar</div> */}
            <section className='calendarContainer'>
                <Calendar className="calendar"
                    localizer={localizerDay}
                    events={reservations}
                    views={["agenda", "day", "month"]}
                    defaultView='agenda'
                    //si en lugar de defaultView usamos view='day' => el valor de view se puede poner en un usestate y cambiar dinamicamente el valor inicial
                    onSelectEvent={verInfo}
                    // onClick={handleShow}
                    // toolbar={false} //Para ocultar la barra
                    min={dayjs('2024-01-01T10:00:00').toDate()}
                    max={dayjs('2024-01-01T15:00:00').toDate()}
                    formats={{
                        dayHeaderFormat: date => {
                            return dayjs(date).format("dddd - DD/MM/YYYY")
                        },
                        // monthHeaderFormat:date =>{
                        //     return dayjs(date).format("MM/YYYY")
                        // }
                    }}
                >

                </Calendar>
                {/* {hoy?<Button>Un boton</Button>:null} */} {/* pregunta ternaria */}
                {/* localizer.isSameDate(date, current) && 'rbc-today' */}

            </section>

            <NewReservation />
            <ReservationData
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={datas}
            />

        </>
    )
}

export default BigCalendar