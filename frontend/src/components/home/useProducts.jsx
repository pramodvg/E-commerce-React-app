import { useState, useEffect } from 'react';
import axios from '../../axios';

function useProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/products')
      .then((data) => setProducts(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
      
  }, []);

  return [loading, error, products];
}

export default useProducts;
