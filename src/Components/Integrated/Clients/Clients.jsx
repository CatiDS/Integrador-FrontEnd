import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import './Clients.css';
import EditClient from './EditClient.jsx';
import DeleteClient from './DeleteClient';
import { Col, Container, Row } from "react-bootstrap";
import { FcSearch, FcPlus } from "react-icons/fc";


const URL = "http://localhost:8080/usuario/";
const params = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}


const Clients = () => {

    const [datosU, setdatosU] =useState([])

    useEffect(()=>{
        const makeFetch = async () => {
            try {
                const res = await fetch(URL, params);
                const body = await res.json();
                setdatosU (body);
            } catch (error) {
                console.log(error.message)
            }
        }
        makeFetch();
    },
    [])

    return (

        <>
            <div style={{
                maxHeight: "23rem",
                overflowY: "auto",
                margin: "2rem",
            }}>

                <Table striped bordered hover>
                    <thead style={{
                        position: "sticky",
                        top: "0"
                    }}>
                        <tr>
                            <th colSpan={7} className='bg-dark text-white'> Usuarios</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Rol</th>
                            <th> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {datosU.map((row) => (
                            <tr key={row.id_usuario}>
                                <td>{row.id_usuario}</td>
                                <td>{row.apellido}</td>
                                <td>{row.nombre}</td>
                                <td>{row.mail}</td>
                                <td>{row.nro_tel}</td>
                                <td>{row.rol}</td>
                                <td>
                                    <EditClient key="edit" clients={row} />
                                    <DeleteClient clients={row} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>



            <Container fluid className="mx-auto p-2">
                <Row className="mx-0">
                    <Col className="col-md-6 ">
                        <Button variant="success"
                        // onClick={makeFetch}
                        > Agregar <FcPlus size={25} /> </Button>
                        {/* ver si poner */}
                    </Col>
                    <Col className="col-md-6">
                        <Button variant="dark" className='me-auto'>Buscar <FcSearch size={25} /></Button>
                        {/* cambiar por findBY */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Clients