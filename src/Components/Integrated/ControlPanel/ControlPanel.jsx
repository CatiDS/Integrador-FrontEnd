import React from 'react'
import { Container } from 'react-bootstrap'
import ControlNav from './ControlNav'


const ControlPanel = () => {
  return (
    <Container fluid>
        <ControlNav/>
      <div>
        <p>
            Recuerde abrir las reservas antes de iniciar la jornada
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ea fugit ullam, alias praesentium natus incidunt quo excepturi voluptates. Velit laborum, iure blanditiis odit quos dignissimos! Dolores animi dolorem ducimus.
        </p>
      </div>
    </Container>
  )
}

export default ControlPanel
