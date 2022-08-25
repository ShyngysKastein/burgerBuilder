import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({show,closed,children}) => (
    <>
    <Backdrop show={show} closed={closed} />
    <div
        className="Modal"
        style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
        }}
    >
    {children}
  </div>
  </>

  
);

export default Modal;
