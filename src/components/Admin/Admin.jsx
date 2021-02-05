import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Table, Container, Row, DropdownButton, Dropdown} from 'react-bootstrap';
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
                        <th>
                            <DropdownButton title="OrgName">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ORG_NAME_ASC'})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ORG_NAME_DESC'})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>
                            <DropdownButton title="Contact Name">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_CONTACT_ASC'})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_CONTACT_DESC'})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>
                            <DropdownButton title="Budget Request">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_BUDGET_ASC'})}>1-10</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_BUDGET_DESC'})}>10-1</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>
                            <DropdownButton title="Area of Focus">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_FOCUS_ASC'})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_FOCUS_DESC'})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>Date Recieved</th>
                        <th>
                            <DropdownButton title="Status">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_STATUS_ASC'})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_STATUS_DESC'})}>Z-A</Dropdown.Item>
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