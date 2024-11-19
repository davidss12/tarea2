import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';import 'bootstrap/dist/css/bootstrap.min.css';


const Segundo = () => {
  return (
    
        <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/imagenes/1.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/2.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/3.jpg" thumbnail />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/imagenes/4.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/5.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/6.jpg" thumbnail />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/imagenes/7.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/8.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/9.jpg" thumbnail />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/imagenes/10.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/11.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="/imagenes/12.jpg" thumbnail />
          </Col>
        </Row>
      </Container>
    
  )
}

export default Segundo
