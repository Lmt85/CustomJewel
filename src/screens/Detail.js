import React from 'react';
import './App.css';
import imagen1 from '../images/ringdetail1.jpeg';
import imagen2 from '../images/ringdetail2.jpeg';
import imagen3 from '../images/ringdetail4.jpeg';
import imagen4 from '../images/ringdetail5.jpeg';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


function Detail() {
 

  return (
      
    <Container>
        <Row>
        <div className="Carousel1">
        <Carousel width={550} >
                <div>
                    <img src={imagen2} />
                </div>
                <div>
                    <img src={imagen1} />
                </div>
                <div>
                    <img src={imagen3} />
                </div>
                <div>
                    <img src={imagen4} />
                </div>
            </Carousel> 
        </div>
        </Row>
        <Row className="backnext">
        <ButtonToolbar>
        <Button className="leftbutton" href="./color" variant="dark" >&larr; Back</Button>
        <Button href="./checkout" variant="success" > Next &rarr; </Button>

        </ButtonToolbar>
            
        </Row>
    </Container>
    
    );
}

export default Detail;
