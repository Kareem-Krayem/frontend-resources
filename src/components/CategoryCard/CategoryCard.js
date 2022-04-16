import React from 'react';
import './CategoryCard.scss';

function CategoryCard(props) {
  return (
    <div className='categoryCard' style={props.style} id={props.id}>
      {props.children}
    </div>
  );
}

export default CategoryCard;
