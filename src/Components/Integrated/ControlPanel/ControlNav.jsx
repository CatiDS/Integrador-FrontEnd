import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from "../Tables/Tables";
import Products from "../Products/Products";
import Reservation from "../Reservation/Reservation";
import BigCalendar from "../BigCalendar/BigCalendar";
import { Button, Container, TabContainer, TabPane } from "react-bootstrap";
import NewReservation from "../Reservation/NewReservation";
import Clients from "../Clients/Clients";
import clientes from "../Clients/dataClients";



function ControlNav() {

  const [isActive, setActive] = useState(true);

  const nroMesas = [];

  var i = 1;
  while (i <= 10) {
    nroMesas.push(i);
    i += 1;
  }

  function armandoMesas() {
    setActive(!isActive);
  }


  function renderMesas(visible) {
    if (visible.isActive == true) {
      const mostrar = (
        <Tab eventKey="mesas" title="Mesas" tabClassName="nav-link p-2">
          {
            nroMesas.map((nros) => {
              return <Tables key={nros} nro={nros} />
            })
          }

        </Tab>
      )
      return mostrar;
    }
  }


  return (


    <Tabs
      defaultActiveKey="mesas"
      id="control-panel-tabs"
      className="mb-3 shadow mx-0"
      justify
      text-color="link dark"
      bs-nav-link-color="link-dark"
    >
      {(renderMesas({ isActive }))}
      {/* if ({isActive}) {
        // tabClassName="nav-link disabled" desactiva al padre ClassName="nav-link disabled" desactiva los hijos
        <Tab eventKey="mesas" title="Mesas" tabClassName="nav-link hidden" hidden={isActive}>
        {
          nroMesas.map((nros) => {
            return <Tables key={nros} nro={nros} />
          })
        }

      </Tab>
      } */}

      <Tab eventKey="reservas" title="Reservas" tabClassName="nav-link p-2">
        {/* <Reservation /> Ver si es necesario */}
        {/* <Container flex className="flex"> */}
          <NewReservation className="align-self-end"/>
          <Button className="ms-0" onClick={armandoMesas}>  Armar mesas </Button>
        {/* </Container> */}

        <BigCalendar />
        <Button onClick={armandoMesas}>  Armar mesas </Button>
      </Tab>

      <Tab eventKey="productos" title="Productos" tabClassName="nav-link p-2">

        <Products />

      </Tab>
      <Tab eventKey="clientes" title="Usuarios" tabClassName="nav-link p-2">
        <Clients rows={clientes}/>
      </Tab>
    </Tabs>


  );
}

export default ControlNav;