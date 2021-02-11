import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppTableList from './AppTableList.jsx';
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";
import {Table, DropdownButton, Dropdown, Button} from 'react-bootstrap';



export default function AppTable() {
    const dispatch = useDispatch();
    const appTableData = useSelector(state=>state.appTableData);

    return (
        <Table striped bordered hover >
                <thead style={{backgroundColor:'#1C479A', color: 'white'}}>
                    <tr>
                        <th>
                            <DropdownButton title="OrgName">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 1, desc: false}})}><ImSortAlphaAsc /></Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 1, desc: true}})}><ImSortAlphaDesc /></Dropdown.Item>
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
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 3, desc: false}})}>Low-High</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 3, desc: true}})}>High-Low</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>
                            <DropdownButton title="Area of Focus">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 4, desc: false}})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 4, desc: true}})}>Z-A</Dropdown.Item>
                            </DropdownButton>
                        </th>
                        <th>
                            <DropdownButton title="Date Recieved">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 5, desc: false}})}>Recent-Earlier</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 5, desc: true}})}>Earlier-Recent</Dropdown.Item>
                            </DropdownButton></th>
                        <th>
                            <DropdownButton title="Status">
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 6, desc: false}})}>A-Z</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: 6, desc: true}})}>Z-A</Dropdown.Item>
                            </DropdownButton></th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {appTableData.length > 0 && appTableData.map((app)=>(
                        <AppTableList key={app.id} app={app}/>)
                    )}
                </tbody>
            </Table>
    )
}