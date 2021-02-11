import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppTableListCE from './AppTableListCE.jsx';
import { Table, Container } from 'react-bootstrap';
import HeaderDropdownCE from './HeaderDropdownCE.jsx';



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
                            <HeaderDropdownCE title="Organization" col="1"/>
                            <HeaderDropdownCE title="Contact" col="2"/>  
                            <th>Phone</th>
                            <th>Email</th>
                            <HeaderDropdownCE title="Budget" col="3"/>
                            <HeaderDropdownCE title="Area of Focus" col="4"/>
                            <HeaderDropdownCE title="Date Recieved" col="5"/>
                            <HeaderDropdownCE title="Status" col="6"/>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ceAppTableData.length > 0 && ceAppTableData.map((app)=>(
                            <AppTableListCE key={app.id} app={app}/>)
                        )}
                    </tbody>
                </Table>
        </Container>
    )
}