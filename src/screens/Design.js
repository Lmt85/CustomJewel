import React from 'react';
import './App.css';
import imagen1 from '../images/ringmodel1.jpeg';
import imagen2 from '../images/ringmodel2.jpeg';
import imagen3 from '../images/ringmodel3.jpeg';
import imagen4 from '../images/ringmodel4.jpeg';
import imagen5 from '../images/ringmodel5.jpeg';
import imagen6 from '../images/ringmodel6.jpeg';
import imagen7 from '../images/ringmodel7.jpeg';
import imagen8 from '../images/ringmodel8.jpeg';
import imagen9 from '../images/ringmodel9.jpeg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function Design() {
  return (
    <Container>
      <Row className="row1">
        <Col><h2>Clásico</h2></Col>
        <Col><h2>Moderno</h2></Col>
        <Col><h2>Vintage</h2></Col>
      </Row>
      <Row>
        <Col>
        <img src={imagen1} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col>
        <img src={imagen2} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col>
        <img src={imagen3} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
      </Row>
      <Row>
      <Col>
        <img src={imagen4} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col>
        <img src={imagen5} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col>
        <img src={imagen6} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
      </Row>
      <Row>
      <Col>
        <img src={imagen7} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col>
        <img src={imagen8} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
        <Col>
        <img src={imagen9} height="176" width="210"/>
        <Form.Check aria-label="option 1"/>
        </Col>
      </Row>
      <Row className="backnext">
        <ButtonToolbar>
        <Button className="leftbutton" href="./color" variant="success" >Next &rarr; </Button>
        </ButtonToolbar>
            
        </Row>

    </Container>
  
     
    //<ToggleButton value={1}>Option 1</ToggleButton>
    
  );
}

export default Design;