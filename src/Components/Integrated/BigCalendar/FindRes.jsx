import React, { useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'


const FindRes = (props) => {

    const [url, setUrl] = useState("http://localhost:8080/reserva/buscar/apellido/");
    const [key, setKey] = useState("");

    const changeKey = (e) => setKey(e.target.value);

    const makeFetch = () => {
        let URL;
        key===""?URL = "http://localhost:8080/reserva/":URL = url + key;
        props.datos(URL);
    }

    // const [datosU, setdatosU] = useState([])
    // const token = sessionStorage.getItem("token");

    // const params = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'authorization': token,
    //     },
    // }


    // const makeFetch = async () => {
    //     const URL = url + key

    //     try {
    //         const res = await fetch(URL, params);
    //         const body = await res.json();
    //         setdatosU(body);
    //         console.log(body);
    //     }
    //     catch (error) {
    //         console.log(error)
    //         console.log(error.message)
    //     }
    //     props.datos(URL);
    // }


    return (
        <>
            <Form.Group as={Row} className="mb-2"  >
                <Row className="mt-2">
                    <Form.Label as="legend" htmlFor="find_reservation" column sm={2}> Filtrar Por: </Form.Label>

                    {/* <Col sm={3}> 
                             <Form.Check
                                className='mt-2'
                                inline
                                    type="radio"
                                    label="Nombre"
                                    name="checkGroup"
                                    id="Nombre"
                                    onClick={() => setUrl(`RUTA NOMBRE SIN KEY`)}
                                />
                            </Col> */}

                    <Col sm={3}>
                        <Form.Check
                            className='mt-2'
                            inline
                            type="radio"
                            label="Apellido"
                            name="checkGroup"
                            id="Apellido"
                            defaultChecked
                            onClick={() => setUrl(`http://localhost:8080/reserva/buscar/apellido/`)}
                        />
                    </Col>

                    <Col sm={3}>

                        <Form.Check
                            className='mt-2'
                            inline
                            type="radio"
                            label="Telefono"
                            name="checkGroup"
                            id="Telefono"
                            onClick={() => setUrl(`http://localhost:8080/reserva/buscar/telefono/`)}

                        />
                    </Col>

                </Row>
            </Form.Group>
            {/* </Form> */}


            <InputGroup className="mb-3">
                <Form.Control
                    id='find_reservation'
                    placeholder="Buscar Reserva"
                    aria-label="Buscar Reserva"
                    aria-describedby="basic-addon2"
                    onChange={changeKey}
                />
                <Button variant="dark" id="button-addon2" onClick={makeFetch}>
                    Buscar <FcSearch size={25} />
                </Button>
            </InputGroup>
        </>
    )
}

export default FindRes