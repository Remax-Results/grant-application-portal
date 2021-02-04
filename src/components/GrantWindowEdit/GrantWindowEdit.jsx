import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import DatePicker from "react-datepicker";
import {Button} from 'react-bootstrap';
import './GrantWindowEdit.css'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'


export default function GrantWindowEdit(props) {

  const { changeEditMode, editMode, currentWindow } = props;

  const [startDate, setStartDate] = useState(moment(currentWindow.start_date).toDate());
  const [endDate, setEndDate] = useState(moment(currentWindow.end_date).toDate());
  const [budget, setBudget] = useState(currentWindow.funds_available);
  
  const dispatch = useDispatch();

  // function to convert the datepicker format to a more digestable format in SQL.
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const updateGrantWindow = (event) => {
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
      <form onSubmit={event => {updateGrantWindow(event)}} className="grant-window-form">
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
        <input id="submit-button" type="submit" value="Submit" />
        <Button onClick={(event)=>{changeEditMode(!editMode)}}>Cancel</Button>
      </form>
    );
  }

