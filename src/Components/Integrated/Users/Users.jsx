import './Users.css';
import FindBy from './FindBy.jsx'
import EditUser from './EditUser.jsx';
import Button from 'react-bootstrap/Button';
import DeleteClient from './DeleteClient.jsx';
import { useNavigate } from 'react-router-dom';
import { FcSearch, FcPlus } from "react-icons/fc";
import React, { useEffect, useState } from 'react'
import { FormLabel, Table, Col, Container, Row } from "react-bootstrap";

const Users = () => {

    const rol = localStorage.getItem("loggedRol");
    const rutaAdmin = "http://localhost:8080/usuario/";
    const rutaUser = `http://localhost:8080/usuario/id/${localStorage.getItem("loggedId")}`;

    const [mesagge, setMessage] = useState("");
    const [incorrect, setIncorrect] = useState(false);
    const [URL, setUrl] = useState(`${(rol == "administrador"||rol == "cajero")? rutaAdmin : rutaUser}`);
    const [datosU, setdatosU] = useState([])
    const navigate = useNavigate();
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
                const res = await fetch(URL, params);
                const body = await res.json();
                // console.log((res.status))
                if (res.status == 200) {
                    setdatosU(body);
                    (rol != "administrador"||rol != "cajero") && localStorage.setItem("loggedPhone", body[0].nro_tel);

                } else {

                    if (res.status == 401) {
                        navigate("/");
                        throwMessage(body.message)
                    } else {
                        throwMessage(body.message)
                    }
                }


            } catch (error) {
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
            {(rol == "administrador" ||rol == "cajero")&&
                <Container fluid className="mx-auto p-2">
                    <Row className="mx-0">
                        <Col className="col-md-12">
                            <FindBy datos={setUrl} />
                        </Col>
                    </Row>
                    {incorrect && <FormLabel className="text-danger fs-3" >{mesagge}</FormLabel>}
                </Container>
            }

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
                                    <EditUser key="edit" users={row} datos={setUrl} />
                                    <DeleteClient users={row} datos={setUrl} />
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