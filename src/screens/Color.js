import React from 'react';
import './App.css';
import imagen1 from '../images/ringcolor1.jpeg';
import imagen2 from '../images/ringcolor2.jpeg';
import imagen3 from '../images/ringcolor3.jpeg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


function Color() {
  return (
    <Container>
      <Row className="row1">
        <Col className="row6"> 
        <img src={imagen1} height="220" width="250"/>
        <h4>Oro blanco</h4>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col className="row5"> 
        <img src={imagen2} height="220" width="250"/>
        <h4>Oro amarillo</h4>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col className="row7"> 
        <img src={imagen3} height="220" width="250"/>
        <h4>Oro rosado</h4>
        <Form.Check aria-label="option 1"/>
        </Col>
      </Row>
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
  <Row className="colork">
    <Col sm={4} className="colortitle">
      <ListGroup>
        <ListGroup.Item action variant="success" action href="#link1">
          10 Kilates
        </ListGroup.Item>
        <ListGroup.Item action variant="success" action href="#link2">
          14 Kilates
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
    </Col>
  </Row>
</Tab.Container>
<Row className="backnext">
        <ButtonToolbar>
        <Button className="leftbutton" href="./" variant="dark" >&larr; Back</Button>
        <Button href="./detail" variant="success" > Next &rarr; </Button>

        </ButtonToolbar>
            
        </Row>
    </Container>
    );
}

export default Color;