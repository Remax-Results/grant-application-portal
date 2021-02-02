import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import mapStoreToProps from '../../redux/mapStoreToProps';


export default function AppStatus() {
 
  //const [heading, setHeading] = useState('Functional Component');
  const history = useHistory();
  return (
      
    <div>
      <h2>WELCOME BACK</h2>
      <p>Thank you for your application.</p>
      <p>Your application has been received and is currently "STATUS"</p>
      <p>Our grant window closes on "GRANT WINDOW DATE - grab from database"</p>
      <p>We will inform you as soon as possible of our decision.</p>
    </div>
  );
}

// export default connect(mapStoreToProps)(AppStatus);
