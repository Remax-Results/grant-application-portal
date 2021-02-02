import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Table, Container, Row} from 'react-bootstrap';
import AppTableList from './AppTableList.jsx';

export default function Admin() {
    const dispatch = useDispatch();
    const appTableData = useSelector(state=>state.appTableData);
    useEffect(() => {dispatch({type: 'FETCH_APP_TABLE_DATA'})}, [dispatch]);

    return(
        <Container>
            <Card>
                <Card.Header style={{backgroundColor: '#1C479A', color: 'white'}}>Welcome, Administrator!</Card.Header>
                <Card.Text style={{}}>The current grant window is: </Card.Text>
            </Card>
            <Row style={{display:'flex', justifyContent:'center'}}><h2>Applications</h2></Row>
            <Table striped bordered hover >
                <thead style={{backgroundColor:'#1C479A', color: 'white'}}>
                    <tr>
                        <th>Organization Name</th>
                        <th>Contact Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Budget Requested</th>
                        <th>Area of Focus</th>
                        <th>Date Recieved</th>
                        <th>Status</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {appTableData.length > 0 && appTableData.map((app)=>(
                        <AppTableList app={app}/>)
                    )}
                </tbody>
            </Table>
        </Container>
    )
}