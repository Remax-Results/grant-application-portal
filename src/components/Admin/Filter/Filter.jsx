import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Dropdown, Button} from 'react-bootstrap';


export default function Filter () {
   const dispatch = useDispatch();
   const [filterValue, setFilterValue] = useState('none');

   const [column, setColumn] = useState(0);
   const reviewStatus = useSelector(state=>state.reviewStatus);
   const focusArea = useSelector(state=>state.focusArea);
   return(
    <Container>
        <h3>Filter Settings</h3>
        <Row>
            <Dropdown style={{margin:"10px"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Filter Column
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onSelect={()=>{setColumn(1); setFilterValue('none')}}>Area of Focus</Dropdown.Item>
                    <Dropdown.Item onSelect={()=>{setColumn(2); setFilterValue('none')}}>Status</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {column === 0 && <p>Filtering Column: none</p>}
            {column === 1 && <p>Filtering Column: Area of Focus</p>}
            {column === 2 && <p>Filtering Column: Status</p>}
            <Dropdown style={{margin:"10px"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter By
                </Dropdown.Toggle>
                {column === 1 ? 
                        <Dropdown.Menu>
                            {focusArea.map((f)=>
                                <Dropdown.Item onSelect={()=>
                                    {
                                        dispatch({type:'FILTER_FOCUS', payload: f.id});
                                        setFilterValue(f.focus);
                                    }}>
                                        {f.focus}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    : column === 2 ?
                        <Dropdown.Menu>
                            {reviewStatus.map((r)=>
                                <Dropdown.Item onSelect={()=>
                                    {
                                        dispatch({type:'FILTER_STATUS', payload: r.status});
                                        setFilterValue(r.status);
                                    }}>
                                    {r.status}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    : <Dropdown.Menu>Select Column First</Dropdown.Menu>
                }
                </Dropdown>
            <p>Filtering by: {filterValue}</p>
            <Button style={{marginLeft:'10px'}} variant="danger" size="sm" 
                    onClick={()=>{
                        dispatch({type:'FETCH_APP_TABLE_DATA'});
                        setFilterValue('none');
                        setColumn(0);
                    }}>
                        Clear Filter
                </Button>
        </Row>
    </Container>
    )
}