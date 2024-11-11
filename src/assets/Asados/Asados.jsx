import React from "react";
import Images from '../images/Images.js'
import { Card, Col, Container, Row } from "react-bootstrap";




const Asados = () => {
    return (
        <>
            {
            Images.map((imagenes, i) => (
                    <Col key={i}>
                        <Card className="m-1">
                            <Card.Body className="bg-dark rounded-4">
                                <Card.Title className="text-light text-nowrap">Imagen</Card.Title>
                                <Card.Img variant="top" key={i} src={imagenes.image} alt={imagenes.alt}/>
                                <Card.Text className="text-light">
                                    El mejor Asado!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </>

    )
}



// const Asados = () => {

//          Images.map((imagenes,i)=>{
//             return (

//                       <Col>
//                           <Card className="m-1">
//                               <Card.Body className="bg-dark rounded-4">
//                                   <Card.Title className="text-light text-nowrap">Imagencita</Card.Title>
//                                   {/* <Card.Img variant="top" src={imagenes.image} alt={imagenes.alt}/> */}
//                                   {/* <p>(imagenes.alt," ", i+1)</p> */}
//                                   <Card.Text className="text-light">
//                                       a ver {imagenes.alt} {i+1}
//                                   </Card.Text>
//                               </Card.Body>
//                           </Card>
//                       </Col>

//               )
//               }

//     )
//   }
export default Asados
