import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table, Button, Modal, InputGroup, FormControl, Dropdown} from 'react-bootstrap';


export default function PrintableReport() {
    const {id} = useParams();
    const history = useHistory();

    return (
        <Container>
            <Button onClick={()=>{history.push('/admin')}}>Back to Admin Main Page</Button>
        </Container>
        
        )
}