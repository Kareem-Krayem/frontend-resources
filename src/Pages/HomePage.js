import React, { useEffect, useState } from 'react';

import './CategoryList.scss';

import CategoryCard from '../components/CategoryCard/CategoryCard';
import { Link } from 'react-router-dom';

import { categories } from '../assets/Data/Data';

function HomePage(props) {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCategory(categories);
    setIsLoading(false);
  }, [props]);

  if (isLoading) {
    return (
      <p style={{ fontSize: '3em', textAlign: 'center' }} className='gradient'>
        Loading...
      </p>
    );
  }
  return (
    <div className='categoryList' id='categorySection'>
      {category.map((Category) => {
        return (
          <Link
            to={`/${Category.title}`}
            key={Category.id}
            onClick={() => props.getCat(Category.id, Category.title)}
          >
            <CategoryCard key={Category.id}>
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
