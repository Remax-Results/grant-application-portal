import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

export default function GrantWindowTableRow(props) {

  const { window } = props;

    return (
      <>
        <tr>
          <td>{moment(window.start_date).format('LL')}</td>
          <td>{moment(window.end_date).format('LL')}</td>
          <td>{window.app_count}</td>
          <td><Button>View Window</Button></td>
        </tr>
      </>
    );
}

