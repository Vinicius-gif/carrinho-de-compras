import Header from './components/Header';
import Products from './components/Products';
import ProductsContextProvider from './context/CarrinhoContext';

export default function Home() {
  return (
    <ProductsContextProvider>
      <Header/>
      <main className="">
        <Products/>
      </main>
    </ProductsContextProvider>
  );
}
