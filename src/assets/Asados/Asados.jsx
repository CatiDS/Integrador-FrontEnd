import React from "react";
import Images from '../images/Images.js'
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Asados.css"



const Asados = () => {
    return (
        <>
            <h2 className="title_v">El mejor Asado!</h2>
            {
                Images.map((imagenes, i) => (
                    <Col key={i}>
                        <Card className="containBox bg-transparent border-0">
                            <Card.Body className="rounded-4 asadoBox">
                                <Card.Img variant="top" key={i} src={imagenes.image} alt={imagenes.alt} className="rounded-4 asados" />
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </>

    )
}

export default Asados
