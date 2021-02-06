import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Score from './Score.jsx';


export default function ScoreComponent(props) {
    const {qANDa} = props;
    return (
        <>
        {qANDa.map(q=>(
            <Container style={{backgroundColor:'white'}}>
                <Row style={{minHeight:'100px', border: '1px solid #303030'}}>
                    <Col style={{backgroundColor:'#1C479A', color: 'white'}}><Question qANDa = {q}/></Col>
                     <Col  xs={8}><Answer qANDa = {q}/></Col>
                    <Col  xs={4}><Score qANDa = {q}/></Col>
                </Row>
            </Container>
        ))}
        </>
    )
}