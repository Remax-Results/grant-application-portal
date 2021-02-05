import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantApplicationForm from '../GrantApplicationForm/GrantApplicationForm';
import AppStatus from '../AppStatus/AppStatus.jsx';



function UserPage (props) {
  
  const dispatch = useDispatch();
  //hooks
  const currentWindow = useSelector((store) => store.currentWindow);
  const app = useSelector((store) => store.application);

  // useEffect
  useEffect(() => {
    dispatch({ type: 'FETCH_APPLICATION' });
    }, [dispatch]
  );

  return (
    <div>
      {JSON.stringify(app)}
      {JSON.stringify(currentWindow)}
      {
        Object.keys(app).length > 0 ?
          <AppStatus app={app} /> :
          <GrantApplicationForm />
      }
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
