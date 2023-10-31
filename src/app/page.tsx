import Carrinho from './components/Carrinho';
import Header from './components/Header';
import Products from './components/Products';
import ProductsContextProvider from './context/ProductsContext';

export default function Home() {
  return (
    <ProductsContextProvider>
      <Header/>
      <Products/> 
      <Carrinho/>
    </ProductsContextProvider>
  );
}
