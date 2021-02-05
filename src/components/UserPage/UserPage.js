import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantApplicationForm from '../GrantApplicationForm/GrantApplicationForm';
import AppStatus from '../AppStatus/AppStatus.jsx';



function UserPage (props) {
  
  //hooks
  const user = useSelector((store) => store.user);
  const currentWindow = useSelector((store) => store.currentWindow);
  const dispatch = useDispatch();
  const app = useSelector((store) => store.application);

  // useEffect
  useEffect(() => {
    dispatch({ type: 'FETCH_APPLICATION', payload: currentWindow.id });
    }, [dispatch]
  );

  return (
    <div>
      {JSON.stringify(app)}
      {JSON.stringify(currentWindow)}
      {
        app.length ?
          <AppStatus /> :
          <GrantApplicationForm />
      }
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
