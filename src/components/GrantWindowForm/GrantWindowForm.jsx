import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import DatePicker from "react-datepicker";
import './GrantWindowForm.css'
import "react-datepicker/dist/react-datepicker.css";
import {Button} from 'react-bootstrap';



export default function GrantWindowForm() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [budget, setBudget] = useState(0);
  
  const dispatch = useDispatch();

  // function to convert the datepicker format to a more digestable format in SQL.
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const createGrantWindow = (event) => {
    event.preventDefault();
    // Convert the dates from react-datepicker to SQL dates
    const convertedStartDate = convert(startDate)
    const convertedEndDate = convert(endDate)
    dispatch({type: 'POST_GRANT_WINDOW', payload: {
      startDate: convertedStartDate, 
      endDate: convertedEndDate,
      budget: budget
    }})
  }

    return (
      <form onSubmit={event => {createGrantWindow(event)}} className="grant-window-form">
        <h2>Create a New Grant Window</h2>
        <div className="date-pickers">
          <DatePicker
            placeholderText = "Start Date"
            dateFormat="MM/dd/yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            placeholderText = "End Date"
            dateFormat="MM/dd/yyyy"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
        <div className="budget">
          <label htmlFor="budget">Budget: </label>
          <input 
            type="number"
            name="budger"
            required
            value={budget}
            onChange={event => setBudget(event.target.value)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }

