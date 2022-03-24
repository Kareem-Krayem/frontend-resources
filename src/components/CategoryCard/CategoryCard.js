import React from 'react';
import './CategoryCard.scss';

function CategoryCard(props) {
  return (
    <div className='categoryCard' style={props.style}>
      {props.children}
    </div>
  );
}

export default CategoryCard;
