import "./Reservationdata.css"
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditReservation from '../Reservation/EditReservation';
import DeleteReservation from '../Reservation/DeleteReservation';



function ReservationData(props) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const row = props.data;
    // const seturl= props.churl;
    
    return (
        <>
            <Modal
                {...props}
                keyboard={false}
                className='cristal'
            >

                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-dark' >Detalle Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className="tableContainer">
                            <Table striped bordered hover>
                                <thead className='tableHeader'>
                                    <tr>
                                        <th colSpan={7} className='bg-dark text-white'>{row.apellido}, {row.nombre}</th>
                                    </tr>
                                    <tr>
                                        <th>Fecha</th>{/* fecha_hoy */}
                                        <th>Reservado</th>{/* fecha_res */}
                                        <th>Teléfono</th>
                                        <th>Lugares</th>{/* cant_pers */}
                                        <th> </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr key={row.id_reserva}>
                                        <td>{row.fecha_carga}</td>
                                        <td>{row.fecha_res}</td>
                                        <td>{row.nro_tel}</td>
                                        <td>{row.cant_personas}</td>
                                        <td>
                                            <EditReservation resData={row}/>
                                            <DeleteReservation resData={row} 
                                            // setUrl={seturl}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>



                    </>

                </Modal.Body>
                <Modal.Footer>
                {/* <Button closeButton variant="success">Atras</Button> */}
                {/* <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button> */}
                {/* <Button variant="danger">Cancelar Reserva</Button>
                <Button variant="primary">Editar Reserva</Button> */}

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ReservationData
