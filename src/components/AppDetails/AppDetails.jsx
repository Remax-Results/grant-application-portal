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
    const qANDa = useSelector(state => state.qANDa);
    useEffect(() => {dispatch({type: 'FETCH_DETAILS_DATA', payload: id})}, [dispatch]);
    return(
        <div>
            <Card>
                <Card.Header>{detailsData && detailsData.org_name}</Card.Header>
            </Card>
            {qANDa.length > 0 && qANDa.map(q=>(
                <Container>
                    <Row>
                        <Col><Question qANDa = {q}/></Col>
                        <Col><Answer qANDa = {q}/></Col>
                        <Col><Score qANDa = {q}/></Col>
                    </Row>
                </Container>
                ))
            }
        </div>
    )
}