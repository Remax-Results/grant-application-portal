import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantApplicationFormCE from '../CommunityEngagement/GrantApplicationCE/GrantApplicationFormCE/GrantApplicationFormCE';



function UserPage (props) {
  
  const dispatch = useDispatch();
  
  // grabbing the application info from the redux store
  const app = useSelector((store) => store.application);

  // useEffect
  useEffect(() => {
    dispatch({ type: 'FETCH_APPLICATION' });
    }, [dispatch]
  );

  return (
    <div>
        <h2>Hello from UserPageCE</h2>
        <GrantApplicationFormCE />
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;