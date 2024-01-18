import React from 'react';
import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer className="footer">
        <img src={logo} alt='logo KASA' className='kasa-logo'></img>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
