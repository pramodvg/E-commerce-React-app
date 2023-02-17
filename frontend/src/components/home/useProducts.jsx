import { useState, useEffect } from 'react';
import axios from '../../axios';

function useProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(
    Array.from({ length: 8 }, () => ({}))
  );
  const fetchData = async () => {
    setLoading(true);
    axios
      .get('/products')
      .then((data) => setProducts(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [loading, error, products];
}

export default useProducts;
