import React from 'react';
import './Logo.scss';
import logo from '../assets/web-logo.jpg';

export default function Logo() {
  return (
    <div id="logo">
      <img id="logo-img" src={logo} alt="Logo"></img>
    </div>
  );
}
