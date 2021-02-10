import React from 'react';
import GrantApplicationFormCE from '../CommunityEngagement/GrantApplicationCE/GrantApplicationFormCE/GrantApplicationFormCE';



function UserPageCE (props) {

  return (
    <div>
        <h2>Hello from UserPageCE</h2>
        <GrantApplicationFormCE />
    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPageCE;