import React from 'react';
import './Footer.css';
import {ImPacman} from "react-icons/im";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => <footer>&copy; Created by Team Results from the Vatti Cohort <ImPacman/> at Prime Digital Academy</footer>;

export default Footer;
