import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Map from "../Map/Map";

function Footer() {
    return (
        <Container fluid className="mx-auto bg-dark p-2">
            <Row className="mx-0">
                <Col className="col-md-8 col-lg">
                    <Card className="m-1">
                        <Map className=""/>
                        <Card.Footer>
                            <small className="text-muted">Ubicación</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="col-sm-6  col-md-4">
                    <Card className="m-1">
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light text-nowrap">Horarios de atencion:</Card.Title>
                            <Card.Text className="text-light">
                            Av. Sarmiento 8080
                            <br/> 
                            -         
                            <br/> 
                            Martes a Domingos 
                            <br/> 
                            11:00 - 14:30 hs
                                <></> 
                                <></>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Nuestros Horarios</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="col-md-12 col-lg-12 col-xxl-4">
                    <Card className="m-1">
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-light ">Contáctanos</Card.Title>
                            <Container>
                            <Row>
                                    <Col>
                                        <Link className="me-2 text-light" href="#/Whatsapp" >Whatsapp</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Link className="me-2 text-light" href="/about" >Instagram</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Link className="me-2 text-light" href="/about" >Facebook</Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Link className="me-2 text-light" href="/contact" >Tweeter</Link>
                                    </Col>
                                </Row>
                                </Container>

                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Nuestras Redes Sociales</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Footer;