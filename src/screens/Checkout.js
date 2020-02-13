import React from 'react';
import './App.css';
import imagen1 from '../images/ringcheck.jpg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function Checkout() {
    
  return (
<Container>
<Row className="row2">
<Col className="row4"><img src={imagen1} height="350" width="300" />
<Row className="row4">
  <Col>
  <h5>Precio</h5>
  <h5>Número de artículo</h5>
  <h5>Metal</h5>
  <h5>Diamante incoloro</h5>
  <h5>Talla anillo</h5>
  </Col>
  <Col>
  <h5>$10,000 MXN</h5>
  <h5>87440</h5>
  <h5>Oro blanco 14K</h5>
  <h5>0.40 pts</h5>
  <h5>6.5cm</h5>
  </Col>
</Row>
<Row>
<Col>
<h5>Datos del cliente</h5>
<Form>
<Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Nombre
    </Form.Label>
    <Col sm="10">
      <Form.Control type="name" placeholder="Ingrese su nombre" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="name" placeholder="Ingrese su email" />
    </Col>
  </Form.Group>
</Form>
</Col>
</Row>

</Col>
<Col className="row4">
<h4>Peso diamante en quilates</h4>
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col className="row3" sm={4}>
      <ListGroup>
        <ListGroup.Item action variant="success" action href="#link1">
          0.25
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link2">
          0.30
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link3">
          0.40
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link4">
          0.50
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link5">
          0.70
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
    </Col>
  </Row>
</Tab.Container>

<h4>Talla de anillo</h4>
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col className="row3" sm={4}>
      <ListGroup>
        <ListGroup.Item action variant="success" action href="#link1">
          4.0
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link2">
          4.5
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link3">
          5.0
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link4">
          5.5
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link5">
          6.0
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link6">
          6.5
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
    </Col>
  </Row>
</Tab.Container>
</Col>
</Row>  

<Row className="backnext2">
<Button variant="primary" type="submit">
    Enviar
  </Button>
<Button href="./detail" variant="dark" type="submit">
    &larr; Back
  </Button>
</Row>

</Container>



    );
}

export default Checkout;