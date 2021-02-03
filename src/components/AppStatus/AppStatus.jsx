import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import mapStoreToProps from '../../redux/mapStoreToProps';


export default function AppStatus(props) {
  const dispatch = useDispatch();
  //const [heading, setHeading] = useState('Functional Component');
  const history = useHistory();
  //go to state, pull out current user and store here in this new variable
  const user = useSelector(state => state.user)
  const currentWindow = useSelector(state => state.currentWindow);
  const currentStatus = useSelector(state => state.currentStatus);
  useEffect(() => {dispatch({type: 'FETCH_CURRENT_STATUS', payload: user.id})}, [dispatch]);
  //allows us to combine
  
  return (
      
    <div>
        
      <h2>WELCOME BACK</h2>
      <p>Thank you for your application.</p>
      {currentStatus && <p>Your application has been received and is currently: {currentStatus.status}</p>}
      {currentWindow && <p>Our grant window runs {currentWindow.start_date} to {currentWindow.end_date}</p>}
      <p>We will inform you as soon as possible of our decision.</p>
    </div>
  );
}


