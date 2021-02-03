import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import swal from 'sweetalert';


export default function NotesTable(props) {
    const dispatch = useDispatch();
    const detailsData = useSelector(state => state.detailsData);
    const {note} = props;
    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this note!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              dispatch({type:'DELETE_NOTE', payload:{note_id: note.id, app_id: detailsData.id}})
              swal("Poof! Your note has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your note is not deleted!");
            }
          });
    };
    const handleEdit = () => {

    };
         

    return(
     <tr key={note.id}>
         <td>{note.review_note}</td>
         <td>{note.date_added}</td>
         <td><Button onClick={(event)=>{handleEdit()}}>View/Edit</Button></td>
         <td><Button onClick={(event)=>{handleDelete()}}>Delete</Button></td>
     </tr>
    )
}