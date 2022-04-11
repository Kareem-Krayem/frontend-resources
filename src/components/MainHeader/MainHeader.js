import React from 'react';
import './MainHeader.scss';

import ArrowButton from '../ArrowButton/ArrowButton';

import { social } from '../../assets/Data/Data';

function MainHeader({ title, author }) {
  return (
    <section className='header'>
      <h1 className='header__title gradient'>{title}</h1>
      <h4 className='header__author gradient'>{author}</h4>
      <div className='header__socials'>
        <a className='header__btn gradient' href={social.linkedin}>
          <i className='fab fa-linkedin'></i>
        </a>
        <a className='header__btn gradient' href={social.github}>
          <i className='fab fa-github'></i>
        </a>
        <a className='header__btn gradient' href={social.instagram}>
          <i className='fab fa-instagram'></i>
        </a>
        <a className='header__btn gradient' href={social.behance}>
          <i className='fab fa-behance'></i>
        </a>
      </div>
      <div className='header__down'>
        <ArrowButton toId='categorySection'>
          <i className='fas fa-arrow-down gradient'></i>
        </ArrowButton>
      </div>
    </section>
  );
}

export default MainHeader;
