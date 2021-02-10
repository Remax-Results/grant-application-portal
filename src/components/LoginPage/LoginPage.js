import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';
import { Button } from 'react-bootstrap';


export default function LoginPage() {

  const history = useHistory();

  return (
    <div className="login_page">
      <LoginForm />

      <center style={{paddingTop: '10px'}}>
        <p>Not registered?</p>
        <Button
          variant= 'primary'
          type="button"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}