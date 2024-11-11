import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./BigCalendar.css"
import dayjs from 'dayjs'
import "dayjs/locale/es"
import { Button } from 'react-bootstrap'
dayjs.locale("es");
import { useState } from 'react';
import ReservationData from './Reservationdata'
import NewReservation from '../Reservation/NewReservation'


const BigCalendar = () => {

    const [modalShow, setModalShow] = useState(false);
    const [datas, setDatas]=useState({})
    const localizerDay = dayjsLocalizer(dayjs);


    // const [reservations, setReservations]= useState([]);
    // useEffect(
    //     ()=>{
    //         fetch('URL')
    //          .then(response=>response.json())
    //          .then(data=>setReservations(data))
    //          .catch(err=>cosole.log(err));
    //
    //          cosole.log("operacion finalizada");
    //     },
    //     [funcion de disparo]
    // )
    // ----------------Nueva Forma
    // useEffect(
    //     async()=>{
    //      try{
    //         response = await fetch('URL');
    //          data = await response.json();
    //          setReservations(data);
    //          }
    //      catch{err=>cosole.log(err)}
    //
    //          cosole.log("operacion finalizada");
    //     },
    //     [funcion de disparo]
    // )

    // ----------------Nueva Forma +Confusa jaja
    // useEffect(
    //     async()=>{
    //      try{ setReservations( await (await fetch('URL')).json()); }
    //      catch{err=>cosole.log(err)}
    //     },
    //     [funcion de disparo]
    // )


    const reservations = [
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
            start: dayjs('2024-11-05T10:30:00').toDate(),
            end: dayjs('2024-11-05T12:30:00').toDate(),
            title: "Flia Do Santo - 6 Lugares"
        },
        {
            start: dayjs('2024-11-05T10:30:00').toDate(),
            end: dayjs('2024-11-05T12:30:00').toDate(),
            title: "Flia DoSanto - 6 Lugares"
        },
        {
            start: dayjs('2024-11-05T10:30:00').toDate(),
            end: dayjs('2024-11-05T12:30:00').toDate(),
            title: "Flia Do Sanos - 6 Lugares"
        },
        {
            start: dayjs('2024-11-12T10:30:00').toDate(),
            end: dayjs('2024-11-12T12:30:00').toDate(),
            title: "Flia Do Santos - 9 Lugares"
        },
        {
            start: dayjs('2024-11-10T10:30:00').toDate(),
            end: dayjs('2024-11-10T12:30:00').toDate(),
            title: "Flia Do Satos - 3 Lugares"
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
        {
            start: dayjs('2024-11-07T10:30:00').toDate(),
            end: dayjs('2024-11-07T12:30:00').toDate(),
            title: "Flia DoSatos - 6 Lugares"
        },
        {
            start: dayjs('2024-11-07T10:30:00').toDate(),
            end: dayjs('2024-11-07T12:30:00').toDate(),
            title: "Flia Do Santos - 2 Lugares"
        },

    ]



    const verInfo = (e) => {
        setDatas(e.data);
        setModalShow(true);
    }


    return (
        <>
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
            <NewReservation/>
            <ReservationData
                show={modalShow}
                onHide={() => setModalShow(false)} 
                data={datas}
            />

        </>
    )
}

export default BigCalendar