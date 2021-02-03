import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import GrantApplicationForm from '../GrantApplicationForm/GrantApplicationForm';
import AppStatus from '../AppStatus/AppStatus.jsx'

function UserPage (props) {
  
  //hooks
  const user = useSelector((store) => store.user);
  const currentWindow = useSelector((store) => store.currentWindow);
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch({ type: 'FETCH_APPLICATION', payload: currentWindow.id });
    }, [dispatch]
  );

  return (
    <div>
      <h1 id="welcome">Welcome, {user.contact_name}!</h1>
      <p>Your ID is: {user.id}</p>
      {/* conditional render appstatus */}
      <AppStatus />
      <GrantApplicationForm />
      <LogOutButton className="log-in" />
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
