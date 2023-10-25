import Header from './components/Header';
import Products from './components/Products';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="">
        <Products/>
      </main>
    </>
  );
}
