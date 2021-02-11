import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Dropdown, Button, InputGroup, Form, FormControl} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Filter () {
   const dispatch = useDispatch();
   const [filterValue, setFilterValue] = useState('none');
   const [column, setColumn] = useState(0);
   const [budgetLow, setBudgetLow] = useState(0);
   const [budgetHigh, setBudgetHigh] = useState(0);
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const reviewStatus = useSelector(state=>state.reviewStatus);
   const focusArea = useSelector(state=>state.focusArea);
   const handleBudgetFilter = (event) => {
       event.preventDefault();
       dispatch({type:'FILTER_BUDGET', payload: {budgetLow:budgetLow, budgetHigh: budgetHigh}});
   }
   const handleDateFilter = (event) => {
       event.preventDefault();
       let startDateConv = convert(startDate);
       let endDateConv = convert(endDate);
       dispatch({type: 'FILTER_DATES', payload: {startDate: startDateConv, endDate:endDateConv}});
   }

   function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

   return(
    <Container>
        <h3>Filter Settings</h3>
        <Row>
            <Dropdown style={{margin:"10px"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {column === 0 ? 'Select Filter Column'
                    : column === 1 ? 'Area of Focus'
                    : column === 2 ? 'Status'
                    : column === 3 ? 'Budget'
                    : column === 4 && 'Date'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onSelect={()=>{setColumn(1); setFilterValue('none')}}>Area of Focus</Dropdown.Item>
                    <Dropdown.Item onSelect={()=>{setColumn(2); setFilterValue('none')}}>Status</Dropdown.Item>
                    <Dropdown.Item onSelect={()=>{setColumn(3); setFilterValue('none')}}>Budget</Dropdown.Item>
                    <Dropdown.Item onSelect={()=>{setColumn(4); setFilterValue('none')}}>Dates</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            {column < 3 ?
                <>
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
                </>
            : column === 3 ? 
                <Form inline onSubmit={(event)=>{handleBudgetFilter(event)}}>
                    <Form.Label>From</Form.Label> 
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            required
                            value={budgetLow} 
                            onChange={(event)=>{setBudgetLow(event.target.value)}}
                        />
                    </InputGroup>
                    <Form.Label>To</Form.Label> 
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            required 
                            value={budgetHigh} 
                            onChange={(event)=>{setBudgetHigh(event.target.value)}}
                        />
                    </InputGroup>
                    <Button type="submit">Filter</Button>
                </Form>
            :
            <Form onSubmit={(event)=>{handleDateFilter(event)}} inline>
            <Form.Label>From</Form.Label> 
            <InputGroup>
                <DatePicker
                    placeholderText = "End Date"
                    dateFormat="MM/dd/yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                />
            </InputGroup>
            <Form.Label>To</Form.Label> 
            <InputGroup>
                <DatePicker
                    placeholderText = "End Date"
                    dateFormat="MM/dd/yyyy"
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                />
            </InputGroup>
            <Button type="submit">Filter</Button>
        </Form>
            }
            
            <Button style={{marginLeft:'10px'}} variant="danger" size="sm" 
                    onClick={()=>{
                        dispatch({type:'FETCH_APP_TABLE_DATA'});
                        setFilterValue('none');
                        setColumn(0);
                        setBudgetHigh(0);
                        setBudgetLow(0);
                    }}>
                        Clear Filter
            </Button>
        </Row>
    </Container>
    )
}