import React from 'react';
import logo from "./tombot.png"
import  "./Header.css"
const Header = () => {
  return (
  <header>
    <img src={logo} alt="logo" />
    <a href="/">Home</a>
  </header>
  );
}

export default Header;
