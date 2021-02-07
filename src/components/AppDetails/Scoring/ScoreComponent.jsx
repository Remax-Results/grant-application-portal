import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import Score from './Score.jsx';


export default function ScoreComponent(props) {
    const {qANDa} = props;
    return (
        <>
        {qANDa.map(q=>(
            <Container style={{backgroundColor:'white'}}>
                <Row style={{minHeight:'100px', border: '1px solid #303030'}}>
                    <Col style={{backgroundColor:'#1C479A', color: 'white'}}>{q.question_text}</Col>
                     <Col  xs={8}>{q.answer_text}</Col>
                    <Col  xs={4}><Score q = {q}/></Col>
                </Row>
            </Container>
        ))}
        </>
    )
}