import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
      </div>
      <ul className='footer__socials'>
        <li>
          <a className='footer__link' href='http://www.google.com'>
            <i className='fab fa-instagram'></i>
          </a>
        </li>
        <li>
          <a className='footer__link' href='http://www.google.com'>
            <i className='fab fa-twitter'></i>
          </a>
        </li>
        <li>
          <a className='footer__link' href='http://www.google.com'>
            <i className='fab fa-github'></i>
          </a>
        </li>
      </ul>
      <p className='footer__rights'>
        © 2021 Karim Krayem | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
