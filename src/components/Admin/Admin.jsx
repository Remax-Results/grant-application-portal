import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Table, Container, Row, DropdownButton, Dropdown} from 'react-bootstrap';
import AppTableList from './AppTableList.jsx';
import moment from 'moment';


export default function Admin() {
    const dispatch = useDispatch();
    let disbursement = 0;
    const appTableData = useSelector(state=>state.appTableData);
    const {start_date, end_date, funds_available} = useSelector(state=>state.currentWindow);
    useEffect(() => {dispatch({type: 'FETCH_APP_TABLE_DATA'})}, [dispatch]);
    const calculateAvailable = () => {
        appTableData.map((app)=>(app.status==='Accepted' ? disbursement += Number(app.budget) : disbursement))
        return disbursement;
    }

    return(
        <Container>
            <Card>
                <Card.Header style={{backgroundColor: '#1C479A', color: 'white'}}>Welcome, Administrator!</Card.Header>
                {start_date ? <Card.Text style={{}}>The current grant window is from {moment(start_date).format('LL')} until {moment(end_date).format('LL')} </Card.Text> :
                    <Card.Text style={{}}>There is not currenty an open grant window</Card.Text>}
                {start_date && <Card.Text>Total Funds Initially Available: ${funds_available} </Card.Text>}
                {start_date && <Card.Text>Total Funds Currently Available : ${funds_available - calculateAvailable() }</Card.Text>}
            </Card>
            <Row style={{display:'flex', justifyContent:'center'}}><h2>Applications</h2></Row>
            <Table striped bordered hover >
                <thead style={{backgroundColor:'#1C479A', color: 'white'}}>
                    <tr>
                        <th>
                            <DropdownButton title="OrgName">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 1, desc: false}})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 1, desc: true}})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>
                            <DropdownButton title="Contact Name">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 2, desc: false}})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 2, desc: true}})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>
                            <DropdownButton title="Budget Request">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 3, desc: false}})}>1-10</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 3, desc: true}})}>10-1</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>
                            <DropdownButton title="Area of Focus">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 4, desc: false}})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 4, desc: true}})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>Date Recieved</th>
                        <th>
                            <DropdownButton title="Status">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 5, desc: false}})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 5, desc: true}})}>Z-A</Dropdown.Item>
                            </DropdownButton></th>
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