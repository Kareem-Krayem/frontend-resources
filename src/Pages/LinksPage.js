import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { data } from '../assets/Data/Data';

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
                <div className='categoryCard' key={catId} id='linkCards'>
                  <h1 className='categoryCard__title gradient'>{obj.title}</h1>
                  <p className='gradient title__description'>
                    {obj.description}
                  </p>
                </div>
              </a>
            );
          } else return '';
        })}
      </div>
    </>
  );
}

export default LinksPage;
