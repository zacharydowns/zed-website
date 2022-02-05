import React from 'react';
import './Logo.css';
import logo from '../assets/logo.jpg';

export default function Logo() {
  return (
    <div id="logo">
      <img id="logo-img" src={logo} alt="Logo"></img>
    </div>
  );
}
