import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css"
import ZoomBanner from "./Zoom-Banner/ZoomBanner";
import Asados from "../../../assets/Asados/Asados";


function Home() {
    return (
        <>
            <Container className="content mx-4">

                <Row>
                    <Asados />
                </Row>

                <Row>
                    <Col>
                        <ZoomBanner fluid className="contenedor mx-0" />
                    </Col>
                </Row>

                <Row>
                    <Asados />
                </Row>

            </Container>
        </>
    );
}

export default Home;