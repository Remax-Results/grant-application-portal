import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import swal from 'sweetalert';
import {Col, Dropdown} from 'react-bootstrap';

export default function UpdateStatus() {
    const dispatch=useDispatch();
    const reviewStatus = useSelector(state=>state.reviewStatus);
    const detailsData = useSelector(state => state.detailsData);
    const handleChange = (event) => {
        swal({
            title: "Grant Application Status Change!",
            text: "You are about the review status for this grant application. OK?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              dispatch({type:'UPDATE_STATUS', payload:{status: event, id:detailsData.id}});
              swal("Status updated!", {
                icon: "success",
              });
            } else {
              swal("Status was not updated");
            }
          });
    }

    return (
        <Col>
            <Dropdown
                onSelect={(event) => {handleChange(event)}}
            >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Set Review Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {reviewStatus && reviewStatus.map((rs)=>(<Dropdown.Item eventKey={rs.id}>{rs.status}</Dropdown.Item>))}
            </Dropdown.Menu>    
            </Dropdown>
        </Col>
    )
}