import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Sex = () => {
    return (
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Casa">
            Inicio
          </Tab>
          <Tab eventKey="profile" title="Perfil">
            Todo acerca de Realidad virtual
          </Tab>
          <Tab eventKey="contact" title="Contactanos" disabled>
            Cualquier consulta a este correo davidArmas@gmail.com
          </Tab>
        </Tabs>
      );
}

export default Sex
