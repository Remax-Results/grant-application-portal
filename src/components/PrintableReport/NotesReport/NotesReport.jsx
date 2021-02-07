import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


export default function NotesReport(props) {
    const {n} = props;
    return (
        <Container>
            <p><b>Last Modified</b> {n.date_added}</p>
            <p>{n.review_note}</p>
        </Container>
    )
}