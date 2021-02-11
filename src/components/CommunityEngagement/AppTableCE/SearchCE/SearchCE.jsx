import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';


export default function Search() {
    const dispatch=useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:'SEARCH_CE_TABLE', payload: searchValue});
    }

    return(
        <Container>
           
                <Form onSubmit={(event)=>{handleSubmit(event)}}>
                        <Form.Group as={Row}>
                            <Col xs={6}>
                                <Form.Control
                                onChange={(event)=>{setSearchValue(event.target.value)}}
                                value={searchValue}
                                />
                            </Col>
                        <Col>
                            <Button type="submit">Search</Button>
                            <Button style={{marginLeft:'10px'}} variant="danger" size="sm" 
                                onClick={()=>{
                                    dispatch({type:'FETCH_CE_APP_TABLE_DATA'});
                                    setSearchValue('');
                                }}>
                                    Clear Search
                            </Button>
                        </Col>    
                        </Form.Group>
                </Form>         
        </Container>
    )
}