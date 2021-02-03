import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';

export default function NotesTable(props) {
    const {note} = props;

    return(
     <tr key={note.id}>
         <td>{note.review_note}</td>
         <td>{note.date_added}</td>
         <td><Button>View/Edit</Button></td>
     </tr>
    )
}