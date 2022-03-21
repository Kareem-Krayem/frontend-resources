import React, { useState } from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage';
import LinksPage from './Pages/LinksPage';

function App() {
  const [category, setCategory] = useState('Frontend Resources');
  const [categoryId, setCategoryId] = useState('');

  const getCat = (id, cat) => {
    setCategoryId(id);
    setCategory(cat);
  };

  return (
    <Router>
      <div className='App'>
        <MainHeader title={category} author='Done by Karim Krayem' />
        <Switch>
          <Route path={`/${category}`}>
            <LinksPage catId={categoryId} catTitle={category} />
          </Route>
          <Route path='/'>
            <HomePage getCat={getCat} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
