import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';

import './LandingPage.css';


export default function LandingPage() {
  
  

  const history = useHistory();
  //this brings
  // onLogin = (event) => {
  //   this.props.history.push('/login');
  // };

  
    return (
          <div className="Testing">
            {/* <RegisterForm /> */}
            <div className="AboutUs">
            <h4>ABOUT US</h4>
            <p>
            The Results Foundation was established in 2015 by RE/MAX Results to give back 
            to local communities by providing grants and scholarships to organizations and 
            individuals throughout Minnesota and Wisconsin, believing there’s no greater investment 
            than helping individuals and communities overcome obstacles and achieve their goals. 
            Inspired by the philanthropic work of the Sales Executives and staff of RE/MAX Results,  
            the foundation has donated nearly $250,000 in grants to date.
            </p>
            </div>
            <div className="Mission">
              <h4>MISSION</h4>
              <p>To partner with community organizations and educational institutions in 
                Minnesota and Wisconsin to empower individuals to achieve success through 
                housing, health, education, and mentoring programs.
                </p>
              </div>
              <div className="Funding">
                <h4>FUNDING</h4>
                <p>A portion of every closed sale from RE/MAX Results and Results Title is 
                  donated to the foundation. Funding is also provided via Results Foundation 
                  events including the annual golf tournament, Rock the Foundation, as well as 
                  donations from generous individuals and community partners.</p>
              </div>
            <center>
              <br></br>
            <Button
              className="landing-registration-button"
              variant= 'primary'
              type="button"
              onClick={() => {
                history.push('/registration');
              }}
            >
              Create a Profile
            </Button>
              <h4>Already a Member?</h4>
            <Button
              variant= 'primary'
              type="button"
              onClick={() => {
                history.push('/login');
              }}
            >
              Login
            </Button>
            </center>

          </div>


    );
  }



