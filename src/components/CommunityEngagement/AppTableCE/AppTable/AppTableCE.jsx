import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppTableList from './AppTableList.jsx';
import { Table, Container } from 'react-bootstrap';
import HeaderDropdown from './HeaderDropdown.jsx';



export default function AppTable() {

    const dispatch = useDispatch();
    const ceAppTableData = useSelector(state=>state.ceAppTableData);

    return (
        <Container fluid>
            {JSON.stringify(ceAppTableData)}
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
                        {ceAppTableData.length > 0 && ceAppTableData.map((app)=>(
                            <AppTableList key={app.id} app={app}/>)
                        )}
                    </tbody>
                </Table>
        </Container>
    )
}