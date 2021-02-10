import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserPageCE from './UserPageCE.jsx';
import UserPageStandard from './UserPageStandard.jsx';



function UserPage (props) {
  
  const dispatch = useDispatch();
  
  // grabbing the application info from the redux store
  const user = useSelector((store) => store.user);

  return (
    <div>

      {
        user.remax_employee ?
        <UserPageCE/> :
        <UserPageStandard/>
      }
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
