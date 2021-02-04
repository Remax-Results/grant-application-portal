import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table, Button, Modal, InputGroup, FormControl, Dropdown} from 'react-bootstrap';


const SubHeader = styled.p `
    font-size: 1.4rem;
    text-decoration: underline;
`

export default function NotesReport(props) {
    const {n} = props;
    return (
        <Container>
            <p><b>Last Modified</b> {n.date_added}</p>
            <p>{n.review_note}</p>
        </Container>
    )
}