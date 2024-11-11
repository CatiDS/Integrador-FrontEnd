
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const EditProd = (props) => {

    const [show, setShow] = useState(false);
    
    const [product, setproduct] = useState(props.prod.producto);
    const [price, setPrice] = useState(props.prod.precio);
    const [category, setCategory] = useState(props.prod.categoria);
    const [stock, setStock] = useState(props.prod.stock);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeProduct = (e) => setproduct(e.target.value);
    const changePrice = (e) => setPrice(e.target.value);
    const changeCategory = (e) => setCategory(e.target.value);
    const changeStock = (e) => setStock(e.target.value);

    const handleCancel =()=>{
        setproduct(props.prod.producto);
        setPrice(props.prod.precio);
        setCategory(props.prod.categoria);
        setStock(props.prod.stock);
    
        handleClose();
    }

    const mostrar = ()=> console.log("todo ok, implementar el cambio put a db");
    // const [tables, setTables]= useState([]);
    // useEffect(
    //     ()=>{
    //         fetch('URL').then(response=>response.json()).then(data=>setTables(data));
    //     },
    //     [funcion de disparo]
    // )


return (
        <>

            <Button className="p-0 mx-2 btn btn-outline-light bg-transparent" type="button" onClick={handleShow}>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#606" className="bi bi-pencil-square icon" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>

            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='cristal px-0'

            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder fs-3 text-nowrap text-dark'> Editar Productos </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>

                        <FloatingLabel
                            controlId="floatingName"
                            label="Nombre"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Nombre" defaultValue={props.prod.producto} onChange={changeProduct}/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Precio"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Precio" defaultValue={props.prod.precio} onChange={changePrice} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingCategory"
                            label="Categoria"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Categoria" defaultValue={props.prod.categoria} onChange={changeCategory}/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Stock"
                            className="mb-3 "
                        >
                            <Form.Control type="text" placeholder="Stock" defaultValue={props.prod.stock} onChange={changeStock}/>
                        </FloatingLabel>

                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button variant="dark" onClick={mostrar}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}

export default EditProd