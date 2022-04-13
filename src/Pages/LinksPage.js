import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import CategoryCard from '../components/CategoryCard/CategoryCard';

import { data } from '../assets/Data/Data';
import { Link } from 'react-router-dom';

function LinksPage({ catId, catTitle }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <p style={{ fontSize: '3em', textAlign: 'center' }} className='gradient'>
        Loading...
      </p>
    );
  }
  return (
    <>
      <Link to='/'>
        <i className='uil uil-angle-left-b gradient back'>
          <span className='back--text'>back</span>
        </i>
      </Link>
      <div className='categoryList' id='categorySection'>
        {data.map((obj) => {
          if (obj.cat === catTitle) {
            return (
              <a href={obj.link} key={catId}>
                <CategoryCard
                  key={catId}
                  style={{ height: '15rem', width: '30rem' }}
                >
                  <h1 className='categoryCard__title gradient'>{obj.title}</h1>
                  <p className='gradient' style={{ marginTop: '1em' }}>
                    {obj.description}
                  </p>
                </CategoryCard>
              </a>
            );
          } else return '';
        })}
      </div>
    </>
  );
}

export default LinksPage;
