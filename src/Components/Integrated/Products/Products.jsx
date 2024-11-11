import React from 'react'
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import './Products.css';
import EditProd from './EditProd';
import DeleteProd from './DeleteProd';
import { Col, Container, Row } from "react-bootstrap";
import { FcSearch,FcPlus } from "react-icons/fc";


const Products = () => {

    // Data
    const rows = [
        { id: 1, producto: "Johny walker N", precio: 30, categoria: 5, stock: 150 },
        { id: 2, producto: "Vino Alice", precio: 25, categoria: 5, stock: 150 },
        { id: 3, producto: "Coca Cola", precio: 35, categoria: 5, stock: 150 },
        { id: 4, producto: "Plato Adulto", precio: 28, categoria: 5, stock: 150 },
        { id: 5, producto: "Gatorade", precio: 32, categoria: 5, stock: 150 },
        { id: 6, producto: "Michel Torino", precio: 40, categoria: 5, stock: 150 },
        { id: 7, producto: "Ensalada de Oliva", precio: 22, categoria: 5, stock: 150 },
        { id: 8, producto: "Plato Niño", precio: 40, categoria: 5, stock: 150 },
        { id: 9, producto: "Olivia", precio: 22, categoria: 5, stock: 150 },
        { id: 10, producto: "Michael", precio: 40, categoria: 5, stock: 150 },
        { id: 11, producto: "Olivia", precio: 22, categoria: 5, stock: 150 }
    ];


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
                            <th colSpan={6} className='bg-dark text-white'> Productos</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio U.</th>
                            <th>Categoría</th>
                            <th>Stock</th>
                            <th> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.producto}</td>
                                <td>{row.precio}</td>
                                <td>{row.categoria}</td>
                                <td>{row.stock}</td>
                                <td>
                                    <EditProd prod={row} />
                                    <DeleteProd prod={row} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* <div>
                <Button variant="success" className='me-auto'>Agregar +</Button>
                <Button variant="danger"className='me-auto'>Quitar -</Button>
                <Button variant="dark"className='me-auto'>Cerrar Cuenta</Button>
            </div> */}

            <Container fluid className="mx-auto p-2">
                <Row className="mx-0">
                    <Col className="col-md-6 ">
                        <Button variant="success">Agregar <FcPlus size={25}/> </Button>
                    </Col>
                    <Col className="col-md-6">
                        <Button variant="dark" className='me-auto'>Buscar <FcSearch size={25}/></Button>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Products