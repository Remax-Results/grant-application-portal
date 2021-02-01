import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

export default function Nav() {
  const user = useSelector(state => state.user);
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {user.id && (
          <>
            {user.admin ?
              <Link className="nav-link" to="/home">
                Admin Test
              </Link>
              :
              <Link className="nav-link" to="/info">
                Info Page
              </Link>
            }
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* Currently links back to the home page as that has all of the grant info */}
        <Link className="nav-link" to="/home">
          About
        </Link>
      </div>
    </div>
  );
};

