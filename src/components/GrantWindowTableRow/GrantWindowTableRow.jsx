import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GrantWindowTableRow(props) {
  const { window } = props;
  const previousWindows = useSelector(state => state.previousWindows);

    return (
      <>
        <tr key={window.id}>
          <td>{window.start_date}</td>
          <td>{window.end_date}</td>
          <td>{window.app_count}</td>
          <Button>View Window</Button>
        </tr>
      </>
    );
}

