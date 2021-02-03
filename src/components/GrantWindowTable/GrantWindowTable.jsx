import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function GrantWindowTable() {

  const previousWindows = useSelector(state => state.previousWindows);

    return (
      <div>
        <h2>GrantWindowTable</h2>
        {JSON.stringify(previousWindows)}
      </div>
    );
}

