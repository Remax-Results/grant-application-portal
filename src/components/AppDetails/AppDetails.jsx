import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row} from 'react-bootstrap';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Score from './Score.jsx';

export default function AppDetails(){
    const {id} = useParams();
    let budget = 0;
    const dispatch = useDispatch();
    const detailsData = useSelector(state => state.detailsData);
    const question = useSelector(state => state.question);
    useEffect(() => {dispatch({type: 'FETCH_DETAILS_DATA', payload: id})}, [dispatch]);
    return(
        <div>
            <Card>
                <Card.Header>{detailsData && detailsData.org_name}</Card.Header>
            </Card>
            {question.length > 0 && question.map(q=>(
                <Container>
                    <Row>
                        <Col><Question question = {q}/></Col>
                        <Col><Answer question = {q}/></Col>
                        <Col><Score question = {q}/></Col>
                    </Row>
                </Container>
                ))
            }
        </div>
    )
}