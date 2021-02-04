import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';

export default function LoginPage() {

  const history = useHistory();

  return (
    <div className="login_page">
      <LoginForm />

      <center>
        <p>Not registered?</p>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}