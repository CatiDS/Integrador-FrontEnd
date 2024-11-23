import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import "./notFound.css"



function notFound() {
    return (
        <>
            <Container className="content mx-4" >
                <Row className="row">
                    <Col>
                        <h2> Nada Puede Malir Sal...</h2>
                    </Col>
                </Row>
                <Row className="row">
                    <Col>
                        <h2> OPSS..</h2>
                    </Col>
                </Row>
                <Row className="row">
                    <Col>
                        <h2> Parece que estamos perdidos....</h2>
                    </Col>
                </Row>
                <Row className="row">
                <Col>
                        <h2> Pero siempre habra una salida. </h2>
                    </Col>
                    <Col>
                        <Button variant="success" className="salida p-2 my-5 mx-2 btn btn-outline-light "> Volver a empezar </Button>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default notFound;