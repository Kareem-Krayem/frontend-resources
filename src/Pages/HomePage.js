import React, { useEffect, useState } from 'react';

import './CategoryList.scss';

import CategoryCard from '../components/CategoryCard/CategoryCard';
import { Link } from 'react-router-dom';

function HomePage(props) {
  const [categories, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/categories', {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
      },
    })
      .then((results) => results.json())
      .then((category) => {
        setCategory(category);
        setIsLoading(false);
      });
  }, [categories]);

  if (isLoading) {
    return (
      <p style={{ fontSize: '3em', textAlign: 'center' }} className='gradient'>
        loading...
      </p>
    );
  }
  return (
    <div className='categoryList' id='categorySection'>
      {categories.map((Category) => {
        return (
          <Link
            to={Category.title}
            key={Category._id}
            onClick={() => props.getCat(Category._id, Category.title)}
          >
            <CategoryCard key={Category._id}>
              <i
                className={`uil uil-${Category.icon} categoryCard__icon gradient`}
              ></i>
              <h1 className='categoryCard__title gradient'>{Category.title}</h1>
            </CategoryCard>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
