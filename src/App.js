import React from 'react';
import Header from './components/Header';
import Folders from './components/Folders';
import Sorting from './components/Sorting';
import PageTitle from './components/PageTitle';
import Product from './components/Product';
import ProductPreloader from './components/Product/Preloader';
import './scss/app.scss';

function App() {

  const [products, setProducts] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
      fetch('https://62c0af81c134cf51ced2dc48.mockapi.io/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoaded(true);
      });
  }, []);

  

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
          {
            !isLoaded 
            ? [...new Array(8)].map((_, index) => (<ProductPreloader key={index}/>)) 
            : products.map((product) => (<Product key={product.id} {...product}/>))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
