import React from 'react';
import ProductCard from './ProductCard';

const Products = async () => {

  // const [ products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts({query: 'iphone'}).then((response) => {
  //     setProducts(response);
  //     console.log(products);
  //   });
  // }, []);

  const res = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=iphone');
  const data = await res.json();
  const products: Array<any> = data.results;

  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} title={product} price={product} thumbnail={product}/>
      ))}
    </>
  );
};

export default Products;
