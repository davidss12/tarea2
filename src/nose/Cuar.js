import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const Cuar = () => {
    return (
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
          Realidad virtual inmersiva
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
          Realidad virtual mixta
          </ListGroup.Item>
          <ListGroup.Item as="li">Realidad virtual inmersiva total</ListGroup.Item>
        </ListGroup>
      );
    }


export default Cuar
