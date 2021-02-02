import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';




export default function GrantWindowSettings(props) {

  const currentWindow = useSelector(state => state.currentWindow);

  return (
    <div>
      {JSON.stringify(currentWindow)}
      <h2>Grant Window Settings</h2>
      {currentWindow}
    </div>
  );
}
