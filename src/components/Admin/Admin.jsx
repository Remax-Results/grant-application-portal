import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table, Container, Row} from 'react-bootstrap';
import AppTableList from './AppTable/AppTableList.jsx';
import AdminTitle from './AdminTitle/AdminTitle.jsx';
import HeaderDropdown from './AppTable/HeaderDropdown.jsx';
import Filter from './Filter/Filter.jsx';

export default function Admin() {
    const dispatch = useDispatch();
    const appTableData = useSelector(state=>state.appTableData);
    useEffect(() => {dispatch({type: 'FETCH_APP_TABLE_DATA'})}, [dispatch]);
 
    return(
        <>
        <Container>
            <AdminTitle />
            <Row style={{display:'flex', justifyContent:'center'}}><h2>Applications</h2></Row>
        </Container>
        <Filter />
        <Container fluid>
            <Table 
                striped 
                bordered 
                hover 
                
            >
                <thead style={{backgroundColor:'#1C479A', color: 'white'}}>
                    <tr>
                        <HeaderDropdown title="Organization" col="1"/>
                        <HeaderDropdown title="Contact" col="2"/>  
                        <th>Phone</th>
                        <th>Email</th>
                        <HeaderDropdown title="Budget" col="3"/>
                        <HeaderDropdown title="Area of Focus" col="4"/>
                        <HeaderDropdown title="Date Recieved" col="5"/>
                        <HeaderDropdown title="Status" col="6"/>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {appTableData.length > 0 && appTableData.map((app)=>(
                        <AppTableList key={app.id} app={app}/>)
                    )}
                </tbody>
            </Table>

        </Container>
            </>
    )
}