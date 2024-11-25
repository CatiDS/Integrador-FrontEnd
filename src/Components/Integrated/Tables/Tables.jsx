import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';




function Tables(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// const [tables, setTables]= useState([]);
// useEffect(
//     ()=>{
//         fetch('URL').then(response=>response.json()).then(data=>setTables(data));
//     },
//     [funcion de disparo]
// )

    // Sample data
    const tables = [
        { id: 1, producto: "Johny walker N", precio: 30, cantidad: 5, subtotal: 150 },
        { id: 2, producto: "Vino Alice", precio: 25, cantidad: 5, subtotal: 150 },
        { id: 4, producto: "Plato Adulto", precio: 28, cantidad: 5, subtotal: 150 },
        { id: 5, producto: "Gatorade", precio: 32, cantidad: 5, subtotal: 150 },
        { id: 6, producto: "Michel Torino", precio: 40, cantidad: 5, subtotal: 150 },
        { id: 3, producto: "Coca Cola", precio: 35, cantidad: 5, subtotal: 150 },
        { id: 7, producto: "Ensalada de Oliva", precio: 22, cantidad: 5, subtotal: 150 },
        { id: 8, producto: "Plato Niño", precio: 40, cantidad: 5, subtotal: 150 },
        { id: 9, producto: "Olivia", precio: 22, cantidad: 5, subtotal: 150 },
        { id: 10, producto: "Michael", precio: 40, cantidad: 5, subtotal: 150 },
        { id: 11, producto: "Olivia", precio: 22, cantidad: 5, subtotal: 150 },
        { id: 12, producto: "Plato Niño", precio: 30, cantidad: 5, subtotal: 150 },
        { id: 13, producto: "Plato Niño", precio: 50, cantidad: 5, subtotal: 150 },
        { id: 14, producto: "Plato Niño", precio: 60, cantidad: 5, subtotal: 150 },
        { id: 15, producto: "Plato Niño", precio: 70, cantidad: 5, subtotal: 150 },
        { id: 16, producto: "Plato Niño", precio: 80, cantidad: 5, subtotal: 150 },
        { id: 17, producto: "Plato Niño", precio: 40, cantidad: 5, subtotal: 150 },
    ];




    return (

        <>


            <Button className="p-5 my-2 mx-3 btn btn-outline-light" type="button" onClick={handleShow}>{props.nro}</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='cristal'

            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-dark' >Productos Mesa N° {props.nro} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>



                        <div style={{
                            maxHeight: "350px",
                            overflowY: "auto"
                        }}>


                            <Table striped bordered hover>


                                <thead style={{
                                    position: "sticky",
                                    top: "0"
                                }}>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio U.</th>
                                        <th>Cantidad</th>
                                        <th>Subotal</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {tables.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.producto}</td>
                                            <td>{row.precio}</td>
                                            <td>{row.cantidad}</td>
                                            <td>{row.subtotal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>



                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">Agregar +</Button>
                    <Button variant="danger">Quitar -</Button>
                    <Button variant="dark">Cerrar Cuenta</Button>

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Tables
