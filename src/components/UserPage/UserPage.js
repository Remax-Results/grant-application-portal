import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import GrantApplicationForm from '../GrantApplicationForm/GrantApplicationForm';

function UserPage (props) {
  
  //hooks
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_QUESTIONS' });
    }, []
  );

  return (
    <div>
      <h1 id="welcome">Welcome, {user.contact_name}!</h1>
      <p>Your ID is: {user.id}</p>
      <GrantApplicationForm />
      <LogOutButton className="log-in" />
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
