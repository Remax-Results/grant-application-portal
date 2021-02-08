import React from 'react';
import {useDispatch} from 'react-redux';
import { ImSortAlphaAsc, ImSortAlphaDesc, ImSortNumericAsc, ImSortNumbericDesc } from "react-icons/im";
import {DropdownButton, Dropdown} from 'react-bootstrap';


export default function HeaderDropdown({title, col}) {
    const dispatch = useDispatch();

    return (
        <th>
            <DropdownButton title={title}>
                <Dropdown.Item 
                    onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: col, desc: false}})}>
                    {title==="Budget Requested" ? <ImSortNumericAsc/> : <ImSortAlphaAsc />}
                </Dropdown.Item>
                <Dropdown.Item 
                    onSelect={()=>dispatch({type:'SORT_ADMIN_TABLE', payload: {col: col, desc: true}})}>
                    {title ==="Budget Requested" ? <ImSortNumbericDesc/> : <ImSortAlphaDesc />}
                </Dropdown.Item>
            </DropdownButton>
        </th>
    )

}