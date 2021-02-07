import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

export default function Details(props){

    const { details } = props;
    // budget, contact_name, phone, username, focus
    return(
            <Container style={{backgroundColor:'white'}}>
            <p><b>Contact Name</b>: {details.contact_name}</p>
            <p><b>Email</b>: {details.username}</p>
            <p><b>Phone</b>: {details.phone}</p>
            <p><b>Area of Focus</b>: {details.focus}</p>
            <p><b>Budget</b>: {details.budget}</p>
            </Container>    
    )
}