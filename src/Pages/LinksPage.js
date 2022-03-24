import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import CategoryCard from '../components/CategoryCard/CategoryCard';

function LinksPage({ catId, catTitle }) {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/links/${catId}`, {
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
        setCategoryData(category);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <p style={{ fontSize: '3em', textAlign: 'center' }} className='gradient'>
        loading...
      </p>
    );
  }
  return (
    <div className='categoryList' id='categorySection'>
      {categoryData.map((Category) => {
        return (
          <a href={Category.link} key={Category._id}>
            <CategoryCard
              key={Category._id}
              style={{ height: '15rem', width: '30rem' }}
            >
              <h1 className='categoryCard__title gradient'>{Category.title}</h1>
              <p className='gradient' style={{ marginTop: '1em' }}>
                {Category.description}
              </p>
            </CategoryCard>
          </a>
        );
      })}
    </div>
  );
}

export default LinksPage;
