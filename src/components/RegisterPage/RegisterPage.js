import React from 'react';
import { useHistory } from 'react-router-dom';
//import './RegisterPage.css';
import {Card, Container, Row, Col, Button, Image} from 'react-bootstrap';
import veggies from '../../images/dan-gold-4_jhDO54BYg-unsplash.jpg'

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

export default function RegisterPage() {

  const history = useHistory();

    return (
      <Container>
        <Row>
          <Card>
            <Card.Header style={{backgroundColor:'#1C479A', color: 'white'}}>
              <h2>Welcome to the Results Foundation Application Portal!</h2>
            </Card.Header>
            <Card.Body>
              <h4>Please take a moment to register your organization with us before moving on to the grant application</h4>
            </Card.Body>
          </Card>
        </Row>
        <Row>
            <RegisterForm />
        </Row>
          

          <center>
            <p>Already registered?</p>
            <Button
              variant= 'primary'
              type="button"
              className="btn btn_asLink"
              onClick={() => {
                history.push('/login');
              }}
            >
              Login
            </Button>
          </center>
      </Container>
    );
};