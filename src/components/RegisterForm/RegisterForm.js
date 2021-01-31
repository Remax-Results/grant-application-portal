import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function RegisterForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [orgName, setOrgName] = useState('');
  const [background, setBackground] = useState('');
  const [phone, setPhone] = useState('');
  const [contactName, setContactName] = useState('');


  const registrationMessage = useSelector(state => state.errors.registrationMessage);


  const registerUser = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        orgName: orgName,
        background: background,
        phone: phone,
        contactName: contactName
      },
    });
  }; // end registerUser


    return (
      <form className="formPanel" onSubmit={event => {registerUser(event)}}>
        <h2>Register Organization</h2>
        {registrationMessage && (
          <h3 className="alert" role="alert">
            {registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={event => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={event => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="orgName">
            Organization Name
            <input
              type="text"
              name="Organization Name"
              value={orgName}
              required
              onChange={event => setOrgName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="background">
            Organization Background
            <input
              type="text"
              name="Organization Background"
              value={background}
              required
              onChange={event => setBackground(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone Number
            <input
              type="text"
              name="phone"
              value={phone}
              required
              onChange={event => setPhone(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="contactName">
            Contact Name
            <input
              type="text"
              name="Contact Name"
              value={contactName}
              required
              onChange={event => setContactName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
