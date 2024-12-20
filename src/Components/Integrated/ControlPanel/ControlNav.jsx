import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from "../Tables/Tables";
import Products from "../Products/Products";
import Reservation from "../Reservation/Reservation";
import BigCalendar from "../BigCalendar/BigCalendar";
import { Button, Container, TabContainer, TabPane } from "react-bootstrap";
import NewReservation from "../Reservation/NewReservation";
import Users from "../Users/Users";
// import clientes from "../Users/dataClients";



function ControlNav() {

  const [isActive, setActive] = useState(true);
  const [client, setClient] = useState(true);
  const [waiter, setwaiter] = useState(true);
  const [cashier, setCashier] = useState(true);
  const rol = localStorage.getItem("loggedRol");

  const nroMesas = [];

  var i = 1;
  while (i <= 20) {
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

{rol != "cliente" &&
(renderMesas({ isActive }))
      //  if ({isActive}) {
        // tabClassName="nav-link disabled" desactiva al padre ClassName="nav-link disabled" desactiva los hijos
      //   <Tab eventKey="mesas" title="Mesas" tabClassName="nav-link hidden" hidden={isActive}>
      //   {
      //     nroMesas.map((nros) => {
      //       return <Tables key={nros} nro={nros} />
      //     })
      //   }

      // </Tab>
      // }

}

      <Tab eventKey="reservas" title="Reservas" tabClassName="nav-link p-2">
        {/* <Reservation /> Ver si es necesario */}
        <NewReservation className="align-self-end" />
        {/* <Button className="ms-0" onClick={armandoMesas}>  Armar mesas </Button> */}

        <BigCalendar />
        {/* <Button onClick={armandoMesas}>  Armar mesas </Button> */}
      </Tab>

      {(rol == "administrador"||rol == "cajero")&&
        <Tab eventKey="productos" title="Productos" tabClassName="nav-link p-2">
        <Products />
      </Tab>
      }

      <Tab eventKey="clientes" title="Datos de Usuario" tabClassName="nav-link p-2">
        <Users />
      </Tab>
    </Tabs>


  );
}

export default ControlNav;