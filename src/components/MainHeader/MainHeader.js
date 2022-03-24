import React from 'react';
import './MainHeader.scss';

import ArrowButton from '../ArrowButton/ArrowButton';

function MainHeader({ title, author }) {
  const changeTheme = () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'fa-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';

    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme,
      );
      themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](
        iconTheme,
      );
    }
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  };

  return (
    <section className='header'>
      <h1 className='header__title gradient'>{title}</h1>
      <h4 className='header__author gradient'>{author}</h4>
      <div className='header__socials'>
        <a className='header__btn gradient' href='http://www.google.com'>
          <i className='fab fa-instagram'></i>
        </a>
        <a className='header__btn gradient' href='http://www.google.com'>
          <i className='fab fa-twitter'></i>
        </a>
        <a className='header__btn gradient' href='http://www.google.com'>
          <i className='fab fa-github'></i>
        </a>
        <a className='header__btn gradient' href='#' onClick={changeTheme}>
          <i className='fas fa-moon change-theme' id='theme-button'></i>
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
