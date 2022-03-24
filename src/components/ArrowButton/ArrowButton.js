import React from 'react';
import { scrollTo } from '../../utils';

const ArrowButton = ({ toId, toRef, duration, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return (
    <a href='#' onClick={handleClick}>
      {children}
    </a>
  );
};

export default ArrowButton;
