import React from 'react';

import Folders from '../components/Folders';
import Sorting from '../components/Sorting';
import PageTitle from '../components/PageTitle';
import Product from '../components/Product';
import ProductPreloader from '../components/Product/Preloader';

function Home() {
    const [products, setProducts] = React.useState([]);
    const [isLoaded, setLoaded] = React.useState(false);
    const [folderId, setFolderId] = React.useState(0);
    const [selectedSort, setSelectedSort] = React.useState({name: "популярности (DESC)", sortType: "rating", sortMethod: "desc"});

    React.useEffect(() => {

        setLoaded(false);
        fetch(`https://62c0af81c134cf51ced2dc48.mockapi.io/products?${
            folderId ? `folderId=${folderId}` : ''
        }&sortBy=${selectedSort.sortType}&order=${selectedSort.sortMethod}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          setLoaded(true);
        });
    }, [folderId, selectedSort]);
  
    return (
        <>
            <div className="container__sorting-panel">
                <Folders activeIndex={folderId} handleClickFolder={(index) => setFolderId(index)}/>
                <Sorting selectedSortItem={selectedSort} setSelectedSortItem={(obj) => setSelectedSort(obj)}/>
            </div>
                <PageTitle Title="Все пиццы"/>
            <div className="product-list">
            {
                !isLoaded 
                ? [...new Array(8)].map((_, index) => (<ProductPreloader key={index}/>)) 
                : products.map((product) => (<Product key={product.id} {...product}/>))
            }
            </div>
        </>
    );
}

export default Home;