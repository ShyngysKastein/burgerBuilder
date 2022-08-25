import React from 'react';
import './Backdrop.css';

const Backdrop = ({show,closed}) => (
  show ? <div className="Backdrop" onClick={closed} /> : null
);

export default Backdrop;
