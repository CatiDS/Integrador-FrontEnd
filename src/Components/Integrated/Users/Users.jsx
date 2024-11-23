import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { FormLabel, Table } from 'react-bootstrap';
import './Users.css';
import EditUser from './EditUser.jsx';
import DeleteClient from './DeleteClient.jsx';
import FindBy from './FindBy.jsx'
import { Col, Container, Row } from "react-bootstrap";
import { FcSearch, FcPlus } from "react-icons/fc";

const Users = () => {

    const [mesagge, setMessage] = useState("");
    const [incorrect, setIncorrect] = useState(false);
    const [URL, setUrl] = useState("http://localhost:8080/usuario/")
    const [datosU, setdatosU] = useState([])

    const token = sessionStorage.getItem("token");

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
                console.log(token);
                const res = await fetch(URL, params);
                const body = await res.json();
                setdatosU(body);
            } catch (error) {
                // console.log(error)
                throwMessage("No se encontraron datos... intente otra consulta.")
            }
        }
        makeFetch();
    },
        [URL]);

    const throwMessage = (newMessage) => {
        setMessage(newMessage)
        setIncorrect(true);
        setTimeout(() => {
            setIncorrect(false);
        }, 3000);
    }


    return (

        <>
            <Container fluid className="mx-auto p-2">
                <Row className="mx-0">
                    <Col className="col-md-12">
                        <FindBy datos={setUrl} />
                    </Col>
                </Row>
                {incorrect && <FormLabel className="text-danger fs-3" >{mesagge}</FormLabel>}
            </Container>


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
                                    <EditUser key="edit" users={row} />
                                    <DeleteClient users={row} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </>
    )
}

export default Users