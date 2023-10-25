interface Props {
    query: string;
}

const fetchProducts = async ({ query }: Props) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();

  return data.results;
};

export default fetchProducts;
