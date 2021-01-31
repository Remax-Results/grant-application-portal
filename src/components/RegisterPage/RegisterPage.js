import React from 'react';
import { useHistory } from 'react-router-dom';
import './RegisterPage.css';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

export default function RegisterPage() {

  const history = useHistory();

    return (
      <div className="register-page">
        <p>Welcome to the Results Foundation Application Portal!</p>
        <p>Please take a moment to register your organization with us before moving on to the grant application.</p>
        <RegisterForm />

        <center>
          <p>Already registered?</p>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </center>
      </div>
    );
};