import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './GrantWindowForm.css'
import "react-datepicker/dist/react-datepicker.css";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
export default function GrantWindowForm() {



  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

    return (
      <form className="grant-window-form">
        <h2>Create a New Grant Window</h2>
        <div className="date-pickers">
          <DatePicker
            placeholderText = "Start Date"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            placeholderText = "End Date"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
        <div className="budget">
          <label>Budget: </label>
          <input type="number"></input>
        </div>
        <input id="submit-button" type="submit" value="Submit" />
      </form>
    );
  }

