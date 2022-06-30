import React from 'react';
import Header from './components/Header';
import Folders from './components/Folders';
import Sorting from './components/Sorting';
import PageTitle from './components/PageTitle';
import Product from './components/Product';
import Products from './products.json';

import './scss/app.scss';

function App() {

  return (
    <div className="wrapper">
      <Header link="/"/>
      <div className="container">
        <div className="container__sorting-panel">
          <Folders/>
          <Sorting/>
        </div>
        <PageTitle/>
        <div className="product-list">
          {Products.map((product) => (<Product {...product}/>))}
        </div>
      </div>
    </div>
  );
}

export default App;
