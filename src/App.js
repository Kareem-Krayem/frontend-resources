import React, { useState } from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage';
import LinksPage from './Pages/LinksPage';

function App() {
  const [categoryTitle, setCategoryTitle] = useState('Frontend Resources');
  const [categoryId, setCategoryId] = useState('');

  const getCat = (id, cat) => {
    setCategoryId(id);
    setCategoryTitle(cat);
  };

  const reset = () => {
    setCategoryTitle('Frontend Resources');
  };

  return (
    <Router>
      <div className='App'>
        <MainHeader title={categoryTitle} author='Done by Karim Krayem' />
        <Switch>
          <Route path={`/${categoryTitle}`}>
            <LinksPage catId={categoryId} catTitle={categoryTitle} />
          </Route>
          <Route path='/' onClick={reset}>
            <HomePage getCat={getCat} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
